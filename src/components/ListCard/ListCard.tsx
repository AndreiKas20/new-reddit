import React, {useEffect, useRef, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts} from "../../../types/postsType";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../store/getArrPostsReducer";
import targetCategoriesStore from "../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";
import windowYPositionStore from "../../storeMobx/windowYPositionStore";
import listRedditStore from "../../storeMobx/listRedditStore";
import {BtnLoader} from "../../UI/BtnLoader";

interface IListCard {
    startArrPosts: arrPosts
}

export const ListCard = observer(({startArrPosts}: IListCard) => {
    const yPosition = windowYPositionStore.yPosition
    const [posts, setPosts] = useState<arrPosts | false>()
    const [isLoader, setIsLoader] = useState(true)
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const afterKey = useSelector<any, string>(state => state.getDataArr.after)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch: any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    const typeReddit = listRedditStore.typeList

    const morePosts = () => {
        dispatch(getArrPosts(localStorage.token, categoriesLoad, typeReddit, afterKey))
        setIsLoader(true)
        windowYPositionStore.savePosition(0)
    }
    const scroll = (yPos: number) => {
        if (yPos === 0) return
        return window.scrollTo(0, yPos - 300)
    }
    useEffect(() => {
        setIsLoader(true)
    },[categoriesLoad, typeReddit])
    useEffect(() => {
        setPosts(arrPosts)
    }, [arrPosts])
    useEffect(() => {
        setPosts(startArrPosts)
    }, [startArrPosts])
    useEffect(() => {
        scroll(yPosition)
    }, [yPosition, scroll])
    useEffect(() => {
        if (posts && posts.length > 10) {
            setIsLoader(false)
        }
    }, [posts])
    // useEffect(() => {
    //     const current = bottomOfList.current
    //     const observer = new IntersectionObserver((entries) => {
    //         console.log('enter load')
    //             if (localStorage.token === '' || localStorage.token === 'undefined') return
    //         console.log('enter token', startArrPosts.length, countLoad)
    //             if (entries[0].isIntersecting && !isLoadData) {
    //                 console.log('in to dispatch')
    //                 setIsLoader(true)
    //                 setCountLoad(prevState => prevState + 1)
    //                 windowYPositionStore.savePosition(0)
    //                 setIsLoadData(true)
    //                 if (countLoad > 1) {
    //                     // dispatch(getArrPosts(localStorage.token, categoriesLoad,afterKey))
    //
    //                 }
    //             }
    //         },
    //         {
    //             rootMargin: '20px'
    //         },
    //     );
    //     if (current) {
    //         observer.observe(current)
    //     }
    //     return () => {
    //         if (current) {
    //             observer.unobserve(current)
    //         }
    //     }
    // }, [afterKey, categoriesLoad,dispatch,isLoadData,startArrPosts, countLoad])

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
            </ul>
            {
              <BtnLoader isLoader={isLoader} onClick={morePosts}/>
            }

            <div ref={bottomOfList}/>
        </>
    );
})