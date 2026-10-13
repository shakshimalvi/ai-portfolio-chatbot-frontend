import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#090d16] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="font-semibold text-slate-200 text-sm tracking-tight mb-1">
              Shakshi Malvi
            </div>
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              Aspiring Machine Learning Engineer & Data Science Student. Building intelligent models, NLP workflows, and deployed API microservices.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Shakshi Malvi. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>FastAPI Assistant Integration</span>
            <span aria-hidden="true">·</span>
            <span>Render & Streamlit Deployments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
