import axios from 'axios';

export default class PostService{
    static async getAll() {
        let apiKey = "de24076e8940b80246286f4e77881bbe";
        let city = "Moscow";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
        return response;
    }
}