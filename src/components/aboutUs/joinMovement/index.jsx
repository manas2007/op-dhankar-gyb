import styles from "./joinMovementStyles.module.css";

const JoinMovement = (props) => {

    const {handleContactUs} = props;

    return (<div className={styles.joinMovementParent}>
        <div className={styles.joinMovementWrapper}>
            <div className={styles.joinMovementContent}>

                <h2>Join the Movement</h2>
                <p>Give Your Best is only the beginning. This platform will continue to share knowledge,
                    inspiration, and resources through books, workshops, podcasts, and digital content—all
                    carrying forward the same vision: personal excellence through collective upliftment.</p>

            </div>
            <h4>We invite you to not just read, but to reflect, share, and join this journey. <br/>
                When you give your best and take others' best, everyone grows.</h4>

        <button onClick={handleContactUs} >Subscribe</button>
        </div>

    </div>)
}

export default JoinMovement;