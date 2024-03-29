import avatar from '../assets/profile.webp';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/Context';
import { useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { scroll } from '../functions/scroller'


export const Home = () => {
    const { isEnglish } = useContext(LanguageContext);
    const isLargeScreen = useMediaQuery({ minWidth: 768 });
    const site = window.location.pathname

    useEffect(() => {
        scroll(site)
      }, []);

    return (
        <>
            <div id='home' className='flex flex-col justify-between min-h-screen md:justify-center overflow-hidden ' style={{ backgroundImage: "url('/89781.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'cover' }}>
                <div className='flex flex-col h-full w-full justify-center items-center mt-20 fade '>
                    {!isLargeScreen && <div className='flex flex-col items-center h-full mt-16'>
                        <motion.h1 initial={{ x: -200 }}
                            whileInView={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white text-5xl font-semibold mb-4 mt-4'><span style={{ color: '#5CE1E6' }}>D</span>avydson <span style={{ color: '#5CE1E6' }}>K</span>evin</motion.h1>
                        <motion.img
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 0.6 }} src={avatar} alt="avatar" style={{ borderRadius: 200, margin: -35 }} className='h-96' />
                        <motion.h1 initial={{ x: 200 }}
                            whileInView={{ x: 0 }}
                            transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white text-5xl font-semibold mt-6'>{!isEnglish ? 'Desenvolvedor' : 'Developer'}</motion.h1>
                        <motion.h1 initial={{ y: -200 }}
                            whileInView={{ y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white text-7xl font-semibold mt-2'>F<span style={{ color: '#5CE1E6' }}>U</span>LL STAC<span style={{ color: '#5CE1E6' }}>K</span></motion.h1>
                    </div>}
                    {isLargeScreen && <div className='md:flex justify-center items-center w-full h-full'>
                        <div className='flex flex-col justify-center items-center -mt-28'>
                            <motion.h1 initial={{ x: -200 }}
                                animate={{ x: 0 }}
                                transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white lg:text-5xl md:text-4xl font-semibold mb-4 mt-4'><span style={{ color: '#5CE1E6' }}>D</span>avydson <span style={{ color: '#5CE1E6' }}>K</span>evin</motion.h1>
                            <motion.h1
                                initial={{ y: -200 }}
                                animate={{ y: 0 }}
                                transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white lg:text-9xl md:text-7xl font-semibold mt-2'>F<span style={{ color: '#5CE1E6' }}>U</span>LL</motion.h1>
                        </div>
                        <div>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ ease: "easeOut", duration: 0.6 }} src={avatar} alt="avatar" style={{ borderRadius: 200, marginTop: -110 }} className='md:h-80 lg:h-96' />
                        </div>
                        <div className='flex flex-col -mt-28 justify-center items-center'>
                            <motion.h1 initial={{ x: 200 }}
                                animate={{ x: 0 }}
                                transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white lg:text-5xl md:text-4xl font-semibold mt-6'>{!isEnglish ? 'Desenvolvedor' : 'Developer'}</motion.h1>
                            <motion.h1 initial={{ y: 200 }}
                                animate={{ y: 0 }}
                                transition={{ ease: "easeOut", duration: 0.6 }} className='font-Oswald text-white lg:text-9xl md:text-7xl font-semibold mt-2'>STAC<span style={{ color: '#5CE1E6' }}>K</span></motion.h1>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}