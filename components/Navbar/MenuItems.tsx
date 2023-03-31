import React from 'react';
interface MenuItemsProps{
    label: string,
    onClick?: ()=>void
}
const MenuItems:React.FC<MenuItemsProps> = ({label}) => {
    return (
        <div className='border-b-2 px-4 py-2 sm:px-8 border-neutral-100 cursor-pointer hover:bg-neutral-100 text-center'>
            {label}
        </div>
    );
};

export default MenuItems;