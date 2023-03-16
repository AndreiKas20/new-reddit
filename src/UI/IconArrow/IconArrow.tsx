import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconArrow({width, height, isActive}: InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="black" fillOpacity="0.38"/>
        </svg>

    );
}
