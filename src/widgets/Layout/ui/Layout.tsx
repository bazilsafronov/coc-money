import React from 'react';
import Sidebar from '@/widgets/Sidebar/ui/Sidebar';
import style from './Layout.module.sass';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={style.layout}>
            <Sidebar />
            <main className={style.content}>
                {children}

            </main>
        </div>
    );
};

export default Layout;