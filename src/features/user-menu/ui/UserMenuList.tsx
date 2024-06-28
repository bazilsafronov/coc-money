import React, { useEffect } from 'react';
import styles from './UserMenuList.module.sass';
import { useAuth } from '@/shared/providers/AuthContext';
import { useNavigate } from 'react-router-dom';

const UserMenuList: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/signup');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logout();
        navigate('/signup');
    };

    return (
        <div className={styles.menu}>
            <ul>
                <li>Go To Profile</li>
                <li>Settings Account</li>
                <li onClick={handleLogout}>Log Out</li>
            </ul>
        </div>
    );
};

export default UserMenuList;
