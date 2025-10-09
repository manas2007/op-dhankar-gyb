import AboutHeroSection from "./heroSection";
import WhatIf from "./whatIf";
import ManBehindPhilosophy from "./manBehindPhilosophy";
import Essence from "./essence";
import WhyThisMatter from "./whyThisMatter";
import JoinMovement from "./joinMovement";
import Footer from "../footer";
import LetsTalkModal from "../letsTalkModal";
import { useState } from "react";

const AboutUs = () => {

    const [showLetsTalkModal, setShowLetsTalkModal] = useState(false);
    const handleContactUs = () => {
        setShowLetsTalkModal(true);
    }

    return (<div>

        {/* Hero Section */}
        <AboutHeroSection />
        <WhatIf />
        <ManBehindPhilosophy />
        <Essence />
        <WhyThisMatter />
        <JoinMovement handleContactUs={handleContactUs} />
        <Footer />


        {showLetsTalkModal ? <LetsTalkModal setShowModal={setShowLetsTalkModal} /> : <></>}

    </div>)
}

export default AboutUs;