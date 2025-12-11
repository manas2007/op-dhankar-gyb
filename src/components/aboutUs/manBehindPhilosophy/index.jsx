import { use } from "react";
import styles from "./manBehindStyles.module.css";
import useCheckMobileScreen from "@/components/global/useCheckMobileScreen";

const ManBehindPhilosophy = () => {

    const isMobile = useCheckMobileScreen();

    const onSocialIconClick = (icon) => {
        if (icon == "FACEBOOK") {
            window.open("https://www.facebook.com/dhankar.op");
        } else if (icon == "INSTAGRAM") {
            window.open("https://www.instagram.com/omji_dhankar/");
        }
    }

    return (<div className={styles.manBehindParent}>
        <div className={styles.manBehindWrapper}>

            <img alt="Om Prakash Dhankar - GiveYourBest | Narendra Modi" src="/assets/images/aboutUs/man-Behind-the.png" />
            <div className={styles.manBehindContentWrapper}>

                <div className={styles.manBehindHeaderWrapper}>
                    <h3>Man behind the</h3>
                    <h2>Philosophy</h2>
                </div>
                <div>
                    <p>The philosophy has been articulated by O.P. Dhankhar—author,
                        educator, motivational speaker, and public leader. But more than
                        sharing these ideas, he lives them. His own journey embodies the
                        practice of giving his best while remaining open to learning from
                        others and growing through collaboration.</p>
                    <p>While known for his distinguished political career, his deeper
                        aspiration is to be remembered as a motivational thought leader
                        who inspires individuals to realize their fullest potential.</p>
                    <p>Through decades of leadership and deep study of Indian values,
                        modern psychology, and leadership philosophy, he shares insights
                        on leadership development, spiritualism for success, emotional
                        management, purpose-driven living, and collaboration as a force
                        for growth.</p>
                </div>
                <div style={{display:"flex", paddingTop: isMobile ? "" : "0.5rem"}}>
                        <img style={{width:"2rem", cursor:"pointer"}} alt="Om Prakash Dhankar | Personal | Facebook" onClick={() => onSocialIconClick("FACEBOOK")} src="/assets/images/aboutUs/SVG/Facebook-2.svg" />
                        <img style={{width:"2rem", marginLeft:"1rem", cursor:"pointer"}} alt="Om Prakash Dhankar | Personal | Instagram" onClick={() => onSocialIconClick("INSTAGRAM")} src="/assets/images/aboutUs/SVG/Insta-2.svg" />
                </div>

            </div>

        </div>

    </div>)
}

export default ManBehindPhilosophy;