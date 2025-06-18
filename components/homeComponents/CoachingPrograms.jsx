import AnimatedProgramCard from "./AnimatedProgramCard";

export default function CoachingPrograms() {
    return (
        <section className="flex flex-col items-center py-8 px-4">
            <h1 className="font-bold text-2xl text-center">Comprehensive Coaching Programs</h1>
            <div className="flex flex-col justify-center gap-8 items-center p-8 sm:flex-row">
                <AnimatedProgramCard 
                    title='1:1 Coaching for Athletes'
                    description='One-on-one coaching tailored to your specific goals, experience level, and schedule.'
                />
                <AnimatedProgramCard 
                    title='Business Coaching for Coaches'
                    description='Mentorship and strategies to help coaches build successful and sustainable businesses.'
                />
            </div>
            <hr className="sm:w-3/4 w-full h-0.25 bg-red-900 border-none"/>
        </section>
    )
}