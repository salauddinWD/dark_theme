import React from 'react'
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { MdOutlineMedicalServices } from "react-icons/md";



const Service = () => {
  return (
    <section className='bg-FEF5E3 pb-40 dark:bg-222132 '>
      <div className="w-container mx-auto">
        <div className='font-raleway '>
          <h3 className='text-32 font-extrabold text-primary text-center'>SERVICES</h3>
           <h2 className='text-32 font-extrabold text-center dark:text-white'>Our services for you</h2>
        </div>
        <div className='grid grid-cols-3 gap-6 mt-20'>
            <div className='bg-white dark:bg-464558 px-60 pt-16 pb-12 font-raleway rounded-md'>
                <div className='w-16 h-16 bg-FFAF0F rounded-full relative mx-auto'>
                   <div className='text-48 text-primary absolute top-50 left-2'>
                   <MdOutlineBusinessCenter />
                   </div>
                </div>
                <h2 className='text-25 font-extrabold mt-8 mb-7 text-center dark:text-teal-400'>Business Services</h2>
                <p className='text-16 leading-145% dark:text-white'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                <ul className='list-disc list-inside text-16 mt-8 mb-12 dark:text-white'>
                    <li> Corporate goods</li>
                    <li className='my-2'> Shipment</li>
                    <li> Accesories</li>
                </ul>
                <div className='text-center'>
                <button className='py-1 px-10 text-primary border-2 border-primary rounded-md'>Learn More</button>
                </div>
            </div>
            <div className='bg-white dark:bg-464558 px-60 pt-16 pb-12 font-raleway rounded-md'>
                <div className='w-16 h-16 bg-FFAF0F rounded-full relative mx-auto'>
                   <div className='text-48 text-primary absolute top-50 left-2'>
                   <BsFillMenuButtonWideFill />
                   </div>
                </div>
                <h2 className='text-25 font-extrabold mt-8 mb-7 text-center dark:text-teal-400'>Statewide Services</h2>
                <p className='text-16 leading-145% dark:text-white'>Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.</p>
                <ul className='list-disc list-inside text-16 mt-8 mb-12 dark:text-white'>
                    <li> Personal items</li>
                    <li className='my-2'> Percels</li>
                    <li> Documents</li>
                </ul>
                <div className='text-center'>
                <button className='py-1 px-10 text-primary border-2 border-primary rounded-md'>Learn More</button>
                </div>
            </div>
            <div className='bg-white dark:bg-464558 px-60 pt-16 pb-12 font-raleway rounded-md'>
                <div className='w-16 h-16 bg-FFAF0F rounded-full relative mx-auto'>
                   <div className='text-48 text-primary absolute top-50 left-2'>
                   <MdOutlineMedicalServices />
                   </div>
                </div>
                <h2 className='text-25 font-extrabold mt-8 mb-7 text-center dark:text-teal-400'>Personal Services</h2>
                <p className='text-16 leading-145% dark:text-white'>You can trust us to safely deliver your most sensitive documents to the specific area in a short time.</p>
                <ul className='list-disc list-inside text-16 mt-8 mb-12 dark:text-white'>
                    <li> Gifts</li>
                    <li className='my-2'> Package</li>
                    <li> Documents</li>
                </ul>
                <div className='text-center'>
                <button className='py-1 px-10 text-primary border-2 border-primary rounded-md'>Learn More</button>
                </div>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Service