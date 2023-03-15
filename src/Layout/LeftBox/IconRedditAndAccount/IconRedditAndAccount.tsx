import React, {useEffect, useState} from 'react';
import styles from './iconredditandaccount.module.css';
import {Icon} from "../../../UI/Icon";
import image from '../../../assets/img/anon.jpg'
import {useGetDataUser} from "../../../hooks/useGetDataUser";
import {userDataType} from "../../../../types/userDataType";

export function  IconRedditAndAccount() {
    const dataUser = useGetDataUser(localStorage.token)
    const [data,setData] = useState<userDataType>()
    const quit = () => {
        localStorage.token = ''
        setData(undefined)
    }
    useEffect(() => {
        setData(dataUser)
        console.log(dataUser)
    },[dataUser])
  return (
      <div className={styles.blockLink}>
         <div className={styles.iconBlock}>
            <div className={styles.positionIcon}>
                <Icon width={'36px'} height={'36px'} isActive={false} nameIcon={"Reddit"}/>
            </div>
             <Icon width={'66px'} height={'21px'} isActive={false} nameIcon={"RedditText"}/>
         </div>
       <div className={styles.linkBlock}>
           <img alt={'Аватар автора'} style={data?{width: '40px'}: {width: '60px'}} src={data? data.icon_img:image} className={styles.img}/>
           <a className={styles.name} href="https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
               {data? data.name: "Аноним"}
           </a>
           <button onClick={quit} className={styles.btn}>Q</button>
       </div>
      </div>
  );
}
