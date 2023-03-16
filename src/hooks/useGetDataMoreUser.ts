import {useEffect, useState} from "react";
import axios from "axios";

export const useGetDataMoreUser = (token: string) => {
    const [useData, setUseData] = useState()
    useEffect(() => {
        console.log(token)
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/api/v1/collections/collection', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const data = resp.data;
                console.log(data)
                setUseData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return useData
}