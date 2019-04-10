import * as React from 'react'
import styled from 'styled-components';

let HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 1000;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgb(57, 63, 75);
    font-size: 17px;
    box-sizing:border-box;
    padding-top:10px;
    /* flex: 1 1 0%; */
`;

let WalletManageDiv = styled.div`
    //确定位置
    position: absolute;
    right: 0px;
    //元素大小，字体大小
    font-size: 14px;
    height: 44px;
    padding: 0px 10px;
    //使得WalletManageDiv的内容垂直居中
    align-items: center;
    display: flex;

`;

export default class Header extends React.Component{
    render(){
        return(
            <HeaderDiv>
                <span>我的钱包</span>
                <WalletManageDiv>钱包管理</WalletManageDiv>
            </HeaderDiv>
        )
    }
}

