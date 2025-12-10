import { whyThisMatterPoints } from "@/components/global/constants";
import styles from "./whyThisMatterStyles.module.css";

const WhyThisMatter = () => {
    return (<div className={styles.whyThisMatterParent}>
        <div className={styles.whyThisMatterWrapper}>

            <div className={styles.whyThisMatterHeader} >
                <h2>Why This Matters Now</h2>
                <p>In a world increasingly driven by competition, division, and noise, Give Your Best <br/>
                    is a call for unity and shared growth. It speaks to universal human needs:</p>
            </div>
            <div className={styles.whyThisMatterContent} >
                <div className={styles.whyThisMatterLeftSection} >
                    {whyThisMatterPoints.map((point, index) => (
                        <div key={`WHY_THIS_${index+1}`} className={styles.pointWrapper}>
                            <h3 className={styles.pointIndex}>{point.header}</h3>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.whyThisMatterRightSection} >
                    <img src="/assets/images/aboutUs/why-This-matters.png" alt="OP Dhankar | GiveYourBest | Why this Matters" />
                    <h4>This isn't just philosophy, it's a cultural
                        shift where people rise by helping others
                        rise, and success is measured by collective
                        progress, not just personal achievement.</h4>
                </div>
            </div>

        </div>

    </div>)
}

export default WhyThisMatter;