import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { LanguageProvider } from './context/Context';
import { Projetos } from './pages/projetos';
import { Contato } from './pages/contatos';


const App = () => {


  return (
    <LanguageProvider>
      <main id='home' className='h-screen w-screen' >
        <NavBar />
        <Home />
        <Sobre />
        <Projetos/>
        <Contato/>
      </main>
    </LanguageProvider>

  )
};

export default App;