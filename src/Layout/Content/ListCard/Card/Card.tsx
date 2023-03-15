import React from 'react';
import styles from './card.module.css';

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.imageBlock}>

            </div>
            <div className={styles.descrBlock}>
                <div className={styles.text}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad animi commodi cupiditate doloribus explicabo incidunt itaque minus natus odio quam qui quod sint suscipit, unde, voluptas voluptatum! Autem, corporis!
                    </p>
                </div>
                <div className={styles.informationBlock}>

                </div>
                <div className={styles.btnBlock}>

                </div>
            </div>
        </li>
    );
}
