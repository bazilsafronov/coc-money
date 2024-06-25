import React from 'react';
import styles from './UserMenuList.module.sass';

const UserMenuList: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>Go To Profile</li>
                <li>Settings Account</li>
                <li>Log Out</li>
            </ul>
        </div>
    );
};

export default UserMenuList;