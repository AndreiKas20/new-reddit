import React from 'react';
import styles from './searchmenu.module.css';
import {Icon} from "../../../UI/Icon";
import {ButtonLeftMenu} from "../../../UI/ButtonLeftMenu";

export function SearchMenu() {
  return (
      <nav className={styles.navCategories}>
          <input placeholder={'Поиск'} className={styles.input}/>
        <ul>
          <li className={styles.item}>
            <div className={styles.positionIcon}>
                <Icon width={'24px'} height={'24px'} isActive={false} nameIcon={'Home'}/>
            </div>
              <ButtonLeftMenu text={'Домой'}/>
          </li>
            <li className={styles.item}>
                <div className={styles.positionIcon}>
                    <Icon width={'24px'} height={'24px'} isActive={false} nameIcon={'Blocks'}/>
                </div>
                <ButtonLeftMenu text={'Мои подреддиты'}/>
            </li>
        </ul>
      </nav>
  );
}
