import React from 'react';
import styles from './selectorlayout.module.css';

interface ISelector {
    isOpen: boolean,
    onClickOpen: () => void,
    textDefault: string | number,
    secondChoice: boolean,
    secondText: string | number,
    onClickSecond: () => void,
    thirdChoice: boolean,
    thirdText: string | number,
    onClickThird: () => void,
    fourthChoice: boolean,
    fourthText: string | number,
    onClickFourth: () => void,
    fifthChoice: boolean,
    fifthText: string | number,
    onClickFifth: () => void,
    firstChoice: boolean,
    firstText: string | number,
    onClickFirst: () => void,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string,

}

export function SelectorLayout(props: ISelector) {
    return (
        <div style={{top: props.top, right: props.right, bottom: props.bottom, left: props.left}} className={styles.block}>
            <button style={props.isOpen ? {transform: 'scale(1)'} : {}} className={styles.headStyle}
                    onClick={props.onClickOpen}>
                <span className={styles.text}>{props.textDefault}</span>
                <span style={props.isOpen ? {transform: 'rotate(180deg)'} : {}}>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2"/>
                </svg>
            </span>
            </button>
            {
                props.isOpen &&
                <ul className={styles.list}>
                    {
                        props.firstChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={props.onClickFirst}><span
                                className={styles.text}>{props.firstText}</span></button>
                        </li>
                    }
                    {
                        props.secondChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={props.onClickSecond}><span
                                className={styles.text}>{props.secondText}</span></button>
                        </li>
                    }
                    {
                        props.thirdChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={props.onClickThird}><span
                                className={styles.text}>{props.thirdText}</span></button>
                        </li>
                    }
                    {
                        props.fourthChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={props.onClickFourth}><span
                                className={styles.text}>{props.fourthText}</span></button>
                        </li>
                    }
                    {
                        props.fifthChoice &&
                        <li className={styles.item}>
                            <button className={styles.btn} onClick={props.onClickFifth}><span
                                className={styles.text}>{props.fifthText}</span></button>
                        </li>
                    }
                </ul>
            }
        </div>
    );
}
