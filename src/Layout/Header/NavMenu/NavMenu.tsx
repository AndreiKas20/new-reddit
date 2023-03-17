import React, {useCallback, useState} from 'react';
import styles from './navmenu.module.css';
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {useDispatch} from "react-redux";
import {clearArrAction, getArrPosts} from "../../../store/getArrPostsReducer";

export function NavMenu() {
    const [isHotActive, setIsHotActive] = useState(true)
    const [isNewActive, setIsNewActive] = useState(false)
    const [isRisingActive, setIsRisingActive] = useState(false)
    const [isContrActive, setIsContrActive] = useState(false)
    const [isTopActive, setIsTopActive] =useState(false)
    const dispatch: any = useDispatch()
    const hotPostsClick = useCallback(() => {
        dispatch(clearArrAction(false))
        dispatch(getArrPosts(localStorage.token, 'hot'))
        setIsHotActive(true)
        setIsNewActive(false)
        setIsRisingActive(false)
        setIsContrActive(false)
        setIsTopActive(false)
    },[dispatch])
    const newPostsClick = useCallback(() => {
        dispatch(clearArrAction(false))
        dispatch(getArrPosts(localStorage.token, 'new'))
        setIsHotActive(false)
        setIsNewActive(true)
        setIsRisingActive(false)
        setIsContrActive(false)
        setIsTopActive(false)
    },[dispatch])
    const risingPostsClick = useCallback(() => {
        dispatch(clearArrAction(false))
        dispatch(getArrPosts(localStorage.token, 'rising'))
        setIsHotActive(false)
        setIsNewActive(false)
        setIsRisingActive(true)
        setIsContrActive(false)
        setIsTopActive(false)
    },[dispatch])
    const contrPostsClick = useCallback(() => {
        dispatch(clearArrAction(false))
        dispatch(getArrPosts(localStorage.token, 'controversial'))
        setIsHotActive(false)
        setIsNewActive(false)
        setIsRisingActive(false)
        setIsContrActive(true)
        setIsTopActive(false)
    },[dispatch])
    const topPostsClick = useCallback(() => {
        dispatch(clearArrAction(false))
        dispatch(getArrPosts(localStorage.token, 'top'))
        setIsHotActive(false)
        setIsNewActive(false)
        setIsRisingActive(false)
        setIsContrActive(false)
        setIsTopActive(true)
    },[dispatch])
    return (
        <nav className={styles.navBlock}>
            <ul className={styles.list}>
                <li className={styles.itemBtn}>
                    <ButtonHeader active={isHotActive} onClick={hotPostsClick} text={'ГОРЯЧИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader active={isTopActive} onClick={topPostsClick} text={'ПОПУЛЯРНЫЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader active={isContrActive} onClick={contrPostsClick} text={'НАШУМЕВШИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader active={isRisingActive} onClick={risingPostsClick} text={'РАСТУЩИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader active={isNewActive} onClick={newPostsClick} text={'НОВЫЕ'}/>
                </li>
            </ul>
        </nav>
    );
}
