import React, {useCallback, useEffect, useState} from 'react';
import styles from './searchblock.module.css';
import {useDispatch, useSelector} from "react-redux";
import {arraySearch, searchData} from "../../../types/searchType";
import {Card} from "../ListCard/Card";
import {SearchItem} from "./SearchItem";
import {BtnLoader} from "../../UI/BtnLoader";
import {asyncGetSearchAction, clearSearchAction} from "../../store/getSearchArrReducer";
import searchFieldStore from "../../storeMobx/searchFieldStore";
import {observer} from "mobx-react-lite";
import {Icon} from "../../UI/Icon";
import isSearchBlockStore from "../../storeMobx/isSearchBlockStore";

export const SearchBlock = observer(() => {
    const getSearch = useSelector<any, arraySearch>(state => state.getSearchArrReducer.data)
    const after = useSelector<any, string>(state => state.getSearchArrReducer.after)
    const sel =  useSelector<any, string>(state => state.getSearchArrReducer)
    const [arrSearch, setArrSearch] = useState<arraySearch>([])
    const [isLoader, setIsLoader] = useState(false)
    const searchValue = searchFieldStore.stateField
    const dispatch: any = useDispatch()
    const [valueSearch, setValueSearch] = useState('')
    const [isBtn, setIsBtn] = useState(false)
    const changeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    }, [])
    const searchReddit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(clearSearchAction())
        dispatch(asyncGetSearchAction(localStorage.token, valueSearch))
        isSearchBlockStore.changeIsOpen(true)
        searchFieldStore.changeField(valueSearch)
        setValueSearch('')
    }
    const moreItems = () => {
        setIsLoader(true)
        dispatch(asyncGetSearchAction(localStorage.token, searchValue, after))

    }
    useEffect(() => {
        if (getSearch) {
            setArrSearch(getSearch)
            setIsLoader(false)
        }
        if (getSearch.length < 1) {
            setIsBtn(false)
        } else {
            setIsBtn(true)
        }
    },[getSearch])
  return (
        <section className={styles.search}>
            <form onSubmit={event => searchReddit(event)} className={styles.form}>
                <input value={valueSearch} onChange={e => changeValue(e)} placeholder={'Поиск'}
                       className={styles.input}/>
                <button className={styles.btn}>
                    <div className={styles.iconPosition}><Icon width={'24px'} height={'24px'} nameIcon={'Search'}
                               isActive={false}/></div>
                </button>
            </form>
            <ul className={styles.list}>
                {
                    arrSearch.map(value => <SearchItem key={value?.data.id} dataItem={value?.data}/>)
                }
            </ul>
            {
              isBtn &&  <div><BtnLoader isLoader={isLoader} onClick={moreItems} /></div>
            }
        </section>
  );
})
