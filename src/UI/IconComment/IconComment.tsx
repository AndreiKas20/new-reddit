import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconComment({width, height, isActive}: InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M21.99 4C21.99 2.9 21.1 2 20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H18L22 22L21.99 4Z"
                  fill="black" fillOpacity="0.38"/>
        </svg>

    );
}
