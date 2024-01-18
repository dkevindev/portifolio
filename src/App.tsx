import { useEffect } from 'react';
import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { scroller } from 'react-scroll';


const App = () => {

  
  return (
    <div id='home' className='h-screen w-screen' >
      <NavBar/>
      <Home />
      <Sobre/>
    </div>
  )
};

export default App;