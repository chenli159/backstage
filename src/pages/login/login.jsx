import React, { Component } from 'react';
import { Form, Icon, Input, Button } from "antd"
import "antd/dist/antd.css"
import Logo from "./images/logo.png"
import "./login.scss"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="login">
                <div className="login-head">
                    <img src={Logo} alt="" />
                    <h2>React项目:后台管理页面</h2>
                </div>
                <div className="form">
                    <h3>用户登录</h3>
                    <div className="form-main">
                        <Form.Item>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;