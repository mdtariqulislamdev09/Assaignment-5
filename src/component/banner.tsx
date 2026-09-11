 import Bnr from '../assets/banner-stack.png'
 export const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto py-20">
            <div>
                <h2 className='font-bold text-4xl text-[#0F172A]'>Build Your Ideal <br /> <span className='bg-gradient-to-r from-red-500 to-purple-600  bg-clip-text text-transparent '>Development Stack</span></h2>
                <p>Explore frontend, backend, database, and tooling options,<br />compare them side by side, and put together the stack that fits <br /> yournext project.</p>
                <div className="flex gap-4 mt-4">
                    <button className="text-white px-4 py-3 rounded-2xl bg-gradient-to-r from-[#FF5722] to-[#D81B7E] to-[#7C3AED]">Explore Technologies</button>
                    <button className="border-[#E5E7EB] border py-3 px-4 rounded-2xl">Learn More</button>
                </div>
            </div>
            <img src={Bnr} alt="Banner" />
        </div>
    )
}