import React from "react";
import cl from '../styles/styleComponents.module.css';

const PostItem = ({ props, icon }) => {
    return (
        <div >
            <div className={cl.weather}>
                {/* Добавить дату, сегодня или завтра */}
                {/* <p>Температура: <span className="temp">{props.temp}</span>°C</p> */}
                <p><span className="temp"><img src={icon} alt="" /></span></p>
                <p><span className="">{props.weather_main}</span></p>
                
            </div>

            <h4>Погода в городе <span className="city">{props.city}</span></h4>
        </div>
    )
}

export default PostItem;