import '../styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../routes/Home';
import Projects from '../routes/Projects';
import Meet from '../routes/Meet';
import Contact from '../routes/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/Projects' element={ <Projects /> }></Route>
        <Route path='/MeetUs' element={ <Meet /> }></Route>
        <Route path='/ContactUs' element={ <Contact /> }></Route>
    </Routes>
    </div>
  );
}

export default App;
