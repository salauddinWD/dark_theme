import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#313747] pt-20 pb-4'>
      
            <div className="w-container mx-auto">
                <div className='footer_body flex justify-between pb-10'>
                <div className='w-40% font-raleway'>
                    <h2 className='text-white font-extrabold text-39 mb-2'>Get an update every week</h2>
                    <p className='text-C5C5D2 '>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                </div>
                <div className='w-40%'>
                    <h2 className='text-primary font-oxanium font-bold text-20'>SUBSCRIBE TO NEWSLETTER</h2>
                    <div className="foot_place mt-2">
                        <input className=' bg-transparent border-2 border-C5C5D2 py-2 pl-4 w-72 rounded-md' type="text" placeholder='Enter your mail' />
                        <button className='py-2 px-5 ml-4 text-btnbg bg-primary rounded-md'>Subscribe</button>
                    </div>
                </div>
                </div>
            </div>
            <div className='two bg-2F2E41 py-14 '>
            <div className="w-container mx-auto">
                 <div className='grid grid-cols-2'>
                    <div>
                        <img src="/images/footer.png" alt="" />
                        <p className='text-9291A1 text-16 w-190px'>The most trusted Courier company in your area.</p>
                    </div>
                    <div className='flex justify-between '>
                           <div>
                            <h2 className='text-20 text-white font-bold font-oxanium'>Other links</h2>
                            <ul className='text-9291A1 text-16 mt-4'>
                                <li><a className=' hover:text-primary transition-all' href="#">Blogs</a></li>
                                <li className='my-2'><a className=' hover:text-primary transition-all' href="#">Movers website</a></li>
                                <li><a className=' hover:text-primary transition-all' href="#">Traffic Update</a></li>
                            </ul>
                           </div>
                           <div>
                            <h2 className='text-20 text-white font-bold font-oxanium'>Services</h2>
                            <ul className='text-9291A1 text-16 mt-4'>
                                <li><a className=' hover:text-primary transition-all' href="#">Corporate goods</a></li>
                                <li className='my-2'><a className=' hover:text-primary transition-all' href="#">Artworks</a></li>
                                <li><a className=' hover:text-primary transition-all' href="#">Documents</a></li>
                            </ul>
                           </div>
                           <div>
                            <h2 className='text-20 text-white font-bold font-oxanium'>Customer Care</h2>
                            <ul className='text-9291A1 text-16 mt-4'>
                                <li><a className=' hover:text-primary transition-all' href="#">About Us</a></li>
                                <li className='my-2'><a className=' hover:text-primary transition-all' href="#">Contact US</a></li>
                                <li><a className=' hover:text-primary transition-all' href="#">Get Update</a></li>
                            </ul>
                           </div>
                    </div>
                 </div>
            </div>
            </div>
            <div className="w-container mx-auto pt-4">
                    <div className="flex justify-between text-white">
                    <div>
                        <h2>All rights Reserved © Your Company, 2021</h2>
                    </div>
                    <div>
                        <h2>Made with heart by <span><a className='text-primary' href="#">ThemeWagon</a></span></h2>
                    </div>
                    </div>
            </div>
       
    </footer>
  )
}

export default Footer