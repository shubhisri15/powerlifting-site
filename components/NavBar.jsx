import { NavLink } from "react-router"
import CTAButton from "./CTAButton"

export default function NavBar() {
    return (
        <div className='flex justify-between'>
            <NavLink to='/' end>Home</NavLink>
            <NavLink to='/coaches'>Our Coaches</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <CTAButton />
        </div>
    )
}