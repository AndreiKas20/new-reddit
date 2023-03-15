import React, {useEffect, useState} from 'react';
import styles from './listcard.module.css';
import {Card} from "./Card";
import {useGetToken} from "../../../hooks/useGetToken";
import {useGetDataUser} from "../../../hooks/useGetDataUser";


export default React.memo(function ListCard() {
    const [token, setToken] = useState('')
    const useToken = useGetToken()
    const dataUser = useGetDataUser(token)
    useEffect(() => {
      console.log(useToken, dataUser)
        setToken(useToken)
    }, [useToken, dataUser])

    const getCard = () => {
    }
    return (
        <ul className={styles.list}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            v                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            v                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
v                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
v                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
vv                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
v
            v                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
v
            v























            <button onClick={getCard}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse et ex magnam nisi possimus quae similique tempora temporibus voluptatem? Illum inventore ipsa, iste minus nemo quidem quisquam temporibus! Fugit!
                Clickkkkk</button>
            <Card/>
        </ul>
    );
})
