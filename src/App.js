import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ProjectList/>
    </div>
  );
}

export default App;
