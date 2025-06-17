import { FaInstagram } from "react-icons/fa";

export default function CoachInfo({name, about, picture, instagram, delay=''}) {
    const fadingDivClass = `fade-in-right flex justify-center items-center gap-8 ${delay}`
    return (
        <div className={fadingDivClass}>
            <img src={picture} alt={`Picture of ${name}`} className='w-40 h-40 rounded-lg shadow-2xl'/>
            <div className='flex flex-col gap-4 items-start py-4'>
                <h1 className='text-3xl'>{name}</h1>
                <p className='text-red-200'>{about}</p>
                <a href={instagram.link} target='_blank' rel='noopener' className="flex gap-2 items-center bg-red-950 hover:bg-red-900/80 justify-center px-2 py-1 rounded-lg border-1 border-red-300/50">
                    <FaInstagram size={24}/>
                    {instagram.handle}
                </a>
            </div>
        </div>
        
    )
}