import React, {useEffect, useState} from 'react';
import styles from './searchblock.module.css';
import {useDispatch, useSelector} from "react-redux";
import {arraySearch, searchData} from "../../../../types/searchType";
import {Card} from "../ListCard/Card";
import {SearchItem} from "./SearchItem";
import {BtnLoader} from "../../../UI/BtnLoader";
import {asyncGetSearchAction} from "../../../store/getSearchArrReducer";
import searchFieldStore from "../../../storeMobx/searchFieldStore";
import {observer} from "mobx-react-lite";

export const SearchBlock = observer(() => {
    const getSearch = useSelector<any, arraySearch>(state => state.getSearchArrReducer.data)
    const after = useSelector<any, string>(state => state.getSearchArrReducer.after)
    const sel =  useSelector<any, string>(state => state.getSearchArrReducer)
    const [arrSearch, setArrSearch] = useState<arraySearch>([])
    const [isLoader, setIsLoader] = useState(false)
    const searchValue = searchFieldStore.stateField
    const dispatch: any = useDispatch()
    const moreItems = () => {
        setIsLoader(true)
        dispatch(asyncGetSearchAction(localStorage.token, searchValue, after))

    }
    useEffect(() => {
        if (getSearch) {
            setArrSearch(getSearch)
            setIsLoader(false)
        }
        console.log('search', getSearch, sel)
    },[getSearch])
  return (
        <>
            <ul className={styles.list}>
                {
                    arrSearch.map(value => <SearchItem key={value?.data.id} dataItem={value?.data}/>)
                }
            </ul>
            <BtnLoader isLoader={isLoader} onClick={moreItems} />
        </>
  );
})
