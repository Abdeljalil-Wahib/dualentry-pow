import React from 'react';

// Define specific visual variants
type BadgeVariant = 'success' | 'warning' | 'danger' | 'default';

interface BadgeProps {
    variant?: BadgeVariant;
    children: React.ReactNode;
    className?: string;
}

// Map variants to specific Tailwind classes for background, text, and border ring
const variantStyles: Record<BadgeVariant, string> = {
    success: 'bg-emerald-100 text-emerald-700 ring-emerald-600/20',
    warning: 'bg-amber-100 text-amber-700 ring-amber-600/20',
    danger: 'bg-red-100 text-red-700 ring-red-600/20',
    default: 'bg-gray-100 text-gray-700 ring-gray-500/10',
};

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
    return (
        <span
            className={`
                inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset 
                ${variantStyles[variant]} 
                ${className}
            `}
        >
            {children}
        </span>
    );
}