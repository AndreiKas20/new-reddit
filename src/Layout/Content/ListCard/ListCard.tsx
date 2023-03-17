import React, {useEffect, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useSelector} from "react-redux";

export function ListCard() {
    const [posts, setPosts] = useState<arrPosts | false>()
    const arrPosts = useSelector<any, posts>(state => state.getDataArr.arr)
    useEffect(() => {
        if (arrPosts) {
            setPosts(arrPosts.data.children)
        } else {
            setPosts(false)
        }
    },[arrPosts])
    return (
        <ul className={styles.list}>
            {
                posts &&
                posts?.map(value => <Card key={value.data.id} dataPost={value.data}/>)
            }
            {
                !posts && localStorage.token === '' && <span className={styles.messageEnter}>Для просмотра списка постов войдите в учетную запись</span>
            }
            {
                !posts && localStorage.token !== '' &&
                <div className={styles.loader}/>
            }
        </ul>
    );
}