import {useEffect, useState} from "react";
import axios from "axios";
import {posts} from "../../types/postsType";

export const useGetPosts = (token: string) => {
    const [postData, setPostData] = useState<posts>()
    useEffect(() => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/r/popular/top', {
            headers: {Authorization: `bearer ${token}`}
        })
            .then((resp) => {
                const data = resp.data;
                setPostData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return postData
}