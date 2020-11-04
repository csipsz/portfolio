import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ProjectPage/>
    </div>
  );
}

export default App;
