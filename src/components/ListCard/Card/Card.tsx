import React, {useCallback, useEffect, useState} from 'react';
import styles from './card.module.css';
import {postData} from "../../../../types/postsType";
import {useGetDateCreate} from "../../../hooks/useGetDateCreate";
import {CardBtnBlock} from "./CardBtnBlock";
import dataTargetCardStore from "../../../storeMobx/dataTargetCardStore";
import changeTargetCardStore from "../../../storeMobx/changeTargetCardStore";
import {DateAndAuthor} from "./DateAndAuthor";
import windowYPositionStore from "../../../storeMobx/windowYPositionStore";
import targetLoaderComments from "../../../storeMobx/targetLoaderCommentsStore";
import {Link} from "react-router-dom";

interface ICard {
    dataPost: postData
}

export function Card({dataPost}: ICard) {
    const [isImg, setIsImg] = useState(false)
    const [isBigText, setIsBigText] = useState(false)
    const date = useGetDateCreate(dataPost.created_utc)
    const changeData = useCallback(() => {
        windowYPositionStore.savePosition(window.scrollY)
        dataTargetCardStore.changePostData(dataPost)
        changeTargetCardStore.changeTarget(true)
        targetLoaderComments.change(true)
    }, [dataPost])
    useEffect(() => {
        if (dataPost.thumbnail.length > 10) setIsImg(true)
        if (dataPost.title.length > 70) setIsBigText(true)
    }, [dataPost])
    return (
        <li onClick={changeData} className={styles.card}>
           <Link to={`/card?${dataPost.id}`}>
               {
                   isImg &&
                   <img className={styles.img} alt={'картинка карточки'} src={dataPost.thumbnail}/>
               }
               <div className={styles.descrBlock}>
                   <p className={styles.text}>
                       {
                           !isBigText &&
                           dataPost.title
                       }
                       {
                           isBigText &&
                           `${dataPost.title.slice(0, 70)}...`
                       }
                   </p>
                   <DateAndAuthor date={date} author={dataPost.author}/>
               </div>
               <div style={{width: '100%', height: '60px'}}/>
               <CardBtnBlock idCard={dataPost.name} countComments={dataPost.num_comments} countLike={dataPost.score}/>
           </Link>
        </li>
    );
}
