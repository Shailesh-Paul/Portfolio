import React from 'react'
import java from "/java.png"
import python from "/python.webp"

import express from "/express.png"
import reactjs from "/reactjs.png"
import nodejs from "/node.png"
import zerodhaLogo from "/zerodhaLogo.jpeg";

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            name: "ZerodhaClone",
            logo: zerodhaLogo,
            about: "Developed using frontend technology React.js, Tailwind CSS and backend Express.js with MongoDB."
        },
        {
            id: 2,
            name: "Express",
            logo: express,
            about: "Express.js server / API example."
        },
        {
            id: 3,
            name: "Java",
            logo: java,
            about: "Java project / examples."
        },
        {
            id: 4,
            name: "Python",
            logo: python,
            about: "Python scripts and projects."
        },
        {
            id: 5,
            name: "ReactJS",
            logo: reactjs,
            about: "React.js projects and components."
        },
        {
            id: 6,
            name: "NodeJs",
            logo: nodejs,
            about: "Node.js backend examples."
        }
    ];
  return (
    <>
    <div  name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10 '>
        <div>
            <h1 className='font-bold text-2xl mb-5'>PortFolio</h1>
            <span className='underline'>Featured Projects</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 my-4'>{

                cardItem.map(({ id, logo, name, about }) => (
                    <div className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-2xl p-2 mb-2 cursor-pointer hover:scale-105 duration-300' key={id}>

                        <img src={logo} alt={name} className='w-[120px] p-1 rounded-full border-[2px]' />
                        <div>
                            <div className='font-bold text-lg mb-2 px-2'>{name}</div>
                            <p className='px-2 text-gray-700'>{about}</p>

                        </div>

                        <div className='flex flex-wrap gap-2 px-6 py-4 justify-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md shadow cursor-pointer'>Link</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-md cursor-pointer'>Source Code</button>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio