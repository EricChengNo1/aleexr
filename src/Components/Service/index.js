import React,{Component} from 'react';

import '../../Css/bootstrap.min.css';
import '../../Css/animate.css';
import '../../Css/style.css';
import  '../../Css/responsive.css';
import  '../../Css/index.css';

import promise_01 from '../../images/AR/1.png';
import promise_02 from '../../images/AR/2.png';
import promise_03 from '../../images/AR/3.png';
import promise_04 from '../../images/AR/4.png';
import promise_05 from '../../images/AR/5.png';

class Service extends Component{
    render(){
        return (<div>
            <section className="service section">
                <div className="container">
                    <div className="row">
                        <div className="heading wow fadeInUp">
                            <h2>我的保证</h2>
                        </div>
                        <div className="service-img">
                            <div className="col-sm-6 col-md-2 wow fadeInLeft">
                                <div className="block development">
                                    <img src={promise_04} alt="" className="sm-logo" />
                                    <strong className="promise-strong promise-strong-position-04">R&D</strong>
                                    <h3>研发能力</h3>
                                    <p className="promise-p">根据品牌客户的需求，开发定制AR、VR、智能家居等整机产品，并提供软件技术服务。</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-2 wow fadeInLeft" data-wow-delay="0.3s">
                                <div className="block">
                                    <img src={promise_05} alt="" className="sm-logo" />
                                    <strong>Operation&Manufacture</strong>
                                    <h3>运营生产</h3>
                                    <p className="promise-p">全线自动化设备生产，专业的生产管理系统。</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-2 wow fadeInLeft" data-wow-delay="0.6s">
                                <div className="block">
                                    <img src={promise_02} alt="" className="sm-logo" />
                                    <strong className="promise-strong promise-strong-position-02">Innovation Capability</strong>
                                    <h3>创新能力</h3>
                                    <p className="promise-p">从生产到软件有优秀的专业人员，可以深入研究创新应用。</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-2 wow fadeInLeft" data-wow-delay="0.9s">
                                <div className="block">
                                    <img src={promise_01} alt="" className="sm-logo" />
                                    <strong className="promise-strong promise-strong-position-01">Quality Assurance</strong>
                                    <h3>质量保证</h3>
                                    <p className="promise-p">强大的质量团队，端到端的物料管控。</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-2 wow fadeInLeft" data-wow-delay="0.9s">
                                <div className="block">
                                    <img src={promise_03} alt="" className="sm-logo" />
                                    <strong className="promise-strong">Customer Service</strong>
                                    <h3>客户服务</h3>
                                    <p className="promise-p">从立项到售后的高品质服务，确保客户服务按目标运转。</p>
                                </div>
                            </div>
                            {/*<div>*/}
                                {/**/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>)
    }
}

export  default  Service;