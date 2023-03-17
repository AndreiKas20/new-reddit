import React from 'react';
import styles from './dateandauthor.module.css';

interface IDateAuthor {
  date: string,
  author: string
}

export function DateAndAuthor({date, author}: IDateAuthor) {
  return (
      <div className={styles.informationBlock}>
        <span className={styles.datePublic}>{date} назад от</span>
        <span className={styles.authorName}>{author}</span>
      </div>
  );
}
