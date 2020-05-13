import { Link } from 'react-router-dom';
import './ShowImg.css';
import If from '../../commons/If';
import React from 'react';

export default function ShowImg(props){
    const show = props.show || {};
    const hasImg = !!show.image;
    const imageUrl = hasImg ? show.image.medium : '';

    return (
        <Link to={`/shows/detail/${show.id}`}>
            <If test={hasImg}>
                <img src={imageUrl}
                     alt="Show"
                     height={280}
                     className={(!hasImg ? 'no-img' : '')}/>
            </If>
            <If test={!hasImg}>
                <p>{show.name}</p>
            </If>
        </Link>
    );
}
