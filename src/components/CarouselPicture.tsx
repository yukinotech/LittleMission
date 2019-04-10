import * as React from 'react'
import styled from 'styled-components'
import Interval from './Interval'
import Swiper from 'swiper'

let Containor = styled.div`
    width: 100%;
    background-color: #fff;
`
let Imgbox = styled.a`
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`
let Img = function(props:{
    className?:string;
    src:string;
}){
    return (
        <img className={props.className} src={props.src}/>
    )
}
let Imgitem = styled(Img)`
    width:100%;
`


export default class CarouselPicture extends React.Component{
    componentDidMount(){
        new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop:true,
            autoplay: {
                delay: 2500,
                stopOnLastSlide: false,//如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
                disableOnInteraction: false,//用户触发后，不停止自动滚动。
            },
            // 分页器
            pagination:{
                el: '.swiper-pagination',
            }
        })   
    }
    render(){
        return (
            <>
                <Interval/>
                <Containor className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" id="a1">
                            <Imgbox className="imgbox" href="#">
                                <Imgitem className="imgitem" src="https://sf6-ttcdn-tos.pstatp.com/obj/dump-v2-public/2019/04/08/2a2caf11438f9d3a00fd946c14e592db.png"  />
                            </Imgbox>
                        </div>
                        <div className="swiper-slide" id="a2">
                            <Imgbox className="imgbox" href="#">
                                <Imgitem className="imgitem" src="https://sf3-ttcdn-tos.pstatp.com/obj/dump-v2-public/2019/04/10/b9d6a8cc194182175941e6575de5b312.png" />
                            </Imgbox>
                        </div>
                        <div className="swiper-slide" id="a3">
                            <Imgbox className="imgbox" href="#">
                                <Imgitem className="imgitem" src="https://sf1-ttcdn-tos.pstatp.com/obj/dump-v2-public/2019/03/28/d382a2c84f998bb63dbde4ba1f5592dd.png" />
                            </Imgbox>
                        </div>
                        <div className="swiper-slide" id="a4">
                            <Imgbox className="imgbox" href="#">
                                <Imgitem className="imgitem" src="https://sf1-ttcdn-tos.pstatp.com/obj/dump-v2-public/2018/9/25/1dd7c7ce75c52244ca754b62f0475963.png" />
                            </Imgbox>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </Containor>
            </>
        )
    }
}
