import axios from 'axios';

export default class PostService{
    static async getAll() {
        let city = "Moscow";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
        return response;
    }
}