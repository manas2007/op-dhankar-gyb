import styles from './bookStyles.module.css';

const Book = () => {

    
    const onButtonClick = () => {
        window.open("https://amzn.in/d/bJXCgVw");
    }

    return (<div className={styles.bookParent}>
        <div className={styles.bookSectionWrapper}>
            <div className={styles.bookSectionImage}>
                <img className={styles.bookImage} src='/assets/images/landingPage/book-moccup.png' />
                <img className={styles.line1} src="/assets/images/landingPage/line-1.png" />
                <img className={styles.line2} src="/assets/images/landingPage/line-2.png" />
            </div>
            <div className={styles.bookSectionContent}>
                <div className={styles.bookSectionHeading}>
                    <h3>Your Journey</h3>
                    <h2>Begins Here.</h2>
                </div>
                <p>Give Your Best – Take Others’ Best is the first step in an
                    ever-growing body of work that transforms timeless
                    wisdom into practical guidance for today’s achievers.</p>
                <button onClick={onButtonClick}>Buy on Amazon</button>
            </div>
        </div>
    </div>);

}

export default Book;