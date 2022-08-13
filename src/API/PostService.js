import axios from 'axios';

export default class PostService{
    static async getAll() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=57&lon=-2.15&appid=de24076e8940b80246286f4e77881bbe`)
        return (response.data);
    }
}