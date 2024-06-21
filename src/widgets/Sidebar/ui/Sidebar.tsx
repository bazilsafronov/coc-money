import React from "react";
import s from './Sidebar.module.sass';
import logo from '@/shared/Logo';
import {dashboardIcon} from '@/shared/icons/index'

const Sidebar: React.FC = () => {
    return (
        <div className={s.sidebar}>
            <div>
                <img src={logo} alt="logotype"/>
                <span className={s.logoTitle}>coc.</span>
            </div>
            <div className={s.activeTab}>
                <img src={dashboardIcon} alt="icon"/>
                <div>Dashboard</div>
            </div>
            <div>
                <img src={dashboardIcon} alt="icon"/>
                <div>Analytics</div>
            </div>
            <div>
                <img src={dashboardIcon} alt="icon"/>
                <div>My Wallet</div>
            </div>
            <div>
                <img src={dashboardIcon} alt="icon"/>
                <div>Accounts</div>
            </div>
            <div>
                <img src={dashboardIcon} alt="icon"/>
                <div>Settings</div>
            </div>

        </div>
    )
}

export default Sidebar;