import React from 'react';
import styles from './header.module.css';
import {Title} from "./Title";
import {NavMenu} from "./NavMenu";
import {observer} from "mobx-react-lite";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";

export const Header = observer(() => {
    const isCard = changeTargetCardStore.target
    const card = dataTargetCardStore.cardData
    return (
        <header className={styles.header}>
            <Title title={'Все редиты'} isCard={isCard} subredditName={card.subreddit_name_prefixed}/>
            {
               !isCard && <NavMenu/>
            }
        </header>
    );
})
