import styles from './bookStyles.module.css';

const Book = () => {

    const onButtonClick = () => {
        window.open("https://amzn.in/d/bJXCgVw");
    }

    return (<div className={styles.bookParent}>
        <div className={styles.bookSectionWrapper}>
            <div className={styles.bookSectionImage}>
                <img className={styles.bookImage} src='/assets/images/landingPage/book-moccup.png' alt='Shreshtha Ki Abhivyakti Ho | Give Your Best, Take Others | Om Prakash Dhankar' />
                <img className={styles.line1} src="/assets/images/landingPage/Line-1.png" alt='Shreshtha Ki Abhivyakti Ho | Give Your Best | BG-Line-1' />
                <img className={styles.line2} src="/assets/images/landingPage/Line-2.png" alt='Shreshtha Ki Abhivyakti Ho | Give Your Best | BG-Line-2' />
            </div>
            <div className={styles.bookSectionContent}>
                <div className={styles.bookSectionHeading}>
                    <h3>Your Journey</h3>
                    <h2>Begins Here.</h2>
                </div>
                <p>Give Your Best – Take Others’ Best is the first step in an
                    ever-growing body of work that transforms timeless
                    wisdom into practical guidance for today’s achievers.</p>
                <div className={styles.buttonWrapper}>
                    <button onClick={onButtonClick}>Buy on Amazon</button>
                </div>
            </div>
        </div>
    </div>);

}

export default Book;