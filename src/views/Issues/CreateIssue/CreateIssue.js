import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Form, Input, Select, Button } from 'antd';

import { getAllProjectsAsync } from '@utils/api/services/projects';
import { createIssueAsync } from '@utils/api/services/issues';

import './CreateIssue.styles.scss';

export const CreateIssue = () => {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();
    const { state } = useLocation();
    const { control, handleSubmit } = useForm();

    const onSubmit = async data => createIssueAsync(data).then(() => navigate('/issues'));

    useEffect(() => {
        getAllProjectsAsync().then(response => {
            const { projects } = response.data;

            setProjects(projects);
        });
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
                    <Controller
                        name='projectId'
                        control={control}
                        render={({ field }) => 
                            <Select
                                {...field}
                                name='projectId'
                                placeholder='Project'
                            >
                                { projects.map((data, index) => <Select.Option key={index} value={data.id}>{data.name}</Select.Option>) }
                            </Select>
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