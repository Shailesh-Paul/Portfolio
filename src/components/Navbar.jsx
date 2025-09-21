import React, { useState, useEffect } from 'react'
import pic from "/photo_2024-10-15_00-31-39.jpg"
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
const Navbar = () => {
    const [menu , setMenu] =useState(false);
    const [dark, setDark] = useState(false)
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
        text:"ContactUs",
        
        
        },
    ]

    useEffect(() => {
        // initialize theme from localStorage or system
        const saved = localStorage.getItem('theme')
        if (saved === 'dark') {
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark')
            setDark(true)
        } else if (saved === 'light') {
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark')
            setDark(false)
        } else {
            // respect prefers-color-scheme
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            if (prefersDark) {
                document.documentElement.classList.add('dark')
                document.body.classList.add('dark')
                setDark(true)
            }
        }
    }, [])

    function toggleTheme() {
        const next = !dark
        setDark(next)
        if (next) {
            document.documentElement.classList.add('dark')
            document.body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
        // dispatch event for any listeners
        window.dispatchEvent(new Event('theme-change'))
    }
  return (
    
    <>
    <div className='site-navbar max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white '>
        <div className='flex justify-between items-center h-16'>
            {/* navbar left section  */}
            <div className='flex space-x-2 '>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-bold text-lg cursor-pointer'>Shailes<span className='text-green-500 font-bold text-xl'>h</span>
                <p className='text-sm'>Web Developer</p></h1>
                
            </div>
            {/* navbar right section */}
            <div>
                <ul className='hidden md:flex space-x-8 items-center'>
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
                    <li>
                        <button onClick={toggleTheme} aria-label='Toggle theme' className='ml-4 p-2 rounded-full hover:scale-110 duration-150'>
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                            )}
                        </button>
                    </li>
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
                    <li className='mt-4'>
                        <button onClick={toggleTheme} aria-label='Toggle theme' className='p-3 rounded-full'>
                            {dark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                            )}
                        </button>
                    </li>
            </ul>
            
        </div>

        )
    }

        

    </div>
    
    </>
  )
}

export default Navbar