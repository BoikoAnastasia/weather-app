import axios from 'axios';

export default class PostService{
    static async getAll() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=`)
        return (response.data);
    }
}