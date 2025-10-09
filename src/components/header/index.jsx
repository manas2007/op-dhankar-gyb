import { useRouter } from "next/router";
import { headerMobileTabs, headerTabs } from "../global/constants";
import styles from "./headerStyles.module.css";
import useCheckMobileScreen from "../global/useCheckMobileScreen";
import TopicIcon from '@mui/icons-material/Topic';
import { SwipeableDrawer } from "@mui/material";
import { useState } from "react";

const Header = (props) => {

    const { template } = props;
    const isMobile = useCheckMobileScreen();
    const [showSidebar, setShowSidebar] = useState(false);

    const router = useRouter();

    const onLogoClick = () => {
        router.push("/");
    }

    const onTabClick = (tab) => {
        setShowSidebar(false);
        router.push(tab.route);
    }

    return (<div className={styles.headerParent}>
        <div className={styles.headerWrapper}>

            <div onClick={onLogoClick} className={styles.logoWrapper}>
                <img src={template == "SOLID" ? "/assets/images/logo.png" : "/assets/images/logo-white.png"} alt="Logo" />
                <h4 style={template == "SOLID" ? { color: "#1a56a5" } : { color: "white" }}>Give Your Best</h4>
            </div>
            <div className={styles.headerTabsWrapper}>
                {headerTabs.map((tab, index) => (
                    <h4 onClick={() => onTabClick(tab)} style={template == "SOLID" ? { color: "#1a56a5" } : { color: "white" }} key={index}>{tab.name}</h4>
                ))}
            </div>
            {isMobile ? <TopicIcon onClick={() => setShowSidebar(true)} sx={{ color: "white" }} /> : <></>}

            <SwipeableDrawer
                anchor="left"
                sx={{ width: "90%" }}
                open={showSidebar}
                onClose={() => setShowSidebar(false)}
                onOpen={() => setShowSidebar(true)}
            >
                <div className="w-[18rem] bg-[#173f75] h-full text-[white]">
                    <div style={{padding:"0.8rem 0.5rem",borderBottom:"1px solid lightgrey"}} onClick={onLogoClick} className={styles.logoWrapper}>
                        <img  src="/assets/images/logo-white.png" alt="Logo" />
                        <h4 style={{ color: "white" }}>Give Your Best</h4>
                    </div>
                    {/* Tabs */}
                    <div className="flex-col pt-[0.5rem]">
                     {headerMobileTabs.map((tab, index) => (
                    <h4 onClick={() => onTabClick(tab)} style={{ color:"white", padding:"0.5rem 1rem", borderBottom:"0.5px solid white"}} key={index}>{tab.name}</h4>
                ))}
                    </div>
                </div>
            </SwipeableDrawer>
        </div>
    </div>);

}

export default Header;