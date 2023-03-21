import React, {useEffect, useState} from 'react';
import styles from './header.module.css';
import {Title} from "./Title";
import {NavMenu} from "./NavMenu";
import {observer} from "mobx-react-lite";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";
import listRedditStore from "../../storeMobx/listRedditStore";
import isSearchBlockStore from "../../storeMobx/isSearchBlockStore";
import searchFieldStore from "../../storeMobx/searchFieldStore";

export const Header = observer(() => {
    const isCard = changeTargetCardStore.target
    const card = dataTargetCardStore.cardData
    const typeReddit = listRedditStore.typeList
    const isSearch = isSearchBlockStore.isOpen
    const valueSearch = searchFieldStore.stateField
    const [textHeader, setTextHeader] = useState('Все реддиты')
    useEffect(() => {
        if (typeReddit === '') {
            setTextHeader('Мои подписки')
        } else if (typeReddit === 'r/all/') {
            setTextHeader('Все подписки')
        } else {
            setTextHeader('')
        }
    }, [typeReddit])
    return (
        <header className={styles.header}>
            <Title title={textHeader} isCard={isCard} isSearch={isSearch} valueSearch={valueSearch} subredditName={card.subreddit}/>
            {
               !isCard && !isSearch && <NavMenu/>
            }
        </header>
    );
})
