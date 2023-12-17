import React, { useState, } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import { useHistory } from 'react-router-dom';

// Users Actions
import { loginToken } from '../../ducks/users/actions';

// React Redux
import { useDispatch } from 'react-redux'

// Api Services
import API from '../../services/API.js'


const Register = () => {
  const history = useHistory();
  const [state, setState] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();

  const onFinish = async (state) => {
    const res = await API.registerApi('/accounts/register/', state)
    // const res = await API.registerApi('/api/users/', state)
    console.log("Token...", res)

    dispatch(loginToken(res.token))
    Modal.success({
      // title: 'Confirm',
      content: 'Register Successfully',
      okText: 'Ok',
      cancelText: 'Cancel',
    });
    console.log("Token...", res.token)
    history.push('/login');
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className=' container-fluid'>

      <h1>Register Page</h1>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ username: state.username, password: state.password, email: state.email }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"

          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;

