import React, {useState} from 'react';
import cl from "./BankCardForm.module.css";
import ProgressBar from "../UI/ProgressBar/ProgressBar";

const OPTIONS_MONTH = [
    {value: 1, name: '01'},
    {value: 2, name: '02'},
    {value: 3, name: '03'},
    {value: 4, name: '04'},
    {value: 5, name: '05'},
    {value: 6, name: '06'},
    {value: 7, name: '07'},
    {value: 8, name: '08'},
    {value: 9, name: '09'},
    {value:10, name: '10'},
    {value:11, name: '11'},
    {value:12, name: '12'},
]

const OPTIONS_YEAR   = [
    {value: 2022, name: '2022'},
    {value: 2023, name: '2023'},
    {value: 2024, name: '2024'},
    {value: 2025, name: '2025'},
    {value: 2026, name: '2026'},
    {value: 2027, name: '2027'},
    {value: 2028, name: '2028'},
    {value: 2029, name: '2029'},
    {value: 2030, name: '2030'},
]

const BankCardForm = ({data, setData, setResult}) => {
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);

    const checkNumber = (str) => {
        const regex = new RegExp("^[0-9]{16}$");
        return regex.test(str);

    }
    const checkCvv = (str) => {
        const regex = new RegExp("^[0-9]{3}$");
        return regex.test(str);
    }



    const clickHandler = (e) => {
        e.preventDefault()
        if(checkNumber(data.number) && checkCvv(data.cvv) && data.holder !== ''){
            setLoader(true);
        }
        setError(true)
        console.log(data)
    }

    return (
        loader
            ? <ProgressBar setResult={setResult}/>
            :
        <div className={cl.container}>
            <form>
                <div className={cl.inputBox}>
                    <span>Номер карты</span>
                    <input
                        type="text"
                        maxLength="16"
                        value={data.number}
                        onChange={(e) => {setData({...data, number: e.target.value})}}
                    />
                </div>
                <div className={cl.inputBox}>
                    <span>Держатель карты</span>
                    <input
                        type="text"
                        value={data.holder}
                        onChange={(e) => {setData({...data, holder: e.target.value})}}
                    />
                </div>
                <div className={cl.flexbox}>
                    <div className={cl.inputBox}>
                        <span>Срок действия м</span>
                        <select
                            value={data.month}
                            onChange={(e) => {setData({...data, month: e.target.value})}}
                        >
                            <option value="месяц" disabled>месяц</option>
                            {OPTIONS_MONTH.map(option =>
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            )}
                        </select>
                        <span>Срок действия г</span>
                        <select
                            value={data.year}
                            onChange={(e) => {setData({...data, year: e.target.value})}}
                        >
                            <option value="месяц" disabled>год</option>
                            {OPTIONS_YEAR.map(option =>
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className={cl.inputBox}>
                        <span>cvv</span>
                        <input
                            type="text"
                            maxLength="3"
                            value={data.cvv}
                            onChange={(e) => {setData({...data, cvv: e.target.value})}}
                        />
                    </div>
                </div>
                {error ? <div className={cl.text}>Построй библиотеку и научить писать</div> : <></>}
                <button onClick={clickHandler} className={cl.btn}>Отправить</button>
            </form>
        </div>
    );
};

export default BankCardForm;