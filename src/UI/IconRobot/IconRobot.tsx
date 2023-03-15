import React from 'react';
import {InterfaceIcon} from "../../../types/iconsName";

export function IconRobot({width, height, isActive}: InterfaceIcon) {
    return (
        <svg style={{width: width, height: height}} width="24" height="20" viewBox="0 0 24 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.95 20C6.03508 20 1.22325 16.8077 1.22325 12.8838C1.22325 12.6127 1.24612 12.3443 1.29096 12.0808C0.896321 11.8385 0.570551 11.4999 0.3446 11.0972C0.11865 10.6944 2.5715e-05 10.2409 4.10527e-08 9.77975C0.000830543 9.06338 0.287373 8.37659 0.796779 7.87C1.30618 7.36341 1.99687 7.07839 2.71733 7.07744C3.3868 7.07744 4.02488 7.32088 4.51858 7.75603C6.37901 6.56873 8.88155 5.82148 11.6424 5.76976L13.4548 0.26974L13.8503 0.362477L13.8597 0.364706L18.0842 1.3536C18.2565 0.952396 18.5435 0.61029 18.9095 0.36968C19.2755 0.12907 19.7045 0.000534104 20.1432 -1.46161e-09C20.7365 0.000708166 21.3053 0.235394 21.7248 0.652568C22.1443 1.06974 22.3802 1.63533 22.3808 2.22524C22.3801 2.81508 22.1441 3.38056 21.7246 3.79763C21.3052 4.21471 20.7365 4.44933 20.1432 4.45004C19.5505 4.44945 18.9821 4.21523 18.5627 3.79871C18.1433 3.38218 17.907 2.81733 17.9057 2.22792L14.0512 1.32552L12.5836 5.77957C15.244 5.88256 17.6465 6.63204 19.4401 7.79348C19.9412 7.33215 20.5993 7.07649 21.2822 7.07789C22.0027 7.07872 22.6935 7.36369 23.203 7.87029C23.7125 8.37689 23.9991 9.06375 24 9.7802C24.0022 10.2595 23.8752 10.7306 23.6323 11.1445C23.3895 11.5585 23.0395 11.9003 22.6189 12.1343C22.6579 12.3808 22.6781 12.6305 22.6781 12.8838C22.6772 16.8077 17.8649 20 11.95 20ZM2.20974 12.0402C2.15012 12.3175 2.12006 12.6002 2.12006 12.8838C2.12006 16.3164 6.52967 19.1083 11.95 19.1083C17.3703 19.1083 21.7799 16.3159 21.7799 12.8838C21.7799 12.6109 21.7521 12.3421 21.6979 12.0781C21.6686 12.0176 21.6534 11.9513 21.6535 11.8842C21.3535 10.7129 20.5351 9.64956 19.3532 8.79263C19.2779 8.76548 19.2115 8.71866 19.1608 8.65709C17.364 7.42877 14.7969 6.65879 11.95 6.65879C9.13176 6.65879 6.58662 7.41362 4.79255 8.62098C4.74361 8.67629 4.68191 8.71897 4.61274 8.74537C3.40519 9.60275 2.56577 10.6732 2.25413 11.8547C2.25319 11.9137 2.24038 11.9719 2.21646 12.0259C2.21422 12.0309 2.21243 12.0358 2.20974 12.0402ZM20.1894 8.33118C21.2293 9.15823 21.9925 10.1431 22.3826 11.2239C22.6073 11.0554 22.7893 10.8372 22.9143 10.5865C23.0392 10.3358 23.1036 10.0595 23.1023 9.77975C23.1018 9.29969 22.9098 8.83943 22.5684 8.49998C22.227 8.16053 21.7641 7.96962 21.2813 7.96915C20.8874 7.9686 20.5041 8.09569 20.1894 8.33118ZM2.71733 7.96915C2.2346 7.96974 1.77182 8.1607 1.43053 8.50014C1.08923 8.83958 0.897284 9.29977 0.89681 9.77975C0.89681 10.3206 1.13895 10.823 1.54072 11.1619C1.94383 10.0896 2.71464 9.11276 3.75853 8.29373C3.45293 8.08238 3.08959 7.96912 2.71733 7.96915ZM20.1428 0.891257C19.4038 0.891257 18.8021 1.48959 18.8021 2.2248C18.8021 2.96001 19.4038 3.55789 20.1428 3.55789C20.8818 3.55789 21.4835 2.96001 21.4835 2.2248C21.4835 1.48959 20.8822 0.891257 20.1428 0.891257ZM11.9989 17.4622C10.203 17.4622 8.93761 17.0721 8.13093 16.2696C8.04685 16.1859 7.99963 16.0725 7.99968 15.9542C7.99972 15.8359 8.04701 15.7225 8.13115 15.6389C8.21529 15.5553 8.32938 15.5084 8.44833 15.5084C8.56728 15.5084 8.68134 15.5555 8.76542 15.6391C9.39543 16.2655 10.4528 16.5705 11.9989 16.5705C13.5445 16.5705 14.6028 16.2655 15.2337 15.6391C15.2753 15.5978 15.3247 15.565 15.3791 15.5426C15.4335 15.5202 15.4918 15.5087 15.5506 15.5087C15.6095 15.5087 15.6677 15.5203 15.7221 15.5427C15.7765 15.5651 15.8259 15.598 15.8675 15.6393C15.9091 15.6807 15.9421 15.7299 15.9646 15.784C15.9871 15.838 15.9987 15.896 15.9986 15.9545C15.9986 16.013 15.987 16.071 15.9645 16.125C15.9419 16.1791 15.9089 16.2282 15.8673 16.2696C15.0597 17.0721 13.7947 17.4622 11.9989 17.4622Z"
                fill="black" fillOpacity="0.54"/>
            <path
                d="M15.635 9.91798C14.7211 9.91798 13.9539 10.679 13.9539 11.5877C13.9539 12.4959 14.7211 13.232 15.635 13.232C16.5488 13.232 17.2887 12.4959 17.2887 11.5877C17.2887 10.679 16.5484 9.91798 15.635 9.91798ZM8.38966 9.91798C7.47671 9.91798 6.71039 10.6799 6.71039 11.5877C6.71039 12.4954 7.47626 13.232 8.38966 13.232C9.30307 13.232 10.0434 12.4954 10.0434 11.5877C10.0434 10.6799 9.30262 9.91798 8.38966 9.91798Z"
                fill="black" fillOpacity="0.54"/>
        </svg>
    );
}
