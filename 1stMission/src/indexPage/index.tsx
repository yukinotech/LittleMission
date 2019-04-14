import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import Header from '../components/Header'
import Hongbao from '../components/Hongbao'
import WalletService from '../components/WalletService'
import OtherService from '../components/OtherService'
import CarouselPicture from '../components/CarouselPicture'

interface S{
    isPC:boolean
}
class App extends React.Component<any,S>{
    constructor(props:any){
        super(props)
        this.calculateHtmlFontSize=this.calculateHtmlFontSize.bind(this)
        this.judgeDevice=this.judgeDevice.bind(this)
    }
    judgeDevice(){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            this.setState({isPC:false})
            console.log("mobile")
        }
        else {
            this.setState({isPC:true})
            console.log("pc")
        }
    }
    calculateHtmlFontSize(){
        let html = document.querySelector('html');
        let width= document.documentElement.clientWidth
        if(html){
            html.style.fontSize=`${width/37.5}px`
        }
    }
    componentWillMount(){
        this.judgeDevice()
    }
    componentDidMount(){
        this.calculateHtmlFontSize()
    }
    render(){
        return (
            <>
                <Header/>
                <Hongbao/>
                <WalletService isPC={this.state.isPC}/>
                <CarouselPicture/>
                <OtherService isPC={this.state.isPC}/>
            </>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
