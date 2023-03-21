import React from 'react';
import styles from './iconsearch.module.css';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconSearch({width, height, isActive}: InterfaceIcon) {
  return (
      <svg style={{width: width, height: height}} width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_3_845)">
          <path opacity="0.54" fillRule="evenodd" clipRule="evenodd" d="M16.502 14H15.708L15.432 13.726C16.407 12.589 17 11.115 17 9.5C17 5.91 14.09 3 10.5 3C6.91 3 4 5.91 4 9.5C4 13.09 6.91 16 10.5 16C12.115 16 13.588 15.408 14.725 14.434L15.001 14.708V15.5L19.999 20.491L21.49 19L16.502 14ZM10.5 14C8.014 14 6 11.986 6 9.5C6 7.015 8.014 5 10.5 5C12.985 5 15 7.015 15 9.5C15 11.986 12.985 14 10.5 14Z" fill="black"/>
        </g>
        <defs>
          <filter id="filter0_d_3_845" x="0" y="3" width="25.49" height="25.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_845"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_845" result="shape"/>
          </filter>
        </defs>
      </svg>

  );
}
