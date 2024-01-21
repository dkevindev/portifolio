import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { LanguageProvider } from './context/Context';
import { Projetos } from './pages/projetos';
import { Contato } from './pages/contatos';

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/sobre" Component={Sobre} />
            <Route path="/projetos" Component={Projetos} />
            <Route path="/contato" Component={Contato} />
          </Routes>
          <Sobre/>
          <Projetos/>
          <Contato/>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
