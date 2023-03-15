import React from 'react';
import styles from './leftbox.module.css';
import {IconRedditAndAccount} from "./IconRedditAndAccount";
import {SearchMenu} from "./SearchMenu";
import {Setting} from "./Setting";

export function LeftBox() {
    return (
        <div className={styles.leftBlock}>
            <IconRedditAndAccount/>
            <SearchMenu/>
            <Setting/>
        </div>
    );
}
