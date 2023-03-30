import React, {useEffect} from 'react';
import styles from './leftbox.module.css';
import {IconRedditAndAccount} from "./IconRedditAndAccount";
import {SearchMenu} from "./SearchMenu";
import {Setting} from "./Setting";
import {useDispatch, useSelector} from "react-redux";
import {getDataUser} from "@/store/getDataUserReducer";


export function LeftBox() {
    const token = useSelector<any, string>(state => state.getTokenReducer.token)
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(getDataUser(token))
    }, [token, dispatch])
    return (
        <div className={styles.leftBlock}>
            <IconRedditAndAccount/>
            <SearchMenu/>
            <Setting/>
        </div>
    );
}
