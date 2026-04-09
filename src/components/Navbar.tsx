import { useState } from 'react';
import {
  Globe,
  Zap,
  FileText,
  Mic,
  Video,
  Puzzle,
  Info,
  Home,
  Menu,
  X,
} from 'lucide-react';

type Page = 'home' | 'document' | 'audio' | 'video' | 'integration' | 'about';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

interface NavItem {
  id: Page;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={14} /> },
  { id: 'document', label: 'Document Translation', icon: <FileText size={14} /> },
  { id: 'audio', label: 'Audio Localization', icon: <Mic size={14} /> },
  { id: 'video', label: 'Video Localization', icon: <Video size={14} /> },
  { id: 'integration', label: 'Integration', icon: <Puzzle size={14} /> },
  { id: 'about', label: 'About', icon: <Info size={14} /> },
];

export default function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: '0 2px 16px rgba(30,42,94,0.07)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
              <Globe size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight" style={{ color: '#1e2a5e', fontFamily: 'Sora, sans-serif' }}>
                SafeHorizon
              </span>
              <span className="text-xs font-medium" style={{ color: '#f97316' }}>
                AI Localization Engine
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.id === activePage ? (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
                >
                  {item.id === 'home' && <Zap size={13} className="text-white" />}
                  {item.icon}
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-orange-50"
                  style={{ color: '#4b5563' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#1e2a5e')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#4b5563')}
                >
                  {item.icon}
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {navItems.map((item) =>
            item.id === activePage ? (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}
              >
                <Zap size={13} />
                {item.icon}
                {item.label}
              </button>
            ) : (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-orange-50 hover:text-[#1e2a5e] transition-colors"
              >
                {item.icon}
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
