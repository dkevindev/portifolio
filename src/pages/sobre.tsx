import { motion } from 'framer-motion';
import javascript from '../assets/javascript-svgrepo-com.svg';
import html from '../assets/html-5-svgrepo-com.svg';
import css from '../assets/css-3-svgrepo-com.svg';
import react from '../assets/react-svgrepo-com.svg';
import next from '../assets/nextjs-svgrepo-com.svg';
import tailwind from '../assets/tailwind-svgrepo-com.svg';
import node from '../assets/node-js-svgrepo-com.svg';
import mongodb from '../assets/mongodb-logo-svgrepo-com.svg';
import mysql from '../assets/mysql-logo-svgrepo-com.svg';
import firebase from '../assets/firebase-1-logo-svgrepo-com.svg';
import { LanguageContext } from '../context/Context';
import { useContext } from 'react';



export const Sobre = () => {
    const {isEnglish} = useContext(LanguageContext);

   
    return (
        <div id='sobre' className='flex flex-col md:justify-normal overflow-hidden min-h-screen' style={{ backgroundImage: "url('/bgsobre.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'cover', }}>
            <div className='flex flex-col mt-24 md:mt-32 mx-4 font-Oswald text-center md:m-10 md:gap-10 md:justify-between h-full m-6'>
                <motion.div
                    transition={{ type: 'spring', ease: "easeOut", duration: 0.6}}
                    initial={{y:100}}
                    whileInView={{y:0}}
                    style={{ backgroundColor: '#D9D9D9', fontSize: 15 }}
                    className='rounded-2xl p-2 mb-8 md:mb-0 md:w-2/3 md:min-w-[650px] md:self-center'>
                    <h1 className='font-bold text-base md:text-4xl' style={{ color: '#002E74' }}>{!isEnglish ? 'Oi, eu Sou o Davydson Kevin, prazer em conhecê-lo!' : "Hi, I'm Davydson Kevin, nice to meet you!"}</h1>
                    <p style={{ color: '#746A6A' }} className='text-center md:text-xl md:mt-1'>
                        {!isEnglish ? 'Entusiasta e desenvolvedor full stack, nutro uma paixão ardente por transformar conceitos em soluções digitais inovadoras. Com 29 anos, sou um dedicado marido e pai de encantadoras meninas. Minha jornada no universo da programação teve início em maio de 2023, marcando o começo de uma empolgante e desafiadora trajetória. Ao longo dos anos, concentrei meus esforços no aprimoramento constante das minhas habilidades em diversas tecnologias, imerso no aprendizado contínuo para criar soluções cada vez mais robustas. Mantenho-me atualizado com as últimas tendências e dedico-me a explorar as infinitas possibilidades oferecidas pelo dinâmico cenário tecnológico em constante evolução' : "Enthusiast and full stack developer, I have a burning passion for transforming concepts into innovative digital solutions. At 29 years old, I am a dedicated husband and father of charming girls. My journey in the world of programming began in May 2023, marking the beginning of an exciting and challenging journey. Over the years, I have focused my efforts on constantly improving my skills in various technologies, immersed in continuous learning to create increasingly robust solutions. I stay up to date with the latest trends and dedicate myself to exploring the infinite possibilities offered by the dynamic and constantly evolving technological landscape"}
                        
                    </p>
                </motion.div>
                <motion.div
                    transition={{ type: 'spring', ease: "easeOut", duration: 0.6}}
                    initial={{x:-100}}
                    whileInView={{x:0}}
                    
                    style={{ backgroundColor: '#D9D9D9', fontSize: 15 }}
                    className='rounded-2xl p-2 md:order-first md:flex md:flex-row md:w-1/3  md:min-w-[500px]'>
                    <div className='md:w-3/4 md:justify-center md:items-center md:flex md:flex-col'>
                        <h1 className='font-bold text-xl md:text-3xl' style={{ color: '#002E74' }}>FRONT END</h1>
                        <p style={{ color: '#746A6A' }} className='text-center md:text-xl md:mt-1'>
                            {!isEnglish ? 
                            'Transformando pixels em experiências cativantes, moldando a interface do usuário, dando vida à visão digital e tornando a navegação uma jornada intuitiva e visualmente impactante.' 
                            : "Turning pixels into captivating experiences, shaping the user interface, bringing the digital vision to life and making navigation an intuitive and visually impactful journey."}
                        </p>
                    </div>
                    <div className='flex gap-5 mt-1 md:grid md:grid-cols-3 md:p-5 justify-center items-center'>
                        <img src={javascript} alt="javascript" className='h-10 md:h-16' />
                        <img src={html} alt="html5" className='h-10 md:h-16' />
                        <img src={css} alt="css3" className='h-10 md:h-16' />
                        <img src={react} alt="react" className='h-10 md:h-16' />
                        <img src={next} alt="next" className='h-10 md:h-16' />
                        <img src={tailwind} alt="tailwind" className='h-10 md:h-16' />
                    </div>
                </motion.div>
                <motion.div
                    transition={{ type: 'spring', ease: "easeOut", duration: 0.6}}
                    initial={{x:100}}
                    whileInView={{x:0}}
                    style={{ backgroundColor: '#D9D9D9' }}
                    className='flex justify-center md:flex-row items-center flex-col rounded-2xl p-2 mt-8 md:mt-0 md:order-last md:self-end md:flex  md:w-1/3  md:min-w-[500px]'>
                    <div className='flex gap-5 mt-1 md:grid md:grid-cols-2 md:p-5 order-last'>
                        <img src={node} alt="node" className='h-10 md:h-16' />
                        <img src={mysql} alt="mysql" className='h-10 md:h-16' />
                        <img src={mongodb} alt="mongodb" className='h-10 md:h-16' />
                        <img src={firebase} alt="firebase" className='h-10 md:h-16' />
                    </div>
                    <div className='md:w-3/4 md:justify-center md:items-center md:flex md:flex-col order-first'>
                        <h1 className='font-bold text-xl md:text-3xl' style={{ color: '#002E74' }}>BACK END</h1>
                        <p style={{ color: '#746A6A' }} className='text-center md:text-xl md:mt-1 md:mb-2'>
                        {!isEnglish ? 
                            'Nos bastidores da web, construindo as fundações robustas que sustentam a inovação. Transformando dados em funcionalidades poderosas, impulsionando a eficiência e a confiabilidade dos sistemas.' 
                            : "Behind the scenes of the web, building the robust foundations that support innovation. Transforming data into powerful functionality, driving system efficiency and reliability."}
                            
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}