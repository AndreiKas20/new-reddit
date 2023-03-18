import React, {useCallback} from 'react';
import styles from './navmenu.module.css';
import {ButtonHeader} from "../../../UI/ButtonHeader";
import {useDispatch} from "react-redux";
import {clearArrAction, getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";

export const NavMenu = observer(() => {
        const dispatch: any = useDispatch()
        const categoriesLoad = targetCategoriesStore.targetCategories
        const hotPostsClick = useCallback(() => {
            dispatch(clearArrAction(false))
            dispatch(getArrPosts(localStorage.token, 'hot'))
            targetCategoriesStore.changeTarget('hot')
        }, [dispatch])
        const newPostsClick = useCallback(() => {
            dispatch(clearArrAction(false))
            dispatch(getArrPosts(localStorage.token, 'new'))
            targetCategoriesStore.changeTarget('new')
        }, [dispatch])
        const risingPostsClick = useCallback(() => {
            dispatch(clearArrAction(false))
            dispatch(getArrPosts(localStorage.token, 'rising'))
            targetCategoriesStore.changeTarget('rising')
        }, [dispatch])
        const contrPostsClick = useCallback(() => {
            dispatch(clearArrAction(false))
            dispatch(getArrPosts(localStorage.token, 'controversial'))
            targetCategoriesStore.changeTarget('controversial')
        }, [dispatch])
        const topPostsClick = useCallback(() => {
            dispatch(clearArrAction(false))
            dispatch(getArrPosts(localStorage.token, 'top'))
            targetCategoriesStore.changeTarget('top')
        }, [dispatch])
        return (
            <nav className={styles.navBlock}>
                <ul className={styles.list}>
                    <li className={styles.itemBtn}>
                        <ButtonHeader active={categoriesLoad === 'hot'} onClick={hotPostsClick} text={'ГОРЯЧИЕ'}/>
                    </li>
                    <li className={styles.itemBtn}>
                        <ButtonHeader active={categoriesLoad === 'top'} onClick={topPostsClick} text={'ПОПУЛЯРНЫЕ'}/>
                    </li>
                    <li className={styles.itemBtn}>
                        <ButtonHeader active={categoriesLoad === 'controversial'} onClick={contrPostsClick}
                                      text={'НАШУМЕВШИЕ'}/>
                    </li>
                    <li className={styles.itemBtn}>
                        <ButtonHeader active={categoriesLoad === 'rising'} onClick={risingPostsClick} text={'РАСТУЩИЕ'}/>
                    </li>
                    <li className={styles.itemBtn}>
                        <ButtonHeader active={categoriesLoad === 'new'} onClick={newPostsClick} text={'НОВЫЕ'}/>
                    </li>
                </ul>
            </nav>
        );
    }
)