import React from 'react';
import styles from './buttonheader.module.css';

interface IButtonHeader {
  text: string
}

export function ButtonHeader({text}: IButtonHeader) {
  return (
          <button className={styles.btn}>{text}</button>
  );
}
