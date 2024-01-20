import React, { FormEvent, useRef, useState } from 'react';
import { LanguageContext } from '../context/Context';
import { useContext } from 'react';
import whatsapp from '../assets/whatsapp-svgrepo-com.svg'
import email from '../assets/email-1-svgrepo-com.svg';
import profile from '../assets/profile.svg';
import email2 from '../assets/email-svgrepo-com.svg';
import assunto from '../assets/info-svgrepo-com.svg';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';




export const Contato = () => {
    const { isEnglish } = useContext(LanguageContext);
    const [statusEmail, setStatusEmail] = useState<null | number>(null)

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_230363', 'template_5k6t3tx', form.current, 'SKf-wQtsvLNMUPNEJ')
                .then((result) => {
                    form.current && form.current.reset();
                    setStatusEmail(1)

                }, (error) => {
                    setStatusEmail(2)
                });
        }
    };



    return (
        <div id='contato' className='flex flex-col md:justify-normal overflow-hidden w-screen min-h-screen' style={{ backgroundColor: '#D8D8D8' }}>
            <ToastContainer/>
            <div className='flex flex-col justify-center items-center w-full h-72 md:h-96 text-center font-Oswald md:items-start' style={{ background: 'linear-gradient(180deg, #002E74 0%, #1B52A5 50.5%, #002E74 97.5%)' }}>
                <div className='md:w-1/2 md:flex md:justify-center md:items-center md:flex-col md:gap-2 md:mt-20'>
                    <h1 className='text-2xl font-bold text-white md:text-5xl'>{!isEnglish ? 'Vamos conversar!' : "Let's talk!"}</h1>
                    <h1 className='text-2xl font-bold text-white md:text-5xl'>{!isEnglish ? 'Vamos ale-me sobre o seu Projeto' : "Tell me about your Project"}</h1>
                    <h1 className='text-xl font-light md:text-2xl' style={{ color: '#9E9E9E' }}>{!isEnglish ? 'Vamos criar algo juntos! 🤘' : "Let's create something together! 🤘"}</h1>
                </div>
            </div>
            <div>

            </div>
            <div className='md:flex md:gap-32 lg:gap-60'>
                <div>
                    <div className='relative -top-20 bg-white mx-4 rounded-md mb-5 md:-top-0 md:w-[535px] md:mt-20 md:ml-28 md:mb-0 '>
                        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center md:pl-6 md:gap-3 '>
                            <div className='flex justify-center items-center w-14 h-14 md:w-16 md:h-16 rounded-full mt-2 mb-0 md:mt-0' style={{ backgroundColor: '#E2E2E2' }}>
                                <img src={whatsapp} alt="whatsapp" className='h-8 w-8 md:h-10 md:w-10' />
                            </div>
                            <div className='font-Oswald text-center md:py-3 md:text-left'>
                                <h1 className='text-black text-lg font-extralight'>{!isEnglish ? 'Clique aqui para entrar em contato no nossso whatsapp' : "Click here to get in touch on our whatsapp"}</h1>
                                <h1 className='font-normal -mt-1 mb-4 md:mb-0' style={{ fontSize: 27, color: '#002E74' }}>+55 (85) 998266634</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative -top-20 bg-white mx-4 rounded-md mb-5 md:-top-0 md:w-[535px] md:mt-6 md:ml-28 md:mb-0 '>
                        <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center md:pl-6 md:gap-3 '>
                            <div className='flex justify-center items-center w-14 h-14 md:w-16 md:h-16 rounded-full mt-2 mb-0 md:mt-0' style={{ backgroundColor: '#E2E2E2' }}>
                                <img src={email} alt="whatsapp" className='h-8 w-8 md:h-10 md:w-10' />
                            </div>
                            <div className='font-Oswald text-center md:py-3 md:text-left'>
                                <h1 className='text-black text-lg font-extralight'>{!isEnglish ? 'Envie-me para' : "Send me to"}</h1>
                                <h1 className='font-normal -mt-1 mb-4 md:mb-0' style={{ fontSize: 27, color: '#002E74' }}>contato@dkcode.com.br</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='relative -top-20 bg-white mx-4 rounded-md font-Oswald text-center p-2 font-light md:w-[620px] md:-mt-28 md:p-6'>
                        <h1 className='text-black font-normal text-xl md:text-3xl'>{!isEnglish ? 'Envie sua mensagem 🚀' : "Send your message 🚀"}</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='md:flex md:flex-col md:gap-4'>
                                <div className='flex mt-2 border-blue-900 border-2 rounded-md'>
                                    <div className='h-8 md:h-12 md:w-14 flex items-center justify-center p-2 rounded-l-md' style={{ backgroundColor: '#C5C5C5' }}>
                                        <img src={profile} width={20} />
                                    </div>
                                    <input type="text" name="user_name" placeholder={!isEnglish ? 'Digite seu nome' : "Type your name"} className='h-8 md:h-12 w-full rounded-r-md pl-2 focus:outline-none' style={{ backgroundColor: '#E2E2E2' }} />
                                </div>
                                <div className='flex mt-2 border-blue-900 border-2 rounded-md'>
                                    <div className='h-8 md:h-12 md:w-14 flex items-center justify-center p-2 rounded-l-md' style={{ backgroundColor: '#C5C5C5' }}>
                                        <img src={email2} width={20} />
                                    </div>
                                    <input type="text" name="email" placeholder={!isEnglish ? 'Digite seu email' : "Type your e-mail"} className='h-8 md:h-12 w-full rounded-r-md pl-2 focus:outline-none' style={{ backgroundColor: '#E2E2E2' }} />
                                </div>
                                <div className='flex mt-2 border-blue-900 border-2 rounded-md'>
                                    <div className='h-8 md:h-12 md:w-14 flex items-center justify-center p-2 rounded-l-md' style={{ backgroundColor: '#C5C5C5' }}>
                                        <img src={assunto} width={20} />
                                    </div>
                                    <input type="text" name="assunto" placeholder={!isEnglish ? 'Digite o assunto' : "Enter the subject"} className='h-8 md:h-12 w-full rounded-r-md pl-2 focus:outline-none' style={{ backgroundColor: '#E2E2E2' }} />
                                </div>
                                <div className='flex flex-col mt-2'>
                                    <h1 className='mb-2 md:text-xl'>{!isEnglish ? 'Fale um pouco mais sobre seu projeto' : "Tell us a little more about your project"}</h1>
                                    <textarea name="message" rows={6} placeholder={!isEnglish ? 'Digite o assunto' : "Enter the subject"} className='w-full rounded-r-md p-1 focus:outline-none rounded-md border-2 border-blue-900' style={{ backgroundColor: '#E2E2E2' }} />
                                </div>
                            </div>
                            <button type='submit' className='bg-blue-900 px-2 py-1 self-center text-white rounded-md mt-4'>{!isEnglish ? 'ENVIAR' : "SEND"}</button>
                            {statusEmail !== null &&
                            <div>{statusEmail === 1 ?
                            <h1 className='bg-green-500 mt-2 rounded-md text-white border-2 border-green-700 py-2'>Contato enviado com sucesso</h1>:
                            <h1 className='bg-red-500 mt-2 rounded-md text-white border-2 border-red-700 py-2'>Erro ao enviar - tente novamente</h1>}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <div className='relative bottom-0 border-t-2 bg-white md:mt-32' style={{ borderColor: '#C5C5C5' }}>
                <div className='flex flex-col items-center justify-center font-light font-Oswald p-5 text-center h-full md:gap-1' style={{ color: '#656565' }}>
                    <h1>{!isEnglish ? "'Tudo quanto fizerdes, fazei-o de todo o coração, como para o Senhor e não para homens, cientes de que recebereis do Senhor a recompensa da herança. A Cristo, o Senhor, é que estais servindo.'" : "Whatever you do, do it with all your heart, as for the Lord and not for men, knowing that you will receive from the Lord the reward of the inheritance. Christ, the Lord, is what you are serving."}</h1>
                    <h1 className='self-end md:self-center'>Colossenses 3:23-24</h1>
                    <h1 className='text-xl font-semibold'>www.dkcode.com.br</h1>
                </div>
            </div>
        </div>
    )
}