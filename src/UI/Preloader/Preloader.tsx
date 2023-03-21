import React from 'react';
import styles from './preloader.module.css';

interface IPreloader {
    width: string,
    height: string,
    left?: string,
    top?: string,
    right?: string,
    bottom?: string,
    position: 'absolute' | 'relative' | 'sticky'
}

export function Preloader({width, height, bottom, top, right, left, position}: IPreloader) {
    return (
        <div style={{
            height: height,
            width: width,
            left: left,
            right: right,
            top: top,
            bottom: bottom,
            position: position,
        }}>
            <div className={styles.loader}/>
        </div>
    );
}
