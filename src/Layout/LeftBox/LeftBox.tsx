import React, {useCallback} from 'react';
import styles from './leftbox.module.css';
import {IconRedditAndAccount} from "./IconRedditAndAccount";
import {SearchMenu} from "./SearchMenu";
import {Setting} from "./Setting";
import {useDispatch} from "react-redux";
import {getDataUser} from "../../store/getDataUserReducer";

export function LeftBox() {
    const token = localStorage.token
    const dispatch: any = useDispatch()
    const getData = useCallback((token: string) => {
        dispatch(getDataUser(token))
    },[dispatch])
    getData(token)
    return (
        <div className={styles.leftBlock}>
            <IconRedditAndAccount/>
            <SearchMenu/>
            <Setting/>
        </div>
    );
}
