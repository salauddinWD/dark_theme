import React from 'react'
import { IoTrophyOutline } from "react-icons/io5";
import { TbMap } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdBusinessCenter } from "react-icons/md";



const Counter = () => {
  return (
    <section className='bg-FEF5E3 pb-40 dark:bg-222132'>
        <div className="w-container mx-auto">
            <div className='grid grid-cols-5 gap-6'>
                <div className='text-center'>
                        <IoTrophyOutline className='text-48 mx-auto text-222132 dark:text-white'/>
                    <h2 className='text-32 text-primary font-extrabold mb-1.5 mt-4'>26+</h2>
                    <p className='text-black text-16 font-poppins dark:text-white'>Awards  won</p>
                </div>
                <div className='text-center'>
                        <TbMap className='text-48 mx-auto text-222132 dark:text-white'/>
                    <h2 className='text-32 text-primary font-extrabold mb-1.5 mt-4'>65+</h2>
                    <p className='text-black text-16 font-poppins dark:text-white'>States covered</p>
                </div>
                <div className='text-center'>
                        <GrUserManager className='text-48 mx-auto text-222132 dark:text-white'/>
                    <h2 className='text-32 text-primary font-extrabold mb-1.5 mt-4'>689K+</h2>
                    <p className='text-black text-16 font-poppins dark:text-white'>Happy clients</p>
                </div>
                <div className='text-center'>
                        <TbTruckDelivery  className='text-48 mx-auto text-222132 dark:text-white'/>
                    <h2 className='text-32 text-primary font-extrabold mb-1.5 mt-4'>130M+</h2>
                    <p className='text-black text-16 font-poppins dark:text-white'>Goods delivered</p>
                </div>
                <div className='text-center'>
                        <MdBusinessCenter className='text-48 mx-auto text-222132 dark:text-white'/>
                    <h2 className='text-32 text-primary font-extrabold mb-1.5 mt-4'>130M+</h2>
                    <p className='text-black text-16 font-poppins dark:text-white'>Business hours</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Counter