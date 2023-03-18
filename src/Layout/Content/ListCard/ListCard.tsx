import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";

export const ListCard = observer(() => {
    const [posts, setPosts] = useState<arrPosts | false>()
    const [isLoader, setIsLoader] = useState(false)
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const afterKey = useSelector<any, string>(state => state.getDataArr.after)
    console.log('after key',afterKey)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch: any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    // const afterKey = arrPosts ? arrPosts.data.after : ''
    useLayoutEffect(() => {
        const current = bottomOfList.current
        const observer = new IntersectionObserver((entries) => {
                if (!arrPosts) return
                if (localStorage.token === '' || localStorage.token === 'undefined') return
                if (entries[0].isIntersecting) {
                    setIsLoader(true)
                    dispatch(getArrPosts(localStorage.token, categoriesLoad,afterKey))
                }
            },
            {
                rootMargin: '60px'
            },
        );
        setPosts(arrPosts)
        if (current) {
            observer.observe(current)
        }
        return () => {
            if (current) {
                observer.unobserve(current)
            }
        }
    }, [afterKey, categoriesLoad])

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
                   isLoader && <div style={{height: '70px', width: '70px'}}><div className={styles.loader}/></div>
                }

            </ul>
            <div ref={bottomOfList}/>
            {
                !posts && localStorage.token !== '' &&
                <div className={styles.loader}/>
            }
        </>
    );
})