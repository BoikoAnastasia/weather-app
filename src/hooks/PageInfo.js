export const PageInfoSort = ({ props }) => {
    const morning = ""
    const dinner = ""
    const evening = "" 
    const night = ""
    // "06:00:00" "09:00:00"
    // "12:00:00" "15:00:00"
    // "18:00:00" "21:00:00"
    // "00:00:00" "03:00:00"

    const SortArrInfo = (arr) => {
        arr.sort((a, b) => {
            if (a.dt_txt.slice(11, 19) == "06:00:00") {
                if (b.dt_txt.slice(11, 19) == "09:00:00")
                    morning = a.main.temp - 273.15 + "..." + b.main.temp - 273.15;
                    console.log(morning)
            }
        })
    }
    return SortArrInfo(props)
}