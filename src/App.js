import { useEffect, useState } from 'react';
import PostService from './API/PostService';
import './App.css';
import Loading from './components/Loading';
import PostList from './components/PostList';
import PostListInfo from './components/PostListInfo';
import Footer from './components/UI/Footer';
import Navbar from './components/UI/Navbar';
import PageInfo from './pages/PageInfo';

function App() {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gettingWether()
  }, [])

  const getDataWithInput = (e) => {
    e.preventDefault();
    gettingWether()
  }

  const gettingWether = async () => {
    setIsLoading(true)
    const data = await PostService.getAll()
    console.log(data.list)
    setPosts(data.list)
    setIsLoading(false)
  }


  return (
    <div className="App">
      <Navbar />
      <div className='page'>
        <h1>Прогноз погоды на 5 дней</h1>
        {(isLoading)
          ? <Loading />
          : <PostList props={posts} />
        }

      </div>
      <PostListInfo props={posts}/>
      <Footer />
    </div>
  );
}

export default App;
