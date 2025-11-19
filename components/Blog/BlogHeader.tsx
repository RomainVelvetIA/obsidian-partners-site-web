'use client';

import { motion } from 'framer-motion';

export default function BlogHeader() {
    return (
        <section className="relative px-4 pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0f172a] mb-6">
                        Notre <span className="font-normal text-[#1e3a8a]">Blog</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#475569] max-w-3xl mx-auto font-light">
                        Découvrez nos derniers articles sur l&apos;intelligence artificielle,
                        la transformation digitale et les stratégies d&apos;adoption de l&apos;IA en entreprise.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
