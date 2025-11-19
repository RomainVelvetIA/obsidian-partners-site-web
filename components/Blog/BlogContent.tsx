'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/image';

interface BlogContentProps {
    content: PortableTextBlock[];
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => (
            <h2 className="text-3xl font-normal text-[#0f172a] mt-12 mb-6">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="text-2xl font-normal text-[#0f172a] mt-10 mb-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-normal text-[#0f172a] mt-8 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-lg text-[#475569] font-light leading-relaxed mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote
                className="border-l-4 border-[#1e3a8a] pl-6 py-2 my-8 italic text-[#475569]"
                style={{
                    background: '#e0e5ec',
                    boxShadow: 'inset 4px 4px 8px #bec3c9, inset -4px -4px 8px #ffffff',
                }}
            >
                {children}
            </blockquote>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-semibold text-[#0f172a]">{children}</strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => (
            <code
                className="px-2 py-1 rounded text-sm font-mono text-[#1e3a8a]"
                style={{
                    background: '#e0e5ec',
                    boxShadow: 'inset 2px 2px 4px #bec3c9, inset -2px -2px 4px #ffffff',
                }}
            >
                {children}
            </code>
        ),
        link: ({ children, value }) => (
            <a
                href={value?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e3a8a] hover:text-[#1e40af] underline transition-colors"
            >
                {children}
            </a>
        ),
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;

            const imageUrl = urlFor(value).width(1200).height(675).url();

            return (
                <div className="my-8 rounded-xl overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={value.alt || 'Image de l\'article'}
                        width={1200}
                        height={675}
                        className="w-full h-auto"
                    />
                    {value.alt && (
                        <p className="text-sm text-[#64748b] text-center mt-2 italic">
                            {value.alt}
                        </p>
                    )}
                </div>
            );
        },
    },
};

export default function BlogContent({ content }: BlogContentProps) {
    return (
        <div className="prose prose-lg max-w-none">
            <PortableText value={content} components={components} />
        </div>
    );
}
