
import pic from "/photo_2024-10-15_00-31-39.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { ReactTyped} from "react-typed";


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

function Home() {
   
  return (
    <>
    
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='flex flex-col md:flex-row '>


{/* Home left paragraph section  */}


         <div  className='md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1'>
         <span className='text-xl'>Welcome to portfolio Website</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
             <h1 >Hello, I'm a </h1> &nbsp;
         
<ReactTyped className='text-red-600 font-bold '
          
          strings={["Developer.", "Programmer.","Coder."]}
          typeSpeed={40}
          backSpeed={40}
          loop={true}
        />
        

         <br/> <br />
        </div >
         <p className='text-sm md:text-md text-justify'> "Hi, I'm Shailesh Kumar. A full-stack developer passionate about building clean, efficient, and user-friendly web applications. Welcome to my digital space."</p>
    <br />
    {/* Social media icons */}

   <div className='flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 items-center'>
     <div className='space-y-2 text-center '>
        <h1 className='font-bold '>Available On:</h1>
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

    {/* currently working on */}


    <div className='space-y-2'>
        <h1 className='font-bold '>Currently Working  On:</h1>
        <div className='flex flex-row space-x-5'>
            <SiMongodb className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full '/>
            <SiExpress className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full '/>
            <FaReact className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full '/>
            <IoLogoNodejs className='text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full ' />

        </div>

    </div>
   </div>

          </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8  order-1  '>
        <img src={pic} alt="" className='rounded-full md:w-[400px] md:h-[400px] '/></div>

        </div>
        <br />
        <hr />
    
    </div>

    </>
  )
}

export default Home