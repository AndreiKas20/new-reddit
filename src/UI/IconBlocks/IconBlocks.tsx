import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconBlocks({width, height, isActive}: InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path style={isActive?{fill: 'var(--orange)', fillOpacity: '1'} : {} } d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill="black"
                  fillOpacity="0.54"/>
        </svg>
    );
}
