import React from 'react';


const TimeButton = ({onClick, color,text}) => {

 
    return (
        <button id="btn" onClick={onClick} className={'w-full h-[50%] rounded-[10px]  p-10 '+color}> 
        <div className='font-bold'>
            {text}
        </div>
        </button>
    );
};

export default TimeButton;