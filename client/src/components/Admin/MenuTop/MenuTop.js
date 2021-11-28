import React from 'react';
import { Button} from 'antd';
import { MenuFoldOutlined,PoweroffOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import CarlosLogo from '../../../assets/img/png/logo-white.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props){
    const {menuCollapsed, setMenuCollapsed} = props;
    const logoutUser = () =>{
        logout();
        window.location.reload();
    }
    return (
        <div className="menu-top">
            <div className="menu-top__left">
               <img className="menu-top__left-logo"
                src={CarlosLogo}
                alt="Carlos Tognarell">
               </img>
               <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                   {menuCollapsed ? ( <MenuUnfoldOutlined></MenuUnfoldOutlined>) : ( <MenuFoldOutlined></MenuFoldOutlined>)}
               </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined></PoweroffOutlined>
                </Button>
            </div>
        </div>
    )
}