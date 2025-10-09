import { aboutCards } from '../global/constants';
import useCheckMobileScreen from '../global/useCheckMobileScreen';
import styles from './aboutStyles.module.css';

const About = (props) => {

    const { handleContactUs } = props;

    const isMobile = useCheckMobileScreen();

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
                        collaborative success.</p>
                </div>
                <img src='/assets/images/landingPage/the-man-1.jpg' />
                <button onClick={handleContactUs}>Contact</button>
            </div>

            {/* Cards */}
            <div className={styles.aboutCardsWrapper}>
                {aboutCards.map((card, index) => (
                    <div className={styles.aboutCard} style={{ margin: (index == 1 && !isMobile) ? "0.5rem" : "" }} key={index}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>


        </div>
    </div>);

}

export default About;