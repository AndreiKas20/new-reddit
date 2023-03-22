import React, {useCallback, useEffect, useState} from 'react';
import styles from './searchmenu.module.css';
import {Icon} from "../../../UI/Icon";
import {ButtonLeftMenu} from "../../../UI/ButtonLeftMenu";
import {observer} from "mobx-react-lite";
import listRedditStore from "../../../storeMobx/listRedditStore";
import {clearArrAction} from "../../../store/getArrPostsReducer";
import {useDispatch} from "react-redux";
import {asyncGetSearchAction, clearSearchAction} from "../../../store/getSearchArrReducer";
import isSearchBlockStore from "../../../storeMobx/isSearchBlockStore";
import searchFieldStore from "../../../storeMobx/searchFieldStore";
import {Link} from "react-router-dom";
import changeTargetCardStore from "../../../storeMobx/changeTargetCardStore";

export const SearchMenu = observer(() => {
        const [isActiveMine, setIsActiveMine] = useState(false)
        const [isActiveAll, setIsActiveAll] = useState(false)
        const dispatch: any = useDispatch()
        const typeReddit = listRedditStore.typeList
        const [valueSearch, setValueSearch] = useState('')
        const [searchSubmit, setSearchSubmit] = useState(false)
        const clickMine = () => {
            dispatch(clearArrAction([]))
            listRedditStore.changeType('')
            changeTargetCardStore.changeTarget(false)
        }
        const changeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
            setValueSearch(e.target.value)
        }, [])
        const clickAll = () => {
            dispatch(clearArrAction([]))
            listRedditStore.changeType('r/all/')
            changeTargetCardStore.changeTarget(false)
        }
        const searchReddit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            dispatch(clearSearchAction())
            dispatch(asyncGetSearchAction(localStorage.token, valueSearch))
            isSearchBlockStore.changeIsOpen(true)
            searchFieldStore.changeField(valueSearch)
            setValueSearch('')
        }
        useEffect(() => {
            if (typeReddit === '') {
                setIsActiveMine(true)
                setIsActiveAll(false)
            } else if (typeReddit === 'r/all/') {
                setIsActiveAll(true)
                setIsActiveMine(false)
            } else {
                setIsActiveMine(false)
                setIsActiveAll(false)
            }
        }, [typeReddit]);

        return (
            <nav className={styles.navCategories}>
                <Link to={'/search'}>
                    <button className={styles.btn}>
                        <div className={styles.iconPos}><Icon width={'24px'} height={'24px'} nameIcon={'Search'}
                                                              isActive={false}/>
                        </div>
                        <span className={styles.btnText}>Поиск реддитов</span>
                    </button>
                </Link>
                <ul>
                    <li className={styles.item}>
                        <div className={styles.positionIcon}>
                            <Icon width={'24px'} height={'24px'} isActive={isActiveAll} nameIcon={'Blocks'}/>
                        </div>
                        <Link to={'/posts'}><ButtonLeftMenu isActive={isActiveAll} onClick={clickAll} text={'Все реддиты'}/></Link>
                    </li>
                    <li className={styles.item}>
                        <div className={styles.positionIcon}>
                            <Icon width={'24px'} height={'24px'} isActive={isActiveMine} nameIcon={'Home'}/>
                        </div>
                        <Link to={'/posts'}><ButtonLeftMenu isActive={isActiveMine} onClick={clickMine}
                                                            text={'Мои подписки'}/></Link>
                    </li>
                </ul>
            </nav>
        );
    }
)