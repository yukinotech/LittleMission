import * as React from 'react'
import styled from 'styled-components';

let HongbaoDiv= styled.div`
    background-color: rgb(57, 63, 75);
    padding: 2rem 1.2rem;
    padding-top: calc( 54px + 2rem) ;
`
let HongbaoTitleDiv= styled.div`
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.7);
`

let HongbaoBalanceBox= styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`
let HongbaoBalanceDiv= styled.div`
    margin-top: 1rem;
    font-size: 4.8rem;
    color: rgb(255, 255, 255);
`

export default function Hongbao(){
    return(
        <HongbaoDiv>
            <HongbaoTitleDiv>我的红包（元）</HongbaoTitleDiv>
            <HongbaoBalanceBox>
                <HongbaoBalanceDiv>--</HongbaoBalanceDiv>
            </HongbaoBalanceBox>
        </HongbaoDiv>
    )
}