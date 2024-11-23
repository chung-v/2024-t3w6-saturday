import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TerminalAppProject from './pages/TerminalAppProject';
import ProjectLayout from './pages/_templates/ProjectLayout';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* Routes are declared within this component */}
      <BrowserRouter>
        <Navbar />
        {/* Declare individual route components here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectLayout />}>
            <Route path='/projects/terminalApp' element={<TerminalAppProject />} />
            <Route path='terminalApp' element={<TerminalAppProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
