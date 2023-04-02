import React from 'react';
interface HeadingProps{
    title: string,
    subTitle?: string,
    center?: boolean
}
const Heading:React.FC<HeadingProps> = ({title, subTitle, center}) => {
    return (
        <div className={`flex flex-col ${center? 'text-center': 'text-start'}`}>
            <h2 className='font-bold text-2xl'>{title}</h2>
            <h4 className='text-light text-gray-700'>{subTitle}</h4>
           
        </div>
    );
};

export default Heading;