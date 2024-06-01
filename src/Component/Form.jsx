import React from 'react'
import { CgDarkMode } from 'react-icons/cg'

const Form = () => {
  return (
    <section className='bg-FEF5E3 pb-150 dark:bg-222132'>
      <div className="w-container mx-auto">
      <div className='w-872 grid grid-cols-2 gap-8 mx-auto'>
           <div className='   '>
            <img src="/images/form.png" alt="" />
            <h3 className='text-25 font-bold text-primary font-oxanium mt-3'>REQUEST A CALLBACK</h3>
            <h2 className='text-39 font-extrabold font-raleway leading-110% text-222132 dark:text-teal-300 my-2 '>We will contact in the shortest time.</h2>
            <p className=' font-raleway text-9291A1 '>Monday to Friday, 9am-5pm.</p>
           </div>
           <div className=' mt-32 '>
                <input className='w-full py-2 pl-2 rounded-md border-2 border-C5C5D2 dark:border-teal-200  dark:bg-464558 ' type="text" placeholder='Name' />
                <input className='w-full py-2 pl-2 rounded-md border-2 border-C5C5D2 dark:border-teal-200  dark:bg-464558 my-4' type="text" placeholder='Email' />
                <textarea className='w-full resize-none py-2 pl-2 rounded-md border-2 border-C5C5D2 dark:border-teal-200  dark:bg-464558' placeholder='Message'></textarea>

                <button className='py-1 w-full text-white border-2 dark:border-teal-200 bg-primary rounded-md mt-10'>Send Message</button>
           </div>
     </div>
      </div>
    </section>
  ) 
}

export default Form