import React, {useEffect, useRef, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";

export function ListCard() {
    const [posts, setPosts] = useState<arrPosts | false>()

    const arrPosts = useSelector<any, posts>(state => state.getDataArr.arr)
    console.log(arrPosts)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch: any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    const token = localStorage.token
    const afterKey = arrPosts ? arrPosts.data.after : ''
    useEffect(() => {
        if (arrPosts) {
            setPosts(arrPosts.data.children)
        } else {
            setPosts(false)
        }
    }, [arrPosts])
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
                if (!arrPosts) return;
                if (token === '' || token === 'undefined') return
                if (entries[0].isIntersecting) {
                    dispatch(getArrPosts(token, categoriesLoad, afterKey))
                }
            },
            {
                rootMargin: '10px'
            },
        );
        if (bottomOfList.current) {
            observer.observe(bottomOfList.current)
        }
        return () => {
            if (bottomOfList.current) {
                observer.unobserve(bottomOfList.current)
            }
        }

    }, [bottomOfList.current, categoriesLoad, dispatch, token, arrPosts, afterKey])

    return (
        <>
            <ul className={styles.list}>
                {
                    posts &&
                    posts?.map(value => <Card key={value.data.id} dataPost={value.data}/>)
                }
                {
                    !posts && localStorage.token === '' &&
                    <span className={styles.messageEnter}>Для просмотра списка постов войдите в учетную запись</span>
                }
                {
                    !posts && localStorage.token !== '' &&
                    <div className={styles.loader}/>
                }
            </ul>
            <div ref={bottomOfList}/>
        </>
    );
}