import React, {useCallback} from 'react';
import styles from './content.module.css';
import {ListCard} from "./ListCard";
import {useDispatch} from "react-redux";
import {getArrPosts} from "../../store/getArrPostsReducer";
interface IContent {
    subtitle: string
}

export const Content = ({subtitle}: IContent) => {
    const dispatch: any = useDispatch()
    const getArr = useCallback((token: string, link: string) => {
        dispatch(getArrPosts(token, link))
    },[dispatch, localStorage.token])
    getArr(localStorage.token, '')
    return (
        <div className={styles.contentBlock}>
            <h2>{subtitle}</h2>
            <ListCard/>
        </div>
    );
}
