import React, { useState } from "react";
import styles from "./UserAvatar.module.sass";
import UserMenuList from "@/features/user-menu/ui/UserMenuList";
import downImage from "@/shared/icons/down.png";

interface UserAvatarProps {
  firstName: string;
  lastName: string;
  position: string;
  avatarUrl?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  firstName,
  lastName,
  position,
  avatarUrl,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={styles.userAvatarContainer}>
      <img
        src={avatarUrl}
        alt={`${firstName} ${lastName}`}
        className={styles.avatar}
      />
      <div className={styles.userInfo}>
        <div className={styles.name}>
          {firstName} {lastName}
        </div>
        <div className={styles.position}>{position}</div>
      </div>
      <img
        src={downImage}
        alt="MenuIcon"
        className={styles.menuIcon}
        onClick={handleMenuToggle}
      />
      {menuOpen && <UserMenuList />}
    </div>
  );
};

export default UserAvatar;
