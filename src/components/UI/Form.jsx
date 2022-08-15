import React from "react";

const Form = () => {
    return (
        <form>
            {/* <input type="text" placeholder='Введите название города' value={city} onChange={e => setCity(e.target.value)} />
            <button type='submit' onClick={gettingWether}>Получить погоду</button> */}
            <input type="text" placeholder='Введите название города'/>
            <button>Получить данные</button>
        </form>
    )
}

export default Form;