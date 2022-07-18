import React, {useState} from 'react';
import cl from "./MainScreen.module.css";
import MyModal from "../UI/modal/MyModal";
import ImageChanger from "../ImageChanger";
import BankCardForm from "../BankCardForm/BankCardForm";
import Result from "../Result/Result";


const MainScreen = () => {
    const [modal, setModal] = useState(false);
    const [data, setData] = useState({number: '', holder: '', month: '1', year: '2022', cvv: ''})
    const [result, setResult] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault()
        setModal(true)
    }

    return (
        <div className={cl.all}>
            <div className={cl.body}>
             <MyModal visible={modal} setVisible={setModal}>
                {result
                ? <Result/>
                    : <BankCardForm data={data} setData={setData} setResult={setResult}/>
                }
            </MyModal>
           <div className={cl.title}>
               Какая ты нация из Sid Meier's Civilization V
           </div>
            <ImageChanger/>
            <div className={cl.container}>
                <button className={cl.button} onClick={clickHandler}>Узнать</button>
            </div>
            </div>
        </div>
    );
};

export default MainScreen;