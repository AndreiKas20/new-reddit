import React, {useEffect, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useSelector} from "react-redux";

export function ListCard() {
    const [posts, setPosts] = useState<arrPosts | false>()
    const arrPosts = useSelector<any, posts>(state => state.getDataArr.arr)
    useEffect(() => {
        if (arrPosts) setPosts(arrPosts.data.children)
    },[arrPosts])
    return (
        <ul className={styles.list}>
            {
                posts &&
                posts?.map(value => <Card key={value.data.id} dataPost={value.data}/>)
            }
            {
                !posts &&
                <div> ЗАГРУЗКА, или нет...</div>
            }
        </ul>
    );
}