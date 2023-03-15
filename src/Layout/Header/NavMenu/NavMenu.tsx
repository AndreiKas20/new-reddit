import React from 'react';
import styles from './navmenu.module.css';
import {ButtonHeader} from "../../../UI/ButtonHeader";

export function NavMenu() {
    return (
        <nav className={styles.navBlock}>
            <ul className={styles.list}>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'ГОРЯЧИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'НОВЫЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'РАСТУЩИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'НАШУМЕВШИЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'ПОПУЛЯРНЫЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'ПОЗОЛОЧЕНЫЕ'}/>
                </li>
                <li className={styles.itemBtn}>
                    <ButtonHeader text={'ПРОМО'}/>
                </li>
            </ul>
        </nav>
    );
}
