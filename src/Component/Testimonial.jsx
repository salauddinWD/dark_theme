import React from 'react'
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className='bg-FEF5E3 dark:bg-222132 pb-150'>
        <div className="w-container mx-auto">
        <div className='font-raleway relative '>
        <BiSolidQuoteLeft className='text-105 text-FFAF0F absolute top-0 left-28' />
          <h3 className='text-32 font-extrabold text-primary text-center'>TESTIMONIAL</h3>
           <h2 className='text-32 font-extrabold text-center dark:text-white'>Our Awesome Clients</h2>
        </div>
        <div className='w-872 py-10 px-10 bg-white dark:bg-464558 rounded-md mt-11 mx-auto' >
            <h2 className='text-25 dark:text-teal-300  text-primary font-semibold '>Fantastic service!</h2>
            <p className='text-sm py-6 dark:text-white'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
            <div className='flex justify-between'>
                <ul className='flex gap-2 items-center'>
                    <li className='text-sm text-primary'><FaStar /></li>
                    <li className='text-sm text-primary'><FaStar /></li>
                    <li className='text-sm text-primary'><FaStar /></li>
                    <li className='text-sm text-primary'><FaStar /></li>
                    <li className='text-sm text-primary'><FaStar /></li>
                </ul>
                <div className='flex gap-3'>
                    <div>
                    <h2 className='text-sm dark:text-teal-300'>Yves Tanguy</h2>
                    <p className='text-sm dark:text-teal-300'>Chief Executive, DLF</p>
                    </div>
                    <img src="/images/test.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimonial