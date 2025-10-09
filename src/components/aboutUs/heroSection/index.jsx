import Header from "@/components/header";
import styles from "./aboutHeroStyles.module.css";

const AboutHeroSection = () => {
    return (<div className={styles.aboutHeroSectionParent}>
        <Header template="BACKGROUND" />
        <div className={styles.aboutHeroSectionWrapper}>

            <div className={styles.aboutHeroSectionContent}>
                <h1>A Movement for Growth,<br/> Balance & Clarity <br /> A Movement for Everyone</h1>
            </div>

        </div>
    </div>)
}

export default AboutHeroSection;