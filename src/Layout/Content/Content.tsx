import React, {useEffect, useState} from 'react';
import styles from './content.module.css';
import {ListCard} from "./ListCard";
import {useDispatch, useSelector} from "react-redux";
import {getArrPosts} from "../../store/getArrPostsReducer";
import {observer} from "mobx-react-lite";
import dataTargetCardStore from "../../storeMobx/dataTargetCardStore";
import changeTargetCardStore from "../../storeMobx/changeTargetCardStore";
import {EntryCard} from "./EntryCard";
import targetCategoriesStore from "../../storeMobx/targetCategoriesStore";
import {arrPosts} from "../../../types/postsType";
import listRedditStore from "../../storeMobx/listRedditStore";
import isSearchBlockStore from "../../storeMobx/isSearchBlockStore";
import {SearchBlock} from "./SearchBlock";
import imgRobot from '../../assets/img/reddit.png'
import {Navigate, Route, Routes} from "react-router";

export const Content = observer(() => {
    const dataCard = dataTargetCardStore.cardData
    const isCard = changeTargetCardStore.target
    const dispatch: any = useDispatch()
    const isSearchOpen = isSearchBlockStore.isOpen
    const categoriesLoad = targetCategoriesStore.targetCategories
    const typeReddit = listRedditStore.typeList
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const token = useSelector<any, any>(state => state.getTokenReducer.token)
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        dispatch(getArrPosts(token, categoriesLoad, typeReddit))
    }, [categoriesLoad, typeReddit, dispatch, token])
    useEffect(() => {
        if (!token || token === '' || token === 'undefined') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [token])
    return (
        <div className={styles.contentBlock}>

            <Routes>
                <Route path={'/auth'} element={<Navigate to={'/posts'}/>}/>
                <Route path={'/'} element={<Navigate to={'/not-auth'}/>}/>
                {
                    // isCard && !isSearchOpen && !isAuth &&
                    <Route path={'/card'} element={<EntryCard cardData={dataCard}/>} />
                }
                {
                    // !isCard && !isSearchOpen && !isAuth &&
                    <Route path={'/posts'} element={<ListCard startArrPosts={arrPosts}/>}/>
                }
                {
                    // isSearchOpen && !isCard && !isAuth &&
                    <Route path={'/search'} element={<SearchBlock/>}/>
                }
                {
                    // isAuth && !isSearchOpen && !isCard &&
                    // <Route path={'/posts' } element={<Navigate to={'/not-auth'}/>}/>
                }
                <Route path={'/not-auth'} element={
                    <div style={{position: "relative"}}>
                        <span className={styles.authText}>Для просмотра постов необходимо пройти авторизацию</span>
                        <img className={styles.img} alt={'Робот'} src={imgRobot}/>
                    </div>
                }/>
            </Routes>


        </div>
    );
}
)