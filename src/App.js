import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import './App.css';
import PostList from './components/PostList';
import Navbar from './pages/Navbar';
import PostItem from './components/PostItem';

import icons_01d from './images/icons/01d.png';
import icons_02d from './images/icons/02d.png';
import icons_03d from './images/icons/03d.png';
import icons_05d from './images/icons/05d.png';
import icons_09d from './images/icons/09d.png';
import icons_10d from './images/icons/10d.png';
import icons_13d from './images/icons/13d.png';
import icons_50d from './images/icons/50d.png';

function App() {

  const [posts, setPosts] = useState(
    { temp: '', city: '', country: '', weather_icon: '', weather_main: '', humidity: '', wind: '', error: '' }
  )
  const [city, setCity] = useState('Moscow');
  const [icon, setIcon] = useState(icons_01d);

  useEffect(() => {
    gettingWether()
  }, [])

  const getDataWithInput = (e) => {
    e.preventDefault();
    gettingWether()
  }

  const gettingWether = async () => {
    const data = await PostService.getAll({ city })

    setIcon(() => getImage(data))

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

  const getImage = (data) => {
    switch (data.weather[0].icon) {
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

  return (
    <div className="App">
      <Navbar />
      <h1>Прогноз погоды на 5 дней</h1>
      <form>
        <input type="text" placeholder='Введите название города' onChange={e => setCity(e.target.value)} />
        <button type='submit' onClick={getDataWithInput}>Получить погоду</button>
      </form>
      <PostItem props={posts} icon={icon} />
    </div>
  );
}

export default App;
