import {useEffect, useState} from "react";
import axios from "axios";

export const useGetDataUser = (token: string) => {
    const [dataUser, setDataUser] = useState({})
    useEffect(() => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/api/v1/me', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const userData = resp.data;
                setDataUser(userData)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return dataUser
}