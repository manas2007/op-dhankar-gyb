import styles from './essenceStyles.module.css';

const Essence = () => {

    const onButtonClick = () => {
        window.open("https://amzn.in/d/bJXCgVw");
    }

    return (<div className={styles.essenceParent}>
        <div className={styles.essenceWrapper}>

            <div className={styles.essenceContentWrapper}>
                <h2>The Essence of <br/> Give Your Best</h2>
                <div>
                    <p>The book Give Your Best – Take Others’ Best brings
                        together reflections on resilience, balance,
                        awakened thoughts, purpose, priorities, knowledge
                        in action, and more. Drawing on Indian wisdom,
                        global philosophies, and real-life lessons, it
                        provides readers with guiding principles to live a
                        meaningful and successful life.</p>
                    <p>The core message: Excellence is not a solitary
                        pursuit. True success comes when we strive to give
                        our best while remaining open to learning from and
                        integrating the best of others.</p>
                </div>
                <button onClick={onButtonClick}>Buy on Amazon</button>
            </div>

        </div>

    </div>)
}

export default Essence;