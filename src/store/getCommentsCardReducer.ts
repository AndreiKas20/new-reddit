import {Reducer} from "redux";
import axios from "axios";


const defState: {} = {comments: []}

const GET_COMMENTS = 'GET_COMMENTS'
const CLEAR_COMMENTS = 'CLEAR_COMMENTS'

export const getCommentsCardReducer: Reducer = (state = defState, action) => {
        switch (action.type) {
            case GET_COMMENTS:
                return {...state, comments: action.payload}
            case CLEAR_COMMENTS:
                return {...state, comments: {}}
            default:
                return state
        }
}

const getCommentsDataAction = (payload: any) => ({type: GET_COMMENTS, payload})
export const clearCommentsDataAction = () => ({type: CLEAR_COMMENTS})


export const asyncGetComments = (token: string, postId: string, sort: string, limit:number) => {
    return (dispatch: any) => {
        if (token === 'undefined' || token === '' || !token) return
        axios.get(`https://oauth.reddit.com/comments/${postId}`, {
            headers: {Authorization: `bearer ${token}`},
            params: {
                sort: sort,
                limit: limit,
            }
        })
            .then((resp) => {
                const data = resp.data;
                dispatch(getCommentsDataAction(data[1].data.children))
            })
            .catch(console.log)
    }
}