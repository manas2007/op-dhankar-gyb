import { mediaLibrary } from '../global/constants';
import styles from './mediaStyles.module.css';
import { useState } from 'react';

const Media = () => {

    const [progressValue, setProgressValue] = useState(100);

    const onButtonClick = () => {
        window.open("https://www.instagram.com/giveyourbestofficial/");
    }

    return (<div className={styles.mediaParent} >
        <div className={styles.mediaWrapper} >
            <div className={styles.mediaContentWrapper} >
                <h2>Media Library</h2>
                <p>A collection of talks and
                    insights to guide your
                    growth and success.</p>
                <div className={styles.buttonWrapper}>
                <button onClick={onButtonClick}>Watch More</button>

                </div>
            </div>
            {/* Videos */}
            <div className={styles.mediaCarouselWrapper} >

                <div className={styles.mediaCarousel} >
                    {mediaLibrary.map((media, index) => (<img src={media.reel} />))}
                </div>

                {/* <div className={styles.mediaCarouselFooter} >
                    <div className={styles.navigationButtonsWrapper} >
                        <button><KeyboardArrowLeftIcon/></button>
                        <button><KeyboardArrowRightIcon/></button>
                    </div>
                    <LinearProgress sx={{flex:1, margin:"0 2rem"}} determinate value={progressValue} />

                    <h3>01</h3>
                </div> */}
            </div>

        </div>
    </div>);

}

export default Media;