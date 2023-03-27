import React, {useEffect, useState} from 'react';
import styles from './iconredditandaccount.module.css';
import {Icon} from "../../../UI/Icon";
import {userDataType} from "../../../../types/userDataType";
import {useDispatch, useSelector} from "react-redux";
import {clearUsersAction, defaultUser} from "../../../store/getDataUserReducer";
import {clearArrAction} from "../../../store/getArrPostsReducer";
import {clearTokenAction} from "../../../store/getTokenReducer";
import {Link} from "react-router-dom";

export function IconRedditAndAccount() {
    const dataUserReducer = useSelector<any, userDataType>(state => state.getDataUserReducer.user)
    const [data, setData] = useState<userDataType>()
    const dispatch: any = useDispatch()
    const quit = () => {
        localStorage.token = ''
        dispatch(clearUsersAction(defaultUser))
        dispatch(clearArrAction([]))
        dispatch(clearTokenAction())
    }
    useEffect(() => {
        setData(dataUserReducer)
    }, [dataUserReducer])
    return (
        <div className={styles.blockLink}>
            <Link to={'/posts'} className={styles.iconBlock}>
                <div className={styles.positionIcon}>
                    <Icon width={'36px'} height={'36px'} isActive={false} nameIcon={"Reddit"}/>
                </div>
                <Icon width={'66px'} height={'21px'} isActive={false} nameIcon={"RedditText"}/>
            </Link>
            <div className={styles.linkBlock}>
                <img alt={'Аватар автора'} style={data?.verified ? {width: '40px'} : {width: '60px'}}
                     src={data?.icon_img.split('?')[0]} className={styles.img}/>
                <a className={styles.name}
                   // href="https://www.reddit.com/api/v1/authorize?client_id=H9n1t1eqP6naYNRak5gd3w&response_type=code&state=random_string&redirect_uri=https://new-reddit-theta.vercel.app/auth&duration=permanent&scope=read submit identity">
                    href="https://www.reddit.com/api/v1/authorize?client_id=gsPrKrOtfMuSQTh4N26WjQ&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
                    {data?.name}
                </a>
                {
                    data?.verified &&
                    <Link to={'/not-auth'} onClick={quit} className={styles.btn}>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                            <title>entrance_line</title>
                            <g id="页面-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="System" transform="translate(-672.000000, -96.000000)" fillRule="nonzero">
                                    <g id="entrance_line" transform="translate(672.000000, 96.000000)">
                                        <path
                                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                            id="MingCute" fillRule="nonzero">

                                        </path>
                                        <path
                                            d="M12,3 C12.5523,3 13,3.44772 13,4 C13,4.51283143 12.613973,4.93550653 12.1166239,4.9932722 L12,5 L7,5 C6.48716857,5 6.06449347,5.38604429 6.0067278,5.88337975 L6,6 L6,18 C6,18.51285 6.38604429,18.9355092 6.88337975,18.9932725 L7,19 L11.5,19 C12.0523,19 12.5,19.4477 12.5,20 C12.5,20.51285 12.113973,20.9355092 11.6166239,20.9932725 L11.5,21 L7,21 C5.40232321,21 4.09633941,19.7511226 4.00509271,18.1762773 L4,18 L4,6 C4,4.40232321 5.24892392,3.09633941 6.82372764,3.00509271 L7,3 L12,3 Z M17.707,8.46447 L20.5355,11.2929 C20.926,11.6834 20.926,12.3166 20.5355,12.7071 L17.707,15.5355 C17.3165,15.9261 16.6834,15.9261 16.2928,15.5355 C15.9023,15.145 15.9023,14.5118 16.2928,14.1213 L17.4142,13 L12,13 C11.4477,13 11,12.5523 11,12 C11,11.4477 11.4477,11 12,11 L17.4142,11 L16.2928,9.87868 C15.9023,9.48816 15.9023,8.85499 16.2928,8.46447 C16.6834,8.07394 17.3165,8.07394 17.707,8.46447 Z"
                                            id="形状" fill="#09244B">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </Link>
                }
            </div>
        </div>
    );
}
