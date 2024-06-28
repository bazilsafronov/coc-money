import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/widgets/Sidebar/ui/Sidebar';
import { useAuth } from '@/shared/providers/AuthContext';
import style from './Layout.module.sass';

const Layout: React.FC = () => {
    const { user } = useAuth();

    return (
        <div className={style.layout}>
            {user && <Sidebar />} {/* Отображение Sidebar только если пользователь авторизован */}
            <main className={style.content}>
                <Outlet /> {/* Используется для рендеринга вложенных маршрутов */}
            </main>
        </div>
    );
};

export default Layout;
