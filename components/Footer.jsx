import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-gray-950 py-8 gap-2">
            <h1 className='font-bold text-2xl'>Find us on Social Media</h1>
            <div className='flex items-center gap-8 py-4'>
                <a href='https://www.instagram.com/basedcoaching/' target='_blank' rel='noopener'><FaInstagram size={24}/></a>
                <a href='https://www.linkedin.com/in/caden-schoffelman-46066a111/' target='_blank' rel='noopener'><FaLinkedin size={24}/></a>
                <a href='https://www.threads.com/@coach_caden' target='_blank' rel='noopener'><FaThreads size={24}/></a>
            </div>
            <p className='text-xs'>@2025 Based Coaching. All Rights Reserved.</p>
            <p className='text-xs'>Privacy Policy | Terms of Service</p>
        </footer>
    )
}