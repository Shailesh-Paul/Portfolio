import React from 'react'
import { FaFacebookSquare,FaLinkedin,FaTelegram,FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='items-center justify-center flex flex-col'>
                <div className='flex space-x-4 '>
                    <ul className='flex flex-row space-x-5 '>
            <li>
                <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
                <FaFacebookSquare  className='text-xl cursor-pointer hover:scale-110 duration-200'/>
                </a>
            </li>
           <li>
            <a href="https://www.linkedin.com/in/shailesh-kumar-199330359" target='_blank' rel='noopener noreferrer'>
             < FaLinkedin className='text-xl cursor-pointer hover:scale-110 duration-200'/>
             </a>
           </li>
           
        <li>
            <a href="https://t.me/Shaileshpal99" target='_blank' rel='noopener noreferrer'>
            <FaTelegram  className='text-xl cursor-pointer hover:scale-110 duration-200'/>
            </a>
        </li>
        
        <li>
            <a href="https://github.com/Shailesh-Paul
curreGithub - pass - @6203840686" target='_blank' rel='noopener noreferrer'>
            <FaGithubSquare  className='text-xl cursor-pointer hover:scale-110 duration-200'/>
            </a>
        </li>

        </ul>
                </div>
               <div className='mt-8 border-t border-gray-700 pt-8 flex-col items-center flex '>
                <p className='text-sm font-light'>
                    &copy; 2025 Your Company. All rights reserved.
                  </p>
                  
                    <span className='text-sm font-light px-6'>Supportive Partner ❤️ Shailesh</span>
                
               </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer