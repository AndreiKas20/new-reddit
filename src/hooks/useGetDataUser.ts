import {useEffect, useState} from "react";
import axios from "axios";
import {userDataType} from "../../types/userDataType";

export const useGetDataUser = (token: string) => {
    const [dataUser, setDataUser] = useState<userDataType>()
    useEffect(() => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/api/v1/me/prefs', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const userData : userDataType = resp.data;
                setDataUser(userData)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return dataUser
}