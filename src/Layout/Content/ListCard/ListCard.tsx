import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {arrPosts, posts} from "../../../../types/postsType";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../../store/getArrPostsReducer";
import targetCategoriesStore from "../../../storeMobx/targetCategoriesStore";
import {observer} from "mobx-react-lite";
import windowYPositionStore from "../../../storeMobx/windowYPositionStore";

export const ListCard = observer(() => {
    const yPosition = windowYPositionStore.yPosition
    const scroll = (yPos: number) => {
        if (yPos === 0) return
      return   window.scrollTo(0,yPos - 300)
    }
    useEffect(() => {
        scroll(yPosition)
    },[yPosition, scroll])
    const [posts, setPosts] = useState<arrPosts | false>()
    const [isLoader, setIsLoader] = useState(false)
    const [isLoadData, setIsLoadData] = useState(false)
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const afterKey = useSelector<any, string>(state => state.getDataArr.after)
    const bottomOfList = useRef<HTMLDivElement>(null)
    const dispatch: any = useDispatch()
    const categoriesLoad = targetCategoriesStore.targetCategories
    // const afterKey = arrPosts ? arrPosts.data.after : ''
    useEffect(() => {
        setPosts(arrPosts)
        setIsLoadData(false)
    },[arrPosts])
    useEffect(() => {
        setIsLoadData(false)
    },[categoriesLoad])
    useEffect(() => {
        const current = bottomOfList.current
        const observer = new IntersectionObserver((entries) => {
            console.log('load data',isLoadData)
                if (isLoadData) return
            console.log('enter load')
                if (localStorage.token === '' || localStorage.token === 'undefined') return
            console.log('enter token')
                if (entries[0].isIntersecting) {
                    console.log('in to dispatch')
                    setIsLoadData(true)
                    setIsLoader(true)
                    windowYPositionStore.savePosition(0)
                    dispatch(getArrPosts(localStorage.token, categoriesLoad,afterKey))
                }
            },
            {
                rootMargin: '20px'
            },
        );
        if (current) {
            observer.observe(current)
        }
        return () => {
            if (current) {
                observer.unobserve(current)
            }
        }
    }, [afterKey, categoriesLoad,dispatch,isLoadData])

    return (
        <>
            <button>SCROLL</button>
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