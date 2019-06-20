import React from 'react';

import contact from '../../images/AR/QRCode.png';

class Contact extends React.Component{
    sendEmail(){
        let email = this.refs.ref.value;// $("#email").val()
        let regex = /^([0-9A-Za-z\-_]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
        if ( regex.test( email ) ){
            alert("已经记录了您的邮箱");
            // $.get("get_email.php?data="+email, function(result){
            //     console.log(result)
            //     console.log("success")
            //     if(result == `"success"`){
            //         alert("已经记录了您的邮箱")
            //     }else{
            //         alert("记录失败")
            //     }
            // });
        }else{
            alert("请输入正确的邮箱地址")
        }
    }
    render(){
        return (<div>
            <section className="call-to-action section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 wow text-center">
                            <div className="block">
                                <h2>订阅我们的最新资讯</h2>
                                <p>可以了解更多我们的信息和行业前景，让你轻松制定未来计划。</p>
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="email" ref='email'
                                               placeholder="在这里输入您的电子邮件" />
                                        <span className="input-group-btn">
                                    <button className="btn btn-default btn-subscription" type="button"
                                            onClick={this.sendEmail.bind(this)}>发送</button>
                              </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="section about bg-white mine4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 tcenter">
                            <div className="content">
                                <div className="sub-heading mine5">
                                    <h3 className="mine13">联系我们</h3>
                                </div>
                                <img src={contact} alt="" className="mine14"/>
                                    <h4 className="mine20">邮箱：bd@movisionxr.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wow fadeInUp">
                <div className="map-wrapper">
                </div>
            </section>
            <footer className="mine15">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <p>上海晟数科技有限公司</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="block">
                                <p>AleeXR Technology Co.,Ltd</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>)
    }
}

export default Contact;