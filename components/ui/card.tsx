import React from 'react';

// The outer container with shadow and border
export function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`rounded-xl bg-white shadow-sm border border-gray-200 ${className}`}>
            {children}
        </div>
    );
}

// The header section with a bottom border
export function CardHeader({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <div className={`px-6 py-5 border-b border-gray-100 flex flex-row items-center justify-between ${className}`}>{children}</div>;
}

// Typography for the Card Title
export function CardTitle({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <h2 className={`text-lg font-semibold text-gray-900 ${className}`}>{children}</h2>;
}

// Typography for the Card Description
export function CardDescription({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <p className={`text-sm text-gray-500 mt-1 ${className}`}>{children}</p>;
}

// The main content area
export function CardContent({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}