import { useRouter } from "next/router";
import Header from "../header";
import styles from "./heroSectionStyles.module.css";

const HeroSection = () => {

    const router = useRouter();

    const handleButtonClick = () => {
        window.open("https://amzn.in/d/1lVPMyj");
    }

    return (<div className={styles.heroSectionParent}>
        <Header template="BACKGROUND" />
        <div className={styles.heroSectionWrapper}>
            <div>
                <h1>Give Your Best <br/> Take Others’ Best</h1>
                <p>A way of seeing life that inspires growth, leadership,<br/>
                    and balance in today’s world.</p>
                <button onClick={handleButtonClick} >Begin Your Journey</button>
            </div>
        </div>
    </div>);

}

export default HeroSection;