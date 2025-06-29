import React, { useState } from 'react'
import pic from "/photo_2024-10-15_00-31-39.jpg"
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [menu , setMenu] =useState(false);
    const newItems=[
        {
            id:1,
        text:"Home",
        
        
        },
        {
            id:2,
        text:"About",
        
        
        },
        {
            id:3,
        text:"Portfolio",
        
        
        },
        {
            id:4,
        text:"Experience",
        
        
        },
        {
            id:5,
        text:"Contacts",
        
        
        },
    ]
  return (
    
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white '>
        <div className='flex justify-between items-center h-16'>
            {/* navbar left section  */}
            <div className='flex space-x-2 '>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-bold text-lg cursor-pointer'>Shailes<span className='text-green-500 font-bold text-xl'>h</span>
                <p className='text-sm'>Web Developer</p></h1>
                
            </div>
            {/* navbar right section */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        newItems.map(({id,text})=>(
                            <li className='hover:scale-105 duration-200 cursor-pointer font-semib' key={id} >
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>{text}</Link>
                                </li>
                        ))
                    }
                </ul>
                <div onClick={()=>{setMenu(!menu)} } className='md:hidden'>
                    {menu?(<IoCloseSharp size={24} />) :(<AiOutlineMenu size={24} />)}
                </div>

            </div>
        </div>

    {/* for mobile navbar */}
    {
        menu && (
            <div className='bg-white'>
            <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl '>
                {
                        newItems.map(({id,text})=>(
         <li className='hover:scale-105 duration-200 cursor-pointer font-semibold '
                         key={id}>

                         <Link 
                         onClick={()=>{setMenu(!menu)} }
                         to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'>{text}</Link></li>
                        ))
                    }
            </ul>
            
        </div>

        )
    }

        

    </div>
    
    </>
  )
}

export default Navbar