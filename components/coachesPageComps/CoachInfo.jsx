import { FaInstagram } from "react-icons/fa";

export default function CoachInfo({name, about, picture, instagram, delay=''}) {
    const fadingDivClass = `fade-in-right flex flex-col sm:flex-row justify-center items-center gap-8 ${delay}`
    return (
        <div className={fadingDivClass}>
            <img src={picture} alt={`Picture of ${name}`} className='sm:w-40 w-full object-cover h-40 rounded-lg shadow-2xl'/>
            <div className='flex flex-col gap-4 sm:items-start py-4 items-center text-center justify-center'>
                <h1 className='text-2xl'>{name}</h1>
                <p className='text-red-300'>{about}</p>
                <a href={instagram.link} target='_blank' rel='noopener' className="flex gap-2 items-center bg-red-950 hover:bg-red-900/80 justify-center px-2 py-1 rounded-lg border-1 border-red-800/50">
                    <FaInstagram size={24}/>
                    {instagram.handle}
                </a>
            </div>
        </div>
        
    )
}