import Image from 'next/image';
import React from 'react';
import logo1 from '../../public/Advantages/icon1.png'
import logo2 from '../../public/Advantages/icon2.png'
import logo3 from '../../public/Advantages/icon3.png'
import logo4 from '../../public/Advantages/icon4.png'

const Advantages = () => {
    return (
        <main className='bg-[#000000]'>
            <div className='container py-14'>
                <div className='text-center text-white p-14'>
                    <h1 className='my-5 text-4xl font-bold'>Advantages</h1>
                    <p className='text-[#6e7467] '>For you, we provide a wide range of different services,<br /> the main of which are presented below the parts.</p>
                </div>
                <div className='grid gap-6 md:grid-cols-4 pb-14'>
                    <div className='text-center p-2 border-2 border-black hover:border-2 hover:border-[#cf253f] hover:shadow-md hover:shadow-[#cf253f] duration-300'>
                        <Image className='w-24 h-24 mx-auto mb-5 text-center transition-all duration-500 hover:scale-90 ' src={logo1} alt=''></Image>
                        <h2 className='mb-3 text-lg font-semibold text-white'>Official Guarantee</h2>
                        <p className='text-[#6e7467]'>We give a one-year guarantee for all work. Two years of official warranty for spare parts from our online store.</p>
                    </div>
                    <div className='text-center p-2 border-2 border-black hover:border-2 hover:border-[#cf253f] hover:shadow-md hover:shadow-[#cf253f] duration-300'>
                        <Image className='w-24 h-24 mx-auto mb-5 text-center transition-all duration-500 hover:scale-90' src={logo2} alt=''></Image>
                        <h2 className='mb-3 text-lg font-semibold text-white'>Auto Parts Store</h2>
                        <p className='text-[#6e7467]'>Own online store of original auto parts with delivery. 15% discount on spare parts when repairing your car.</p>
                    </div>
                    <div className='text-center p-2 border-2 border-black hover:border-2 hover:border-[#cf253f] hover:shadow-md hover:shadow-[#cf253f] duration-300'>
                        <Image className='w-24 h-24 mx-auto mb-5 text-center transition-all duration-500 hover:scale-90' src={logo3} alt=''></Image>
                        <h2 className='mb-3 text-lg font-semibold text-white'>Professional Team</h2>
                        <p className='text-[#6e7467]'>We employ only professional specialists with extensive experience in car services. Guarantee for all works.</p>
                    </div>
                    <div className='text-center p-2 border-2 border-black hover:border-2 hover:border-[#cf253f] hover:shadow-md hover:shadow-[#cf253f] duration-300'>
                        <Image className='w-24 h-24 mx-auto mb-5 text-center transition-all duration-500 hover:scale-90' src={logo4} alt=''></Image>
                        <h2 className='mb-3 text-lg font-semibold text-white'>Own Tow Truck</h2>
                        <p className='text-[#6e7467]'>If your car breaks down and does not go. We can quickly deliver it to our car service with our tow truck.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Advantages;