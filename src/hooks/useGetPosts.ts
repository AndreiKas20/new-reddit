import {useEffect, useState} from "react";
import axios from "axios";
import {posts} from "../../types/postsType";

export const useGetPosts = (token: string) => {
    const [postData, setPostData] = useState<posts>()
    useEffect(() => {
        if (token === 'undefined' || token === '') return
        axios.get('https://oauth.reddit.com/subreddits/search', {
            headers: {Authorization: `bearer ${token}`, },
            params: {
                limit: 15,
                q: 'game'
            }
        })
            .then((resp) => {
                const data = resp.data;
                setPostData(data)
                console.log('scope',data)
            })
            .catch((error) => {
                console.log(error)
            })
    },[token])
    return postData
}