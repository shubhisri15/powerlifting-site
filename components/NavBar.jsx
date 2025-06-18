import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";
import CTAButton from "./CTAButton";
import logo from '../assets/bc_logo.svg';
import logoMobile from '../assets/bc_icon.svg';
import { IoMenu } from "react-icons/io5"
import MobileMenu from "./homeComponents/MobileMenu";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const linkUnderline = `after:content-[''] after:block after:h-1 after:bg-red-700 after:transition-all after:duration-200`
    return (
        <header className='fixed top-0 left-0 w-full z-[1000] flex items-center py-2 px-8 bg-gray-950'>
            <button
                className="md:hidden flex flex-1 justify-start"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
            >
                <IoMenu size={30}/>
            </button>

            <nav className='flex flex-1 justify-start gap-8 text-sm hidden md:flex'>
                <NavLink 
                    to='/' end 
                    className={({isActive}) => clsx(linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/coaches'
                    className={({isActive}) => clsx(linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}
                >
                    Our Coaches
                </NavLink>
                <NavLink 
                    to='/programs'
                    className={({isActive}) => clsx(linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}
                >
                    Programs
                </NavLink>
                <NavLink 
                    to='/contact'
                    className={({isActive}) => clsx(linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}
                >
                    Contact
                </NavLink>
            </nav>
            <div className='flex justify-center flex-shrink-0 sm:w-48 w-30'>
                <Link to="/">
                    <img src={logo} alt="Based Coaching logo" className="mx-auto h-15" />
                </Link>
            </div>
            
            <div className='md:flex flex-1 justify-end w-1/4 hidden'>
                <CTAButton />
            </div>
            <MobileMenu 
                open={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
                linkUnderline={linkUnderline}
            />
        </header>
    );
}
