import Header from "@/components/header";
import styles from "./blogTemplateStyles.module.css";
import PersonalGrowth from "../blogs/personalGrowth";
import PersonalDevelopment from "../blogs/personalDevelopment";
import MindFullNess from "../blogs/mindfulness";
import Footer from "@/components/footer";


const BlogTemplate = (props) => {

    const { activeBlog } = props;

    const renderBlog = (activeBlog) => {

        console.log("Active Blog :: renderBlog ", activeBlog);

        if (activeBlog.route == "personal-growth-discover-yourself") {
            return (<PersonalGrowth />)
        } else if (activeBlog.route == "personal-development-goals-that-last") {
            return (<PersonalDevelopment />)
        } else if (activeBlog.route == "mindfulness-not-multitasking") {
            return (<MindFullNess />)
        } else {
            return (<div className={styles.noBlogFound}>
                <h2>No Blog Found</h2>
                </div>)
        }

    }


    return (<div className={styles.blogParent}>
        <Header template="SOLID" />
        <div className={styles.blogWrapper}>
            {renderBlog(activeBlog)}
        </div>
        <Footer />
    </div>)

}

export default BlogTemplate