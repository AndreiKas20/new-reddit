import React, {useEffect, useState} from 'react';
import styles from './title.module.css';
import changeTargetCardStore from "../../../storeMobx/changeTargetCardStore";
import listRedditStore from "../../../storeMobx/listRedditStore";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import {clearArrAction} from "../../../store/getArrPostsReducer";
import {Link} from "react-router-dom";

interface ITitle {
    title: string,
    isCard: boolean,
    subredditName: string,
    valueSearch: string,
    isSearch: boolean,
}

export const Title = observer(({title, isCard, subredditName, isSearch, valueSearch}: ITitle) => {
        const [isEnterSubreddit, setIsEnterSubreddit] = useState(false)
        const typeListReddit = listRedditStore.typeList
        const dispatch: any = useDispatch()
        const backCards = () => {
            changeTargetCardStore.changeTarget(false)
        }
        const clickSubreddit = () => {
            dispatch(clearArrAction([]))
            changeTargetCardStore.changeTarget(false)
            listRedditStore.changeType(`r/${subredditName}/`)
        }

        useEffect(() => {
            if (typeListReddit === '' || typeListReddit === 'r/all/') {
                setIsEnterSubreddit(false)
            } else {
                setIsEnterSubreddit(true)
            }
        }, [typeListReddit])
        return (
            <div style={{position: 'relative'}}>
                {
                    isCard && <Link to={'/posts'}><button onClick={backCards} className={styles.btn}><span className={styles.arrow}/></button></Link>
                }
                {
                    !isSearch &&
                    <h1 style={{paddingLeft: isCard ? '60px' : '17px'}} className={styles.title}>
                        {title}
                    </h1>
                }
                {
                   isSearch && <span className={styles.title}>Поиск: {valueSearch}</span>
                }

                {
                    !isEnterSubreddit && isCard &&
                    <Link to={'/posts'}><button onClick={clickSubreddit} className={styles.subredditName}>{subredditName}</button></Link>
                }

                {
                   !isSearch && isEnterSubreddit && <span className={styles.subredditName}>{typeListReddit}</span>
                }
            </div>
        );
    }
)