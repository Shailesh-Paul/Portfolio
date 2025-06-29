import React from 'react'
import java from "/java.png"

import reactjs from "/reactjs.png"
import nodejs from "/node.png"
import css from "/css.jpg"
import html from "/html.png"
import javascript from "/javascript.png"

const Experience = () => {
    const cardItem=[
        {
            id:1,
            name:"HTML",
            logo: html,
        },
         {
            id:2,
            name:"CSS",
            logo: css,
        },
         {
            id:3,
            name:"JavaScript",
            logo: javascript,
        },
         {
            id:4,
            name:"Java",
            logo: java,
        },
         {
            id:5,
            name:"ReactJS",
            logo: reactjs,
        }, {
            id:6,
            name:"NodeJs",
            logo: nodejs,
        }


    ]
  return (
    <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10 '>
        <div>
            <h1 className='font-bold text-2xl mb-4'>Experience</h1>
            <span className='underline '>I'm learning the below technologies</span>
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid:cols-5  gap-6 my-3 '>{

                cardItem.map(({id,logo,name})=>(
                    <div className='flex flex-col border-[2px] md:w-[200px] md:h-[200px] items-center justify-center   rounded-full  shadow-2xl p-2 mb-2 cursor-pointer hover:scale-105 duration-300 ' key={id}>

                        <img
                         src={logo} alt="" className='w-[125px]  rounded-full '/>
                        <div >
                            <div className=''>{name}</div>
                            

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

export default Experience;