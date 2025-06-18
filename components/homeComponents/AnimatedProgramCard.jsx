import { NavLink } from "react-router"

export default function AnimatedProgramCard({title, description}) {
    return (
        <section className="card sm:w-1/3 w-full bg-red-700/20 border-1 border-red-800 rounded-lg py-4 px-6 flex flex-col justify-start gap-4 shadow-lg ">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-red-300">{description}</p>
            <NavLink 
                to='/programs'
                className='font-bold cursor-pointer underline text-sm'
            >
                Learn More
            </NavLink>
        </section>
    )
}