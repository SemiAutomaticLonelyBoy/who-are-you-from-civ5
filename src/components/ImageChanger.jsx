import React, {useEffect, useState} from 'react';

import cl from "./MainScreen/MainScreen.module.css";
import {IMAGES} from "../assets/images";

const ImageChanger = () => {
    const [person, setPerson] = useState(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);
    //const [color, setColor] = useState(100);
    //let start = 100;


    useEffect(() => {
        setInterval(()=>{
            setPerson(IMAGES[Math.round(Math.random() * (IMAGES.length -1))]);
        }, 2500)
    }, [])

   /* useEffect(() => {
        setInterval(() => {
          if(color !== 0){
              console.log(color)
             setColor(start - 10)
          }
        }, 100)
    }, [])*/

    return (
        <div>
            {/*<div className={cl.imageBack} style={{background: `rgba(0,0,0, ${color / 10})`}}/>*/}
            <img className={cl.image} src={person.toString()} alt={"Leader"}/>
        </div>
    );
};

export default ImageChanger;