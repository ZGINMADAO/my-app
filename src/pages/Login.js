import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './Login.css'
import request from '../utils/request'

class NormalLoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const {form} = this.props;
        const {validateFieldsAndScroll} = form;

        validateFieldsAndScroll(async (errors, values) => {
            if (errors) {
                console.log('Received values of form: ', values);
                return
            }
            const result = await request.post('login', {values}).catch(function (error) {
                console.log('login catch error');
                console.log(error);
            });
            console.log('login ajax end');
            console.log(result);
            this.props.history.replace('/admin/demo')
        })


    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="divArea">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);
export default WrappedNormalLoginForm;
