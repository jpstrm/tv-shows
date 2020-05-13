import React from 'react';
import If from '../../commons/If';
import './EpisodeImg.css'

export default function EpisodeImg(props){
    const { episode } = props;
    const hasImg = !!episode.image;
    const imageUrl = hasImg ? episode.image.medium : '';

    return (
        <div className="EpisodeImg">
            <If test={hasImg}>
                <img src={imageUrl}
                     alt="Show"
                     height={280}
                     className={(!hasImg ? 'no-img' : '')}/>
            </If>
            <If test={!hasImg}>
                <p>{episode.name ? episode.name : 'No Title'}</p>
            </If>
        </div>
    );
}
