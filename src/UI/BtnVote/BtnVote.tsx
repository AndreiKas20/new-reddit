import React from 'react';
import styles from './btnvote.module.css';
import {ButtonCard} from "../ButtonCard";

interface IBtnVote {
    countLike: number
}

export function BtnVote({countLike}: IBtnVote) {
    return (
        <div className={styles.blockLikePosition}>
            <div className={styles.btnArrowUpPos}><ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Arrow'}
                                                              isActiveIcon={false}/></div>
            <span
                className={styles.countLikes}>{countLike > 1000 ? `${Math.floor(countLike / 1000)}k` : countLike}</span>
            <div className={styles.btnArrowDownPos}><ButtonCard heightIcon={'24px'} widthIcon={'24px'}
                                                                typeIcon={'Arrow'} isActiveIcon={false}/></div>
        </div>
    )
}
