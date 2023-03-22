import {useEffect, useState} from "react";
import axios from "axios";

export const useGetToken = () => {
    const [token, setToken] = useState(localStorage.token)
    const entryPoint = window.location.search.replace(/\?state=random_string&code=/, '')
    const isEntry = /\?state=random_string&code=/.test(window.location.search)
    const location = window.location.href.split('?')[0]
    console.log('token entry')
    useEffect(() => {
        if (entryPoint === 'undefined' || entryPoint === '' || !isEntry || token !== '')  return
        console.log('goo enrty', entryPoint)
            axios.post(
                'https://www.reddit.com/api/v1/access_token',
                `grant_type=authorization_code&code=${entryPoint}&redirect_uri=${location}`,
                {
                    auth: {username: 'H9n1t1eqP6naYNRak5gd3w', password: 'ivPDAqCyAVEAR0IlhewMMChNOCON5w'},
                    headers: {'Content-type': 'application/x-www-form-urlencoded'}
                }
            ).then(({data}) => {
                console.log('token',data['access_token'])
                setToken(data['access_token'])
            }).catch(console.log)
    },[entryPoint, isEntry, token])
    return token
}