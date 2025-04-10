import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10' >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    {/*----left section---*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>lorem </p>

        </div>
        {/*----center section---*/}
        <div>
        <p className='text-xl font-medium mb-5'>Company</p>
        <ul className='flex flex-col gap-2 tex-gray-600'>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact us</li>
         <li>privacy policy</li>
        </ul>
        </div>
        {/*----Right section---*/}
        <div >
          <p className='text-xl font-medium mg-5'>Get in touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>96880 73768</li>
            <li>nsk89profile@gmail.com</li>
          </ul>
        </div>

            
        </div>
        {/*----Copy right text---*/}

         <div>
        <hr />
         <p className='py-5 text-sm text-center'>Copyright 2024@ prescription - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
