import React, {useEffect, useState} from 'react';
import styles from './comments.module.css';
import {dataComments} from "../../../../../../types/commentsType";
import {BtnVote} from "../../../../../UI/BtnVote";
import {useGetDateCreate} from "../../../../../hooks/useGetDateCreate";
import {ButtonCard} from "../../../../../UI/ButtonCard";

interface IComment {
    comment: dataComments
}

export function Comments({comment}: IComment) {
    const dateCreate = useGetDateCreate(comment.created)
    const [addComment,  setAddComment] = useState(false)
    useEffect(() => {
        if (comment.author === 'AutoModerator' || !comment.author || comment.distinguished === 'moderator') {
            setAddComment(false)
        } else {
            setAddComment(true)
        }
    },[comment])
    return (
        <>
            {
                addComment &&
                <div className={styles.comments}>
                    <div className={styles.positionBtnVote}>
                        <BtnVote countLike={comment.score}/>
                    </div>
                    <div className={styles.topBlock}>
                        <p className={styles.text}>{comment.body}</p>
                        <div className={styles.positionBtnComment}><ButtonCard typeIcon={'Comment'} widthIcon={'25px'} heightIcon={'25px'} isActiveIcon={false}/></div>
                    </div>
                    <div className={styles.bottomBlock}>
                <span className={styles.nameAuthor}>
                    {
                        comment.author + ' '
                    }
                </span>
                        <span className={styles.dateCreate}>
                    {
                        dateCreate + ' назад'
                    }
                </span>
                    </div>
                    {
                        comment.replies?.data?.children.map(value => <Comments key={value.data.id} comment={value.data}/>)
                    }
                </div>
            }
        </>
    );
}
