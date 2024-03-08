import React, {ReactNode} from "react";
import styled from "styled-components";

export interface ICard {
    children: ReactNode
}

const CardStyled = styled.div`
    padding: 48px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgbha(0,0,0,0.25);
    border-radius: 10px;
`

export const Card = ({children}: ICard) => {
    return <CardStyled>{children}</CardStyled>
}

