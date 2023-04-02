import React from 'react';
interface MenuItemsProps{
    label: string,
    onClick?: ()=>void
}
const MenuItems:React.FC<MenuItemsProps> = ({label, onClick}) => {
    return (
        <button onClick={onClick} className='border-b-2 px-4 py-2 sm:px-8 border-neutral-100 cursor-pointer hover:bg-neutral-100 text-center'>
            {label}
        </button>
    );
};

export default MenuItems;