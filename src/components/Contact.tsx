import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  onOpenChatbot: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenChatbot }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with prefilled content
    const mailtoSubject = encodeURIComponent(
      formState.subject || `Inquiry from ${formState.name} via Portfolio`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Shakshi,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2 mb-4">
              Let's connect & collaborate.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Whether you're interested in machine learning projects, potential roles, research initiatives, or just want to discuss data science, feel free to reach out.
            </p>

            {/* Direct Email Card */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 mb-6">
              <div className="text-xs font-medium text-slate-400 mb-2">Direct Email</div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors truncate font-mono"
                >
                  {PORTFOLIO_DATA.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="space-y-3">
              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">LinkedIn</div>
                    <div className="text-[11px] text-slate-400">linkedin.com/in/shakshi-malvi</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">GitHub</div>
                    <div className="text-[11px] text-slate-400">github.com/shakshimalvi</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Chatbot shortcut callout */}
              <button
                type="button"
                onClick={onOpenChatbot}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 hover:border-purple-600/60 text-purple-300 hover:text-purple-200 transition-colors text-left cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-900/50 border border-purple-700/50 flex items-center justify-center text-purple-300">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Interactive AI Assistant</div>
                    <div className="text-[11px] text-purple-300/80">Ask questions about Shakshi's ML portfolio</div>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to open a direct email draft with your preferred email client.
              </p>

              {submitted && (
                <div className="mb-6 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Email client opened! You can also email directly to {PORTFOLIO_DATA.email}.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="ML Project Collaboration / Job Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hello Shakshi, I came across your portfolio and wanted to reach out regarding..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/40 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
