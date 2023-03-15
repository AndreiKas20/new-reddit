import React from 'react';
import styles from './layout.module.css';
import {LeftBox} from "./LeftBox";
import {Header} from "./Header";
import {Content} from "./Content";

export function Layout() {
    return (
        <main className={styles.layout}>
            <Header/>
            <LeftBox/>
            <Content subtitle={'reddit'}/>
        </main>
    );
}
