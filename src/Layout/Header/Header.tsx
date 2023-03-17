import React from 'react';
import styles from './header.module.css';
import {Title} from "./Title";
import {NavMenu} from "./NavMenu";
import {observer} from "mobx-react-lite";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";

export const Header = observer(() => {
    const isCard = changeTargetCardStore.target
    return (
        <header className={styles.header}>
            <Title title={'Все редиты'} isCard={isCard} />
            {
               !isCard && <NavMenu/>
            }
        </header>
    );
})
