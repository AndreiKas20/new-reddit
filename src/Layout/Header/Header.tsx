import React from 'react';
import styles from './header.module.css';
import {Title} from "./Title";
import {NavMenu} from "./NavMenu";

export function Header() {
    return (
        <header className={styles.header}>
            <Title/>
            <NavMenu/>
        </header>
    );
}
