import React, {useEffect} from 'react';
import styles from './content.module.css';
import ListCard from "./ListCard/ListCard";
import {observer} from "mobx-react-lite";
import saveTokenStore from "../../store/saveTokenStore";


interface IContent {
    subtitle: string
}

export const Content = observer(({subtitle}: IContent) => {
    const token = saveTokenStore.token
    useEffect(() => {
        console.log('token', token)
    },[token])
    return (
        <div className={styles.contentBlock}>
            <h2>{subtitle}</h2>
            <ListCard/>
        </div>
    );
})
