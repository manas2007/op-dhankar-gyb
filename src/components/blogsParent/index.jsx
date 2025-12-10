import { useRouter } from "next/router";
import Footer from "../footer";
import { blogs } from "../global/constants";
import Header from "../header";
import styles from "./blogsParentStyles.module.css";

const BlogsParent = () => {

    const router = useRouter();

    const onBlogCardClick = (blog) => {
        router.push(`/blog/${blog.route}`);
    }

    return (<div>

        {/* Hero Section */}
        <div className={styles.aboutHeroSectionParent}>
            <Header template="BACKGROUND" />
            <div className={styles.aboutHeroSectionWrapper}>

                <div className={styles.aboutHeroSectionContent}>
                    <h1>Blogs</h1>
                </div>

            </div>
        </div>

        {/* Blogs List */}
        <div className={styles.blogsMainWrapper} >
            <div className={styles.blogsCardsWrapper} >
                {blogs.map((blog, index) => (<div onClick={() => onBlogCardClick(blog)} className={styles.blogsCard} key={`ABOUT_PARENT_${index+1}`}>

                    <div className={styles.blogsCardBanner} >
                        <img src={blog.image} alt={blog.altText} />
                        <p>{blog.date}</p>
                    </div>

                    <div className={styles.blogsCardContent} >
                        <h4>{blog.title}</h4>
                        <p>{blog.description}</p>
                        <button onClick={() => onBlogCardClick(blog)}>Read More</button>
                    </div>

                </div>))}
            </div>
        </div>

        <Footer />


    </div>)

}

export default BlogsParent