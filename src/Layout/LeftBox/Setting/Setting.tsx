import React from 'react';
import styles from './setting.module.css';
import {Icon} from "../../../UI/Icon";
import {ButtonLeftMenu} from "../../../UI/ButtonLeftMenu";

export function Setting() {
    return (
        <nav className={styles.settingBlock}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.positionIcon}>
                        <Icon nameIcon={"Robot"} width={'24px'} height={'20px'} isActive={false}/>
                    </div>
                    <ButtonLeftMenu text={'О нас'}/>
                </li>
                <li className={styles.item}>
                    <div className={styles.positionIcon}>
                        <Icon nameIcon={"Question"} width={'24px'} height={'24px'} isActive={false}/>
                    </div>
                    <ButtonLeftMenu text={'Помощь'}/>
                </li>
                <li className={styles.item}>
                    <div className={styles.positionIcon}>
                        <Icon nameIcon={"Setting"} width={'24px'} height={'24px'} isActive={false}/>
                    </div>
                    <ButtonLeftMenu text={'Настройки'}/>
                </li>
            </ul>
        </nav>
    );
}
