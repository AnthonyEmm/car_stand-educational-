'use client';

import Image from "next/image";
import CustomButton  from './CustomButton'; 

const Hero = () => {

    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Search, book or rent a car - quickly and easily!
            </h1>
            <p className='hero__subtitle'>
            Enhance your car rental journey with our seamless booking process.
            </p>
            <CustomButton
            title='Explore More Cars'
            containerStyles='bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src='/benzo.png' 
                alt="hero" 
                fill 
                className="object-contain"/>
              </div>  
                
                <div className="hero__image-overlay"/>          
        </div>
    </div>
  )
}

export default Hero;