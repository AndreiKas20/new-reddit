import {Reducer} from "redux";
import axios from "axios";
import {posts} from "../../types/postsType";

export const arrCard = false
const arr = {arr: arrCard}

export const GET_ARR = 'GET_ARR'
export const CLEAR_ARR = 'CLEAR_ARR'
export const getDataArr: Reducer = (state = arr, action) => {
    switch (action.type) {
        case GET_ARR:
            return {...state, arr: action.payload}
        case CLEAR_ARR:
            return {...state, arr: action.payload}
        default:
            return state
    }
}

export const getArrAction = (payload: posts) => ({type: GET_ARR, payload})
export const clearArrAction = (payload: boolean) => ({type: CLEAR_ARR, payload})


export const getArrPosts = (token: string, link: string) => {
    return (dispatch: any) => {
        if (token === 'undefined' || token === '') return
        axios.get(`https://oauth.reddit.com/r/popular/${link}`, {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const data: posts = resp.data;
                dispatch(getArrAction(data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}