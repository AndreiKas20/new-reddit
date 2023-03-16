import React from 'react';
import styles from './cardbtnblock.module.css';
import {ButtonCard} from "../../../../../UI/ButtonCard";

interface IBottomBlock {
    countLike: number,
    countComments: number,
}

export function CardBtnBlock({countLike, countComments}:IBottomBlock) {
  return (
        <div className={styles.btnBlock}>
            <div className={styles.blockLikePosition}>
                <div className={styles.btnArrowUpPos}><ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Arrow'} isActiveIcon={false}/></div>
                <span>{countLike}</span>
                <div className={styles.btnArrowDownPos}><ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Arrow'} isActiveIcon={false}/></div>
            </div>
            <div className={styles.blockCommentPosition}>
                <ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Comment'} isActiveIcon={false}/>
                <span>{countComments}</span>
            </div>
            <div className={styles.blockSharePosition}>
                <ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Share'} isActiveIcon={false}/>
            </div>
        </div>
  );
}
