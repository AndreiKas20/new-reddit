import React, {CSSProperties} from 'react';
import styles from './buttonheader.module.css';

interface IButtonHeader {
    text: string,
    onClick: () => void,
    active: boolean
}

export function ButtonHeader({text, onClick, active}: IButtonHeader) {
    return (
        <button onClick={onClick} className={active? `${styles.btn} ${styles.btnActive}`: styles.btn}>{text}
            {
                active &&
                <span className={styles.border}/>
            }
        </button>
    );
}
