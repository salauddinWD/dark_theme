import React from 'react'

const Navbar = () => {
  return (
   <nav className='py-4 bg-FEF5E3 dark:bg-464558'>
     <div className="w-container mx-auto">
<div className='flex items-center justify-between'>
    <div>
        <img src="images/logo.png" alt="" />
    </div>
    <div className='flex gap-11 items-center'>
        <ul className='flex gap-6 font-poppins text-4D4D4D dark:text-slate-200'>
            <li><a className='hover:text-primary transition-all' href="#">Home</a></li>
            <li><a className='hover:text-primary transition-all' href="#">Our services</a></li>
            <li><a className='hover:text-primary transition-all' href="#">About Us</a></li>
            <li><a className='hover:text-primary  transition-all' href="#">Whats New</a></li>
        </ul>
        <button className='py-3 px-5 bg-btnbg text-primary rounded-md'>Contact Us</button>
    </div>
</div>
    </div>
   </nav>
  )
}

export default Navbar