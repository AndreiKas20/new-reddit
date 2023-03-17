import React from 'react';
import styles from './entrycard.module.css';
import {DateAndAuthor} from "../ListCard/Card/DateAndAuthor";
import {ButtonCard} from "../../../UI/ButtonCard";
import {postData} from "../../../../types/postsType";
import ReactPlayer from "react-player";

interface IEntry {
    cardData: postData
}

export function EntryCard({cardData}:IEntry) {
    console.log({cardData})
    const linkToVideo = cardData.secure_media?.reddit_video ? cardData.secure_media?.reddit_video.dash_url : '';
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{cardData.title}</h2>
            <DateAndAuthor author={''} date={''}/>
            <ButtonCard typeIcon={'Share'} isActiveIcon={false} widthIcon={'24px'} heightIcon={'24px'}/>
            {
                cardData.preview?.enabled &&
                <img alt={'Фото'} src={cardData.url}/>
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
