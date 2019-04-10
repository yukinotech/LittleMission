import * as React from 'react'
import styled from 'styled-components';
import Interval from './Interval'
import Item from './Item'


let WalletServiceTitle = styled.div`
    font-size: 1.4rem;
    line-height: 1.6rem;
    background-color: rgb(255, 255, 255);
    color: rgb(153, 153, 153);
    padding: 1.2rem 0px 1.2rem 1.5rem;
    border-bottom: 1px solid rgb(244, 245, 246);
`

let WalletServiceBody = styled.div`
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
}


export default class WalletService extends React.Component<any,S>{
    constructor(props:any){
        super(props)
    }
    componentWillMount(){
        let iteminfo={
            data:[
                {
                    name:'头条信用卡',
                    iconSrc:'https://p2.pstatp.com/origin/d27600011a86f97bee77'
                },
                {
                    name:'值点商城',
                    iconSrc:'https://p2.pstatp.com/origin/8e1e0007a72eff9a2c56'
                },
                {
                    name:'手机充值',
                    iconSrc:'https://p2.pstatp.com/origin/8ad60016a564eda6a322'
                },
                {
                    name:'卡包',
                    iconSrc:'https://p2.pstatp.com/origin/8e200007a1ab6cacf92b'
                },
                {
                    name:'今日游戏',
                    iconSrc:'https://p2.pstatp.com/origin/8ad70016a3118c9eb2a6'
                },
                {
                    name:'保险',
                    iconSrc:'https://p2.pstatp.com/origin/8e1f00079fca4310ea1d'
                },
                {
                    name:'全民抽奖',
                    iconSrc:'https://p3.pstatp.com/origin/daa30007dab18d5d559f'
                },
                {
                    name:'股票',
                    iconSrc:'https://p2.pstatp.com/origin/8e1d0007a721b99c6717'
                },
                {
                    name:'小说账户',
                    iconSrc:'https://p3.pstatp.com/origin/da7a00062a2bacba0edd'
                },
                {
                    name:'京东特惠',
                    iconSrc:'https://p3.pstatp.com/origin/daee0004bd76be3f38b0'
                },
                {
                    name:'苏宁精选',
                    iconSrc:'https://p3.pstatp.com/origin/daf2000dd73cd55aeb90'
                },
            ]
        }
        this.setState({...iteminfo})
        console.log(this.state)
    }
    render(){
        let itemlist=this.state.data.map(
            (item)=>{
                return (
                    <Item key={item.iconSrc} {...item}/>
                )
            }
        )
        return(
            <>
                <Interval/>
                <WalletServiceTitle>钱包服务</WalletServiceTitle>
                <WalletServiceBody>
                    {itemlist}
                </WalletServiceBody>
            </>
        )
    }
}