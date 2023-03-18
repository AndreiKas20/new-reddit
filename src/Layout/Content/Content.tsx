import React, {useCallback} from 'react';
import styles from './content.module.css';
import {ListCard} from "./ListCard";
import {useDispatch} from "react-redux";
import {getArrPosts} from "../../store/getArrPostsReducer";
import {observer} from "mobx-react-lite";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import {EntryCard} from "./EntryCard";
import targetCategoriesStore from "../../storeMobx/targetCategoriesStore";
interface IContent {
    subtitle: string
}

export const Content = observer(({subtitle}: IContent) => {
    const dispatch: any = useDispatch()
    const dataCard = dataTargetCardStore.cardData
    const isCard = changeTargetCardStore.target
    const categoriesLoad = targetCategoriesStore.targetCategories
    const getArr = useCallback((token: string, link: string) => {
        dispatch(getArrPosts(token, link))
    },[dispatch, localStorage.token])
    getArr(localStorage.token, categoriesLoad)
    return (
        <div className={styles.contentBlock}>
            {
                !isCard &&
                <ListCard/>
            }
            {
                isCard &&
                <EntryCard cardData={dataCard}/>
            }
        </div>
    );
}
)