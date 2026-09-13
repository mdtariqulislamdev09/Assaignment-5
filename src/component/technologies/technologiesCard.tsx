import React, { useState } from 'react';
import type { ITechnologies } from '../../type/technologieType'



export const TechnologiesCard = ({technology, onAdd} : {technology: ITechnologies,onAdd: (technology: ITechnologies) => void;}) => {
    const [addToStack, setAddToStack] = useState(false);

    return (
    <div className='grid grid-cols-3 gap-3 container mx-auto py-3 '>
            <div className=' p-[20px] border border-gray-200 rounded-2xl bg-[#FFFFFF] py-3 w-[288px] h-[295px]' key={technology.id} >
                <div className='flex  justify-between mt-2'>
                    <img src={technology.icon} alt={technology.name} className='w-[40px] h-[40px] ' />
                    <p className='text-[#0EA5E9] bg-[#FFFFFF] border border-[#E0F2FE] rounded-4xl px-[10.4px] py-0.5'>{technology.badge}</p>
                </div >
                    <h2 className='font-bold text-2xl mt-3'>{technology.name}</h2>
                    <p className=' font-normal text-[12px]'>{technology.description}</p>
                <div className='flex justify-between  mt-3'>
                    <p className='font-medium text-[11px]'>{technology.category}</p>
                    <p className='font-medium text-[11px]'>{technology.difficulty}</p>
                    <p>⭐ {technology.rating}</p>
                </div>
                    <button
                    onClick={() =>{setAddToStack(true);
                         onAdd(technology)
                     }}

                    className={'w-full py-3 mt-3 bg-black text-white rounded-md transition-all hover:scale-105'}
                    disabled={addToStack}>
                    {addToStack === true ? "Added to stack" : "Add to stack"}
                    </button>
            </div>
       
    </div>
    );
};

export default TechnologiesCard;