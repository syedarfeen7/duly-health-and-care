import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import SeminarDetailForm from "../Components/Form/SeminarDetialForm";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/HeroSection/HeroSection";
export default function HomePage() {
    return <>
        <Header />
        <HeroSection />
        <SeminarDetailForm />
        <BackgroundImage />
    </>
}