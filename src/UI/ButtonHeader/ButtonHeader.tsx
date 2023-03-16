import React from 'react';
import styles from './buttonheader.module.css';

interface IButtonHeader {
  text: string,
  onClick: () => void
}

export function ButtonHeader({text, onClick}: IButtonHeader) {
  return (
          <button onClick={onClick} className={styles.btn}>{text}</button>
  );
}
