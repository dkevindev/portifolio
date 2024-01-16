import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Projetos } from './pages/projetos';


const App = () => {

  return (
    <div id='home' className='h-screen w-screen' >
      <NavBar/>
      <Home />
      <Projetos/>
    </div>
  )
};

export default App;