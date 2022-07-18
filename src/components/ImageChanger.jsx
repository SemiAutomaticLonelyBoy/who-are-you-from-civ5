import React, {useEffect, useState} from 'react';

import cl from "./MainScreen/MainScreen.module.css";
import {IMAGES} from "../assets/images";

const ImageChanger = () => {
    const [person, setPerson] = useState(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);

    useEffect(() => {
        setInterval(()=>{
            setPerson(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);
        }, 2500)
    }, [])

    return (
        <div>
            <img className={cl.image} src={person.toString()} alt={"Leader"}/>
        </div>
    );
};

export default ImageChanger;