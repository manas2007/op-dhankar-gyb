import { mediaLibrary } from '../global/constants';
import styles from './mediaStyles.module.css';
import { useState } from 'react';

const Media = () => {

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
                    {mediaLibrary.map((media, index) => (<img key={`MEDIA_LIBRARY_${index+1}`} src={media.reel} />))}
                </div>
            </div>

        </div>
    </div>);

}

export default Media;