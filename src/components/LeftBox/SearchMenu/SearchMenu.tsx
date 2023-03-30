import React, {useEffect, useState} from 'react';
import styles from './searchmenu.module.css';
import {observer} from "mobx-react-lite";
import listRedditStore from "../../../storeMobx/listRedditStore";
import {useDispatch} from "react-redux";
import changeTargetCardStore from "../../../storeMobx/changeTargetCardStore";
import {clearArrAction} from "@/store/getArrPostsReducer";
import {ButtonLeftMenu} from "@/UI/ButtonLeftMenu";
import {Icon} from "@/UI/Icon";

export const SearchMenu = observer(() => {
        const [isActiveMine, setIsActiveMine] = useState(false)
        const [isActiveAll, setIsActiveAll] = useState(false)
        const dispatch: any = useDispatch()
        const typeReddit = listRedditStore.typeList
        const clickMine = () => {
            dispatch(clearArrAction([]))
            listRedditStore.changeType('')
            changeTargetCardStore.changeTarget(false)
        }
        const clickAll = () => {
            dispatch(clearArrAction([]))
            listRedditStore.changeType('r/all/')
            changeTargetCardStore.changeTarget(false)
        }
        useEffect(() => {
            if (typeReddit === '') {
                setIsActiveMine(true)
                setIsActiveAll(false)
            } else if (typeReddit === 'r/all/') {
                setIsActiveAll(true)
                setIsActiveMine(false)
            } else {
                setIsActiveMine(false)
                setIsActiveAll(false)
            }
        }, [typeReddit]);

        return (
            <nav className={styles.navCategories}>
                    <button className={styles.btn}>
                        <div className={styles.iconPos}><Icon width={'24px'} height={'24px'} nameIcon={'Search'}
                                                              isActive={false}/>
                        </div>
                        <span className={styles.btnText}>Поиск реддитов</span>
                    </button>
                <ul>
                    <li className={styles.item}>
                        <div className={styles.positionIcon}>
                            <Icon width={'24px'} height={'24px'} isActive={isActiveAll} nameIcon={'Blocks'}/>
                        </div>
                        <ButtonLeftMenu isActive={isActiveAll} onClick={clickAll} text={'Все реддиты'}/>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.positionIcon}>
                            <Icon width={'24px'} height={'24px'} isActive={isActiveMine} nameIcon={'Home'}/>
                        </div>
                        <ButtonLeftMenu isActive={isActiveMine} onClick={clickMine}
                                                            text={'Мои подписки'}/>
                    </li>
                </ul>
            </nav>
        );
    }
)