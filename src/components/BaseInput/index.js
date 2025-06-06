'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const BaseInput = ({
    placeholder = '',
    name = '',
    type = 'text',
    value = '',
    onChange = () => {},
    className = '',
    isTextarea = false,
    rows = 5,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={`relative w-full bg-[#f0f0f0] rounded-3xl p-4 ${className}`}>
            {/* Animated Placeholder as Label */}
            <motion.label
                className={`absolute left-4 futura-medium ${
                    isFocused || value
                        ? 'top-[-7px] text-xs font-medium text-[#d34c39] z-10'
                        : 'top-4 text-lg text-gray-400'
                } transition-all duration-200 pointer-events-none`}>
                {placeholder}
            </motion.label>

            {/* Input or Textarea */}
            {isTextarea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    rows={rows}
                    className='w-full bg-transparent outline-none text-gray-800 text-[18px] font-medium resize-none text-[#808285] placeholder:text-[#808285]'
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className='w-full bg-transparent outline-none text-[18px] font-medium h-[32px] text-[#808285] placeholder:text-[#808285]'
                />
            )}
        </div>
    );
};

export default BaseInput;
