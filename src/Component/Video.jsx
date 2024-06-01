import React from 'react'
import { CgPlayButton } from "react-icons/cg";

const Video = () => {
  return (
    <section className='bg-FEF5E3 dark:bg-222132 pb-150'>
         <div className="w-container mx-auto">
            <div className='h-580 w-full relative'>
             <img src="/images/img.png" alt=""/>
            <div>
            <div className=' text-center absolute top-28 left-28 '>
             <div className='w-16 h-16 bg-primary rounded-full relative mx-auto'>
                   <div className='text-80 text-white absolute top-M10 left-M5'>
                   <CgPlayButton />
                   </div>
                </div>
                <h2 className='text-32 text-primary font-extrabold font-raleway mb-7'>FASTEST DELIVERY</h2>
                <p className=' w-673 font-raleway text-25 leading-120% mx-auto text-white' > You can get your valuable item in the fastest period of time with safety. Because your emergency is our first priority.</p>
             </div>
            </div>
            </div>
         </div>
    </section>
  )
}

export default Video