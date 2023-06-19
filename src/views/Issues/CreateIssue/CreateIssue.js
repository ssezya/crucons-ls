import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Button } from 'antd';

import './CreateIssue.styles.scss';

export const CreateIssue = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { control, handleSubmit } = useForm();

    const onSubmit = data => null;

    useEffect(() => {

    }, [state, navigate]);

    return (
        <div className='create-issue-layout'>
            <Form onFinish={handleSubmit(onSubmit)} className='create-issue-form'>
                <Form.Item>
                    <Controller
                        name='title'
                        control={control}
                        render={({ field }) =>
                            <Input
                                {...field}
                                name='title'
                                placeholder='Title'
                            />
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Controller
                        name='description'
                        control={control}
                        render={({ field }) => 
                            <Input
                                {...field}
                                name='description'
                                placeholder='Description'
                            />
                        }
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='create-issue-form-button'>
                        Create issue
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};