import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import './App.css';
import PostList from './components/PostList';
import Navbar from './pages/Navbar';
import axios from 'axios';
import PostItem from './components/PostItem';

function App() {

  const [posts, setPosts] = useState(
    { temp: '', city: '', country: '', weather_icon: '', weather_main: '', humidity: '', wind: '', error: '' }
  )
  const [city, setCity] = useState('Moscow');

  useEffect(()=>{
    
  },[])

  const getDdefaultData = () =>{
    
  }

  const gettingWether = async (e) => {
    e.preventDefault();
    try {
      let apiKey = "de24076e8940b80246286f4e77881bbe";
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKey}`)
      const data = await response.json();
      setPosts({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        weather_icon: data.weather[0].icon,
        weather_main: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        error: ''
      })
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Прогноз погоды на 5 дней</h1>
      <form>
        <input type="text" placeholder='Введите название города' value={city} onChange={e => setCity(e.target.value)} />
        <button type='submit' onClick={gettingWether}>Получить погоду</button>
      </form>
      <PostItem props={posts}/>
    </div>
  );
}

export default App;
