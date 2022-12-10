import React from 'react';

export type PortfolioEntryData = {
  title: string;
  time?: string;
  description: string;
  imageUrl: string;
};

interface PortfolioEntryProps {
  entry: PortfolioEntryData;
}

const PortfolioEntry: React.FC<PortfolioEntryProps> = (props) => {
  return (
    <div className='flex items-center p-4 justify-between w-full'>
      <div className='flex flex-col justify-start w-full'>
        <h2 className='text-xl font-bold'>{props.entry.title}</h2>
        {props.entry.time ? <h2 className='text-xl font-bold'>{props.entry.time}</h2> : <></>}
        <h3 className='mt-2 pr-4'>{props.entry.description}</h3>
      </div>
      <img className='w-[30%] rounded-2xl' src={props.entry.imageUrl} alt='' />
    </div>
  );
};

export default PortfolioEntry;
