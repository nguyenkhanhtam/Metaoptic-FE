'use client';

import React from 'react';

const BaseButton = ({
    label,
    className,
    classNameBtn,
    onClick,
    bgDefault = '#d34c39',
    type = 'button',
}) => {
    return (
        <div
            className={`flex xl:justify-center justify-center xl:mt-10 mt-6 ${className}`}>
            <button
                type={type}
                className={`relative overflow-hidden text-white font-bold px-10 py-3 rounded-full futura-medium xl:tracking-[2px] tracking-[2px] xl:text-[16px] text-[14px] transition-all duration-300 group ${classNameBtn}`}
                onClick={onClick}>
                <span className='z-10 relative'>{label}</span>
                {/* Default background */}
                <span
                    className='absolute inset-0 bg-[#d34c39]'
                    style={{
                        backgroundColor: bgDefault,
                    }}></span>
                {/* Sliding hover background */}
                <span className='absolute inset-0 bg-[#231f20] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0'></span>
            </button>
        </div>
    );
};

export default BaseButton;
