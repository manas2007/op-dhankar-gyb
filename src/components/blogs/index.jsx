import { useRouter } from 'next/router';
import { blogs } from '../global/constants';
import styles from './blogStyles.module.css';

const Blogs = () => {


    const router = useRouter();

    const onBlogCardClick = (blog) => {
        router.push(`/blog/${blog.route}`);
    }

    return (<div className={styles.blogsParent} >
        {/* Logo */}
        <img className={styles.leftLogo} src="/assets/images/logo.png" />
        <img className={styles.rightLogo} src="/assets/images/logo.png" />

        <div className={styles.blogsWrapper} >

            {/* Mantra */}
            <div className={styles.blogsPreHeader} >
                <p>Mantra that we must live by</p>
                <h2>सर्वे भवन्तु सुखिन: सर्वे सन्तु निरामया: । <br />
                    सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाग्भवेत् ॥</h2>
            </div>

            {/* Blogs */}
            <div >
                <div className={styles.blogsHeaderWrapper} >
                    <h2>The Journal</h2>
                    <p>Read fresh perspectives on leadership, growth, and living the Give Your Best way.</p>
                </div>

                <div className={styles.blogsCardsWrapper} >
                    {blogs.map((blog, index) => (<div onClick={() => onBlogCardClick(blog)} className={styles.blogsCard} key={index}>

                        <div className={styles.blogsCardBanner} >
                            <img src={blog.image} />
                            <p>{blog.date}</p>
                        </div>

                        <div className={styles.blogsCardContent} >
                            <h4>{blog.title}</h4>
                            <p>{blog.description}</p>
                            <div className={styles.buttonWrapper}>
                                <button onClick={() => onBlogCardClick(blog)} >Read More</button>
                            </div>
                        </div>

                    </div>))}
                </div>
            </div>

        </div>
    </div>);

}

export default Blogs;