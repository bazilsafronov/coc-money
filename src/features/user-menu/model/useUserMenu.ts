import { useState } from 'react';

const useUserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        toggleMenu
    };
};

export default useUserMenu;