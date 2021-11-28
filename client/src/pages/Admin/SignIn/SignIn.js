import React from 'react';
import {Layout,Tabs} from 'antd';
import Logo from '../../../assets/img/png/logo-white.png';
import RegisterForm from '../../../components/Admin/RegisterForm';
import LoginForm from '../../../components/Admin/LoginForm/LoginForm';
import { getAccessTokenApi } from '../../../api/auth';

import './SignIn.scss';
import { Redirect } from 'react-router';

export default function SignIn(){
    const {Content} = Layout;
    const {TabPane} = Tabs;
    if (getAccessTokenApi()) {
        return <Redirect to="/admin"></Redirect>
    }
    return(
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt="Carlos Tognarell"></img>
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            <LoginForm></LoginForm>
                        </TabPane>
                        <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                            <RegisterForm></RegisterForm>
                        </TabPane>
                    </Tabs>

                </div>
            </Content>
        </Layout>
    )
}