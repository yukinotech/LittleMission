import * as React from 'react'
import styled from 'styled-components';


let ItemFatherBox = styled.div`
    font-family: sans-serif;
    display: flex;
    position: relative;
    flex-direction: column;
    width: calc(33.3333%);
    padding-top: calc(28.3333%);
    box-sizing: border-box;
    align-items: center;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-color: rgb(244, 245, 246);
    border-style: solid;
`

let ItemSonBox = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

let IconDiv = styled.div`
`

let Icon = (
    props:{
        iconSrc:string;
        className?:string;
    }
)=>{
    return (
        <img className={props.className} src={props.iconSrc}></img>
    )
}

let StyledIcon = styled(Icon)`
    width: 2.4rem;
    height: 2.4rem;
`

let Name = styled.div`
    margin-top: 0.4rem;
    font-size: 1.4rem;
    text-size-adjust: 100%;
`
interface P{
    name:string;
    iconSrc:string;
}

export default class Item extends React.Component<P>{
    constructor(props:Readonly<P>){
        super(props)
    }
    render(){
        return(
            <ItemFatherBox>
                <ItemSonBox>
                    <IconDiv>
                        <StyledIcon iconSrc={this.props.iconSrc}/>
                    </IconDiv>
                    <Name>{this.props.name}</Name>
                </ItemSonBox>
            </ItemFatherBox>
        )
    }
}