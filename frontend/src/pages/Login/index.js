import React, { useState, } from 'react'
import { Form, Input, Button, Modal } from 'antd';
import { useHistory } from 'react-router-dom';

// Users Actions
import { loginToken } from '../../ducks/users/actions';

// React Redux
import { useDispatch } from 'react-redux'

// Api Services
import API from '../../services/API.js'

const Login = () => {
	const history = useHistory();
	const [state, setState] = useState({ username: '', password: '' });
	const dispatch = useDispatch();

	const onFinish = async (state) => {
		const res = await API.loginApi('/accounts/login/', state)
		if (res.token) {
			localStorage.setItem('myToken', res.token);
			// saveTokenInLocalStroage(res.token)   // Local Stroage
			dispatch(loginToken(res.token))
			history.push('/');
		} else {
			Modal.error({
				// title: 'Confirm',
				content: 'Unable to log in with provided credentials',
				okText: 'Ok',
				cancelText: 'Cancel',
			});
		}
	}
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const ls = localStorage.getItem('myToken');
	console.log("Login Before LOcal ...", ls)
	// localStorage.clear();

	return (
		<Form
			name="basic"
			labelCol={{ span: 5 }}
			wrapperCol={{ span: 16 }}

			initialValues={{ username: state.username, password: state.password }}
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
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 5, span: 16 }}>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>

	);
}

export default Login;

