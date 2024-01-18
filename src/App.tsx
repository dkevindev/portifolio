import { useEffect } from 'react';
import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { scroller } from 'react-scroll';
import { LanguageProvider } from './context/Context';


const App = () => {


  return (
    <LanguageProvider>
      <div id='home' className='h-screen w-screen' >
        <NavBar />
        <Home />
        <Sobre />
      </div>
    </LanguageProvider>

  )
};

export default App;