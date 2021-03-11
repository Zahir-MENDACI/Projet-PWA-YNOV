import React, { useState } from 'react';
// import data from '../data/data'
import Video from '../video/AnimationLogo.mp4'

const VideoDetails = (props) => {
    console.log(props)
    const [datas, setDatas] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])
    const [inputValue, setInputValue] = useState('')
    console.log(datas)

    console.log(localStorage.getItem('data'))

    console.log(datas[0].commentaires.length)

    console.log(datas[0].commentaires.slice(-1)[0].id)

    const clic = () =>
    {
        // datas.filter((d) => d.id == props.id)[0].commentaires.push({id: 3, value: "eeeeee"})
        // console.log(datas.filter((d) => d.id == props.id))
        
        //localStorage.setItem('data', JSON.stringify(datas.filter((d) => d.id == props.id)[0].commentaires.push({id: 3, value: "eeeeee"})))


        const temp = datas.filter((d) => d.id === Number(props.id))[0]
        // console.log(temp)
        const newitem = {
            ...temp, 
            commentaires: [
                ...temp?.commentaires,
                {
                    id: temp.commentaires.slice(-1)[0].id + 1, 
                    value: inputValue,
                    date: new Date().toLocaleDateString(),
                    heure: new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric"})
                }
            ]
        }
        // console.log(newitem)

        const index = datas.map(data => data.id).indexOf(Number(props.id))
        // console.log(index)

        const tempdata = datas
        tempdata.splice(index, 1, newitem)
        localStorage.setItem('data', JSON.stringify(tempdata))

        setDatas(tempdata)
        
        setInputValue('')
    }

    const supprimer = id =>
    {
        const temp = datas.filter((d) => d.id === Number(props.id))[0]
        // console.log(temp)
        const newitem = {
            ...temp, 
            commentaires: [
                ...temp.commentaires.filter(com => com.id !== id),
            ]
        }
        // console.log(newitem)

        const index = datas.map(data => data.id).indexOf(Number(props.id))
        // console.log(index)

        const tempdata = datas
        tempdata.splice(index, 1, newitem)
        localStorage.setItem('data', JSON.stringify(tempdata))

        setDatas(tempdata)
        setInputValue('')
        
    }


    return (
        <div>
            <h1>{props.id}</h1>
            <video controls  src={Video} type="video/mp4" width="400px"/>
            {
                datas.filter((d) => d.id == props.id).map((d) => 
                {
                    console.log(d)
                    return(
                        <>
                            {
                                d.commentaires?.map((com) =>
                                {
                                    return (
                                        <li>
                                            {com.value}
                                            --
                                            {com.date}
                                            --
                                            {com.heure}
                                            <button onClick={() => supprimer(com.id)}>Supprimer</button>
                                        </li>
                                    )
                                })
                            }
                        </>
                    )
            
                })
            }
            <input 
                type='text' 
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
            ></input>
            <button type="submit" onClick={clic}>Ajouter</button>
        </div>
    );
};

export default VideoDetails;