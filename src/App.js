import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import './App.css';
import PostList from './components/PostList';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';

function App() {

  const [posts, setPosts] = useState([])
  const [city, setCity] = useState('Moscow');

  useEffect(() => {
    gettingWether()
  }, [])

  const getDataWithInput = (e) => {
    e.preventDefault();
    gettingWether()
  }

  const gettingWether = async () => {
    const data = await PostService.getAll()
    console.log(data.list)
    setPosts(data.list)

  }


  return (
    <div className="App">
      <Navbar />
      <div className='page'>
        <h1>Прогноз погоды на 5 дней</h1>
        
        <PostList props={posts} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
