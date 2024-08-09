import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/widgets/Sidebar/ui/Sidebar";
import { useAuth } from "@/shared/providers/AuthContext";
import style from "./Layout.module.sass";

const Layout: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className={style.layout}>
      {user && <Sidebar />}{" "}
      <main className={style.content}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
