import Loader from "../global/loader";
import { Alert, Snackbar } from "@mui/material";
import styles from "./emailBannerStyles.module.css";

const EmailBanner = () => {

    const saveToAirtable = async () => {
        try {
            const records = await base("Emailer").create([
                {
                    fields: {
                        Email: email,
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

    return (<div className={styles.emailBannerParent} >
        <div className={styles.emailBannerWrapper} >
            <div className={styles.emailBannerLeftSection} >
                <h3>Join Our Community</h3>
                <p>Only Insights on Give Your Best way. No spam</p>
            </div>
            <div className={styles.emailBannerRightSection} >
                <button onClick={handleSubmit} >{isLoading ? <Loader size="12px" color="white" /> : "Subscribe"}</button>
            </div>
        </div>
        <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)}>
            <Alert severity="error" sx={{ width: "100%" }}>
                Please enter a valid email address!
            </Alert>
        </Snackbar>
    </div>);

}

export default EmailBanner;