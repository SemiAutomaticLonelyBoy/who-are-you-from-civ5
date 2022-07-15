import React, {memo} from 'react';
import cl from "./Result.module.css"


const PHRASES = [
    {title: 'Ты агрессор', body: 'Тебя следует демобилизировать'},
    {title: 'Ты агрессор', body: 'Тебя следует денационализировать'},
    {title: 'Ты уже никто', body: 'Всемирный конгресс избрал мировым лидером Китай. -100 social credit'},
    {title: 'Ты амёба', body: 'Александрийская библиотека уже построена в далёких землях'},
    {title: 'Ну как там с деньгами?', body: 'Всемирный конгресс наложил на вас эмбарго'},
    {title: 'Чака чака трахать', body: 'Чака резать твоя глупый голова'}
]


const Result = () => {
    const phrase = PHRASES[Math.round(Math.random() * (PHRASES.length - 1))];
    return (
        <div className={cl.container}>
            <div className={cl.title}>{phrase.title}</div>
            <div className={cl.body}>{phrase.body}</div>
        </div>
    );
};

export default Result;