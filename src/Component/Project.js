import React, { useState, useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import { AiOutlineFilePdf } from "react-icons/ai";
import { FaUserPlus, FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiAntdesign } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


const Dot = ({ x, y, opacity }) => (
    <div
        className="absolute rounded-full cursor-pointer"
        style={{
            width: '2px',
            height: '2px',
            top: `${y}px`,
            left: `${x}px`,
            backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        }}
    />
);

export default function Project() {

    const ProjectData = [

        {
            "id": "1",
            "img": "assets/images/news-ss.PNG",
            "description": "news portal is an innovative project developed in ReactJS, utilizing the Bootstrap CSS framework to create an intuitive and responsive news application. The purpose of Online News Portal is to automate the existing manual system by the computerized software,  their requirements, so that their valuable information can be stored for a longer period.",
            "gitlink": "https://github.com/solanki-twisha/news-portal-react",
            "demolink": " https://in.linkedin.com/in/twisha-solanki-982326227?trk=public_profile_browsemap"
        },
        {
            "id": "2",
            "img": "assets/images/cycle_sharing.PNG",
            "description": "Cycle Sharing is an innovative project developed in Laravel, utilizing the Bootstrap CSS framework to create an intuitive and responsive cycle sharing application. A cycle-sharing system is a system, or a service in  which cycles are made available for shared use to individuals on a short term basis for a price or free. ",
            "gitlink": "https://github.com/solanki-twisha/cycle-sharing-laravel",
            "demolink": ""
        },

        {
            "id": "3",
            "img": "assets/images/Luandry_service.PNG",
            "description": "Laundry is an innovative project developed in Asp.Net, utilizing the Bootstrap CSS framework to create an intuitive and responsive laundry service application. Dry-cleaning and Laundry business is profitable business now-a-days becausein today's modern life, no one has got the time to wash and clean",
            "gitlink": "https://github.com/solanki-twisha/luandry-service-asp.net",
            "demolink": ""
        },
        {
            "id": "4",
            "img": "assets/images/mobileshop.PNG",
            "description": "Mobile shop is an innovative project developed in php, utilizing the Bootstrap CSS framework to create an intuitive and responsive mobile shop application.The Online Mobile Store which are the Admin and Client. The Admin can be accessed only by the management or the system admin user while the clients or possible client can freely create their system account in order to use the important features of the system such as shopping cart and placing orders. ",
            "gitlink": "https://github.com/solanki-twisha/mobile-shop-php",
            "demolink": ""
        },
     
    ]

    const [dots, setDots] = useState([]);
    const [backgroundWidth, setBackgroundWidth] = useState(window.innerWidth);
    const backgroundHeight = 1500;


    useEffect(() => {
        const handleResize = () => {
            setBackgroundWidth(window.innerWidth);

        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const numberOfDots = 200;


    useEffect(() => {
        const newDots = Array.from({ length: numberOfDots }, (_, index) => ({
            x: Math.random() * backgroundWidth,
            y: Math.random() * backgroundHeight,
            index,
            opacity: Math.random() * 0.3 + 0.3,
        }));
        setDots(newDots);
    }, [backgroundWidth, backgroundHeight, numberOfDots]);

    const minDistanceBetweenDots = 40;

    const handleBackgroundClick = (e) => {
        const clickX = e.clientX - e.target.getBoundingClientRect().left;
        const clickY = e.clientY - e.target.getBoundingClientRect().top;

        const isTooClose = dots.some((dot) => {
            const distance = Math.sqrt((dot.x - clickX) ** 2 + (dot.y - clickY) ** 2);
            return distance < minDistanceBetweenDots;
        });

        if (!isTooClose) {
            const newDot = {
                x: clickX,
                y: clickY,
                opacity: Math.random() * 0.5 + 0.1,
            };

            setDots([...dots, newDot]);
        }
    };
    return (

        <>

            <div className='bg-black h-fit   text-white ' style={{ backgroundImage: "url('assets/image.jpg", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} onClick={handleBackgroundClick}>
                <Header />

                {dots.map((dot, index) => (
                    <Dot key={index} x={dot.x} y={dot.y} opacity={dot.opacity} />
                ))}
                <div className='mt-20 text-center p-24'>
                    <p className=' text-5xl '>My Recent <span className='text-pink-500'>Works</span></p>
                    <p className='text-xl mt-2'>Here are a few projects I've worked on recently.</p>
                </div>


                <div className='container mx-auto mb-40 '>
                    <div className='flex justify-center sm:flex-row flex-col  sm:ms-0 ms-5'>
                        <div className='flex flex-wrap justify-center gap-20'>
                        {ProjectData.map((item, index) => (
                                <div key={index} className='border p-3 shadow-pink-500 sm:mt-0 mt-10 shadow-lg hover:shadow-pink-500 hover:shadow-xl hover:scale-110 transform transition-transform duration-300 border-pink-500 sm:w-96 w-80 h-1/2 shadow:lg hover:text-gray-50 rounded-lg'>
                                    <img src={item.img} alt={`Project ${index + 1}`} />
                                    <p className='mt-2 p-3 sm:block hidden'>{item.description}</p>
                                    <div className='flex mt-10'>
                                        {item.gitlink && (
                                            <a href={item.gitlink} type='submit' className='bg-pink-500 rounded-md p-3 ms-10 w-32 font-bold text-white mt-8 flex justify-center '>
                                                <FaGithub className='mt-1' />
                                                <span className='ms-2'>Github</span>
                                            </a>
                                        )}
                                        {item.demolink && (
                                            <a href={item.demolink} type='submit' className='bg-pink-500 rounded-md p-3 w-32 font-bold text-white mt-8 ms-5 justify-center flex '>
                                                <FaUserPlus className='flex mt-1' />
                                                <span className='ms-2'>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>


                     

                    </div>

                   
                </div>
                <Footer />
            </div>
        </>
    )
}
