import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";


const Findus = () => {
  return (
    <section className='bg-FEF5E3 dark:bg-222132 pb-150'>
        <div className="w-container mx-auto">
        <div className='font-raleway '>
          <h3 className='text-32 font-extrabold text-primary text-center'>FIND US</h3>
           <h2 className='text-32 font-extrabold text-center dark:text-white'>Access us easily</h2>
        </div>
            <div className='flex justify-between mt-14'>
            <div className='w-58%' >
            <iframe className=' h-500 w-full  ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1585016980694!2d90.37991002479173!3d23.741726589110346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1716923676597!5m2!1sen!2sbd"referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='w-40% bg-white dark:bg-464558 rounded-md pt-110px px-110px'>
               <h2 className='text-20 font-bold text-464558 dark:text-teal-200'>Contact with us</h2>
               <ul className='text-16 text-5C5B6C dark:text-white mt-9 mb-14'>
                <li><a className='flex gap-2' href="#"><span className='text-FFAF0F text-20'><IoLocationOutline /></span>2277 Lorem Ave, San Diego, CA 22553</a></li>

                <li><a className='flex gap-2 my-2' href="#"><span className='text-FFAF0F text-20'><CiClock2  /></span>Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm</a></li>

                <li><a className='flex gap-2' href="#"><span className='text-FFAF0F text-20'><CiMail /></span>info@quriarbox.com</a></li>
               </ul>
               <div>
                <ul className='flex gap-5 '>
                    <li><a className='text-25 text-EBEBF5 dark:text-teal-200 hover:text-primary transition-all ' href="#"><FaSquareFacebook /></a></li>

                    <li><a className='text-25 text-EBEBF5 dark:text-teal-200 hover:text-primary transition-all ' href="#"><FaInstagramSquare /></a></li>

                    <li><a className='text-25 text-EBEBF5 dark:text-teal-200 hover:text-primary transition-all ' href="#"><FaTwitterSquare  /></a></li>
                </ul>
               </div>
            </div>
            </div>
            <div className=' text-center mt-10 '>
            <button className='py-2 px-52 text-white border-2 bg-primary rounded-md '><a className='flex gap-2' href="#"><span><MdAddCall className='text-25'/></span>Call us to delivery  123-456789</a></button>
            </div>
        </div>
    </section>
  )
}

export default Findus