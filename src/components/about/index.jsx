import { aboutCards } from '../global/constants';
import useCheckMobileScreen from '../global/useCheckMobileScreen';
import styles from './aboutStyles.module.css';

const About = (props) => {

    const { handleContactUs } = props;

    const isMobile = useCheckMobileScreen();

    const onSocialIconClick = (icon) => {
        if (icon == "FACEBOOK") {
            window.open("https://www.facebook.com/dhankar.op");
        } else if (icon == "INSTAGRAM") {
            window.open("https://www.instagram.com/omji_dhankar/");
        }
    }

    return (<div className={` ${styles.aboutParent} `}>
        <div className={` ${styles.aboutWrapper} `}>

            {/* Banner */}
            <div className={` ${styles.aboutBannerWrapper} `}>
                <div className={styles.aboutBannerContent}>
                    <div className={styles.aboutBannerHeading}>
                        <h3 >In his own</h3>
                        <h2 >Light</h2>
                    </div>
                    <p >Om Prakash Dhankhar is more than a political
                        leader. He is a life coach, educator, author, cultural
                        advocate, and social reformer. With decades of
                        experience in leadership, education, and public
                        service, he now dedicates himself to spreading a
                        universal philosophy for personal growth and
                        collaborative success.
                    </p>
                    <div style={{display:"flex", paddingTop:"1.5rem"}}>
                        <img style={{width:"2rem", border:"1px solid white"}} alt="Om Prakash Dhankar | Personal | Facebook" onClick={() => onSocialIconClick("FACEBOOK")} src="/assets/images/aboutUs/SVG/Facebook-2.svg" />
                        <img style={{width:"2rem", marginLeft:"1rem", border:"1px solid white"}} alt="Om Prakash Dhankar | Personal | Instagram" onClick={() => onSocialIconClick("INSTAGRAM")} src="/assets/images/aboutUs/SVG/Insta-2.svg" />
                    </div>

                </div>
                <img src='/assets/images/landingPage/the-man-1.jpg' alt='Om Prakash Dhankar | GiveYourBest' />
                <button onClick={handleContactUs}>Contact</button>
            </div>

            {/* Cards */}
            <div className={styles.aboutCardsWrapper}>
                {aboutCards.map((card, index) => (
                    <div className={styles.aboutCard} style={{ margin: (index == 1 && !isMobile) ? "0.5rem" : "" }} key={`ABOUT_CARDS_${index+1}`}>
                        <img src={card.image} alt={card.altText} />
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>


        </div>
    </div>);

}

export default About;