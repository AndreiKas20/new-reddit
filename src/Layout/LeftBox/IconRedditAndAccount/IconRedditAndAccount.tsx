import React, {useEffect, useState} from 'react';
import styles from './iconredditandaccount.module.css';
import {Icon} from "../../../UI/Icon";
import {userDataType} from "../../../../types/userDataType";
import {useDispatch, useSelector} from "react-redux";
import {clearUsersAction, defaultUser} from "../../../store/getDataUserReducer";


export function IconRedditAndAccount() {
    const dataUserReducer = useSelector<any, userDataType>(state => state.getDataUserReducer.user)
    const [data, setData] = useState<userDataType>()
    const dispatch: any = useDispatch()
    const quit = () => {
        localStorage.token = ''
        dispatch(clearUsersAction(defaultUser))
    }
    useEffect(() => {
        setData(dataUserReducer)
    }, [dataUserReducer])
    return (
        <div className={styles.blockLink}>
            <div className={styles.iconBlock}>
                <div className={styles.positionIcon}>
                    <Icon width={'36px'} height={'36px'} isActive={false} nameIcon={"Reddit"}/>
                </div>
                <Icon width={'66px'} height={'21px'} isActive={false} nameIcon={"RedditText"}/>
            </div>
            <div className={styles.linkBlock}>
                <img alt={'Аватар автора'} style={data?.verified ? {width: '40px'} : {width: '60px'}}
                     src={data?.icon_img.split('?')[0]} className={styles.img}/>
                <a className={styles.name}
                   href="https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
                    {data?.name}
                </a>
                <button onClick={quit} className={styles.btn}>Q</button>
            </div>
        </div>
    );
}
