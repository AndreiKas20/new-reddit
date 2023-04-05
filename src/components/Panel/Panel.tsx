import React from "react";
import {Header} from "@/components/Header";
import {LeftBox} from "@/components/LeftBox";
import {Content} from "@/components/Content";

interface IPanelsProps {
    children: React.ReactNode
}

export const Panel = ({children}: IPanelsProps) => {

    return (
        <main>
            <Header/>
            <LeftBox/>
            <Content>
                {children}
            </Content>
        </main>
    )
}