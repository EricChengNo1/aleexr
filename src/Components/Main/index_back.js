import React from 'react';
import $ from 'jquery';

import '../../Css/bootstrap.min.css';
import '../../Css/animate.css';
import '../../Css/style.css';
import  '../../Css/responsive.css';
import  '../../Css/index.css';

export  default class Main extends React.Component{
    constructor(props){
        super(props);
        this.getTheTime();

        setInterval(this.getTheTime.bind(this),1000)
    }

    getTheTime(){
        let timeStr = "2017-11-26";
        let end_str = (timeStr).replace(/-/g, "/");
        let class_time = new Date(end_str);
        let t = new Date() - class_time
        let d = Math.floor(t/1000/60/60/24);
        t -= d*1000*60*60*24;
        let h = Math.floor(t/1000/60/60);
        t-= h*1000*60*60;
        let m= Math.floor(t/1000/60);
        t-= m*1000*60;
        let s = Math.floor(t/1000);

        let surplus = {};
        surplus.d = this.toZero1(Math.abs(d));
        surplus.h = this.toZero(Math.abs(h));
        surplus.m =this.toZero(Math.abs(m));
        surplus.s = this.toZero(Math.abs(s));

        if(parseInt(surplus.d) < 10000){
            $(".days_dash .digit1").hide().html(surplus.d[0]);
        }else{
            $(".days_dash .digit1").show().html(surplus.d[0]);
        }
        $(".days_dash .digit2").html(surplus.d[1]);
        $(".days_dash .digit3").html(surplus.d[2]);
        $(".days_dash .digit4").html(surplus.d[3]);
        $(".days_dash .digit5").html(surplus.d[4]);

        $(".hours_dash .digit1").html(surplus.h[0]);
        $(".hours_dash .digit2").html(surplus.h[1]);

        $(".minutes_dash .digit1").html(surplus.m[0]);
        $(".minutes_dash .digit2").html(surplus.m[1]);

        $(".seconds_dash .digit1").html(surplus.s[0]);
        $(".seconds_dash .digit2").html(surplus.s[1]);
    }
    toZero(num){
        let str = num < 10 ? "0" + num : ''+num;
        return str;
    }
    toZero1(n){
        let num = parseInt(n);
        let str ;
        if(num < 10){
            str = "0000" + num
        }else if( 9 < num && num < 100){
            str = "000" + num
        }else if( 99 < num && num < 1000){
            str = "00" + num
        }else if( 999 < num && num < 10000){
            str = "0" + num
        }else if( 9999 < num ){
            str = "" + num
        }
        return str;
    }
    render(){
        return (<div>
            <section id="main" className="hero-area bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="block">
                                <h1 className="wow fadeInDown mine6" data-wow-delay="0.3s"
                                    data-wow-duration=".2s">趣立科技</h1>
                                <p className="wow fadeInDown mine7" data-wow-delay="0.5s"
                                   data-wow-duration=".5s">超乎你想象的，为你打开未来</p>
                                <div className="wow fadeInDown" data-wow-delay="0.7s" data-wow-duration=".7s">
                                    <a className="btn btn-home mine8" href="#about" role="button">加入我们</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 wow zoomIn">
                            <div className="block">
                                <div className="counter text-center">
                                    <ul id="countdown_dashboard">
                                        <li>
                                            <div className="dash days_dash">
                                                <div className="digit digit1">6</div>
                                                <div className="digit digit2">2</div>
                                                <div className="digit digit3">3</div>
                                                <div className="digit digit4">4</div>
                                                <div className="digit digit5">6</div>
                                                <span className="dash_title">Days</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash hours_dash">
                                                <div className="digit digit1">0</div>
                                                <div className="digit digit2">0</div>
                                                <span className="dash_title">Hours</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash minutes_dash">
                                                <div className="digit digit1">0</div>
                                                <div className="digit digit2">0</div>
                                                <span className="dash_title">Minutes</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash seconds_dash">
                                                <div className="digit digit1">0</div>
                                                <div className="digit digit2">0</div>
                                                <span className="dash_title">Seconds</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}