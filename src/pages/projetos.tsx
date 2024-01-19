import { LanguageContext } from '../context/Context';
import { useContext } from 'react';



export const Projetos = () => {
    const { isEnglish } = useContext(LanguageContext);


    return (
        <div id='projetos' className='flex flex-col md:justify-normal overflow-hidden' style={{ backgroundColor: '#D8D8D8' }}>
            <div className='flex flex-col'>
                <div className='w-full h-80 md:h-96 text-center font-Oswald' style={{ background: 'linear-gradient(180deg, #80C979 0%, rgba(100, 168, 93, 0.75) 50.5%, #498943 97.5%)' }}>
                    <h1 className='mt-28 text-3xl md:text-5xl font-medium'>{!isEnglish ? 'Explore meus' : 'Explore my'} <span className='text-white'>{!isEnglish ? 'Projetos .' : 'Projects .'}</span></h1>
                    <h1 className='font-extralight md:text-3xl text-xl mx-7 my-1 text-white'>{!isEnglish ? 'Tenha sucesso online com um site rápido, fácil de usar e construído com as melhores práticas e paixão pelo design.' : 'Succeed online with a fast, easy-to-use website built with best practices and a passion for design.'}</h1>
                </div>
                <div className='md:grid md:grid-cols-3'>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 my-2 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                    <div style={{ backgroundColor: '#B6B6B6' }} className='relative h-48 md:mx-14 -top-24 md:-top-36 mx-6 mb-8 rounded-lg justify-center items-center text-center md:h-72'>PROJETO 1</div>
                </div>
                <div className='flex text-center justify-center items-center'>
                    <button style={{ background: 'linear-gradient(180deg, #80C979 0%, rgba(100, 168, 93, 0.75) 50.5%, #498943 97.5%)', }} className='relative py-1 px-2 -top-28 md:-top-36 rounded-md w-28 font-Oswald text-white'>EXIBIR MAIS</button>
                </div>
            </div>
        </div>
    )
}