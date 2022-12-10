import React from 'react';

interface PlaceholderProps {
  text: string;
}

const Placeholder: React.FC<PlaceholderProps> = (props) => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
      <div className='text-white text-6xl font-semibold'>{props.text}</div>
    </div>
  );
};

export default Placeholder;
