import React, {useLayoutEffect} from 'react';
import styles from './layout.module.css';
import {LeftBox} from "../components/LeftBox";
import {Header} from "../components/Header";
import {Content} from "../components/Content";
import {observer} from "mobx-react-lite";
import {useDispatch} from "react-redux";
import {asyncGetTokenAction, getTokenAction} from "../store/getTokenReducer";
import {Route, Routes} from "react-router";
import {useGetPosts} from "../hooks/useGetPosts";

export const Layout = observer(() => {
    const a = useGetPosts(localStorage.token)
    const dispatch: any = useDispatch()
    useLayoutEffect(() => {
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
                <Route path={'*'} element={<Content/>}/>
            </Routes>
        </main>
    );
})
