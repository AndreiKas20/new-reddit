import {useEffect, useState} from "react";
import axios from "axios";
import {posts} from "../../types/postsType";

export const useGetPosts = (token: string) => {
    const [postData, setPostData] = useState<posts>()
    useEffect(() => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/subreddits/mine', {
            headers: {Authorization: `bearer ${token}`, },
            params: {
                limit: 15,
            }
        })
            .then((resp) => {
                const data = resp.data;
                console.log('data', data)
                setPostData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return postData
}