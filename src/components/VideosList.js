import React, { useState } from 'react';
import data from '../data/data'
import { Link } from "react-router-dom";
import VideoDetails from './VideoDetails';
import Video from '../video/AnimationLogo.mp4'

const VideosList = () => {

    const [datas, setDatas] = useState(data)

    // localStorage.setItem('data', JSON.stringify(datas))  

    console.log(datas[0].nom)

    const video = datas.map((data) => 
    {
        let url = '/videos/' + data.id
        return(
            <>
                <li>
                    <Link to={url}>{data.nom}</Link>
                </li>
            </>
        )
    })

    return (
        <div>
            <ul>
                {video}
            </ul>
        </div>
    );
};

export default VideosList;


// <video width="720" height="405" controls  poster="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.png">
// <source src="D:\Nouveau dossier (2)\Nouveau dossier (9)" type="video/mp4"/>

// </video>