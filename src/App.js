import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/home' element={<Header></Header>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
