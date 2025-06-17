import CTAButton from "../CTAButton";
import ScrollingCarousel from "./ScrollingCarousel";

export default function Testimonials() {
    return (
        <section className="flex flex-col items-center py-8 gap-8">
            <h1 className="font-bold text-2xl">Client Success Stories</h1>
            <p className='text-red-300 w-2/3 text-center'>Don’t go by our word! Hear from our powerlifting clients, how they smashed PRs, 
                achieve record-breaking strength gains, and transformed their squat, bench press, and deadlift with Based Coaching.</p>
            <section className='flex w-full h-100 bg-red-950/80 gap-4 py-4 items-center'>
                <ScrollingCarousel />
            </section>
            <section className="flex flex-col items-center gap-8">
                <h1 className="font-bold text-2xl">Ready to become a Based Athlete and take your powerlifting to the next level?</h1>
                <CTAButton />
            </section>
        </section>
    )
}