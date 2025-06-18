// MobileMenu.jsx
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export default function MobileMenu({ open, onClose, linkUnderline }) {
    if (!open) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-gray-950/95 flex flex-col items-center py-4 md:hidden z-50 fade-in-down">
            <NavLink to='/' end onClick={onClose} className={({isActive}) => clsx('py-2', linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}>Home</NavLink>
            <NavLink to='/coaches' onClick={onClose} className={({isActive}) => clsx('py-2', linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}>Our Coaches</NavLink>
            <NavLink to='/programs' onClick={onClose} className={({isActive}) => clsx('py-2', linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}>Programs</NavLink>
            <NavLink to='/contact' onClick={onClose} className={({isActive}) => clsx('py-2', linkUnderline, isActive ? 'font-bold after:w-8' : 'after:w-0')}>Contact</NavLink>
        </div>
    );
}
