import React, { Component } from 'react';
import { Form, Icon, Input, Button } from "antd"
import "antd/dist/antd.css"
import Logo from "./images/logo.png"
import "./login.scss"
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        const form = this.props.form
        const values = form.getFieldsValue()
        console.log(values)
    }
    render() {
        // const form = this.props.form
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <div className="login-head">
                    <img src={Logo} alt="" />
                    <h2>React项目:后台管理页面</h2>
                </div>
                <div className="form">
                    <h3>用户登录</h3>
                    <div className="form-main">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const WrapLogin = Form.create()(Login)
export default WrapLogin;