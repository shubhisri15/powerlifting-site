import CTAButton from "../CTAButton";
import heroVideo from "../../assets/hero_video.mp4";

export default function HeroSection() {
    return (
        <section className='relative flex flex-col gap-10 items-center justify-center py-8 w-full h-[400px] overflow-hidden'>
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75 z-10"></div>
            <div className='relative z-20 flex flex-col px-4 items-center justify-center gap-6 text-center'>
                <h1 className="text-5xl font-bold italic">SMASH PRS. BUILD LEGACY.</h1>
                <p>Join 300+ powerlifters who’ve built total strength, crushed DOTS scores, and leveled up with customized strength training programs.</p>
                <div><CTAButton /></div>
            </div>
        </section>
    )
}