import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconSetting({width, height, isActive}: InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 0.999997 7.1 0.599997 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z"
                fill="black" fillOpacity="0.54"/>
        </svg>
    );
}
