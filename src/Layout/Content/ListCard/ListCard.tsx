import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";
import windowYPositionStore from "../../../storeMobx/windowYPositionStore";
import {Preloader} from "../../../UI/Preloader";

interface IListCard {
    startArrPosts: arrPosts
}

export const ListCard = observer(({startArrPosts} :IListCard) => {
    const yPosition = windowYPositionStore.yPosition
    const scroll = (yPos: number) => {
        if (yPos === 0) return
      return   window.scrollTo(0,yPos - 300)
    }
    useEffect(() => {
        scroll(yPosition)
    },[yPosition, scroll])

    const [countLoad, setCountLoad] = useState(0)
    const [posts, setPosts] = useState<arrPosts | false>()
    const [isLoader, setIsLoader] = useState(false)
    const [isLoadData, setIsLoadData] = useState(false)
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const afterKey = useSelector<any, string>(state => state.getDataArr.after)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch: any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    const morePosts = () => {
        dispatch(getArrPosts(localStorage.token, categoriesLoad,afterKey))
        setIsLoader(true)
        windowYPositionStore.savePosition(0)
    }
    useEffect(() => {
        setPosts(arrPosts)
        // setIsLoadData(false)
        setIsLoader(false)
    },[arrPosts])
    useEffect(() => {
        setPosts(startArrPosts)
        // setIsLoader(false)
        // setIsLoadData(false)
    },[startArrPosts])
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
                !isLoader && <button onClick={morePosts}>More posts</button>
            }
            {
                isLoader && <Preloader width={'70px'} height={'70px'}/>
            }
            <div ref={bottomOfList}/>
            {
                !posts && localStorage.token !== '' &&
                <div className={styles.loader}/>
            }
        </>
    );
})