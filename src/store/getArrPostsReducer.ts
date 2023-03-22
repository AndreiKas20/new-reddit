import {Reducer} from "redux";
import axios from "axios";
import {posts} from "../../types/postsType";

export const arrCard = false
const arr = {arr: []}

export const GET_ARR = 'GET_ARR'
export const CLEAR_ARR = 'CLEAR_ARR'
export const CLEAR_KEY = 'CLEAR_KEY'
export const getDataArr: Reducer = (state = arr, action) => {
    switch (action.type) {
        case GET_ARR:
            return {...state, arr: [...state.arr, ...action.payload.data.children], after: action.payload.data.after}
        case CLEAR_ARR:
            return {...state, arr: action.payload}
        case CLEAR_KEY:
            return {...state, after: action.payload}
        default:
            return state
    }
}

const getArrAction = (payload: posts) => ({type: GET_ARR, payload})
export const clearArrAction = (payload: []) => ({type: CLEAR_ARR, payload})
export const clearKeyAction = (payload: string) => ({type: CLEAR_KEY, payload})

export const getArrPosts = (token: string, link: string, typeReddit: string, nextAfter?: string) => {
    return (dispatch: any) => {
        if (token === 'undefined' || token === '' || !token) return
        axios.get(`https://oauth.reddit.com/${typeReddit}${link}`, {
            headers: {Authorization: `bearer ${token}`},
            params: {
                after: nextAfter,
            }
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