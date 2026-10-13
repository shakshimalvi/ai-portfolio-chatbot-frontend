import React from 'react';
import { Brain, Code2, Server, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and Editorial narrative */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Background & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-6">
              Engineering intelligence from raw data to production.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I'm <strong className="text-white">Shakshi Malvi</strong>, a Data Science student and aspiring Machine Learning Engineer dedicated to designing systems that solve practical problems. My core focus lies at the intersection of applied machine learning, natural language processing, and robust software engineering.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
              Rather than leaving models inside Jupyter Notebooks, I emphasize building complete lifecycles: structuring automated data transformations, validating predictive stability, wrapping models into lightweight FastAPI microservices, and deploying live interactive frontends on Render and Streamlit.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-200 tracking-wide">Key Focus Areas</div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Supervised Regression & Classification Pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>Natural Language Processing & Sequence Modeling (LSTM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>FastAPI Endpoints, Pydantic Schema Validation & Streamlit UI</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Cloud Deployment & Ephemeral Tunnel Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles & Workflow */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-400 mb-3">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">Model Development</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Careful feature engineering, handling skewed distributions, cross-validation, and metric analysis (RMSE, Precision, Recall, F1) to prevent data leakage and overfitting.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-indigo-950/80 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-3">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">NLP & Linguistics</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Corpus tokenization, TF-IDF vector representations, n-gram sequence building, and neural LSTM layers for next-token prediction and intent detection.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">API Architecture</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  FastAPI service architecture with typed Pydantic payloads, input sanitization, automated OpenAPI docs, and containerized deployment readiness.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5">Real-World Deployment</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Deploying on Render and Streamlit Cloud, establishing continuous deployment with GitHub, and exposing live inference endpoints for consumption.
                </p>
              </div>
            </div>

            {/* Quote / Philosophy Box */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-950/20 via-indigo-950/20 to-slate-900/40 border border-purple-500/20">
              <p className="text-sm text-slate-200 italic leading-relaxed">
                "An algorithm is only as impactful as its utility in the hands of users. Bridging model precision with clean interfaces and reproducible APIs is where true value is created."
              </p>
              <div className="mt-3 text-xs text-purple-400 font-medium">
                — Shakshi Malvi · Engineering Philosophy
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
