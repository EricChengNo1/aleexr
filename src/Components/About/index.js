import React from 'react';

import startHome from '../../images/AR/startHome.png';
import softwareService from '../../images/AR/softwareService.png';
import AI from '../../images/AR/AI.png';
import chip from '../../images/AR/chip.png';

class About extends React.Component{
    render(){
        return (<div>
            <section id="service" className="section about bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-subtitle-title">
                                <strong className="card-title">智能家居</strong>
                                <strong className="card-subtitle">Smart home</strong>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-subtitle-title">
                                <strong className="card-title">软件服务</strong>
                                <strong className="card-subtitle">Software service</strong>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-subtitle-title">
                                <strong className="card-title">人工智能</strong>
                                <strong className="card-subtitle">AI</strong>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-subtitle-description">
                                <p>AR/VR/MR,摄像头产品及智能家居产品，包括ID MD在内的整套设计生产出货管理服务</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-subtitle-description">
                                <p>操作系统，算法及终端应用的软件解决方案</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-subtitle-description">
                                <p>让你的设备自主学习，独立思考；让您的生活更加便捷丰富</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="about-slider">
                                <img src={startHome} alt="图片加载失败.." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-slider">
                                <img src={softwareService} alt="图片加载失败.." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="about-slider">
                                <img src={AI} alt="图片加载失败.." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="section about bg-white mine4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 tcenter">
                            <div className="content">
                                <div className="sub-heading mine5">
                                    <h3 className="about-title">核心实力</h3>
                                </div>
                                <p className="mine2">年轻有活力的团队，富于创新与坚持，竭力为客户提供全面的服务解决方案，</p>
                                <p className="mine2">有超过10年的只能硬件开发经验</p>
                                <p className="mine2">研发水平在国内同行业处于领先水平，完善的运营质量服务机制，贯穿产品的售前支持、售后服务，快速响应客户需求。</p>
                            </div>
                            <img src={chip} className="mine3" alt="" />

                        </div>
                    </div>
                </div>
            </section>
            <section className="section about bg-white mine4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 tcenter">
                            <div className="content">
                                <div className="sub-heading mine5">
                                    <h3 className="mine1">我们的产品</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about bg-black mine16 clearFix section-bottom">
                <div className="container mine22">
                    <div className="row" style={{height:'100%'}}>
                        <div className="col-md-5 col-sm-12 wow fadeInLeft fun" data-wow-delay="0.3s">
                            <div className="sub-heading">
                                <h1 className="product-title">FUN 1</h1>
                            </div>
                            <div>
                                <h4 className="product-description">影音娱乐一体化</h4>
                                <h4 className="product-description">轻便佩戴舒适一体机</h4>
                            </div>
                            <div>
                                <a href="#" className="companyStyle-a">立即预定 >> </a>
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 wow fadeInLeft"></div>
                        {/*<div className="col-md-2 col-sm-12 wow fadeInLeft"></div>*/}
                    </div>
                </div>
            </section>
            <section className="section about bg-white mine17 clearFix section-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 wow fadeInRight"></div>
                        <div className="col-md-4 col-sm-12 wow fadeInRight">
                            <div className="content">
                                <h1 className="S-FUN">S-FUN 2</h1>
                                <h3 className="S-FUN-description">Qualcomm骁龙平台</h3>
                                <h3 className="S-FUN-description">3D多任务操作系统</h3>
                                <a href="#" className="companyStyle-a">立即预定 >></a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12 wow fadeInRight" data-wow-delay="0.3s">
                            <div className="about-slider"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about bg-white mine177 clearFix">
                <div className="row" style={{height:'100%'}}>
                    <div className="col-md-9"></div>
                    <div className="col-md-3 col-sm-12 wow fadeInRight st">
                        <div className="product-camera">
                            <h1 className="S-FUN">S-st</h1>
                            <a href="#" className="companyStyle-a">立即预定 >></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export default  About;