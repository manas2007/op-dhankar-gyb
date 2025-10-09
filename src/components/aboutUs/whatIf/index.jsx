import styles from "./whatIfStyles.module.css";

const WhatIf = () => {
    return (<div className={styles.whatIfParent}>
        <div className={styles.whatIfWrapper}>

            <h2>What If Competition <br /> Isn't the Answer?</h2>

            <div className={styles.whatIfContentWrapper}>
                <div className={styles.whatIfContent} >
                    <p>Give Your Best – Take Others' Best is more than a book—it's a
                        philosophy for living. At its heart lies a transformative truth:
                        personal growth multiplies through collaboration, not competition.
                        We call on every individual to live with excellence, share their finest
                        work, and uplift others by embracing the best they have to offer.
                    </p>
                    <p>Whether you're a student shaping your future, a professional
                        navigating challenges, a leader carrying responsibility, or simply
                        seeking deeper meaning—this philosophy offers timeless principles
                        to guide you toward clarity, resilience, balance, and purpose.</p>
                </div>
            </div>

        </div>

        <img className={styles.leftLogo} src="/assets/images/logo.png" />
        <img className={styles.rightLogo} src="/assets/images/logo.png" />

    </div>)
}

export default WhatIf;