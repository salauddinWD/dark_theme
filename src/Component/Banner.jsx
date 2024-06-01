import React from 'react'

const Banner = () => {
  return (
    <section className='py-40 bg-FEF5E3 font-raleway dark:bg-222132'>
      <div className="w-container mx-auto">
        <div className='flex items-center'>
        <div>
        <h1 className='w-500 text-48 leading-120% dark:text-teal-500'>A trusted provider of <span className='font-extrabold'>courier services.</span></h1>
        <p className='font-normal text-4D4D4D dark:text-white leading-120% w-330 text-20 pt-4 pb-10'>We deliver your products safely to your home in a reasonable time.</p>
        <button className='py-3 px-5 text-btnbg bg-primary rounded-md'>Get started</button>
        </div>
        <div>
        <img src="images/banner.png" alt="" />
      </div>
        </div>
      </div>
      
    </section>
  )
}

export default Banner