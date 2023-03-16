import React, {useEffect, useState} from 'react';
import styles from './card.module.css';
import {postData} from "../../../../../types/postsType";
import {useGetDateCreate} from "../../../../hooks/useGetDateCreate";
import {CardBtnBlock} from "./CardBtnBlock";

interface ICard {
    dataPost: postData
}

export function Card({dataPost}: ICard) {
    const [isImg, setIsImg] = useState(false)
    console.log(dataPost)
    useEffect(() => {
        if (dataPost.thumbnail.length > 10) setIsImg(true)
    },[dataPost])
    const date = useGetDateCreate(dataPost.created_utc)
    return (
        <li className={styles.card}>
            {
                isImg &&
                <img className={styles.img} alt={'картинка карточки'} src={dataPost.thumbnail}/>
            }
            <div className={styles.descrBlock}>
                <p className={styles.text}>
                    {
                        dataPost.title
                    }
                </p>
                <div className={styles.informationBlock}>
                    <span className={styles.datePublic}>{date} назад от</span>
                    <span className={styles.authorName}>{dataPost.author}</span>
                </div>
                <div className={styles.btnBlock}>
                    <CardBtnBlock countComments={dataPost.num_comments} countLike={dataPost.score}/>
                </div>
            </div>
        </li>
    );
}
