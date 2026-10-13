import React from 'react';
import { Cpu, MessageSquareCode, Code2, Cloud, Sparkles, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 1:
        return <MessageSquareCode className="w-5 h-5 text-indigo-400" />;
      case 2:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      default:
        return <Cloud className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
            Technical Stack & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-4">
            Skills & Core Tooling
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical experience across statistical modeling, deep learning architectures, Python data ecosystems, and deployment infrastructure.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List with clean typography and unboxed presentation */}
              <div className="mt-5 grid grid-cols-2 gap-2.5 pt-4 border-t border-slate-800/60">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 text-xs text-slate-300 font-medium py-1"
                  >
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span className="truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Workflow Section */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900/30 border border-slate-800/70">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Applied Engineering Workflow</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div>
              <div className="font-semibold text-white mb-1">1. Exploration & Cleaning</div>
              <p className="text-slate-400 leading-relaxed">
                Pandas, NumPy, Matplotlib & Seaborn for profiling, feature distributions, anomaly detection, and handling missing values.
              </p>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">2. Modeling & Evaluation</div>
              <p className="text-slate-400 leading-relaxed">
                Scikit-Learn, TensorFlow, and custom NLP pipelines with cross-validation, precision/recall curves, and metrics optimization.
              </p>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">3. Delivery & Serving</div>
              <p className="text-slate-400 leading-relaxed">
                Deploying serialized models via FastAPI REST backends and Streamlit apps on Render and Streamlit Cloud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
