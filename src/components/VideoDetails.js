import React, { useState } from 'react';
import Video from '../video/AnimationLogo.mp4'
import Logo from '../svg/gamer.svg'
import styled from 'styled-components'
import Navbar from './Navbar';

const VideoDetails = (props) => {
    console.log(props)
    const [datas, setDatas] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    const [inputValue, setInputValue] = useState('')


    // Fonction qui ajoute les commentaires
    const clic = () =>
    {
        // Tester si le champs de texte du commentaire est rempli ou vide
        if (inputValue !== '' )
        {
            // Recuperer les données de la video selectionnée
            const temp = datas.filter((d) => d.id === Number(props.id))[0]
            // Ajout du commentaire dans la collection
            const newitem = {
                ...temp, 
                commentaires: [
                    ...temp?.commentaires,
                    {
                        id: temp.commentaires[0] ? temp.commentaires.slice(-1)[0]?.id + 1 : 1, 
                        value: inputValue,
                        // date: new Date().toLocaleDateString(),
                        // heure: new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"})
                    }
                ]
            }

            // Recuperation de l'index de la collection de la video selectionnée
            const index = datas.map(data => data.id).indexOf(Number(props.id))
            const tempdata = datas
            // remplacer l'element present sur l'index recuperé par le newitem
            tempdata.splice(index, 1, newitem)
            localStorage.setItem('data', JSON.stringify(tempdata))
            // Màj de la state par les nouvelles données
            setDatas(tempdata)
            setInputValue('')
        } 
        else
        {
            alert('Champs vide')
        }
    }

    // const supprimer = id =>
    // {
    //     const temp = datas.filter((d) => d.id === Number(props.id))[0]
    //     // console.log(temp)
    //     const newitem = {
    //         ...temp, 
    //         commentaires: [
    //             ...temp.commentaires.filter(com => com.id !== id),
    //         ]
    //     }

    //     const index = datas.map(data => data.id).indexOf(Number(props.id))

    //     const tempdata = datas
    //     tempdata.splice(index, 1, newitem)
    //     localStorage.setItem('data', JSON.stringify(tempdata))

    //     setDatas(tempdata)
    //     setInputValue('')
        
    // }

    return (
        <>
            <Navbar/>
            <StyledBody>
                <StyledVideo controls  src={Video} type="video/mp4"/>
                {
                    datas.filter((d) => d.id == props.id).map((d) => 
                    {
                        console.log(d)
                        return(
                            <div>
                                <StyledDivInfos>
                                    <StyledDivInfo>
                                        <StyledImg src={Logo} />
                                        <StyledDivNom>
                                            <h1>{d.user}</h1>
                                            <StyledDivGame>
                                                <p>Streame</p>
                                                <StyledP>{d.game}</StyledP>
                                            </StyledDivGame>
                                        </StyledDivNom>
                                    </StyledDivInfo>
                                    <StyledLangue>Français</StyledLangue>
                                </StyledDivInfos>
                                <StyledDivli>
                                    <StyledUl>
                                    {
                                        d.commentaires?.map((com) =>
                                        {
                                            return (
                                                <StyledLi>
                                                    <StyledUser color={() => 
                                                    {
                                                        // Generation d'une couleur aléatoire
                                                        const letters = '0123456789ABCDEF';
                                                        let color = '#';
                                                        for (let i = 0; i < 6; i++) {
                                                            color += letters[Math.floor(Math.random() * 16)];
                                                        }
                                                        return color;
                                                    }}>
                                                        {/* Generation d'un nombre aléatoire */}
                                                        user {Math.floor(Math.random() * 100)}&ensp;:  
                                                    </StyledUser>
                                                    <p>{com.value}</p>
                                                    {/* <button onClick={() => supprimer(com.id)}>Supprimer</button> */}
                                                </StyledLi>  
                                            )
                                        })
                                    }
                                    </StyledUl>
                                </StyledDivli>
                            </div>
                        )
                    })
                }
                <StyledDivInput>
                    <StyledInput 
                        type='text' 
                        onChange={e => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="Envoyer un message"
                    ></StyledInput>
                    <StyledDivButton>
                        <StyledButton type="submit" onClick={clic}>Chat</StyledButton>
                    </StyledDivButton>
                </StyledDivInput>
            </StyledBody>
        </>
    );
};

const StyledDivInfos = styled.div`
    border-bottom: solid 1px #6e6e73;
    height: 17vh;
    display: flex;
    padding: 0 20px;
    flex-direction: column;
`
const StyledDivInfo = styled.div`
    display: flex;
    align-items: center;
`
const StyledLangue = styled.p`
    background-color: #29292e;
    width: max-content;
    color: #919199;
    font-weight: bold;
    padding: 3px 15px;
    border-radius: 25px;
    :hover
    {
        color: #9147FF
    }
`

const StyledImg = styled.img`
    width: 80px;
    height: 80px;
    background-color: #FFF;
    border-radius: 50%;
    margin-right: 20px;
`

const StyledDivNom = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0px;
`
const StyledDivGame = styled.div`
    display: flex;

`
const StyledP = styled.p`
    margin-left: 10px;
    color: #9147FF;
`
const StyledUser = styled.p`
    color: ${props => props.color};
    margin-right: 10px;
`

const StyledBody = styled.div`
    color: white;
    max-height: 100vh;
    margin: 0;
    padding: 0;
`

const StyledVideo = styled.video`
    width: 100%;
    height: 40vh;
`

const StyledDivli = styled.div`
    overflow-y: hidden;
    height: 30vh;
    position: relative;
    overflow-y: hidden;
    line-height: 6px
`

const StyledUl = styled.ul`
    position: absolute;
    bottom: 0
`

const StyledLi = styled.li`
    list-style-type: none;
    display: flex;
`

const StyledDivInput = styled.div`
    position: absolute;
    bottom: 0;
    height: 7vh;
    width: 100vw;
    background-color: #202024;
    border: solid 1px #6e6e73;
    box-sizing: border-box;
    display: flex
`
const StyledInput = styled.input`

    width: 80%;
    height: 90%;
    background-color: #202024;
    color: #FFF;
    font-size: 1em;
    padding: 0 10px;
    border: none;
    :focus {
        outline: none;
    };
`

const StyledDivButton = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #202024;
    border: none
`

const StyledButton = styled.button`
    border: none;
    background-color: #9147FF;
    color: #FFF;
    padding: 8px;
    border-radius: 3px;
    margin: 0;
    :focus {
        outline: none;
    };
`

export default VideoDetails;