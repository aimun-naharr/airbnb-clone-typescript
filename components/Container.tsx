import React from 'react';
interface ContainerProps{
    children: React.ReactNode
}
const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <div className='max-w-[2250px] lg:px-10 xl:px-20 sm:px-2 px-4 mx-auto'>
            {children}
        </div>
    );
};

export default Container;