import github from '../assets/github-142-svgrepo-com.svg';
import twitter from '../assets/twitter-svgrepo-com.svg';
import instagram from '../assets/instagram-167-svgrepo-com.svg';
import logo from '../assets/dkdev.png';
import menu from '../assets/Frame 6.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <>
            <nav id='test1' className='hidden sm:hidden md:flex md:px-12 lg:px-28 py-1 bg-black h-20 justify-between fixed w-full '>
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
                            offset={50}
                            duration={500}
                        >HOME</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="sobre"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >SOBRE</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >PROJETOS</Link>
                    </li>
                    <li className='hover:text-azulBase cursor-pointer'>
                        <Link
                            activeClass="active"
                            to="test1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >CONTATOS</Link>
                    </li>
                </ul>
                <div className='flex justify-center items-center gap-5'>
                    <div style={{ height: 30 }} className='flex text-center hover:bg-gray-400 rounded-full'>
                        <img src={github} alt="" width={30} />
                    </div>
                    <div style={{ height: 30 }} className='flex text-center hover:bg-blue-400 rounded-full'>
                        <img src={twitter} alt="" width={30} />
                    </div>
                    <div style={{ height: 30 }} className='flex text-center hover:bg-pink-400 rounded-full'>
                        <img src={instagram} alt="" width={30} color='red' />
                    </div>
                </div>
            </nav>
            <div className='fixed w-full'>
                <nav className='flex items-center px-4 justify-between md:hidden w-full' style={{ backgroundImage: "url('/89781.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'cover', }} >
                    <img src={logo} alt="DKCODE" className='h-20' />
                    {!showMenu && <img src={menu} className='w-8 h-6  ' onClick={() => setShowMenu(true)} />}
                    {showMenu && <div className='text-4xl sm:text-7xl' style={{ color: '#5CE1E6' }} onClick={() => setShowMenu(false)}>X</div>}
                </nav>
                {showMenu && <div className='w-full bg-gray-500 text-white'>
                    <ul className='flex flex-col md:hidden text-center'>
                        <li className='border-b sm:py-1'>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}

                            >HOME</Link>
                        </li>
                        <li className='border-b sm:py-1'>
                            <Link
                                activeClass="active"
                                to="sobre"
                                spy={true}
                                smooth={true}
                                offset={80}
                                duration={500}
                            >SOBRE</Link>
                        </li>
                        <li className='border-b sm:py-1'>
                            PROJETOS
                        </li>
                        <li className='sm:py-1'>
                            <Link
                                activeClass="active"
                                to="test1"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >CONTATOS</Link>
                        </li>
                    </ul>
                </div>}
            </div>

        </>
    )

}