import React from 'react';
import styles from './entrycard.module.css';
import {DateAndAuthor} from "../ListCard/Card/DateAndAuthor";
import {ButtonCard} from "../../../UI/ButtonCard";
import {postData} from "../../../../types/postsType";
import ReactPlayer from "react-player";
import {useGetDateCreate} from "../../../hooks/useGetDateCreate";

interface IEntry {
    cardData: postData
}

export function EntryCard({cardData}:IEntry) {
    const linkToVideo = cardData.secure_media?.reddit_video ? cardData.secure_media?.reddit_video.dash_url : '';
    const dateCreate= useGetDateCreate(cardData.created)
    return (
        <div className={styles.card}>
           <div className={styles.headBlock}>
               <h2 className={styles.title}>{cardData.title}</h2>
               <DateAndAuthor author={cardData.author} date={dateCreate}/>
           </div>
           <div className={styles.btnSharePos}><ButtonCard typeIcon={'Share'} isActiveIcon={false} widthIcon={'24px'} heightIcon={'24px'}/></div>
            {
                cardData.preview?.enabled &&
                <img className={styles.img} alt={'Фото'} src={cardData.url}/>
            }
            {
                cardData.secure_media?.reddit_video &&
                <ReactPlayer controls={true} url={linkToVideo}/>
            }
            {
                cardData.secure_media?.oembed &&
                <ReactPlayer controls={true} url={cardData.url}/>
            }
        </div>
    );
}
