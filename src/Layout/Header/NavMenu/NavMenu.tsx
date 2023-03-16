import React, {useCallback} from 'react';
import styles from './navmenu.module.css';
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {useDispatch} from "react-redux";
import {getArrPosts} from "../../../store/getArrPostsReducer";

export function NavMenu() {
    const dispatch: any = useDispatch()
    const hotPostsClick = useCallback(() => {
        dispatch(getArrPosts(localStorage.token, 'hot'))
    },[dispatch])
    const newPostsClick = useCallback(() => {
        dispatch(getArrPosts(localStorage.token, 'new'))
    },[dispatch])
    const risingPostsClick = useCallback(() => {
        dispatch(getArrPosts(localStorage.token, 'rising'))
    },[dispatch])
    const contrPostsClick = useCallback(() => {
        dispatch(getArrPosts(localStorage.token, 'controversial'))
    },[dispatch])
    const topPostsClick = useCallback(() => {
        dispatch(getArrPosts(localStorage.token, 'top'))
    },[dispatch])
    return (
        <nav className={styles.navBlock}>
            <ul className={styles.list}>
                <li className={styles.itemBtn}>
                    <ButtonHeader onClick={hotPostsClick} text={'ГОРЯЧИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader onClick={newPostsClick} text={'НОВЫЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader onClick={risingPostsClick} text={'РАСТУЩИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader onClick={contrPostsClick} text={'НАШУМЕВШИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader onClick={topPostsClick} text={'ПОПУЛЯРНЫЕ'}/>
                </li>
            </ul>
        </nav>
    );
}
