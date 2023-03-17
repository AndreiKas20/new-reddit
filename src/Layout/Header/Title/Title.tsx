import React from 'react';
import styles from './title.module.css';
import changeTargetCardStore from "../../../storeMobx/changeTargetCardStore";

interface ITitle {
    title: string,
    isCard: boolean,
}

export function Title({title, isCard} :ITitle) {
    const backCards = () => {
        changeTargetCardStore.changeTarget(false)
    }
    return (
        <div style={{position:'relative'}}>
            {
                isCard && <button onClick={backCards} className={styles.btn}><span className={styles.arrow}/></button>
            }
            <h1 style={{paddingLeft: isCard? '60px': '17px'}} className={styles.title}>
                {title}
            </h1>
        </div>
    );
}
