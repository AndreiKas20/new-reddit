import React, {useCallback, useEffect} from 'react';
import styles from './content.module.css';
import {ListCard} from "./ListCard";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../store/getArrPostsReducer";
import {observer} from "mobx-react-lite";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import {EntryCard} from "./EntryCard";
import targetCategoriesStore from "../../storeMobx/targetCategoriesStore";
import {arrPosts, posts} from "../../../types/postsType";
interface IContent {
    subtitle: string
}

export const Content = observer(({subtitle}: IContent) => {
    const dataCard = dataTargetCardStore.cardData
    const isCard = changeTargetCardStore.target
    const dispatch:any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    const arrPosts = useSelector<any,arrPosts>(state => state.getDataArr.arr)
    useEffect(() => {
        dispatch(getArrPosts(localStorage.token, categoriesLoad))
    },[categoriesLoad])
    return (
        <div className={styles.contentBlock}>
            {
                !isCard &&
                <ListCard startArrPosts={arrPosts}/>
            }
            {
                isCard &&
                <EntryCard cardData={dataCard}/>
            }
        </div>
    );
}
)