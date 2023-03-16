import React from 'react';
import {iconNames} from "../../../types/iconsName";
import {IconReddit} from "../IconReddit";
import {IconRedditText} from "../IconRedditText";
import {IconSetting} from "../IconSetting";
import {IconRobot} from "../IconRobot";
import {IconQuestion} from "../IconQuestion";
import {IconHome} from "../IconHome";
import {IconBlocks} from "../IconBlocks";
import {IconComment} from "../IconComment";
import {IconShare} from "../IconShare";
import {IconArrow} from "../IconArrow";

interface IIcon {
    nameIcon: iconNames,
    width: string,
    height: string,
    isActive: boolean

}

export function Icon({nameIcon, width, height, isActive}: IIcon) {
    if (nameIcon === 'Reddit') {
        return (
            <IconReddit isActive={isActive} width={width} height={height}/>
        )
    }
    if (nameIcon === 'RedditText') {
        return (
            <IconRedditText isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Setting') {
        return (
            <IconSetting isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Robot') {
        return (
            <IconRobot isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Question') {
        return (
            <IconQuestion isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Home') {
        return (
            <IconHome isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Blocks') {
        return (
            <IconBlocks isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Comment') {
        return (
            <IconComment isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Share') {
        return (
            <IconShare isActive={isActive} width={width} height={height} />
        )
    }
    if (nameIcon === 'Arrow') {
        return (
            <IconArrow isActive={isActive} width={width} height={height} />
        )
    }
    return (
        <div></div>
    );
}
