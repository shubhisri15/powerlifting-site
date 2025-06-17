import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import CTAButton from "./CTAButton";
import logo from '../assets/bc_logo.svg';

export default function NavBar() {
    const linkUnderline = `after:content-[''] after:block after:h-1 after:bg-red-700 after:transition-all after:duration-200`
    return (
        <header className='fixed top-0 left-0 w-full z-[1000] flex items-center py-2 px-8 bg-gray-950'>
            <nav className='flex flex-1 justify-start gap-8 text-sm'>
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
            <div className='flex justify-center flex-shrink-0 w-48'>
                <Link to="/">
                    <img src={logo} alt="Based Coaching logo" className="mx-auto h-15" />
                </Link>
            </div>
            <div className='flex flex-1 justify-end'>
                <CTAButton />
            </div>
        </header>
    );
}
