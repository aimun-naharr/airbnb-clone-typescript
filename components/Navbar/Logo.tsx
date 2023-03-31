import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.png'
import { useRouter } from 'next/router';

const Logo = () => {
    const router=useRouter()
    return (
      <div className='hidden md:block cursor-pointer' onClick={()=>router.push('/')}>
         <Image alt='logo'  height={100} width={100} src={logo} />
      </div>
    );
};

export default Logo;