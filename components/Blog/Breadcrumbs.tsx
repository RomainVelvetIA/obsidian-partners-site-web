'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    name: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-sm">
                {/* Home link */}
                <li className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-[#64748b] hover:text-[#1e3a8a] transition-colors"
                    >
                        <Home className="h-4 w-4" />
                        <span>Accueil</span>
                    </Link>
                </li>

                {/* Breadcrumb items */}
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-[#cbd5e1]" />
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="text-[#64748b] hover:text-[#1e3a8a] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-[#0f172a] font-medium">{item.name}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
