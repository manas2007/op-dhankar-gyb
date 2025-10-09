import { highlights } from "../global/constants";
import styles from "./highlightStyles.module.css";

const Highlights = () => {

    const onTemplateClick = (widget) => {
        window.open(widget.link);
    }

    const renderHighlightWidget = (widget) => {

        if (widget.template == "NEWS") {

            return (<div onClick={() => onTemplateClick(widget)} className={styles.newsTemplateWrapper} >
                <div className={styles.newsTemplateHeader} >
                    <p>{widget.tag}</p>
                    <button onClick={() => onTemplateClick(widget)} >{widget.button}</button>
                </div>
                <div className={styles.newsTemplateContent} >
                    <h3>{widget.title}</h3>
                    <p>{widget.description}</p>
                </div>
                {/* <div className={styles.overlay}></div> */}
                <img src={widget.image} />
            </div>)

        } else if (widget.template == "VIDEO") {

            return (<div onClick={() => onTemplateClick(widget)} className={styles.videoTemplateWrapper} style={{ backgroundImage: `url('${widget.image}')`, backgroundRepeat:"no-repeat",backgroundSize:"cover" }} >
                <div className={styles.videoTemplateHeader} >
                    <button onClick={() => onTemplateClick(widget)} >Watch Now</button>
                </div>
                <div className={styles.videoTemplateContent} >
                    <h3>{widget.title}</h3>
                </div>
            </div>)
        }
    }

    return (<div className={styles.highlightsParent} >
        <div className={styles.highlightsWrapper} >
            <div className={styles.highlightsContentWrapper} >
                <h2>Updates & Highlights</h2>
                <p>Catch the latest stories, updates, and milestones from Give Your Best.</p>
                {/* <button>Explore More</button> */}
            </div>
            {/* Highlights */}
            <div className={styles.highlightsPostsWrapper} >
                {highlights.map((highlight, index) => (renderHighlightWidget(highlight)))}
            </div>
        </div>
    </div>);

}

export default Highlights;