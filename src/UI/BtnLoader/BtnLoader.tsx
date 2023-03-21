import React from 'react';
import styles from './btnloader.module.css';
import {Preloader} from "../Preloader";

interface IBtnLoader {
  isLoader:boolean,
  onClick: () => void,
}

export function BtnLoader({isLoader, onClick}:IBtnLoader) {
  return (
      <button className={styles.btnOpenPosts} disabled={isLoader} onClick={onClick}>
        {
            !isLoader && 'Показать еще'
        }
        {
            isLoader && <Preloader width={'40px'} height={'40px'} position={'relative'} bottom={'0'}/>
        }
      </button>
  );
}
