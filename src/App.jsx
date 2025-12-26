import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Button from '@mui/material/Button';
import Home from './Components/Home';
import Skills from './Components/Skills';
import {  Routes, Route, Link} from "react-router-dom";

function App() {
  
  
  return (
    <div className="App">
     <header>
        <h1 id='hello'>My Protfilo</h1>
         <div id='table1'>
            <table>
                <tr>
                    <td><Button  className='button' variant="contained" ><Link to="/" >Home</Link></Button></td>
                    <td><Button  className='button' variant="contained"><Link to="/about">About</Link></Button></td>
                    <td><Button  className='button' variant="contained"><Link to="/project">Project</Link></Button></td>
                    <td><Button className='button' variant="contained"><Link to="/contact">Contact</Link></Button></td>
                    <td><Button className='button' variant="contained"><Link to="/skills">Skills</Link></Button></td>

                </tr>
            </table>
         </div>
     </header>
    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
    

    
  );
}

export default App;
