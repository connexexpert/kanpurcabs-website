'use client';

import { Menu, Search, User, LogOut } from 'lucide-react';
import { useAdminAuth } from '@/lib/admin-auth';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { admin, logout } = useAdminAuth();

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-slate-500 hover:text-slate-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-slate-500 focus-within:ring-2 focus-within:ring-primary-500/20 focus-within:bg-white transition-all">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm w-64 placeholder:text-slate-400"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-slate-700">{admin?.email || 'Admin'}</p>
            <p className="text-xs text-slate-500 capitalize">{admin?.role || 'Administrator'}</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
            <User size={20} />
          </div>
          <button 
            onClick={logout}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-2"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
