import { scroller } from 'react-scroll';

export const scroll = (site: string) => {
    switch (site) {
        case '/':
            scroller.scrollTo('home', {
                duration: 500,
                delay: 100,
                smooth: true,
            });
            break;
        case '/sobre':
            scroller.scrollTo('sobre', {
                duration: 500,
                delay: 100,
                smooth: true,
            });
            break;
        case '/projetos':
            scroller.scrollTo('projetos', {
                duration: 500,
                delay: 100,
                smooth: true,
            });
            break;
        case '/contato':
            scroller.scrollTo('contato', {
                duration: 500,
                delay: 100,
                smooth: true,
            });
            break;

        default:
            scroller.scrollTo('home', {
                duration: 500,
                delay: 100,
                smooth: true,
            });
            break;
    }
}