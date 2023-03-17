import React from 'react';
import styles from './buttoncard.module.css';
import {iconNames} from "../../../types/iconsName";
import {Icon} from "../Icon";

interface IBtn {
    typeIcon: iconNames,
    widthIcon: string,
    heightIcon: string,
    isActiveIcon: boolean,
    onClick?: () => void
}

export function ButtonCard({typeIcon, widthIcon, heightIcon, isActiveIcon, onClick}: IBtn) {
    return (
        <button onClick={onClick} className={styles.btn}><Icon nameIcon={typeIcon} height={heightIcon} width={widthIcon}
                                             isActive={isActiveIcon}/></button>
    );
}
