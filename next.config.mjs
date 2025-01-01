const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    // images: {
    //     unoptimized: true,
    // },
};

if (!process.env.NODE_ENV) {
    console.warn('NODE_ENV is not set. Defaulting to standard Next.js behavior.');
}

export default nextConfig;
