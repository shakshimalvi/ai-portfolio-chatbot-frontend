import React from 'react';
import { ArrowRight, Bot, Github, Linkedin, Mail, Terminal, Database, Cpu, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenChatbot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChatbot }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-700/15 via-indigo-600/15 to-blue-600/10 blur-[120px] pointer-events-none rounded-full"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-12 -right-20 w-80 h-80 bg-blue-600/10 blur-[90px] pointer-events-none rounded-full"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Subtle status kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>Available for Machine Learning Roles & Collaborations</span>
          </div>

          {/* Name & Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.12]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">Shakshi Malvi</span>.
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-slate-200 mb-6 leading-snug">
            Aspiring Machine Learning Engineer & Data Science Student
          </p>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
            Passionate about turning raw data into production-ready predictive systems, NLP models, and real-time AI solutions. Focused on end-to-end model development, API deployment with FastAPI, and interactive applications.
          </p>

          {/* Core Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-medium mb-10 pb-6 border-b border-slate-800/80">
            <span className="text-slate-300">Machine Learning</span>
            <span className="text-purple-500" aria-hidden="true">•</span>
            <span className="text-slate-300">Natural Language Processing</span>
            <span className="text-purple-500" aria-hidden="true">•</span>
            <span className="text-slate-300">Data Science</span>
            <span className="text-purple-500" aria-hidden="true">•</span>
            <span className="text-slate-300">API Deployment</span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={onOpenChatbot}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-purple-300 border border-purple-500/30 hover:border-purple-400/60 font-medium text-sm transition-all shadow-sm group cursor-pointer"
            >
              <Bot className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Ask AI Assistant</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 font-medium text-sm transition-colors"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links & Quick Connect */}
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-xs text-slate-500 font-mono tracking-wider uppercase">Connect:</span>
            <a
              href={PORTFOLIO_DATA.github}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-purple-500/40 transition-colors"
              title={`Email: ${PORTFOLIO_DATA.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Highlight Architecture Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-slate-800/60">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-800/40 flex items-center justify-center text-purple-400">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-200">Predictive Modeling</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Supervised regression and classification algorithms built with rigorous validation, hyperparameter tuning, and performance profiling.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center text-indigo-400">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-200">NLP & Sequence Models</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Text classification, TF-IDF vectorizers, recurrent sequence modeling (LSTM), and conversational assistants for user queries.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400">
                <Terminal className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-200">Production Serving</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Packaging models into low-latency FastAPI endpoints, Streamlit interfaces, and cloud-hosted deployments on Render.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
