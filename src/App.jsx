import React from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Service from './Component/Service'
import Counter from './Component/Counter'
import Video from './Component/Video'
import Testimonial from './Component/Testimonial'
import Form from './Component/Form'
import Findus from './Component/Findus'
import Footer from './Component/Footer'
import { FaLightbulb } from "react-icons/fa";

const App = () => {
  toggleTheme = ()=>{ 
    document.documentElement.classList.toggle("dark");
  }
  return (
    <>
    <button onClick={toggleTheme} className='p-[10px] rounded-full bg-blue-300 dark:bg-teal-500 text-[30px] text-black dark:text-white fixed right-[20px] bottom-[20px]'><FaLightbulb /></button>
    <Navbar />
    <Banner />
    <Service />
    <Counter />
    <Video/>
    <Testimonial/>
    <Form/>
    <Findus/>
    <Footer/>
    </>
  )
}

export default App