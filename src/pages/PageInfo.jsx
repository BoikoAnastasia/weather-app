import React, { useState } from "react";


const PageInfo = ({ props }) => {

    return (
        <div>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Давление</td>
                    <td>Влажность</td>
                    <td>Ветер</td>
                    <td>Ощущается как</td>
                </tr>
                <tr>
                    <td>Утром <span></span></td>
                    <td><img src="" alt="" /><span></span></td>
                    <td></td>
                    <td>%</td>
                    <td>+ -°</td>
                </tr>
                <tr>
                    <td>Днём <span></span></td>
                    <td><img src="" alt="" /><span></span></td>
                    <td></td>
                    <td>%</td>
                    <td>+ -°</td>
                </tr>
                <tr>
                    <td>Вечером <span></span></td>
                    <td><img src="" alt="" /><span></span></td>
                    <td></td>
                    <td>%</td>
                    <td>+ -°</td>
                </tr>
                <tr>
                    <td>Ночью <span></span></td>
                    <td><img src="" alt="" /><span></span></td>
                    <td></td>
                    <td>%</td>
                    <td>+ -°</td>
                </tr>
            </table>
        </div>
    )
}

export default PageInfo;