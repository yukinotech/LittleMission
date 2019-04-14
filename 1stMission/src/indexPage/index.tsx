import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Header from '../components/Header'
import Hongbao from '../components/Hongbao'
import WalletService from '../components/WalletService'
import OtherService from '../components/OtherService'
import CarouselPicture from '../components/CarouselPicture'

class App extends React.Component{
    constructor(props:any){
        super(props)
        this.calculateHtmlFontSize=this.calculateHtmlFontSize.bind(this)
    }
    calculateHtmlFontSize(){
        let html = document.querySelector('html');
        let width= document.documentElement.clientWidth
        if(html){
            html.style.fontSize=`${width/37.5}px`
        }
    }
    componentDidMount(){
        this.calculateHtmlFontSize()
    }
    render(){
        return (
            <>
                <Header/>
                <Hongbao/>
                <WalletService/>
                <CarouselPicture/>
                <OtherService/>
            </>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
