import React from 'react';

import '../../Css/bootstrap.min.css';
import '../../Css/animate.css';
import '../../Css/style.css';
import  '../../Css/responsive.css';
import  '../../Css/index.css';

import logo from '../../images/logo.png';
class Header extends React.Component{
    render(){
        return (<div>
            <div className="container">
                <nav className="navbar navbar-fixed-top  navigation animated" id="top-nav">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" className="mine12" />
                    </a>

                    {/*<button className="navbar-toggler hidden-lg-up float-lg-right" type="button" data-toggle="collapse"*/}
                            {/*data-target="#navbarResponsive">*/}
                        {/*<i className="tf-ion-android-menu"></i>*/}
                    {/*</button>*/}
                    {/*<div className="collapse navbar-toggleable-md" id="navbarResponsive">*/}
                        {/*<ul className="nav navbar-nav menu float-lg-right" id="top-nav">*/}
                            {/*<li className="nav-item active">*/}
                                {/*<a className="nav-link mine9" href="#main">主页</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link mine9" href="#service">服务</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link mine9" href="#about">我们</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link mine9" href="#contact">联络</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                </nav>
            </div>
        </div>)
    }
}

export default  Header;