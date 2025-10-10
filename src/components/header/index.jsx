import { useRouter } from "next/router";
import { headerTabs } from "../global/constants";
import styles from "./headerStyles.module.css";
import useCheckMobileScreen from "../global/useCheckMobileScreen";
import TopicIcon from '@mui/icons-material/Topic';
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Header = (props) => {

    const { template } = props;
    const [showSocials, setShowSocials] = useState(false);
    const isMobile = useCheckMobileScreen();
    const router = useRouter();
    const currentPath = router.asPath
    const [showSidebar, setShowSidebar] = useState(false);

    const onSocialIconClick = (icon) => {
        if (icon == "FACEBOOK") {
            window.open("https://www.facebook.com/giveyourbestofficial");
        } else if (icon == "INSTAGRAM") {
            window.open("https://www.instagram.com/giveyourbestofficial/");
        } else if (icon == "YOUTUBE") {
            window.open("https://www.youtube.com/@giveyourbest-yoursuccessguide");
        } else if (icon == "X") {
            window.open("https://x.com/give_your_best_");
        }
    }

    const onLogoClick = () => {
        router.push("/");
    }

    const onTabClick = (tab) => {
        setShowSidebar(false);
        router.push(tab.route);
    }

    const handleLeftArrowClick = () => {
        setShowSocials(true);
    }

    const handleRightArrowClick = () => {
        setShowSocials(false)
    }

    return (<div className={styles.headerParent}>
    <div className={styles.headerWrapper}>

            <div onClick={onLogoClick} className={styles.logoWrapper}>
                <img src={template == "SOLID" ? "/assets/images/logo.png" : "/assets/images/logo-white.png"} alt="Logo" />
                <h4 style={template == "SOLID" ? { color: "#1a56a5" } : { color: "white" }}>Give Your Best</h4>
            </div>
            <div className={styles.headerTabsWrapper}>
                {headerTabs.map((tab, index) => (
                    <h4 onClick={() => onTabClick(tab)} style={template == "SOLID" ? { color: "#1a56a5", borderBottom: currentPath == tab.route ? "2px solid white" : "", borderRadius:"1px" } : { color: "white", borderBottom: currentPath == tab.route ? "2px solid #1a56a5" : "", borderRadius:"1px" }} key={index}>{tab.name}</h4>
                ))}
            </div>
            {isMobile ? <TopicIcon onClick={() => setShowSidebar(true)} sx={template == "SOLID" ? { color: "#1a56a5" } : { color: "white" }} /> : <></>}

            <SwipeableDrawer
                anchor="left"
                sx={{ width: "90%" }}
                open={showSidebar}
                onClose={() => setShowSidebar(false)}
                onOpen={() => setShowSidebar(true)}
            >
                <div className="w-[18rem] bg-[#173f75] h-full text-[white]">
                    <div style={{ padding: "0.8rem 0.5rem", borderBottom: "1px solid lightgrey" }} onClick={onLogoClick} className={styles.logoWrapper}>
                        <img src="/assets/images/logo-white.png" alt="Logo" />
                        <h4 style={{ color: "white" }}>Give Your Best</h4>
                    </div>
                    {/* Tabs */}
                    <div className="flex-col pt-[]">
                        {headerTabs.map((tab, index) => (
                            <h4 onClick={() => onTabClick(tab)} style={{ borderLeft: currentPath == tab.route ? "4.5px solid white" : "",  color:"white", padding: "0.5rem 1rem", borderBottom: "0.5px solid white" }} key={index}>{tab.name}</h4>
                        ))}
                    </div>
                </div>
            </SwipeableDrawer>

            {/* Floating Navigation */}
            <div className={styles.floatingWrapper}>
                {showSocials ? <div className="flex flex-col-reverse p-[0.1rem] justify-center items-center">
                    <NavigateNextIcon onClick={handleRightArrowClick} sx={{ color: "white" }} />
                    <div>
                        <a href=""><img onClick={() => onSocialIconClick("FACEBOOK")} src="/assets/images/aboutUs/SVG/Facebook-2.svg" /></a>
                        <a href="" ><img onClick={() => onSocialIconClick("INSTAGRAM")} src="/assets/images/aboutUs/SVG/Insta-2.svg" /></a>
                        <a href="" ><img onClick={() => onSocialIconClick("YOUTUBE")} src="/assets/images/aboutUs/SVG/YouTube-2.svg" /></a>
                        <a href=""><img onClick={() => onSocialIconClick("X")} src="/assets/images/aboutUs/SVG/X-2.svg" /></a>
                    </div>

                </div> : <div onClick={handleLeftArrowClick} className="pl-[0.5rem] cursor-pointer"><ArrowBackIosIcon sx={{ color: "white", width: isMobile ? "0.7rem" : "1rem" }} /></div>}

            </div>


        </div>
    </div>);

}

export default Header;