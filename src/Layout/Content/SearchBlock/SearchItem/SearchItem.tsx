import React from 'react';
import styles from './searchitem.module.css';
import {search} from "../../../../../types/searchType";
import isSearchBlockStore from "../../../../storeMobx/isSearchBlockStore";
import {useDispatch} from "react-redux";
import {clearSearchAction} from "../../../../store/getSearchArrReducer";
import {clearArrAction} from "../../../../store/getArrPostsReducer";
import listRedditStore from "../../../../storeMobx/listRedditStore";

interface IItem {
    dataItem: search
}

export function SearchItem({dataItem}: IItem) {
    const date = new Date(dataItem.created * 1000)
    const dispatch:any = useDispatch()
    const subscribeCount = dataItem.subscribers > 1000000 ? `${Math.floor(dataItem.subscribers / 1000000)}m` : dataItem.subscribers > 1000 ? `${Math.floor(dataItem.subscribers / 1000)}k` : dataItem.subscribers
    const enterSubreddit = () => {
        isSearchBlockStore.changeIsOpen(false)
        dispatch(clearSearchAction())
        dispatch(clearArrAction([]))
        listRedditStore.changeType(`r/${dataItem.display_name}/`)
    }
    return (
        <li onClick={enterSubreddit} className={styles.item}>

            {
                dataItem.icon_img !== '' && <img className={styles.img} height={'50px'} alt={'лого подреддита'} src={dataItem.icon_img}/>
            }
            {
                dataItem.icon_img === '' && dataItem.header_img !== null &&
                <img className={styles.img}  height={'50px'} alt={'лого подреддита'} src={dataItem.header_img}/>
            }
            <span className={styles.titleSubreddit}>{dataItem.title.length > 110? dataItem.title.slice(0, 110): dataItem.title}</span>
            <h4 className={styles.nameSubreddit}>{dataItem.display_name}</h4>
            <div className={styles.infoBlock}>
                <span className={styles.dateCreate}>
                    <span className={styles.dateCreateText}>Создан:</span> {date.getMonth() + 1}.{date.getFullYear()}
                </span>
                <span style={dataItem.subscribers > 1000000 ? {color: '#00BCD4'}: {color: 'var(--orange)'} } className={styles.subscribers}>
                   <span className={styles.subscrText}>Подписчиков:</span> {subscribeCount}
                </span>
            </div>
        </li>
    );
}
