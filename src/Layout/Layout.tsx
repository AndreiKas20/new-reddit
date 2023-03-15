import React, {useEffect, useState} from 'react';
import styles from './layout.module.css';
import {LeftBox} from "./LeftBox";
import {Header} from "./Header";
import {Content} from "./Content";
import {observer} from "mobx-react-lite";
import {useGetToken} from "../hooks/useGetToken";

export const Layout = observer(() => {
    localStorage.token = useGetToken()
    return (
        <main className={styles.layout}>
            <Header/>
            <LeftBox/>
            <Content subtitle={'reddit'}/>
        </main>
    );
})
