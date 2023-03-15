import React from 'react';
import styles from './buttonleftmenu.module.css';

interface IButton {
  text: string
}

export function ButtonLeftMenu({text}:IButton) {
  return (
        <button className={styles.btn}>{text}</button>
  );
}
