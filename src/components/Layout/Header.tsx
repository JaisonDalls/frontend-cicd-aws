import React from 'react';
import { Bell, Search, Globe, ChevronDown, Settings as SettingsIcon } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 h-16 px-8 flex items-center justify-between bg-white/5 backdrop-blur-xl border-b border-white/5 z-40">
      <div className="flex-1 flex items-center gap-6">
        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/5 group transition-all focus-within:border-primary/50">
          <Search size={18} className="text-text-muted group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="bg-transparent border-none text-white outline-none text-sm w-48 lg:w-64 placeholder:text-text-muted"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl hover:bg-white/5 text-text-muted hover:text-white transition-all flex items-center gap-1.5 border border-white/5 lg:border-none">
            <Globe size={18} />
            <span className="text-xs font-semibold">PT</span>
          </button>
          
          <button className="p-2 rounded-xl hover:bg-white/5 text-text-muted hover:text-white transition-all">
            <SettingsIcon size={18} />
          </button>
          
          <button className="p-2 rounded-xl hover:bg-white/5 text-text-muted hover:text-white transition-all relative">
            <Bell size={18} />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-pink-500 rounded-full ring-2 ring-bg-dark"></span>
          </button>
        </div>

        <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block"></div>

        <button className="flex items-center gap-3 bg-white/5 pl-1.5 pr-4 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-all">
          <div className="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center font-bold text-xs">JD</div>
          <div className="hidden md:flex flex-col items-start leading-tight">
            <span className="text-sm font-semibold">Jaison Dallabrida</span>
            <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">Administrador</span>
          </div>
          <ChevronDown size={14} className="text-text-muted" />
        </button>
      </div>
    </header>
  );
};
