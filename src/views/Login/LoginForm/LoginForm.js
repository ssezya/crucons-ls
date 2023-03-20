import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './LoginForm.styles.scss';

import { login } from '@store/auth/auth.actions';

export const LoginForm = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { success } = useSelector(state => state.user);
    const { control, handleSubmit } = useForm();

    const onSubmit = data => dispatch(login(data));

    useEffect(() => {
        if (success)
            navigate(state?.path || '/');
    }, [success, state, navigate]);

    return (
        <Form onFinish={handleSubmit(onSubmit)} className='login-form'>
            <Form.Item>
                <Controller
                    name='username'
                    control={control}
                    render={({ field }) => 
                        <Input
                            {...field}
                            prefix={<UserOutlined style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                            name='username'
                            placeholder='Username'
                        />
                    }
                />
            </Form.Item>
            <Form.Item>
                <Controller
                    name='password'
                    control={control}
                    render={({ field }) => 
                        <Input
                            {...field}
                            prefix={<LockOutlined type='user' style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                            name='password'
                            type='password'
                            placeholder='Password'
                        />
                    }
                />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit' className='login-form-button'>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};