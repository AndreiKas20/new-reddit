import React from 'react';
import styles from './cardbtnblock.module.css';
import {ButtonCard} from "../../../../UI/ButtonCard";
import axios from "axios";
import {userDataType} from "../../../../../types/userDataType";
import {BtnVote} from "../../../../UI/BtnVote";

interface IBottomBlock {
    countLike: number,
    idCard: string
    countComments: number,
}

export function CardBtnBlock({countLike, countComments, idCard}:IBottomBlock) {
    // const voteUp = () => {
    //     if (localStorage.token === 'undefined' || localStorage.token === '') return
    //     axios.post('https://reddit.com/api/vote', {
    //         headers: {Authorization: `bearer ${localStorage.token}`},
    //         params: {
    //             dir: 1,
    //             id: idCard,
    //             rank: 2,
    //         }
    //     })
    //         .then((resp) => {
    //             const userData: userDataType = resp.data;
    //             console.log('prefs', userData)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }
  return (
        <div className={styles.btnBlock}>
            <BtnVote countLike={countLike}/>
            <div className={styles.blockCommentPosition}>
                <ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Comment'} isActiveIcon={false}/>
                <span className={styles.countComments}>{countComments}</span>
            </div>
            <div className={styles.blockSharePosition}>
                <ButtonCard heightIcon={'24px'} widthIcon={'24px'} typeIcon={'Share'} isActiveIcon={false}/>
            </div>
        </div>
  );
}
