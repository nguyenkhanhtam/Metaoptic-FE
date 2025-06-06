'use client';

import React, { useState, useEffect, useRef } from 'react';
import BaseProduct from '@/components/BaseProduct';
import BaseTitle from '@/components/BaseTitle';
import { gsap } from 'gsap';
import data from '@/constants/data.json';

const categories = ['All', 'Camera', 'Projector', 'Sensor', '3D'];

const ProductList = () => {
    const [selectedTab, setSelectedTab] = useState('All');
    const productListRef = useRef(null); // Ref to scroll to product list

    useEffect(() => {
        const activeTab = document.querySelector('.tab-active');
        if (activeTab) {
            gsap.fromTo(
                activeTab,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: 'power3.out' }
            );
        }
    }, [selectedTab]);

    const handleCategoryChange = (category) => {
        setSelectedTab(category);

        // Scroll to the product list smoothly
        if (productListRef.current) {
            productListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredProducts =
        selectedTab === 'All'
            ? data.products
            : data.products.filter((product) => product.category === selectedTab);

    return (
        <div className='flex flex-col items-center gap-8'>
            {/* Title */}

            <BaseTitle
                title='Our Products'
                className='futura-condensed-medium xl:ml-8 ml-0 !text-center'
            />

            {/* Tabs */}
            {/* <div
                className='pt-10 flex gap-4 flex-wrap justify-center'
                ref={productListRef}>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-6 py-3 border-2 rounded-full uppercase tracking-wider font-medium transition-all duration-300 ${
                            selectedTab === category
                                ? 'bg-[#d34c39] text-white tab-active' // Active: background orange-red, white text
                                : 'bg-transparent text-black hover:bg-[#d34c39] hover:text-white border-[#000] hover:border-[#d34c39]'
                        } border-[#d34c39]`}>
                        {category}
                    </button>
                ))}
            </div> */}

            {/* Products Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-5 w-full max-w-6xl mt-8 mb-[100px] xl:px-0 px-10'>
                {filteredProducts.map((product, index) => (
                    <div
                        key={product.slug}
                        className={`${index % 3 === 1 ? 'xl:mt-[100px]' : ''}`}>
                        <BaseProduct
                            name={product.name}
                            image={product.image}
                            category={product.category}
                            slug={product.slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
