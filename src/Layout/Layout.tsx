import React, {useEffect, useLayoutEffect} from 'react';
import styles from './layout.module.css';
import {LeftBox} from "./LeftBox";
import {Header} from "./Header";
import {Content} from "./Content";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import {asyncGetTokenAction, getTokenAction} from "../store/getTokenReducer";
import {Route, Routes} from "react-router";

export const Layout = observer(() => {
    const dispatch: any = useDispatch()
    useLayoutEffect(() => {
        console.log(localStorage.token)
        if (localStorage.token === '' || localStorage.token === 'undefined' || !localStorage.token) {
            dispatch(asyncGetTokenAction())
        } else {
            dispatch(getTokenAction(localStorage.token))
        }
    }, [dispatch])
    return (
        <main className={styles.layout}>
            <Header/>
            <LeftBox/>
           <Routes>
               <Route path={'*'} element={ <Content/>}/>
           </Routes>
        </main>
    );
})
