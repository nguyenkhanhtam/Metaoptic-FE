'use client';

import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#131313] futura-book px-[5.2vw] pt-4 pb-8 relative'>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-[#888888] tracking-wider xl:text-[150px] text-[48px] futura-condensed-medium uppercase'>
                        Connect with us
                    </p>

                    <p className='text-[#d44c39] futura-medium xl:text-[30px] text-[24px] xl:mt-[-16px] mt-0'>
                        Metaoptics Technologies Pte Ltd
                    </p>

                    <div className='futura-book xl:text-[25px] text-[18px] xl:mt-16 mt-8'>
                        <a href='mailto:sales@metaoptics.sg'>
                            <p className='text-[#E0E1E0] mt-2'>
                                {' '}
                                <span className='text-[#888888]'>Email: </span>
                                sales@metaoptics.sg
                            </p>
                        </a>
                        <p className='text-[#E0E1E0]'>
                            <span className='text-[#888888]'>Address: </span>81 Ayer Rajah
                            Crescent 01-45 Singapore 139967
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex xl:flex-row flex-col xl:gap-0 gap-10 justify-between xl:mt-[160px] mt-10 w-full'>
                <div className='flex gap-5 xl:flex-row flex-col text-white xl:text-[25px] text-[18px] futura-medium'>
                    <div>Back to Top</div>
                    <div>Our Products</div>
                    <div>Our Story</div>
                    <div>Gallery</div>
                    <div>Contact Us</div>
                </div>

                <div className='flex xl:gap-8 gap-5 text-white xl:text-[25px] text-[18px] futura-medium'>
                    <div>Connect</div>
                    <Image
                        src='/facebook.svg'
                        alt='Facebook'
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='xl:w-[16px] w-[12px]'
                    />

                    <Image
                        src='/instagram.svg'
                        alt='Facebook'
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='xl:w-[32px] w-[24px]'
                    />

                    <Image
                        src='/twitter.svg'
                        alt='Facebook'
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='xl:w-[32px] w-[24px]'
                    />
                </div>
            </div>

            <div className='w-full h-[2px] my-4 bg-white'></div>

            <div className='text-center text-[#868686] xl:text-[20px] text-[14px] uppercase tracking-widest'>
                Metaoptics Technologies Pte Ltd. All rights reserved
            </div>
        </div>
    );
};

export default Footer;
