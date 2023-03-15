import React, {useEffect, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";

export default React.memo(function ListCard() {

    return (
        <ul className={styles.list}>
            <Card/>
        </ul>
    );
})
