/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatbotWidget } from './components/ChatbotWidget';

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleOpenChatbot = () => {
    setIsChatbotOpen(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-purple-600/30 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenChatbot={handleOpenChatbot}
        isChatbotOpen={isChatbotOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenChatbot={handleOpenChatbot} />
        <About />
        <Skills />
        <Projects />
        <Contact onOpenChatbot={handleOpenChatbot} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating Chatbot Widget */}
      <ChatbotWidget
        isOpen={isChatbotOpen}
        onOpen={handleOpenChatbot}
        onClose={handleCloseChatbot}
      />
    </div>
  );
}
