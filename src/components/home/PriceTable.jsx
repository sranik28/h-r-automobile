'use client'
import Image from 'next/image';
import Price1 from '../../../public/price-table/1st.png'
import Price2 from '../../../public/price-table/2nd.png'
import Price3 from '../../../public/price-table/3nd.png'
import { SlDiamond } from 'react-icons/sl';
import { GiFlatTire } from 'react-icons/gi';
import { TbSteeringWheel } from 'react-icons/tb';

const PriceTable = () => {
    return (
        <main className='bg-[#0f0f0f] '>
            <div className='container py-16'>
                <div className='text-center text-white p-14'>
                    <h1 className='my-5 text-4xl font-bold'>Price Table</h1>
                    <p className='text-[#6e7467]'>For you, we provide a wide range of different services,<br /> the main of which are presented below the parts.</p>
                </div>
                <div className='grid gap-8 md:grid-cols-3 pb-14'>

                    <div className='relative'>
                        <Image className='object-center w-full h-60' src={Price2} alt=''></Image>
                        <div className=''>
                            <span> <SlDiamond className='text-[#cf253f] text-[50px] absolute top-[8%] left-36' /> </span>
                            <h3 className=' absolute top-[17%] left-24  text-lg text-center text-white'>Clients Offer One</h3>
                        </div>
                        <div className='bg-[#000000]  text-center py-10'>
                            <p className='py-3 text-[#6e7467]'>Air Conditioning Repair</p>
                            <p className='text-[#6e7467]'>Air Filter Replacement</p>
                            <p className='py-3 text-[#6e7467]'>Alternator Service</p>
                            <p className='text-[#6e7467]'>Axle Replacement</p>
                            <p className='py-3 text-[#6e7467]'>Battery Replacement</p>
                            <h3 className='pt-10 text-2xl text-white'>$110</h3>
                            <p className='pt-2 text-white'>Per Month</p>
                            <button className='bg-[#cf253f] my-10 text-white py-3 px-10 hover:scale-105 transition-all duration-300 rounded-md'>By Now</button>
                        </div>

                    </div>
                    <div className='relative'>
                        <Image className='object-center w-full h-60' src={Price1} alt=''></Image>
                        <div className=''>
                            <span> <TbSteeringWheel className='text-[#cf253f] text-[50px] absolute top-[8%] left-36' /> </span>
                            <h3 className=' absolute top-[17%] left-24  text-lg text-center text-white'>Clients Offer Two</h3>
                        </div>
                        <div className='bg-[#000000]  text-center py-10'>
                            <p className='py-3 text-[#6e7467]'>Axle Replacement</p>
                            <p className='text-[#6e7467]'>Battery Replacement</p>
                            <p className='py-3 text-[#6e7467]' >Belts & Hoses</p>
                            <p className='text-[#6e7467]'>Brake Services</p>
                            <p className='py-3 text-[#6e7467]'>Clutch Repair</p>
                            <h3 className='pt-10 text-2xl text-white'>$230</h3>
                            <p className='pt-2 text-white'>Per Month</p>
                            <button className='bg-[#cf253f] my-10 text-white py-3 px-10 hover:scale-105 transition-all duration-300 rounded-md'>By Now</button>
                        </div>

                    </div>
                    <div className='relative'>
                        <Image className='object-center w-full h-60' src={Price3} alt=''></Image>
                        <div className=''>
                            <span> <GiFlatTire className='text-[#cf253f] text-[50px] absolute top-[8%] left-36' /> </span>
                            <h3 className=' absolute top-[17%] left-24  text-lg text-center text-white'>Clients Offer Three</h3>
                        </div>
                        <div className='bg-[#000000]  text-center py-10'>
                            <p className='py-3 text-[#6e7467]'>Air Conditioning Repair</p>
                            <p className='text-[#6e7467]'>Air Filter Replacement</p>
                            <p className='py-3 text-[#6e7467]' >Belts & Hoses</p>
                            <p className='text-[#6e7467]'>Brake Services</p>
                            <p className='py-3 text-[#6e7467]'>Clutch Repair</p>
                            <h3 className='pt-10 text-2xl text-white'>$250</h3>
                            <p className='pt-2 text-white'>Per Month</p>
                            <button className='bg-[#cf253f] my-10 text-white py-3 px-10 hover:scale-105 transition-all duration-300 rounded-md'>By Now</button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default PriceTable;