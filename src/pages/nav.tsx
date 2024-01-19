import github from '../assets/github-142-svgrepo-com.svg';
import twitter from '../assets/twitter-svgrepo-com.svg';
import instagram from '../assets/instagram-167-svgrepo-com.svg';
import pt from '../assets/flag-for-flag-brazil-svgrepo-com.svg';
import us from '../assets/flag-for-flag-us-outlying-islands-svgrepo-com.svg';
import logo from '../assets/dkdev.png';
import menu from '../assets/Frame 6.png';
import { useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { LanguageContext } from '../context/Context';

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { isEnglish, toggleLanguage } = useContext(LanguageContext);


    return (
        <>
            <nav id='test1' style={{zIndex: 99999}} className='hidden sm:hidden md:flex md:px-12 lg:px-28 py-1 bg-black h-20 justify-between fixed w-full backdrop-blur-3xl'>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="DKCODE" className='h-20' />
                </div>
                <ul className='flex font-Roboto text-white justify-center items-center text-center h-full gap-5'>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{!isEnglish ? 'INICIO' : 'HOME'}</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="sobre"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{!isEnglish ? 'SOBRE' : 'ABOUT'}</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="projetos"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{!isEnglish ? 'PROJETOS' : 'PROJECTS'}</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="contato"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >{!isEnglish ? 'CONTATO' : 'CONTACT'}</Link>
                    </li>
                </ul>
                <div className='flex justify-center items-center gap-5 '>
                    <div style={{ height: 30 }} className='flex text-center opacity-30 hover:opacity-100 rounded-full'>
                        <img src={github} alt="" width={30} />
                    </div>
                    <div style={{ height: 30 }} className='flex text-center opacity-30 hover:opacity-100 rounded-full'>
                        <img src={twitter} alt="" width={30} />
                    </div>
                    <div style={{ height: 30 }} className='flex text-center opacity-30 hover:opacity-100 rounded-full'>
                        <img src={instagram} alt="" width={30} color='red' />
                    </div>
                    <div
                        style={{ height: 35 }}
                        className={`flex text-center hover:opacity-100 rounded-full ml-7 cursor-pointer ${!isEnglish ? 'opacity-100' : 'opacity-30'}`}
                        onClick={() => toggleLanguage(false)}
                    >
                        <img src={pt} alt="" width={35} color='red' />
                    </div>
                    <div
                        style={{ height: 35 }}
                        className={`flex text-center hover:opacity-100 rounded-full cursor-pointer ${isEnglish ? 'opacity-100' : 'opacity-30'}`}
                        onClick={() => toggleLanguage(true)}
                    >
                        <img src={us} alt="" width={35} color='red' />
                    </div>
                </div>
            </nav>
            <div className='fixed w-full backdrop-brightness-50' style={{ zIndex: 9999 }}>
                <nav className='flex items-center px-4 justify-between md:hidden w-full' style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }} >
                    <img src={logo} alt="DKCODE" className='h-20' />
                    {!showMenu && <img src={menu} className='w-8 h-6  ' onClick={() => setShowMenu(true)} />}
                    {showMenu && <div className='text-4xl sm:text-7xl' style={{ color: '#5CE1E6' }} onClick={() => setShowMenu(false)}>X</div>}
                </nav>
                {showMenu && <div className='w-full bg-gray-500 text-white'>
                    <ul className='flex flex-col md:hidden text-center text-xl'>
                        <li className='border-b sm:py-1 py-1'>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >{!isEnglish ? 'INICIO' : 'HOME'}</Link>
                        </li>
                        <li className='border-b sm:py-1 py-1'>
                            <Link
                                activeClass="active"
                                to="sobre"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >{!isEnglish ? 'SOBRE' : 'ABOUT'}</Link>
                        </li>
                        <li className='border-b sm:py-1 py-1'>
                            <Link
                                activeClass="active"
                                to="projetos"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >{!isEnglish ? 'PROJETOS' : 'PROJECTS'}</Link>
                        </li>
                        <li className='border-b sm:py-1 py-1'>
                            <Link
                                activeClass="active"
                                to="contato"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => setShowMenu(false)}
                            >{!isEnglish ? 'CONTATO' : 'CONTACT'}</Link>
                        </li>
                        <div className='p-2'>
                            <motion.div
                                initial={{ x: 200 }}
                                whileInView={{ x: 0 }}
                                transition={{ type: 'spring', ease: "easeOut", duration: 2 }}
                                className='flex justify-center m-2 gap-10 md:hidden'>
                                <div
                                    style={{ height: 40 }}
                                    className={`flex text-center rounded-full ${!isEnglish ? 'opacity-100' : 'opacity-30'}`}
                                    onClick={() => toggleLanguage(false)}
                                >
                                    <img src={pt} alt="" width={40} color='red' />
                                </div>
                                <div
                                    style={{ height: 40 }}
                                    className={`flex text-centerrounded-full ${isEnglish ? 'opacity-100' : 'opacity-30'}`}
                                    onClick={() => toggleLanguage(true)}
                                >
                                    <img src={us} alt="" width={40} color='red' />
                                </div>
                            </motion.div>
                        </div>
                        <div className='p-2'>
                            <h1>
                                {!isEnglish ? 'REDES SOCIAIS' : 'SOCIAL MEDIA'}
                            </h1>
                            <motion.div
                                initial={{ x: 200 }}
                                whileInView={{ x: 0 }}
                                transition={{ type: 'spring', ease: "easeOut", duration: 2 }}
                                className='flex justify-center m-2 gap-10 md:hidden'>
                                <img src={github} alt="github" width={35} />
                                <img src={twitter} alt="twitter" width={35} />
                                <img src={instagram} alt="instagram" width={35} />
                            </motion.div>
                        </div>
                    </ul>
                </div>}
            </div>
        </>
    )

}