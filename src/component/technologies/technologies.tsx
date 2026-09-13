import React, {use, useState} from "react"
import type { ITechnologies } from '../../type/technologieType'
import {TechnologiesCard} from "./technologiesCard"


interface technologiesProps {
    technologiesPromise : Promise<ITechnologies[]>
    
}

const Technologies = ({ technologiesPromise }: technologiesProps) => {
    const technologies = use(technologiesPromise);

    const [addStack, setAddStack] = useState<ITechnologies[]>([]);

    const handleAddToStack = (technology : ITechnologies) =>{
        setAddStack((prev) => [...prev, technology]);
    }

    const handleRemoveOne = (id : string) =>{
     setAddStack((prev) => prev.filter(technology => technology.id !== id))
    }

    const handleRemoveAll = () =>{
      setAddStack([]);
    }

    return (
        <div className="container mx-auto flex justify-between gap-7">
            <div className="grid grid-cols-3 gap-3">
            {technologies.map((technology) => (
          <TechnologiesCard
          key={technology.id}
            technology={technology}
            onAdd={handleAddToStack}
          />
        ))}
    </div>
       <div className=' p-[20px] bg-[#FFFFFF] border border-[#F1F5F9] rounded-2xl '>
            <h2 className='text-[#0F172A] font-bold text-2xl'>Your Stack</h2> 
            
  {addStack.length === 0 ? (
    <>
      <p className="mt-2 text-[12px] font-normal text-[#94A3B8]">
        No technologies selected yet.
      </p>

      <p className="mt-3 flex justify-center items-center border border-[#F1F5F9] p-[24px] rounded-[12px] font-normal text-[11px] text-[#94A3B8]">
        Your stack is empty.
      </p>
    </>
  ) : (
    <div className="mt-3 ">
        <p>{addStack.length} "Technology Selected"</p>
      {addStack.map((technology) => (
        <div
          key={technology.id}
          className="flex items-center gap-4 border border-[#F1F5F9] p-4 rounded-lg mb-2 justify-between "
        >
          <div className="flex items-center gap-2 ">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-7 h-7"
          />

          <span >
            {technology.name}
          </span>
          <button onClick={() => handleRemoveOne(technology.id)}>
            ✕
            </button>
        </div>
        </div>
      ))}
      <button onClick={handleRemoveAll}
      className="border border-[#ED8C85] text-[#D82C20] font-semibold text-[14px] rounded-[8px] w-full p-2"
      >Remove All</button>
    </div>
  )}
</div>
    </div>
  );
}
export default Technologies;