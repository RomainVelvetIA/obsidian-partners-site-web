'use client';

import { motion } from 'framer-motion';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

const categoryLabels: Record<string, string> = {
    'ia': 'Intelligence Artificielle',
    'transformation': 'Transformation Digitale',
    'strategie': 'Stratégie',
    'cas-clients': 'Cas Clients',
    'actualites': 'Actualités',
};

export default function CategoryFilter({
    categories,
    selectedCategory,
    onSelectCategory,
}: CategoryFilterProps) {
    return (
        <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectCategory(null)}
                    className={`px-6 py-3 rounded-xl font-light transition-all duration-300 ${selectedCategory === null
                            ? 'text-[#1e3a8a] font-normal'
                            : 'text-[#475569]'
                        }`}
                    style={{
                        background: '#e0e5ec',
                        boxShadow:
                            selectedCategory === null
                                ? 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff'
                                : '4px 4px 8px #bec3c9, -4px -4px 8px #ffffff',
                    }}
                >
                    Tous les articles
                </motion.button>

                {categories.map((category) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectCategory(category)}
                        className={`px-6 py-3 rounded-xl font-light transition-all duration-300 ${selectedCategory === category
                                ? 'text-[#1e3a8a] font-normal'
                                : 'text-[#475569]'
                            }`}
                        style={{
                            background: '#e0e5ec',
                            boxShadow:
                                selectedCategory === category
                                    ? 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff'
                                    : '4px 4px 8px #bec3c9, -4px -4px 8px #ffffff',
                        }}
                    >
                        {categoryLabels[category] || category}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
