import React, {useEffect, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {asyncGetTokenAction, getTokenAction} from "@/store/getTokenReducer";

const Auth = () => {
    const router = useRouter()
    const dispatch: any = useDispatch()
    useLayoutEffect(() => {
        if (localStorage.token === '' || localStorage.token === 'undefined' || !localStorage.token) {
            dispatch(asyncGetTokenAction())
        } else {
            dispatch(getTokenAction(localStorage.token))
        }
    }, [])
    useEffect(() => {
        router.push('Posts',undefined,{shallow: true})
    }, [])
    return (
        <></>
    );
};

export default Auth;
