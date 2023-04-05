import React, {useEffect} from 'react';
import {Panel} from "@/components/Panel/Panel";
import { ListCard } from '@/components/ListCard';
import {useDispatch, useSelector} from "react-redux";
import {arrPosts} from "../../types/postsType";
import {asyncGetTokenAction} from "@/store/getTokenReducer";

const Posts = () => {
    const arrPosts = useSelector<any, arrPosts>(state => state.getDataArr.arr)
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(asyncGetTokenAction())
        if (localStorage.token === '' || localStorage.token === 'undefined' || !localStorage.token) {
            dispatch(asyncGetTokenAction())
        } else {
            dispatch(asyncGetTokenAction())
        }
    }, [])
    return (
       <Panel>
            <ListCard startArrPosts={arrPosts}/>
       </Panel>
    );
};

export default Posts;
