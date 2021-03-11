import React from 'react';
import VideoDetails from '../components/VideoDetails';
import data from '../data/data'

const Details = (props) => {
    console.log(props.match.params.id)
    return (
        <div>
            <VideoDetails id={props.match.params.id}/>
        </div>
    );
};

export default Details;