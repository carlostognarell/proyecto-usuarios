import React,{useState} from 'react';
import {Form,Input,Button,notification} from 'antd';
import { UserOutlined,LockFilled } from '@ant-design/icons';
import { signInApi } from '../../../api/user';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../../../utils/constants'

import './LoginForm.scss'

export default function LoginForm(){
    const [inputs, setinputs] = useState({
        email:"",
        password:""
    });

    const changeForm = e =>{
        setinputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async e =>{
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        if (!emailVal || !passwordVal) {
            notification['error']({
                message: "Todos los campos son obligatorios."
            });
        }else{const result = await signInApi(inputs);
            if (result.message) {
                notification["error"]({message: result.message});            
            }else{
                const {accessToken, refreshToken} = result;
                localStorage.setItem(ACCESS_TOKEN, accessToken);
                localStorage.setItem(REFRESH_TOKEN, refreshToken);
                window.location.href = "/admin";
                //notification["success"]({message: "Login correcto."});            
            }
            
        }
        
    };

    return(
        <Form className="login-form" onChange={changeForm} onFinish={login}>
            <Form.Item>
                <Input prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25"}}></UserOutlined>}
                 type="email"
                 name="email"
                 placeholder="Correo electronico"
                 className="login-form__input">
                </Input>
            </Form.Item>
            <Form.Item>
                <Input prefix={<LockFilled style={{ color: "rgba(0,0,0,.25"}}></LockFilled>}
                 type="password"
                 name="password"
                 placeholder="Contraseña"
                 className="login-form__input">
                </Input>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">Entrar</Button>
            </Form.Item>
        </Form>
    )
}