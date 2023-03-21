import React from 'react';
import styles from './buttonleftmenu.module.css';

interface IButton {
  text: string
  onClick?: () => void
  isActive?: boolean
}

export function ButtonLeftMenu({text, onClick, isActive}:IButton) {
  return (
        <button disabled={isActive} style={{color: isActive? 'var(--orange)': 'var(--black17)'}} onClick={onClick} className={styles.btn}>{text}</button>
  );
}
