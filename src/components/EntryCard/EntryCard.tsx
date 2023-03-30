import React, {useEffect, useState} from 'react';
import styles from './entrycard.module.css';
import {DateAndAuthor} from "../ListCard/Card/DateAndAuthor";
import {ButtonCard} from "../../UI/ButtonCard";
import {postData} from "../../../types/postsType";
import ReactPlayer from "react-player";
import {useGetDateCreate} from "../../hooks/useGetDateCreate";
import {useDispatch, useSelector} from "react-redux";
import {asyncGetComments} from "../../store/getCommentsCardReducer";
import {CommentsSection} from "./CommentsSection";
import sortCommentsStore from "../../storeMobx/sortCommentsStore";
import countCommentsStore from "../../storeMobx/countCommentsStore";
import {observer} from "mobx-react-lite";
import targetLoaderComments from "../../storeMobx/targetLoaderCommentsStore";


interface IEntry {
    cardData: postData
}

export const EntryCard = observer(({cardData}: IEntry) => {
    const linkVideo = cardData.secure_media?.reddit_video ? cardData.secure_media?.reddit_video.dash_url : '';
    const dateCreate = useGetDateCreate(cardData.created)
    const dispatch: any = useDispatch()
    const comments: any = useSelector<any>(state => state.getCommentsCardReducer.comments)
    const [arrComments, setArrComments] = useState([])
    const loaderComments = targetLoaderComments.commentsLoader
    const typeSortComments = sortCommentsStore.sortCommentsState
    const countComments = countCommentsStore.countComments
    useEffect(() => {
        dispatch(asyncGetComments(localStorage.token, cardData.id,typeSortComments,countComments))
    }, [dispatch, cardData, typeSortComments, countComments])
    useEffect(() => {
        setArrComments(comments)
    }, [comments])
    useEffect(() => {
        if(loaderComments) setArrComments([])
    },[loaderComments])
    return (
        <>
            <div className={styles.card}>
                <div className={styles.headBlock}>
                    <h2 className={styles.title}>{cardData.title}</h2>
                    <DateAndAuthor author={cardData.author} date={dateCreate}/>
                </div>
                <div className={styles.btnSharePos}><ButtonCard typeIcon={'Share'} isActiveIcon={false}
                                                                widthIcon={'24px'} heightIcon={'24px'}/></div>
                {
                    cardData.preview?.enabled &&
                    <img className={styles.img} alt={'Фото'} src={cardData.url}/>
                }
                {
                    cardData.secure_media?.reddit_video &&
                    <ReactPlayer controls={true} url={linkVideo}/>
                }
                {
                    cardData.secure_media?.oembed &&
                    <ReactPlayer controls={true} url={cardData.url}/>
                }

            </div>
            <div className={styles.commentsBlock}>
                <CommentsSection countComments={cardData.num_comments} listComments={arrComments}/>
            </div>
        </>
    );
})
