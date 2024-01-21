import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { LanguageProvider } from './context/Context';
import { Projetos } from './pages/projetos';
import { Contato } from './pages/contatos';
import { RouteContainer } from './pages/routerContainer';

const App = () => {

  console.log('Página atual:', window.location.pathname);


  return (
    <LanguageProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<RouteContainer><Home/><Sobre/><Projetos/><Contato/></RouteContainer>} />
            <Route path="/sobre" element={<RouteContainer><Home/><Sobre/><Projetos/><Contato/></RouteContainer>} />
            <Route path="/projetos" element={<RouteContainer><Home/><Sobre/><Projetos/><Contato/></RouteContainer>} />
            <Route path="/contato" element={<RouteContainer><Home/><Sobre/><Projetos/><Contato/></RouteContainer>} />
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
