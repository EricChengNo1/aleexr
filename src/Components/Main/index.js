import React from 'react';

import '../../Css/bootstrap.min.css';
import '../../Css/animate.css';
import '../../Css/style.css';
import  '../../Css/responsive.css';
import  '../../Css/index.css';
import logo from '../../images/AR/logo.png';

export  default class Main extends React.Component{
    render(){
        return (<div>
            <section id="main" className="hero-area bg-1">
                <div>
                    <div className="container">
                        <div className="row logo">
                            <img src={logo} style={{width: '40%', height:'40%'}} alt="图片异常."/>
                        </div>
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6 wow zoomIn">
                                <div className="block">
                                    <div className="counter text-center">
                                        <div>
                                            <div className="companyStyle">
                                                <h1>晟数科技</h1>
                                                <h2>丰富人们的生活，让沟通更多元</h2>
                                                <a className="companyStyle-a" href="#">了解晟数</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>)
    }
}