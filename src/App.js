import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credits from './components/Credits';
import SidebarNav from './components/SidebarNav';
import './App.css';
import './styles/Global.css';

function App() {
  
  return (
    <div className="App">
      <div id="content">
        <Intro/>
        <About/>
        <Experience/>
        <Projects/>
        <Credits/>
      </div>
      <SidebarNav/>
    </div>
  );
}


export default App;
