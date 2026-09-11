import NavLogo from '../assets/logo-text.png'
export const Nav = () =>{
    return (
       <nav className="py-4 fixed w-full bg-white shadow-md z-10">
        <div className = "flex justify-between items-center container mx-auto">
                <img src={NavLogo} alt="Nav icon" />
            <ul className="flex gap-4">
                <li className="text-[#DB2777]"><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li>
                <li><a href=""></a>About</li>
                <li><a href=""></a>Contact</li>
            </ul>
            <div className="flex gap-4">
                <button>Sign In</button>
                <button className="bg-[#D91B7E] rounded-2xl text-white p-2">Sign Up</button>
            </div>
        </div>
       </nav>
    )
}