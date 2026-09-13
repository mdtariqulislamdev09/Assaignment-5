import Logo from '../assets/logo-text.png'

export const Footer = () =>{
   return( 
    <footer className='border-t border-amber-100 mt-7'>
    <div className='container mx-auto px-7 py-10'>
    <div className='flex justify-between gap-5 py-10'>
    <div>
        <img src={Logo} alt="" />
        <p className='font-normal text-[12px] text-[#64748B] mt-3'>Curated tools, technologies, and resources for developers building<br />modern software.</p>
        <ul className='flex gap-3 mt-3'>
            <li className='font-semibold text-[12px] mt-2'>GitHub</li>
            <li className='font-semibold text-[12px] mt-2'>Twitter</li>
            <li className='font-semibold text-[12px] mt-2'>LinkedIn</li>
        </ul>
    </div>
    <div>
        <h4 className='font-bold text-[12px] text-[#0F172A]'>PRODUCT</h4>
        <ul>
            <li className='font-normal text-[12px] mt-2'>Home</li>
            <li className='font-normal text-[12px] mt-2'>Technologies</li>
            <li className='font-normal text-[12px] mt-2'>Projects</li>
        </ul>
    </div>
    <div>
        <h4 className='font-bold text-[12px] text-[#0F172A]'>COMPANY</h4>
        <ul>
            <li className='font-normal text-[12px] mt-2'>About</li>
            <li className='font-normal text-[12px] mt-2'>Contact</li>
            <li className='font-normal text-[12px] mt-2'>Careers</li>
    </ul>
    </div>
    <div>
        <h4 className='font-bold text-[12px] text-[#0F172A]'>LEGAL</h4>
        <ul>
            <li className='font-normal text-[12px] mt-2'>Privacy Policy</li>
            <li className='font-normal text-[12px] mt-2'>Terms of Service</li>
        </ul>
    </div>
    </div>
        <div className='flex justify-between mt-7 border-t border-amber-100 '>
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div>
                <ul className='flex gap-3'>
                    <li className='font-normal text-[12px] text-[#94A3B8]'><a href="">Privacy</a></li>
                    <li className='font-normal text-[12px] text-[#94A3B8]'><a href="">Terms</a></li>
                </ul>
            </div>
        </div>
   </div>
    </footer>
    )};
    export default Footer;