import { useState } from 'react';
import { pillarsTabs } from '../global/constants';
import styles from './pillarsStyles.module.css';
import { useRouter } from 'next/router';

const Pillars = () => {

    const [activeTab, setActiveTab] = useState("LD");
    const router = useRouter();

    const onTabClick = (tab) => {
        setActiveTab(tab.id);
    }

    const onReadMoreClick = () => {
        router.push("/blogs");
    }

    const activeTabWidget = () => {
        if (activeTab == "LD") {
            return (<div className={styles.activeTabWrapper}>
                <img src='/assets/images/landingPage/core-pillars.jpg' />
                <div className={styles.activeTabContent}>
                    <h5>Leadership Development</h5>
                    <p>True leadership isn’t about authority — it’s about authenticity. Great leaders don’t just direct others; they inspire through example, empathy, and integrity.</p>
                    <button onClick={onReadMoreClick}>Read More</button>
                </div>
            </div>)
        } else if (activeTab == "PG") {
            return (<div className={styles.activeTabWrapper}>
                <img src='/assets/images/landingPage/core-pillars.jpg' />
                <div className={styles.activeTabContent}>
                    <h5>Personality Growth</h5>
                    <p>Your personality grows not by imitation, but by introspection. It’s about discovering your strengths, refining your character, and embracing your uniqueness.</p>
                    <button onClick={onReadMoreClick} >Read More</button>
                </div>
            </div>)
        } else if (activeTab == "SS") {
            return (<div className={styles.activeTabWrapper}>
                <img src='/assets/images/landingPage/core-pillars.jpg' />
                <div className={styles.activeTabContent}>
                    <h5>Spiritual Success</h5>
                    <p>Success of the soul is measured not in wealth, but in wisdom and peace. Spiritual success comes when your actions align with your values and your mind finds stillness in purpose.</p>
                    <button onClick={onReadMoreClick} >Read More</button>
                </div>
            </div>)
        }
    }

    return (<div className={styles.pillarsParent}>
        <div className={styles.pillarsWrapper}>

            <div className={styles.pillarsHeaderWrapper}>
                <h2>Three Core Pillars</h2>
                <p>At the heart of Give Your Best lie three timeless pillars that guide
                    every individual toward a life of meaning, balance, and impact.</p>
            </div>

            {/* Tabs */}
            <div className={styles.pillarsTabWrapper}>
                {pillarsTabs.map((tab, index) => (
                    <h6 style={activeTab == tab.id ? {color:"#1a56a5", borderBottom:"3px solid #1a56a5", fontWeight:"bold"} : {}} onClick={() => onTabClick(tab)} >{tab.tab}</h6>
                ))}
            </div>

            <div>
                {activeTabWidget()}
            </div>


        </div>
    </div>);

}

export default Pillars;