import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function NavItem({ icon: Icon, label, href }: NavItemProps) {
  return (
    <a
      href={href}
      className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg p-3 transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
}