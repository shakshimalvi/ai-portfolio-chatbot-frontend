import React, { useState } from 'react';
import { ExternalLink, Github, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Machine Learning', label: 'Machine Learning' },
    { id: 'NLP', label: 'NLP' },
    { id: 'Deep Learning', label: 'Deep Learning' },
  ];

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-3">
              Machine Learning & AI Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              End-to-end applications demonstrating data preparation, model training, and production deployment with live APIs and interactive web apps.
            </p>
          </div>

          {/* Filter Segmented Control (Functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700 hover:shadow-xl hover:shadow-purple-950/10 transition-all group"
            >
              <div>
                {/* Clean metadata header without pill badges */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 font-semibold">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Project {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  </div>

                  {project.liveUrl && (
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Demo
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                {/* Summary / Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/70">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Key Highlights
                  </div>
                  {project.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags - Clean unboxed text with typographic separators */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 mb-6 pt-4 border-t border-slate-800/70 font-mono">
                  {project.tags.map((tag, tIdx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-300">{tag}</span>
                      {tIdx < project.tags.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 text-xs font-medium transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-slate-300" />
                    <span>View Repository</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-gradient-to-r from-purple-600/90 to-indigo-600/90 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-medium transition-all shadow-sm shadow-purple-900/20"
                    >
                      <span>Open Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
