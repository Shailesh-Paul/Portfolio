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
                    <FaFacebookSquare  size={24}></FaFacebookSquare>
               <FaLinkedin size={24}></FaLinkedin>
               <FaGithubSquare size={24}></FaGithubSquare>
               <FaTelegram size={24}></FaTelegram>
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