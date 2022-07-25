import React, {memo, useEffect, useState} from 'react';

import cl from "../ImageChanger/ImageChanger.module.css";
import {IMAGES} from "../../assets/images";

const ImageChanger = () => {
    const [person, setPerson] = useState(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);

    const [rootClasses, setRootClasses] = useState([cl.image]);

    useEffect(() => {
       setRootClasses([cl.image, cl.imageAnimation])
        setInterval(()=>{
            setPerson(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);
        }, 5000)
    }, [])

    return (
        <div>
            <img className={rootClasses.join(" ")} src={person.toString()} alt={"Leader"}/>
        </div>
    );
};

export default memo(ImageChanger);