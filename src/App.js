import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';
import Intro from './components/Intro'
import About from './components/About'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <ProjectPage/>
        <About/>
    </div>
  );
}

export default App;
