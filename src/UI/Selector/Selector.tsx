import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import sortCommentsStore from "../../storeMobx/sortCommentsStore";
import targetLoaderComments from "../../storeMobx/targetLoaderCommentsStore";
import {SelectorLayout} from "../SelectorLayout";

export interface ISelector {
    top?: string,
    left?: string,
    bottom?: string,
    right?: string,
}

export const Selector = observer(({right, top, bottom, left}: ISelector) => {
    const stateSort = sortCommentsStore.sortCommentsState
    const [isOpen, setIsOpen] = useState(false)
    const [firstChoice, setFirstChoice] = useState(false)
    const [secondChoice, setSecondChoice] = useState(false)
    const [thirdChoice, setThirdChoice] = useState(false)
    const [fourthChoice, setFourthChoice] = useState(false)
    const [fifthChoice, setFifthChoice] = useState(false)
    const firstText = 'Лучшие'
    const secondText = 'Новые'
    const thirdText = 'Самые спорные'
    const fourthText = 'Старые'
    const fifthText = 'Случайные'
    const [textDefault, setTextDefault] = useState(firstText)
    useEffect(() => {
        if (stateSort === 'top') {
            setTextDefault(firstText)
            setFirstChoice(false)
            setSecondChoice(true)
            setThirdChoice(true)
            setFourthChoice(true)
            setFifthChoice(true)
        } else if (stateSort === 'new') {
            setTextDefault(secondText)
            setFirstChoice(true)
            setSecondChoice(false)
            setThirdChoice(true)
            setFourthChoice(true)
            setFifthChoice(true)
        } else if (stateSort === 'controversial') {
            setTextDefault(thirdText)
            setFirstChoice(true)
            setSecondChoice(true)
            setThirdChoice(false)
            setFourthChoice(true)
            setFifthChoice(true)
        } else if (stateSort === 'old') {
            setTextDefault(fourthText)
            setFirstChoice(true)
            setSecondChoice(true)
            setThirdChoice(true)
            setFourthChoice(false)
            setFifthChoice(true)
        } else if (stateSort === 'random') {
            setTextDefault(fifthText)
            setFirstChoice(true)
            setSecondChoice(true)
            setThirdChoice(true)
            setFourthChoice(true)
            setFifthChoice(false)
        }
    }, [stateSort])
    const onClickOpen = () => {
        setIsOpen(!isOpen)
    }
    const onClickFirst = () => {
        setIsOpen(false)
        sortCommentsStore.changeStateSort('top')
        targetLoaderComments.change(true)
    }
    const onClickSecond = () => {
        setIsOpen(false)
        sortCommentsStore.changeStateSort('new')
        targetLoaderComments.change(true)
    }
    const onClickThird = () => {
        setIsOpen(false)
        sortCommentsStore.changeStateSort('controversial')
        targetLoaderComments.change(true)
    }
    const onClickFourth = () => {
        setIsOpen(false)
        sortCommentsStore.changeStateSort('old')
        targetLoaderComments.change(true)
    }
    const onClickFifth = () => {
        setIsOpen(false)
        sortCommentsStore.changeStateSort('random')
        targetLoaderComments.change(true)
    }

    return (
        <SelectorLayout fifthChoice={fifthChoice} fifthText={fifthText} fourthChoice={fourthChoice}
                        fourthText={fourthText} onClickFifth={onClickFifth} onClickFourth={onClickFourth}
                        onClickSecond={onClickSecond} firstText={firstText} firstChoice={firstChoice}
                        onClickOpen={onClickOpen} isOpen={isOpen} secondChoice={secondChoice}
                        thirdChoice={thirdChoice} thirdText={thirdText} secondText={secondText}
                        textDefault={textDefault} onClickThird={onClickThird} onClickFirst={onClickFirst}
                        bottom={bottom} left={left} top={top} right={right}/>
    );
})
