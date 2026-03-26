import React from 'react';
import { LayoutDashboard, Package, BarChart3, LogOut } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, href }) => (
  <a 
    href={href} 
    className={`nav-item-base ${active 
      ? 'bg-accent-gradient text-white shadow-lg shadow-indigo-500/30' 
      : 'text-text-muted hover:bg-white/5 hover:text-white'}`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </a>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-bg-card border-r border-white/10 flex flex-col z-50">
      <div className="p-8 flex items-center gap-3 font-bold text-xl leading-none">
        <div className="p-2 bg-white/5 rounded-xl">
          <Package className="text-primary" size={24} />
        </div>
        <span className="bg-accent-gradient bg-clip-text text-transparent">SysFull</span>
      </div>
      
      <nav className="flex-1 px-4 space-y-2">
        <NavItem icon={LayoutDashboard} label="Dashboard" active href="/"/>
        <NavItem icon={BarChart3} label="Relatórios" href="/reports"/>
      </nav>

      <div className="mt-auto p-4 space-y-1">
        <NavItem icon={LogOut} label="Sair" href="/logout"/>
      </div>
    </aside>
  );
};
