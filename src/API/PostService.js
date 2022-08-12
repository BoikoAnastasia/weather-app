import axios from 'axios';

export default class PostService{
    static async getAll({city}) {
        let apiKey = "de24076e8940b80246286f4e77881bbe";
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
        return response.data;
    }
}