import React from "react";

// Define specific visual variants
type BadgeVariant = "success" | "warning" | "danger" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

// Map variants to specific Tailwind classes for background, text, and border ring
const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-green-100 text-green-700 ring-green-400/20",
  warning: "bg-yellow-100 text-yellow-700 ring-yellow-400/20",
  danger: "bg-red-100 text-red-700 ring-red-400/20",
  default: "bg-card text-muted ring-1 ring-card/30",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
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
