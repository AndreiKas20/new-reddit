import React from 'react';
import styles from './content.module.css';
import ListCard from "./ListCard/ListCard";


interface IContent {
    subtitle: string
}

export function Content({subtitle}: IContent) {
    return (
        <div className={styles.contentBlock}>
            <h2>{subtitle}</h2>
            <ListCard/>
        </div>
    );
}
