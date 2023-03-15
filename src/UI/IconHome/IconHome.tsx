import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconHome({width, height,isActive} : InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="black" fillOpacity="0.54"/>
        </svg>
    );
}
