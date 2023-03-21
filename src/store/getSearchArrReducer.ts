import {Reducer} from "redux";
import axios from "axios";

const GET_DATA_SEARCH = 'GET_DATA_SEARCH'
const CLEAR_DATA_SEARCH = 'CLEAR_DATA_SEARCH'
const CLEAR_KEY_SEARCH = 'CLEAR_KEY_SEARCH'
export const getSearchArrReducer: Reducer = (state = {data: []}, action) => {
    switch (action.type) {
        case GET_DATA_SEARCH:
            return {...state, data: [...state.data,...action.payload.data.children], after: action.payload.data.after}
        case CLEAR_KEY_SEARCH:
            return {...state, after: ''}
        case CLEAR_DATA_SEARCH:
            return {...state, data: []}
        default:
            return state
    }
}

const getSearchAction = (payload: any) => ({type:GET_DATA_SEARCH, payload})
export const clearSearchAction = () => ({type: CLEAR_DATA_SEARCH})
export const clearKeySearchAction = () => ({type: CLEAR_KEY_SEARCH})

export const asyncGetSearchAction = (token: string, search: string, after?:string) => {
    return (dispatch: any) => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/subreddits/search', {
            headers: {Authorization: `bearer ${token}`, },
            params: {
                after: after,
                limit: 15,
                q: search,
            }
        })
            .then((resp) => {
                const data = resp.data;
                console.log('data', data)
                dispatch(getSearchAction(data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
