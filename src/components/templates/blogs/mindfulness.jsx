import styles from "../blog/blogTemplateStyles.module.css";

const MindFullNess = () => {

    return (<div>

        {/* Date */}
        <div  className={styles.dateWrapper}>
            <p>8 Oct, 2025</p>
        </div>

        {/* Header */}
        <div className={styles.headerWrapper} >
            <h1>🧘‍♂️ Mindfulness, Not Multitasking: The Missing Skill in Modern Self-Development</h1>
            <p>We live in a world that glorifies busyness. We wear “I’m swamped” as a badge of honor — as if being constantly occupied means we’re making progress.</p>
            <img src="/assets/images/blogs/beach.jpg" />
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>

        {/* Content */}

        <div className={styles.contentWrapper}>

            <div className={styles.sectionWrapper}>
                <h2>🌿 The Illusion of Productivity</h2>

                <p>You can multitask your way through meetings, emails, and phone calls — but you can’t multitask your way through life.</p>

                <p>When we try to do everything at once, we dilute the very awareness that gives our actions depth.</p>

                <p>A conversation loses connection.<br />
                    A task loses purpose.<br />
                    A day loses direction.</p>

                <p>You may reach the end of your to-do list — and still feel like you didn’t live the day at all.</p>

                <p>Mindfulness is the opposite of this chaos. It’s not about slowing down everything. It’s about being fully where you are — one thing, one moment, one breath at a time.</p>
            </div>

            <div className={styles.sectionWrapper}>
                <h2>☕ Why Mindfulness Matters in Personal Growth</h2>

                <p>Mindfulness turns self-development from a performance into a practice.</p>

                <p>When you’re mindful, you stop chasing every new technique and start understanding yourself — your habits, your emotions, your energy.</p>

                <p>That’s when you grow from awareness, not anxiety. And that’s the kind of growth that lasts.</p>

                <p>Even five mindful minutes — over coffee, before sleep, during work — can restore your focus and shift your day.</p>

                <p>Dhankhar ji often says,<br />
                    <em>“An awakened mind does not rush. It responds.”</em></p>
            </div>

            <div className={styles.sectionWrapper}>
                <h2>💭 From Hustle to Harmony</h2>

                <p>You don’t need to abandon ambition. You just need to bring calm into it.</p>

                <p><strong>Start small:</strong></p>

                <p>Listen fully when someone speaks.</p>

                <p>Breathe consciously before reacting.</p>

                <p>Finish one task before beginning another.</p>

                <p>That’s how you build the rare skill of harmony — the balance between drive and peace.</p>

                <p>In <em>Give Your Best – Take Others’ Best</em>, O.P. Dhankhar reminds us that true success isn’t a sprint of effort, but a rhythm of awareness. When you give your best from a centered state, you not only achieve more — you become more.</p>
            </div>

            <div className={styles.sectionWrapper}>
                <p><strong>📖 From “Give Your Best – Take Others’ Best” by O.P. Dhankhar</strong></p>

                <p><em>“Action without awareness is noise.<br />
                    Awareness without action is potential.<br />
                    But when awareness leads action — that’s growth.”</em></p>
            </div>


        </div>


    </div>)

}

export default MindFullNess