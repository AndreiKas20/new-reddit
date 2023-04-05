import React, {useEffect, useState} from 'react';
import styles from './content.module.css';
import {useDispatch, useSelector} from "react-redux";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import targetCategoriesStore from "../../storeMobx/targetCategoriesStore";
import {arrPosts} from "../../../types/postsType";
import listRedditStore from "../../storeMobx/listRedditStore";
import isSearchBlockStore from "../../storeMobx/isSearchBlockStore";
import {getArrPosts} from "@/store/getArrPostsReducer";

interface IContentProps {
    children: React.ReactNode
}

export const Content = ({children}: IContentProps) => {
    const dataCard = dataTargetCardStore.cardData
    const isCard = changeTargetCardStore.target
    const dispatch: any = useDispatch()
    const isSearchOpen = isSearchBlockStore.isOpen
    const categoriesLoad = targetCategoriesStore.targetCategories
    const typeReddit = listRedditStore.typeList
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const token = useSelector<any, any>(state => state.getTokenReducer.token)
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        dispatch(getArrPosts(token, categoriesLoad, typeReddit))
    }, [categoriesLoad, typeReddit, dispatch, token])
    useEffect(() => {
        if (!token || token === '' || token === 'undefined') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [token])
    return (
        <div className={styles.contentBlock}>
            {
                children
            }
        </div>
    );
}
