import { useEffect } from 'react';
import { Home } from './pages/home';
import { NavBar } from './pages/nav';
import { Sobre } from './pages/sobre';
import { scroller } from 'react-scroll';


const App = () => {


  useEffect(() => {
    const handleScroll = () => {
      // Verifica se a posição de rolagem atingiu o final da primeira seção
      if (window.scrollY >= window.innerHeight) {
        // Rola suavemente para a próxima seção
        scroller.scrollTo('section2', {
          smooth: 'easeInOutQuart', // Pode ajustar o tipo de animação
          duration: 800, // Pode ajustar a duração da animação
        });
      }
    };

    // Adiciona um ouvinte de rolagem ao montar o componente
    window.addEventListener('scroll', handleScroll);

    // Remove o ouvinte de rolagem ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <div id='home' className='h-screen w-screen' >
      <NavBar/>
      <Home />
      <Sobre/>
    </div>
  )
};

export default App;