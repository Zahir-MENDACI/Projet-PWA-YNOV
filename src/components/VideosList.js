import React, { useEffect, useState } from 'react';
import data from '../data/data'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from '../svg/gamer.svg'
import Refresh from '../svg/Refresh.svg'
import Navbar from './Navbar';
import axios from 'axios'

const VideosList = () => {

    const [datas, setDatas] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    // const [isLoading, setLoading] = useState(true)

    const setDataToLocalStorage = () =>
    {
        localStorage.setItem('data', JSON.stringify(data))
        setDatas(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    }

    // const getDatas = () =>
    // {
    //     axios(
    //         {
    //             method: 'GET',
    //             url: localStorage.getItem('data')
    //         }
    //     ).then(res => 
    //     {
    //         console.log("--------------------")
    //         setDatas(JSON.parse(localStorage.getItem('data')))
    //         setLoading(false)
    //     }).catch(err =>
    //         {
    //             console.log(err)
    //             setLoading(false)
    //         })
    // }

    // useEffect(() => 
    // {
    //     getDatas()
    // }, [])

    // if (!isLoading)
    // {
    //   return (<p style={{color: "#FFF"}}> Chargement en cours </p>)
    // }
    

    const video = datas[0] ? datas.map((data) => 
    {
        // lien de recuperation de la video à afficher
        let url = `/videos/${data.id}`
        // lien de recuperation des images à afficher en aperçu sur la liste des videos
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
    }) : <StyledNoDatas>
            {/* les données à utiliser seront importées du localStorage, 
            donc s'il n'y a pas de données dans le localStorage, 
            on fait appel à la fonction setDataToLocalStorage */}
            <StyledTitle>Pas de donnees disponibles</StyledTitle>
            <StyledRefresh src={Refresh} onClick={setDataToLocalStorage}/>
        </StyledNoDatas>

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
const StyledNoDatas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledRefresh = styled.img`
    width: 50px;
    margin: auto;
`

export default VideosList;


// <video width="720" height="405" controls  poster="http://www.supportduweb.com/page/media/videoTag/BigBuckBunny.png">
// <source src="D:\Nouveau dossier (2)\Nouveau dossier (9)" type="video/mp4"/>

// </video>