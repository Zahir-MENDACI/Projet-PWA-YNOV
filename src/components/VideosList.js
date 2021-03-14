import React, { useState } from 'react';
import data from '../data/data'
import { Link } from "react-router-dom";
import VideoDetails from './VideoDetails';
import Video from '../video/AnimationLogo.mp4'
import styled from 'styled-components'
import Logo from '../gamer.svg'
import Navbar from './Navbar';

// import Apex from '../images/Apex Legends.jpg'

const VideosList = () => {

    const [datas, setDatas] = useState(data)

    // localStorage.setItem('data', JSON.stringify(datas))

    console.log(datas[0].nom)

    const video = datas.map((data) => 
    {
        let url = `/videos/${data.id}`
        let img = `/images/${data.game}.jpg`
        return(
            <>
                <StyledCard>
                    <Link to={url}>
                        <StyledImg src={img}/>
                        <StyledInfos>
                            <StyledLogo src={Logo} />
                            <StyledInfo>
                                <StyledTitle>{data.titre}</StyledTitle>
                                <StyledUser>{data.user}</StyledUser>
                                <StyledGame>{data.game}</StyledGame>
                                <StyledLangue>{data.langue}</StyledLangue>
                            </StyledInfo>
                        </StyledInfos>
                    </Link>
                </StyledCard>
            </>
        )
    })

    return (
        <>
            <Navbar/>
            <StyledContainer>
                <StyledH1>Bienvenue sur Twitch !</StyledH1>
                <StyledP>CHAÎNES LIVE QUI POURRAIENT VOUS PLAIRE</StyledP>
                    {video}
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const StyledH1 = styled.h1`
    color: #EFEFF1;
    font-size: 2.5em;
    margin-left: 30px
`
const StyledP = styled.p`
    color: #919199;
    font-size: 0.8em;
    margin-left: -10vw;
`

const StyledCard = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: none;
    box-shadow: 1px 1px 1px #000;
    margin-bottom: 20px;
    background-color: #202024;
`

const StyledImg = styled.img`
    width: 100%
`

const StyledInfos = styled.div`
    display: flex;
    padding: 0 10px;
`

const StyledLogo = styled.img`
    width: 40px;
    height: 40px;
    background-color: #FFF;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 10px;
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
    line-height: 0
`

const StyledTitle = styled.h3`
    color: #FFF;
`

const StyledUser = styled.p`
    color: #cdcdd1;
    margin-top: 5px;
`

const StyledGame = styled.p`
    color: #919199;
    margin-top: 5px;
`

const StyledLangue = styled.p`
    background-color: #29292e;
    width: max-content;
    color: #919199;
    font-weight: bold;
    border-radius: 25px;
    line-height: 20px;
    padding: 3px 12px;
    :hover
    {
        color: #9147FF
    }
`

export default VideosList;


// <video width="720" height="405" controls  poster="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.png">
// <source src="D:\Nouveau dossier (2)\Nouveau dossier (9)" type="video/mp4"/>

// </video>