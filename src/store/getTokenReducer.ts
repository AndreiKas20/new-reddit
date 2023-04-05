import {Reducer} from "redux";
import axios from "axios";


const GET_TOKEN = 'GET_TOKEN'
const CLEAR_TOKEN = 'CLEAR_TOKEN'

export const getTokenReducer: Reducer = (state = {token: ''}, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {...state, token: action.payload}
        case CLEAR_TOKEN:
            return {...state, token: ''}
        default:
            return state
    }
}

export const getTokenAction = (payload: string) => ({type: GET_TOKEN, payload})
export const clearTokenAction = () => ({type: CLEAR_TOKEN})


export const asyncGetTokenAction = () => {
    return (dispatch: any) => {
        const entryPoint = window.location.search.replace(/\?state=random_string&code=/, '')
        const isEntry = /\?state=random_string&code=/.test(window.location.search)
        const location = window.location.href.split('?')[0]
        if (entryPoint === 'undefined' || entryPoint === '' || !isEntry) return
        axios.post(
            'https://www.reddit.com/api/v1/access_token',
            `grant_type=authorization_code&code=${entryPoint}&redirect_uri=${location}`,
            {
                // auth: {username: 'H9n1t1eqP6naYNRak5gd3w', password: 'ivPDAqCyAVEAR0IlhewMMChNOCON5w'},
                auth: {username: 'gsPrKrOtfMuSQTh4N26WjQ', password: 'StLIloRG0QPN12ld1CbNJ5VD1ystTQ'},  //<--- local
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(({data}) => {
            dispatch(getTokenAction(data['access_token']))
                console.log('token get')
            localStorage.token = data['access_token']
        }).catch(console.log)
    }
}