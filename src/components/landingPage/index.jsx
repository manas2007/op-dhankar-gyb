import { useState } from 'react';
import About from '../about';
import Blogs from '../blogs';
import Book from '../book';
import EmailBanner from '../emailBanner';
import Footer from '../footer';
import HeroSection from '../heroSection';
import Highlights from '../highlights';
import Media from '../media';
import Pillars from '../pillars';
import LetsTalkModal from '../letsTalkModal';

const LandingPage = () => {

    const [showLetsTalkModal, setShowLetsTalkModal] = useState(false);

    const handleContactUs = () => {
        setShowLetsTalkModal(true);
    }

    return (<div>
        <HeroSection />
        <About handleContactUs={handleContactUs} />
        <Book />
        <Pillars />
        <Media />
        <Highlights />
        <Blogs />
        {/* <EmailBanner /> */}
        <Footer />
        {showLetsTalkModal ? <LetsTalkModal setShowModal={setShowLetsTalkModal} /> : <></>}
    </div>);

}

export default LandingPage;