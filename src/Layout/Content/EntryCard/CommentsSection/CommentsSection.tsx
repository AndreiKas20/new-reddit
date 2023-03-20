import React, {useEffect} from 'react';
import styles from './commentssection.module.css';
import {Comments} from "./Comments";
import {comments} from "../../../../../types/commentsType";
import {Selector} from "../../../../UI/Selector";
import {observer} from "mobx-react-lite";
import changeTargetCardStore from "../../../../storeMobx/changeTargetCardStore";
import {Preloader} from "../../../../UI/Preloader";
import targetLoaderComments from "../../../../storeMobx/targetLoaderComments";
import {SelectorCountComments} from "../../../../UI/SelectorCountComments";

interface ICommentsBlock {
    countComments: number,
    listComments: comments
}

export const CommentsSection = observer(({countComments, listComments}: ICommentsBlock) => {
    const isLoader = targetLoaderComments.commentsLoader
    useEffect(() => {
        if (listComments.length > 0) targetLoaderComments.change(false)
    },[listComments])
    return (
        <div className={styles.commentsBlock}>
            <div className={styles.settingBlock}>
                <span className={styles.countComments}>{countComments} Комментариев</span>
                <Selector/>
                <SelectorCountComments right={'500px'}/>
            </div>
            <div className={styles.listComments}>
                {
                    isLoader && <Preloader height={'50px'} width={'50px'} left={'48%'} bottom={'50px'}/>
                }
                {
                   !isLoader && listComments.map(comment => <Comments key={comment.data.id} comment={comment.data}/>)
                }
            </div>
        </div>
    );
})
