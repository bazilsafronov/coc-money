import React from 'react';
import s from './Sidebar.module.sass';
import logo from '@/shared/Logo';
import {
  dashboardIcon,
  userIcon,
  walletIcon,
  settingsIcon,
  analyticsIcon,
  shieldIcon,
  helpIcon,
} from '@/shared/icons/index';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from '../../../features/theme-toggle/ui/ThemeToggleButton';
import UserAvatar from '@/entities/user/ui/UserAvatar';
import imageAvatar from '@/shared/icons/avatar.png';
import moonIcon from '@/shared/icons/moon.svg';
import styles from '@/features/theme-toggle/ui/ThemeToggleButton.module.sass';

const Sidebar: React.FC = () => {
  const handleActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? s.activeTab : '';
  const navItems = [
    {
      name: 'Dashboard',
      icon: dashboardIcon,
      path: '/',
    },
    {
      name: 'Settings',
      icon: settingsIcon,
      path: '/settings',
    },
    {
      name: 'Analytics',
      icon: analyticsIcon,
      path: '/analytics',
    },
    {
      name: 'My Wallet',
      icon: walletIcon,
      path: '/wallet',
    },
    {
      name: 'Accounts',
      icon: userIcon,
      path: '/accounts',
    },
  ];
  return (
    <nav className={s.sidebar}>
      <NavLink to="/">
        <img src={logo} alt="logotype" />
        <span className={s.logoTitle}>coc.</span>
      </NavLink>
      {navItems.map((item, index) => (
        <NavLink to={item.path} key={index} className={handleActive}>
          <img src={item.icon} alt="logotype" />
          {item.name}
        </NavLink>
      ))}
      <hr className={s.customLine} />
      <NavLink to="/security" className={handleActive}>
        <img src={shieldIcon} alt="logotype" />
        Security
      </NavLink>
      <NavLink to="/help" className={handleActive}>
        <img src={helpIcon} alt="logotype" />
        Help Centre
      </NavLink>
      <div className={s.themeToggle}>
        <img src={moonIcon} alt="moonIcon" />
        <span>Dark Mode</span>
        <ThemeToggleButton />
      </div>

      <UserAvatar
        firstName={'Bazil'}
        lastName={''}
        position={'Software Developer'}
        avatarUrl={imageAvatar}
      />
    </nav>
  );
};

export default Sidebar;
