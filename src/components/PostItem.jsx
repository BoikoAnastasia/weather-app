import React from "react";
import cl from '../styles/styleComponents.module.css';

import icons_01d from '../images/icons/01d.png';
import icons_02d from '../images/icons/02d.png';
import icons_03d from '../images/icons/03d.png';
import icons_05d from '../images/icons/05d.png';
import icons_09d from '../images/icons/09d.png';
import icons_10d from '../images/icons/10d.png';
import icons_13d from '../images/icons/13d.png';
import icons_50d from '../images/icons/50d.png';

const PostItem = ({ props }) => {

    const getImage = (data) => {
        switch (data) {
            case '01d':
            case '01n':
                return icons_01d;
            case '02d':
            case '02n':
                return icons_02d;
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return icons_03d;
            case '05d':
            case '05n':
                return icons_05d;
            case '09d':
            case '09n':
                return icons_09d;
            case '10d':
            case '10n':
                return icons_10d;
            case '13d':
            case '13n':
                return icons_13d;
            case '50d':
            case '50n':
                return icons_50d;
            default:
                console.log('error');
        }
    }
    const tempC = (temp) => {
        var tempNew=Math.round(temp - 273.15)
        return (<span>{tempNew}</span>)
    }

    return (
        <div>
            <div className={cl.weather}>
                {/* Добавить дату, сегодня или завтра */}
                <p className={cl.data}>{props.dt_txt.slice(5, 10)}</p>
                <p className={cl.icon}><span ><img src={getImage(props.weather[0].icon)} alt="" /></span></p>
                <p className={cl.item}>
                    {
                        (props.main.temp-273.15 > 0)
                            ? <span>+{tempC(props.main.temp)}°</span>
                            : <span>-{tempC(props.main.temp)}°</span>
                    }
                </p>
                <p className={cl.main}><span >{props.weather[0].main}</span></p>
            </div>
        </div>
    )
}

export default PostItem;