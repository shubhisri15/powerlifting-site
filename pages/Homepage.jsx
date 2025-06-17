import CoachingPrograms from "../components/homeComponents/CoachingPrograms";
import HeroSection from "../components/homeComponents/HeroSection";
import Testimonials from "../components/homeComponents/Testimonials";

export default function Homepage() {
    return (
        <main>
            <HeroSection />
            <CoachingPrograms />
            <Testimonials />
        </main>
    )
}