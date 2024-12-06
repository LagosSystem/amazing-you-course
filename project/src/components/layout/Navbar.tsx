import React from 'react';
import { Home, BookOpen, CreditCard, User, LogOut } from 'lucide-react';
import { NavItem } from './NavItem';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: BookOpen, label: 'My Courses', href: '/courses' },
  { icon: CreditCard, label: 'Manage Subscription', href: '/subscription' },
  { icon: User, label: 'Profile', href: '/profile' },
];

export function Navbar() {
  return (
    <nav className="h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0 p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-6 flex-1">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
        <button className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg p-3 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>
      </div>
    </nav>
  );
}