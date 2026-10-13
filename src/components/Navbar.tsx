import React, { useState, useEffect } from 'react';
import { Bot, Github, Linkedin, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenChatbot: () => void;
  isChatbotOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChatbot, isChatbotOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 p-[1px] flex items-center justify-center shadow-md shadow-indigo-500/20">
            <div className="w-full h-full bg-[#0b0f19] rounded-[7px] flex items-center justify-center group-hover:bg-[#111827] transition-colors">
              <span className="font-semibold text-sm tracking-wider text-purple-400 group-hover:text-purple-300">SM</span>
            </div>
          </div>
          <div>
            <div className="font-semibold text-sm sm:text-base tracking-tight text-slate-100">
              Shakshi Malvi
            </div>
            <div className="text-[11px] text-slate-400 hidden sm:block">
              Machine Learning & Data Science
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-slate-300 hover:text-white transition-colors py-1 relative hover:underline decoration-purple-500 underline-offset-8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* AI Chatbot Button in Nav */}
          <button
            type="button"
            onClick={onOpenChatbot}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
              isChatbotOpen
                ? 'bg-purple-600/20 text-purple-300 border-purple-500/50 shadow-sm shadow-purple-500/20'
                : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:border-purple-500/40 hover:text-purple-300 hover:bg-slate-800'
            }`}
            title="Ask Shakshi's AI Assistant"
          >
            <Bot className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>AI Chatbot</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub Profile"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu & AI Chatbot Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenChatbot}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-purple-950/40 text-purple-300 border border-purple-800/50"
            aria-label="Open AI Chatbot"
          >
            <Bot className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Chat</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0f19]/98 border-b border-slate-800 px-5 pt-3 pb-6 backdrop-blur-xl">
          <ul className="space-y-3 pt-2 pb-4 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="block text-base font-medium text-slate-200 hover:text-purple-400 transition-colors py-1.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChatbot();
                }}
                className="w-full flex items-center justify-between text-base font-medium text-purple-300 py-1.5 text-left"
              >
                <span className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-purple-400" />
                  Ask AI Chatbot
                </span>
                <span className="text-xs text-emerald-400">Online</span>
              </button>
            </li>
          </ul>

          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
