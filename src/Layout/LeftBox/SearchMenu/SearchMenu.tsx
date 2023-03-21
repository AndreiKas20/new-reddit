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

export const SearchMenu = observer(() => {
    const [isActiveMine, setIsActiveMine] = useState(false)
    const [isActiveAll, setIsActiveAll] = useState(false)
    const dispatch: any = useDispatch()
    const typeReddit = listRedditStore.typeList
    const [valueSearch, setValueSearch] = useState('')
    const clickMine = () => {
        dispatch(clearArrAction([]))
        listRedditStore.changeType('')
    }
    const changeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    },[])
    const clickAll = () => {
        dispatch(clearArrAction([]))
        listRedditStore.changeType('r/all/')
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
                } else if(typeReddit === 'r/all/') {
                    setIsActiveAll(true)
                    setIsActiveMine(false)
                } else {
                    setIsActiveMine(false)
                    setIsActiveAll(false)
                }
        }, [typeReddit]);

  return (
      <nav className={styles.navCategories}>
          <form className={styles.form} onSubmit={event => searchReddit(event)}>
              <input value={valueSearch} onChange={e => changeValue(e)} placeholder={'Поиск'} className={styles.input}/>
              <button className={styles.btn}><Icon width={'24px'} height={'24px'} nameIcon={'Search'} isActive={false}/></button>
          </form>
        <ul>
            <li className={styles.item}>
                <div className={styles.positionIcon}>
                    <Icon width={'24px'} height={'24px'} isActive={isActiveAll} nameIcon={'Blocks'}/>
                </div>
                <ButtonLeftMenu isActive={isActiveAll} onClick={clickAll} text={'Все реддиты'}/>
            </li>
          <li className={styles.item}>
            <div className={styles.positionIcon}>
                <Icon width={'24px'} height={'24px'} isActive={isActiveMine} nameIcon={'Home'}/>
            </div>
              <ButtonLeftMenu isActive={isActiveMine} onClick={clickMine} text={'Мои подписки'}/>
          </li>
        </ul>
      </nav>
  );
}
)