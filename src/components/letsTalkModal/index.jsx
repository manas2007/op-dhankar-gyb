import Airtable from "airtable";
import XIcon from '@mui/icons-material/X';
import { useEffect, useState } from "react";
import styles from "./letsTalkStyles.module.css";
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Alert, FormControl, InputLabel, MenuItem, Select, Snackbar, TextField, ThemeProvider } from "@mui/material";
import { EMAIL_REGEX, ERROR_THEME, FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, PHONE_REGEX, SERVICES, THEME, X_LINK, YOUTUBE_LINK } from "../global/constants";
import Loader from "../global/loader";
import useCheckMobileScreen from "../global/useCheckMobileScreen";

// Initialize Airtable
const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || "" }).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "");

const LetsTalkModal = (props) => {
    const { setShowModal } = props;
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useCheckMobileScreen();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [userInfo, setUserInfo] = useState({ name: "", email: "", number: "", message: "" });
    const [errors, setErrors] = useState({ name: "", email: "", number: "", message: "" });
    const [showRealTimeValidation, setShowRealTimeValidation] = useState(false);

    useEffect(() => {
        const isFormSubmitted = localStorage.getItem("isFormSubmitted");
        if (isFormSubmitted) {
            setIsFormSubmitted(false);
        }
    }, [isFormSubmitted]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (showRealTimeValidation) {
            const newErrors = { ...errors };
            switch (name) {
                case "name":
                    newErrors.name = value.trim().length >= 3 ? "" : "Name must be at least 3 characters long";
                    break;
                case "email":
                    newErrors.email = EMAIL_REGEX.test(value) ? "" : "Please enter a valid email address";
                    break;
                case "number":
                    newErrors.number = PHONE_REGEX.test(value) ? "" : "Please enter a valid phone number";
                    break;
                default:
                    break;
            }
            setErrors(newErrors);
        }

        setUserInfo({ ...userInfo, [name]: value });
    };

    const validateUserInfo = () => {
        const errors = {};
        if (!userInfo.name?.trim()) {
            errors.name = "Name is required";
        } else if (userInfo.name.trim().length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }
        if (!userInfo.email) {
            errors.email = "Email is required";
        } else if (!EMAIL_REGEX.test(userInfo.email)) {
            errors.email = "Please enter a valid email address";
        }
        if (!userInfo.number) {
            errors.number = "Phone number is required";
        } else if (!PHONE_REGEX.test(userInfo.number)) {
            errors.number = "Please enter a valid phone number";
        }
        setErrors(errors);
        return errors;
    };

    const saveToAirtable = async () => {
        try {
            const records = await base("Contact Form").create([
                {
                    fields: {
                        Name: userInfo.name,
                        Email: userInfo.email,
                        Phone: userInfo.number,
                        Message: userInfo.message,
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

    const handleFormSubmission = async () => {
        setIsLoading(true);
        const success = await saveToAirtable();
        setIsLoading(false);
        if (success) {
            setIsFormSubmitted(true);
            localStorage.setItem("visitorDetails", JSON.stringify(userInfo));
            localStorage.setItem("isFormSubmitted", true);
        } else {
            setIsError(true);
        }
    };

    const onSubmitClick = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowRealTimeValidation(true);
        const newErrors = validateUserInfo();

        if (Object.keys(newErrors).length === 0) {
            await handleFormSubmission();
        } else {
            setIsError(true);
            setIsLoading(false);
        }
    };

    // Rest of your component (UI, JSX) remains unchanged
    return (
        <div className="relative">
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className={`my-6 mx-auto max-w-5xl bg-white h-fit rounded-[10px] min-h-[] relative ${isMobile ? 'w-[95%] h-fit' : 'w-[40rem]'}`}>
                    {isFormSubmitted ? (
                        <div className={`${styles.formSuccessWrapper}`}>
                            <div className={`${styles.formSuccessUpperSection}`}>
                                <div className={`${styles.formSuccessUpperContent}`}>
                                    <h3 className="text-[2.5rem] font-extrabold leading-[2.6rem]">Our Team will connect with you shortly!</h3>
                                    <p className="pt-[1rem]">Have a great day</p>
                                    <div className="flex justify-between pt-[1rem] w-[25%] mx-auto">
                                        <a href={INSTAGRAM_LINK}><InstagramIcon sx={{ color: "#ff00b1" }} /></a>
                                        <a href={YOUTUBE_LINK}><YouTubeIcon sx={{ color: "red" }} /></a>
                                        <a href={FACEBOOK_LINK}><FacebookIcon sx={{ color: "#4D4BE4" }} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`${styles.letsTalkParent}`}>
                            <div className={`${styles.letsTalkBannerWrapper}`}>
                                <video loop autoPlay={true} className={`${styles.letsTalkBanner}`} src="/assets/images/global/lets-talk/comp1.mov" />
                            </div>
                            <div className={`${styles.letsTalkForm}`}>
                                <div className={`${styles.formHeader}`}>
                                    <h3>Your Questions, Our Expertise</h3>
                                    <p>Let's talk strategy</p>
                                </div>
                                <div className={`${styles.formFieldsWrapper}`}>
                                    <div className={`${styles.formLeftField}`}>
                                        <ThemeProvider theme={errors.name ? ERROR_THEME : THEME}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Name"
                                                type="text"
                                                fullWidth
                                                name="name"
                                                color="secondary"
                                                onChange={handleChange}
                                                value={userInfo.name}
                                                variant="outlined"
                                            />
                                            {errors.name ? <p className={styles.validationMessage}>{errors.name}</p> : <></>}
                                        </ThemeProvider>
                                    </div>
                                    <div className={`${styles.formRightField}`}>
                                        <ThemeProvider theme={errors.number ? ERROR_THEME : THEME}>
                                            <TextField
                                                id="outlined-basic"
                                                label="Phone Number"
                                                type="number"
                                                fullWidth
                                                name="number"
                                                color="secondary"
                                                onChange={handleChange}
                                                value={userInfo.number}
                                                variant="outlined"
                                            />
                                            {errors.number ? <p className={styles.validationMessage}>{errors.number}</p> : <></>}
                                        </ThemeProvider>
                                    </div>
                                </div>
                                <div className={`${styles.formFieldsWrapper}`}>
                                    <ThemeProvider theme={errors.email ? ERROR_THEME : THEME}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Email"
                                            type="text"
                                            fullWidth
                                            name="email"
                                            color="secondary"
                                            onChange={handleChange}
                                            value={userInfo.email}
                                            variant="outlined"
                                        />
                                        {errors.email ? <p className={styles.validationMessage}>{errors.email}</p> : <></>}
                                    </ThemeProvider>
                                </div>
                                <div className="mb-[1rem]">
                                    <div className={styles.textFieldWrapper}>
                                        <textarea
                                            rows={3}
                                            name="message"
                                            placeholder="Message"
                                            value={userInfo.message}
                                            onChange={handleChange}
                                            className="border-[2px] border-[#E2ECF5] w-full mt-[1rem] rounded-[10px] text-[0.85rem] px-[0.8rem] py-[0.5rem] outline-none"
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.formFooter}`}>
                                    <button onClick={onSubmitClick}>{isLoading ? <Loader color="white" size="12px" /> : "Get Started"}</button>
                                    <div className={`${styles.formSocials}`}>
                                        <a href={INSTAGRAM_LINK}><InstagramIcon sx={{ color: "#ff00b1" }} /></a>
                                        <a href={YOUTUBE_LINK}><YouTubeIcon sx={{ color: "red" }} /></a>
                                        <a href={FACEBOOK_LINK}><FacebookIcon sx={{ color: "#4D4BE4" }} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div onClick={() => setShowModal(false)} className={`${styles.closeIcon}`}>
                        <CloseIcon style={{ fontSize: "1rem", color: "#4E4E4E" }} />
                    </div>
                    <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)}>
                        <Alert severity="error" sx={{ width: "100%" }}>
                            Please fill the required details or try again later!
                        </Alert>
                    </Snackbar>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    );
};

export default LetsTalkModal;