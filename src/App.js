import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';
import Intro from './components/Intro'
import About from './components/About'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Intro/>
        <ProjectPage/>
        <About/>
        </BrowserRouter>
    </div>
  );
}

export default App;
