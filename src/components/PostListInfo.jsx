import React, { useState } from "react";
import PageInfo from "../pages/PageInfo";

const PostListInfo = ({ props }) => {

    const [objObj, setObjObj] = useState([])
    const [obj, setObj] = useState({
        morning: "",
        dinner: "",
        evening: "",
        night: ""
    })

    const SortArrInfo = (arr) => {
        arr.sort((a, b) => {
            if (a.dt_txt.slice(11, 19) == "06:00:00") {
                objObj.push(a);
                // useState([...obj, a])
            }
        })
    }
    SortArrInfo(props)
    console.log(objObj)
    // const SortArrInfo = (arr) => {
    //     arr.sort((a, b) => {
    //         if (a.dt_txt.slice(11, 19) == "06:00:00") {
    //             obj.morning = Math.round(a.main.temp - 273.15) + "..."
    //         }
    //         if (a.dt_txt.slice(11, 19) == "09:00:00") {
    //             obj.morning += Math.round(a.main.temp - 273.15)
    //         }
    //         if (a.dt_txt.slice(11, 19) == "12:00:00") {
    //             obj.dinner = Math.round(a.main.temp - 273.15) + "..."
    //         }
    //         if (a.dt_txt.slice(11, 19) == "15:00:00") {
    //             obj.dinner += Math.round(a.main.temp - 273.15)
    //         }
    //         if (a.dt_txt.slice(11, 19) == "18:00:00") {
    //             obj.evening = Math.round(a.main.temp - 273.15) + "..."
    //         }
    //         if (a.dt_txt.slice(11, 19) == "21:00:00") {
    //             obj.evening += Math.round(a.main.temp - 273.15)
    //         }
    //         if (a.dt_txt.slice(11, 19) == "00:00:00") {
    //             obj.night = Math.round(a.main.temp - 273.15) + "..."
    //         }
    //         if (a.dt_txt.slice(11, 19) == "03:00:00") {
    //             obj.night += Math.round(a.main.temp - 273.15)
    //         }
    //         console.log(obj)
    //     })


    // }

    // SortArrInfo(props)

    return (
        <div>

        </div>
    )
}

export default PostListInfo;