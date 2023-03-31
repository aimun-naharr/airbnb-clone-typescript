import React from 'react';
import Image from 'next/image';
import avatar from '../public/placeholder.jpg'

const Avatar = () => {
    return (
        <div className='hidden sm:block'>
            <Image src={avatar} alt='avatar' height={30} width={30} className='rounded-full'/>
            
        </div>
    );
};

export default Avatar;