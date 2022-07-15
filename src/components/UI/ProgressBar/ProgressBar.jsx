import React, {useEffect, useState} from 'react';
import cl from "./ProgressBar.module.css";

const ProgressBar = ({setResult}) => {
    let start = 0;
    const [value, setValue] = useState(100);
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let progressTimer = setInterval(() => {
            if(start === value){
                setResult(true)
                clearInterval(progressTimer);
            }
            if (start <= value){
                setProgress(start++)
            }}, 50)
    }, [])


    return (
        <div className={cl.container}>
            <div className={cl.progressCircular} style={{background: `conic-gradient(#171515 ${(progress * 3.6)}deg, #ededed 0deg)`}}>
                <span className={cl.value}>{progress }%</span>
            </div>
        </div>
    );
};

export default ProgressBar;