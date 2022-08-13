import React from "react";
import cl from '../styles/styleComponents.module.css';

const PostItem = ({ props,icon }) => {

    return (
        <div >
            <div className={cl.weather}>
                {/* Добавить дату, сегодня или завтра */}
                {/* <p>Температура: <span className="temp">{props.temp}</span>°C</p> */}
                <p>{props.dt_txt.slice(5,10)}</p>
                <p><span className="temp"><img src={icon} alt="" /></span></p>
                <p>
                    {
                    (props.main.temp - 273,15>0)
                    ? <span className="">+{props.main.temp}K</span>
                    : <span className="">-{props.main.temp}K</span>
                    }
                    </p>
                <p><span className="">{props.weather[0].main}</span></p>
                
            </div>
        </div>
    )
}

export default PostItem;