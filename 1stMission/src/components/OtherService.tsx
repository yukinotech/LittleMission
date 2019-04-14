import * as React from 'react'
import styled from 'styled-components';
import Interval from './Interval'
import Item from './Item'


let OtherServiceTitle = styled.div`
    font-size: 1.4rem;
    line-height: 1.6rem;
    background-color: rgb(255, 255, 255);
    color: rgb(153, 153, 153);
    padding: 1.2rem 0px 1.2rem 1.5rem;
    border-bottom: 1px solid rgb(244, 245, 246);
`

let OtherServiceBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    //让元素换行，并且垂直上，顶部对齐
    align-content: flex-start;
    position: relative;
`

interface S{
    data:{
        name:string;
        iconSrc:string;
    }[]
    isPC:boolean;
}


export default class OtherService extends React.Component<any,S>{
    constructor(props:any){
        super(props)
    }
    componentWillMount(){
        let iteminfo={
            data:[
                {
                    name:'免流量服务',
                    iconSrc:'https://p2.pstatp.com/origin/8e200007a01b36c1f474'
                },
                {
                    name:'猫眼电影',
                    iconSrc:'https://p3.pstatp.com/origin/b77300053a46070db11e'
                },
                {
                    name:'小米商城',
                    iconSrc:'https://p2.pstatp.com/origin/b777000398990a688520'
                },
                {
                    name:'58本地服务',
                    iconSrc:'https://p2.pstatp.com/origin/b776000b9b7dbbbf2f45'
                },
                {
                    name:'携程旅行',
                    iconSrc:'https://p2.pstatp.com/origin/da56000d404e9db257a8'
                }
            ]
        }
        this.setState({...iteminfo})

        console.log(this.state)
    }
    render(){
        let itemlist=this.state.data.map(
            (item)=>{
                return (
                    <Item key={item.iconSrc} isPC={this.props.isPC} {...item}/>
                )
            }
        )
        return(
            <>
                <Interval/>
                <OtherServiceTitle>其他服务</OtherServiceTitle>
                <OtherServiceBody>
                    {itemlist}
                </OtherServiceBody>
            </>
        )
    }
}