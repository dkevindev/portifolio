import avatar from '../assets/profile-removebg-preview.png';
import github from '../assets/github-142-svgrepo-com.svg';
import twitter from '../assets/twitter-svgrepo-com.svg';
import instagram from '../assets/instagram-167-svgrepo-com.svg';

export const Home = () => {
    return (
        <>
            <div className='flex flex-col justify-between h-full md:justify-normal' style={{ backgroundImage: "url('/89781.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'cover', }}>
                <div className='flex flex-col h-full w-full justify-center items-center mt-20'>
                    <div className='flex flex-col items-center h-full mt-16 md:hidden '>
                        <h1 className='font-Oswald text-white text-5xl font-semibold mb-4 mt-4'><span style={{ color: '#5CE1E6' }}>D</span>avydson <span style={{ color: '#5CE1E6' }}>K</span>evin</h1>
                        <img src={avatar} alt="avatar" style={{ borderRadius: 200, margin: -35 }} className='h-80' />
                        <h1 className='font-Oswald text-white text-5xl font-semibold mt-6'>Desenvolvedor</h1>
                        <h1 className='font-Oswald text-white text-7xl font-semibold mt-2'>F<span style={{ color: '#5CE1E6' }}>U</span>LL STAC<span style={{ color: '#5CE1E6' }}>K</span></h1>
                    </div>
                    <div className='hidden md:flex justify-center items-center w-full h-full'>
                        <div className='flex flex-col justify-center items-center -mt-28'>
                            <h1 className='font-Oswald text-white lg:text-5xl md:text-4xl font-semibold mb-4 mt-4'><span style={{ color: '#5CE1E6' }}>D</span>avydson <span style={{ color: '#5CE1E6' }}>K</span>evin</h1>
                            <h1 className='font-Oswald text-white lg:text-9xl md:text-7xl font-semibold mt-2'>F<span style={{ color: '#5CE1E6' }}>U</span>LL</h1>
                        </div>
                        <div>
                            <img src={avatar} alt="avatar" style={{ borderRadius: 200, marginTop: -110 }} className='md:h-80 lg:h-96' />
                        </div>
                        <div className='flex flex-col -mt-28 justify-center items-center'>
                            <h1 className='font-Oswald text-white lg:text-5xl md:text-4xl font-semibold mt-6'>Desenvolvedor</h1>
                            <h1 className='font-Oswald text-white lg:text-9xl md:text-7xl font-semibold mt-2'>STAC<span style={{ color: '#5CE1E6' }}>K</span></h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center m-2 gap-5 md:hidden'>
                    <img src={github} alt="github" width={30} />
                    <img src={twitter} alt="twitter" width={30} />
                    <img src={instagram} alt="instagram" width={30} />
                </div>
            </div>
        </>
    )
}