import React, {useEffect, useState} from 'react';
import targetLoaderComments from "../../storeMobx/targetLoaderCommentsStore";
import countCommentsStore from "../../storeMobx/countCommentsStore";
import {SelectorLayout} from "../SelectorLayout";
import {observer} from "mobx-react-lite";
import {ISelector} from "../Selector";

export const SelectorCountComments = observer(({top, right, bottom, left}: ISelector) => {
        const stateCount = countCommentsStore.countComments
        const [isOpen, setIsOpen] = useState(false)
        const [firstChoice, setFirstChoice] = useState(false)
        const [secondChoice, setSecondChoice] = useState(false)
        const [thirdChoice, setThirdChoice] = useState(false)
        const [fourthChoice, setFourthChoice] = useState(false)
        const [fifthChoice, setFifthChoice] = useState(false)
        const firstText = `10 комментариев`
        const secondText = '50 комментариев'
        const thirdText = '100 комментариев'
        const fourthText = '200 комментариев'
        const fifthText = '300 комментариев'
        const [textDefault, setTextDefault] = useState(firstText)
        useEffect(() => {
            if (stateCount === 10) {
                setTextDefault(firstText)
                setFirstChoice(false)
                setSecondChoice(true)
                setThirdChoice(true)
                setFourthChoice(true)
                setFifthChoice(true)
            } else if (stateCount === 50) {
                setTextDefault(secondText)
                setFirstChoice(true)
                setSecondChoice(false)
                setThirdChoice(true)
                setFourthChoice(true)
                setFifthChoice(true)
            } else if (stateCount === 100) {
                setTextDefault(thirdText)
                setFirstChoice(true)
                setSecondChoice(true)
                setThirdChoice(false)
                setFourthChoice(true)
                setFifthChoice(true)
            } else if (stateCount === 200) {
                setTextDefault(fourthText)
                setFirstChoice(true)
                setSecondChoice(true)
                setThirdChoice(true)
                setFourthChoice(false)
                setFifthChoice(true)
            } else if (stateCount === 300) {
                setTextDefault(fifthText)
                setFirstChoice(true)
                setSecondChoice(true)
                setThirdChoice(true)
                setFourthChoice(true)
                setFifthChoice(false)
            }
        }, [stateCount])
        const onClickOpen = () => {
            setIsOpen(!isOpen)
        }
        const onClickFirst = () => {
            setIsOpen(false)
            countCommentsStore.changeCountComments(10)
            targetLoaderComments.change(true)
        }
        const onClickSecond = () => {
            setIsOpen(false)
            countCommentsStore.changeCountComments(50)
            targetLoaderComments.change(true)
        }
        const onClickThird = () => {
            setIsOpen(false)
            countCommentsStore.changeCountComments(100)
            targetLoaderComments.change(true)
        }
        const onClickFourth = () => {
            setIsOpen(false)
            countCommentsStore.changeCountComments(200)
            targetLoaderComments.change(true)
        }
        const onClickFifth = () => {
            setIsOpen(false)
            countCommentsStore.changeCountComments(300)
            targetLoaderComments.change(true)
        }

        return (
            <SelectorLayout isOpen={isOpen} onClickOpen={onClickOpen} onClickFourth={onClickFourth}
                            onClickSecond={onClickSecond} onClickFifth={onClickFifth} secondChoice={secondChoice}
                            fourthChoice={fourthChoice} fifthChoice={fifthChoice} thirdChoice={thirdChoice}
                            firstChoice={firstChoice} onClickFirst={onClickFirst} onClickThird={onClickThird}
                            secondText={secondText} textDefault={textDefault} firstText={firstText} fourthText={fourthText}
                            fifthText={fifthText} thirdText={thirdText} right={right} top={top} left={left}
                            bottom={bottom}/>
        );
    }
)