import { useState } from "react";
import { EMAIL_REGEX, footer } from "../global/constants";
import useCheckMobileScreen from "../global/useCheckMobileScreen";
import styles from "./footerStyles.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import Loader from "../global/loader";
import { useRouter } from "next/router";
import { Alert, Snackbar } from "@mui/material";
import Airtable from "airtable";

const Footer = () => {

    const [email, setEmail] = useState("");
    const router = useRouter();
    const isMobile = useCheckMobileScreen();
    const [isError, setIsError] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || "" }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

    const onSocialIconClick = (icon) => {
        if (icon == "FACEBOOK") {
            window.open("https://www.facebook.com/giveyourbestofficial");
        } else if (icon == "INSTAGRAM") {
            window.open("https://www.instagram.com/giveyourbestofficial/");
        } else if (icon == "YOUTUBE") {
            window.open("https://www.youtube.com/@giveyourbest-yoursuccessguide");
        } else if(icon == "X") {
            window.open("https://x.com/give_your_best_");
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const validateEmail = () => {
        if (!EMAIL_REGEX.test(email)) {
            setIsError(true);
            return false
        } else {
            return true
        }
    }

    const saveToAirtable = async () => {
        try {
            const records = await base("Contact Form").create([
                {
                    fields: {
                        Name: "NAME",
                        Email: email,
                        Phone: "NUMBER",
                        Service: "SERVICE",
                        Company: "COMPANY",
                        Message: "MESSAGE",
                    },
                },
            ]);
            console.log("Record created:", records);
            return true;
        } catch (error) {
            console.error("Airtable Error:", error);
            return false;
        }
    };

    const handleSubmit = async () => {
        let success = false;
        setIsLoading(true);
        if (email == "") {
            setIsError(true);
            setIsLoading(false);
            return
        }
        const isEmailValid = validateEmail();
        console.log("Is Email Valid :: ", isEmailValid);


        if (isEmailValid) {
            console.log("IN Validate Email");
            success = await saveToAirtable();
        }
        setIsLoading(false);
        if (success) {
            setIsFormSubmitted(true);
            localStorage.setItem("visitorDetails", JSON.stringify(email));
            localStorage.setItem("isFormSubmitted", true);
        } else {
            setIsError(true);
        }
    }

    const onFooterClick = (route) => {
        router.push(route);
    }

    return (<div className={styles.footerParent} >
        <div className={styles.footerWrapper} >

            <div className={styles.footerUpperSection}>

                <div className={styles.footerContentWrapper} >
                    <div className={styles.footerContentUpper}>
                        <img src="/assets/images/logo.png" />
                        <h4>Give Your Best</h4>
                    </div>

                    <div className={styles.footerNavigationWrapper}>
                        {footer.map((item, index) => (
                            <p key={index} onClick={() => onFooterClick(item.route)}>{item.title}</p>
                        ))}
                    </div>
                </div>

                <div className={styles.emailBannerWrapper} >
                    <div className={styles.emailBannerLeftSection} >
                        <h3>Join Our Community</h3>
                        <p>Join a community of like minded people discovering new ways to grow, learn, and live with purpose.</p>
                    </div>
                    <div className={styles.emailBannerRightSection} >
                        <input onChange={(e) => handleEmailChange(e)} placeholder="Enter your email address..." />
                        <button onClick={handleSubmit} >{isLoading ? <Loader size="12px" color="white" /> : "Subscribe"}</button>
                    </div>
                </div>

            </div>

            <div className={styles.footerLowerSection}>
                <p>Copyright 2025@giveyourbest</p>
                <div className={styles.footerSocialsWrapper}>
                    <FacebookIcon onClick={() => onSocialIconClick("FACEBOOK")} sx={{ margin: "0 0.5rem", color: "#173f75",cursor:"pointer" }} />
                    <YouTubeIcon onClick={() => onSocialIconClick("YOUTUBE")}  sx={{ margin: "0 0.5rem", color: "#173f75",cursor:"pointer" }} />
                    <InstagramIcon onClick={() => onSocialIconClick("INSTAGRAM")}  sx={{ margin: "0 0.5rem", color: "#173f75",cursor:"pointer" }} />
                    <XIcon onClick={() => onSocialIconClick("X")}  sx={{ margin: "0 0.5rem", color: "#173f75",cursor:"pointer" }} />
                </div>
            </div>

            <Snackbar open={isFormSubmitted} autoHideDuration={6000} onClose={() => setIsFormSubmitted(false)}>
                <Alert severity="success" sx={{ width: "100%" }}>
                    Email registered successfully.
                </Alert>
            </Snackbar>

            <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    Please fill the required field.
                </Alert>
            </Snackbar>

        </div>
    </div>);

}

export default Footer;