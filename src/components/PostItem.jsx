import React from "react";

const PostItem = ({props}) => {
    return (
        <div className="weather">
            <h4>Погода в городе <span className="city">{props.city}</span></h4>
            <p>Температура: <span className="temp">{props.temp}</span>°C</p>
            <p><span className="temp">{props.weather_icon}</span></p>
            <p>Погода: <span className="temp">{props.weather_main}</span></p>
            <p>Влажность: <span className="humidity">{props.humidity}</span>%</p>
            <p>Ветер: <span className="wind">{props.wind}</span> км/ч</p>
        </div>
    )
} 

export default PostItem;