import React, {useCallback} from 'react';
import styles from './navmenu.module.css';
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {useDispatch} from "react-redux";
import {clearArrAction, clearKeyAction, getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";
import windowYPositionStore from "../../../storeMobx/windowYPositionStore";
import {Link} from "react-router-dom";

export const NavMenu = observer(() => {
        const dispatch: any = useDispatch()
        const categoriesLoad = targetCategoriesStore.targetCategories
        const hotPostsClick = useCallback(() => {
            dispatch(clearArrAction([]))
            // dispatch(getArrPosts(localStorage.token, 'hot', ''))
            dispatch(clearKeyAction(''))
            targetCategoriesStore.changeTarget('hot')
            windowYPositionStore.savePosition(0)
        }, [dispatch])
        const newPostsClick = useCallback(() => {
            dispatch(clearArrAction([]))
            // dispatch(getArrPosts(localStorage.token, 'new', ''))
            dispatch(clearKeyAction(''))
            targetCategoriesStore.changeTarget('new')
            windowYPositionStore.savePosition(0)
        }, [dispatch])
        const risingPostsClick = useCallback(() => {
            dispatch(clearArrAction([]))
            // dispatch(getArrPosts(localStorage.token, 'rising', ''))
            dispatch(clearKeyAction(''))
            targetCategoriesStore.changeTarget('rising')
            windowYPositionStore.savePosition(0)
        }, [dispatch])
        const contrPostsClick = useCallback(() => {
            dispatch(clearArrAction([]))
            // dispatch(getArrPosts(localStorage.token, 'controversial', ''))
            dispatch(clearKeyAction(''))
            targetCategoriesStore.changeTarget('controversial')
            windowYPositionStore.savePosition(0)
        }, [dispatch])
        const topPostsClick = useCallback(() => {
            dispatch(clearArrAction([]))
            // dispatch(getArrPosts(localStorage.token, 'top', ''))
            dispatch(clearKeyAction(''))
            targetCategoriesStore.changeTarget('top')
            windowYPositionStore.savePosition(0)
        }, [dispatch])
        return (
            <nav className={styles.navBlock}>
                <ul className={styles.list}>
                    <li className={styles.itemBtn}>
                        <Link to={'/posts?hot'}><ButtonHeader active={categoriesLoad === 'hot'} onClick={hotPostsClick} text={'ГОРЯЧИЕ'}/></Link>
                    </li>
                    <li className={styles.itemBtn}>
                        <Link to={'/posts?top'}><ButtonHeader active={categoriesLoad === 'top'} onClick={topPostsClick} text={'ПОПУЛЯРНЫЕ'}/></Link>
                    </li>
                    <li className={styles.itemBtn}>
                        <Link to={'/posts?controversial'}><ButtonHeader active={categoriesLoad === 'controversial'} onClick={contrPostsClick}
                                                                        text={'НАШУМЕВШИЕ'}/></Link>
                    </li>
                    <li className={styles.itemBtn}>
                        <Link to={'/posts?rising'}><ButtonHeader active={categoriesLoad === 'rising'} onClick={risingPostsClick} text={'РАСТУЩИЕ'}/></Link>
                    </li>
                    <li className={styles.itemBtn}>
                        <Link to={'/posts?new'}><ButtonHeader active={categoriesLoad === 'new'} onClick={newPostsClick} text={'НОВЫЕ'}/></Link>
                    </li>
                </ul>
            </nav>
        );
    }
)