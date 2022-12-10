import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  url: string;
  roundImage?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const imageClass = `${
    props.roundImage ? 'rounded-[150px] w-[150px] h-[150px]' : 'w-[175px] h-[175px]'
  }`;

  return (
    <a href={props.url}>
      <div className='flex flex-col justify-center items-center w-full min-h-[300px] h-full rounded-lg bg-[#1D1C1D] transform transition duration-200 active:scale-90 hover:scale-105'>
        <div className='flex flex-col justify-center items-center p-2 text-center text-white'>
          {props.imageUrl ? <img className={imageClass} src={props.imageUrl} alt='' /> : <></>}
          <h1 className='text-[2rem] font-bold'>{props.title}</h1>
          <h2 className='text-base mt-[-4px]'>{props.description}</h2>
        </div>
      </div>
    </a>
  );
};

export default Card;
