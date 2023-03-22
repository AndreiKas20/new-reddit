import {useEffect, useState} from "react";
import axios from "axios";

export const useGetToken = () => {
    const [token, setToken] = useState(localStorage.token)
    const entryPoint = window.location.search.replace(/\?state=random_string&code=/, '')
    const isEntry = /\?state=random_string&code=/.test(window.location.search)
    const location = window.location.href.split('?')[0]
    useEffect(() => {
        if (entryPoint === 'undefined' || entryPoint === '' || !isEntry || (token !== '' && token !== 'undefined'))  return
            axios.post(
                'https://www.reddit.com/api/v1/access_token',
                `grant_type=authorization_code&code=${entryPoint}&redirect_uri=${location}`,
                {
                    auth: {username: 'gsPrKrOtfMuSQTh4N26WjQ', password: 'StLIloRG0QPN12ld1CbNJ5VD1ystTQ'},
                    headers: {'Content-type': 'application/x-www-form-urlencoded'}
                }
            ).then(({data}) => {
                setToken(data['access_token'])
            }).catch(console.log)
    },[entryPoint, isEntry, token])
    return token
}