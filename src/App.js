import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar'
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
