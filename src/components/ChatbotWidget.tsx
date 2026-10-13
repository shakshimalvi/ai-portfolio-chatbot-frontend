import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Loader2,
  RefreshCw,
  AlertCircle,
  Settings,
  Sparkles,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import {
  DEFAULT_CHATBOT_API_URL,
  getChatbotApiUrl,
  setChatbotApiUrl
} from '../config/chatbotConfig';

/**
 * =============================================================================
 * CLOUDFLARE QUICK TUNNEL NOTICE:
 * Cloudflare Quick Tunnels (e.g., https://xyz.trycloudflare.com/chat) are ephemeral
 * and generate a new random domain each time you run `cloudflared tunnel`.
 * When your tunnel changes, update the DEFAULT_CHATBOT_API_URL in
 * `src/config/chatbotConfig.ts` or paste your new URL in the in-widget Settings.
 * =============================================================================
 */

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isError?: boolean;
}

interface ChatbotWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  isOpen,
  onClose,
  onOpen
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "Hello! I'm Shakshi's AI Assistant, connected to her custom FastAPI backend. Ask me anything about Shakshi's Machine Learning projects, data science background, or technical skills!",
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Active backend URL state (configurable & persisted)
  const [apiUrl, setApiUrl] = useState<string>(() => getChatbotApiUrl());
  const [showSettings, setShowSettings] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState<string>(apiUrl);
  const [urlSavedFeedback, setUrlSavedFeedback] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveApiUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = tempUrlInput.trim();
    if (clean) {
      setChatbotApiUrl(clean);
      setApiUrl(clean);
      setUrlSavedFeedback(true);
      setTimeout(() => {
        setUrlSavedFeedback(false);
        setShowSettings(false);
      }, 1200);
    }
  };

  const handleResetApiUrl = () => {
    setChatbotApiUrl(DEFAULT_CHATBOT_API_URL);
    setApiUrl(DEFAULT_CHATBOT_API_URL);
    setTempUrlInput(DEFAULT_CHATBOT_API_URL);
  };

  const handleSendMessage = async (customText?: string) => {
    const questionText = (customText || inputValue).trim();
    if (!questionText || isLoading) return;

    const userMessageId = `msg-${Date.now()}`;
    const userMessage: ChatMessage = {
      id: userMessageId,
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Validate that placeholder hasn't been submitted without warning
      if (apiUrl.includes('YOUR-CURRENT-CLOUDFLARE-TUNNEL-URL')) {
        throw new Error(
          `The backend URL is currently configured with the placeholder "${apiUrl}". ` +
          `Please update it to your active Cloudflare tunnel URL (e.g., https://something.trycloudflare.com/chat) in the settings.`
        );
      }

      // Exact requirement:
      // POST to backend URL
      // Body: {"question": "the user's message"}
      // Response: JSON with "answer" field
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ question: questionText })
      });

      if (!response.ok) {
        throw new Error(
          `Backend returned HTTP status ${response.status} (${response.statusText || 'Error'}).`
        );
      }

      const data = await response.json();

      if (typeof data.answer === 'string') {
        const assistantMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: data.answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        throw new Error(
          `Received response from backend, but the expected JSON field "answer" was missing or not a string.`
        );
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown communication error.';
      const failureMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'assistant',
        text: `Unable to connect to FastAPI backend at "${apiUrl}".\n\nDetails: ${errorMessage}\n\nTroubleshooting tips:\n• Check that your FastAPI server is running with CORS enabled (allow_origins=["*"]).\n• Ensure your Cloudflare tunnel is running (\`cloudflared tunnel --url http://localhost:8000\`).\n• Note: Cloudflare Quick Tunnels change domains whenever restarted! Click the Settings ⚙️ icon above to update your active tunnel URL.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true
      };
      setMessages((prev) => [...prev, failureMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestionPrompts = [
    "What are Shakshi's ML projects?",
    "Tell me about the House Price Prediction API",
    "How does the Spam SMS Classifier work?",
    "What technologies does Shakshi use?"
  ];

  return (
    <>
      {/* Floating Launcher Button (visible when widget is closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            type="button"
            onClick={onOpen}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-xl shadow-purple-900/40 hover:shadow-purple-700/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            aria-label="Open AI Assistant Chatbot"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-white animate-bounce" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-semibold leading-tight">Ask Shakshi's AI Assistant</div>
              <div className="text-[10px] text-purple-200">FastAPI Backend</div>
            </div>
            <Sparkles className="w-4 h-4 text-purple-200" />
          </button>
        </div>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <aside
          role="complementary"
          aria-label="Ask Shakshi's AI Assistant Chatbot"
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col rounded-2xl bg-[#0d1322] border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-[#11182c] via-[#141d36] to-[#0f172a] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Ask Shakshi's AI Assistant
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="truncate max-w-[170px]" title={apiUrl}>
                    FastAPI · {apiUrl.replace(/^https?:\/\//, '').split('/')[0]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setShowSettings(!showSettings);
                  setTempUrlInput(apiUrl);
                }}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  showSettings
                    ? 'bg-purple-600/30 text-purple-300'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title="Tunnel Backend Settings & Status"
                aria-label="Chatbot backend settings"
              >
                <Settings className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Settings Drawer for Cloudflare Tunnel URL */}
          {showSettings && (
            <div className="p-4 bg-[#11182b] border-b border-slate-800 text-xs text-slate-300 animate-in fade-in duration-150">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-purple-400" />
                  Backend Configuration
                </span>
                <button
                  type="button"
                  onClick={handleResetApiUrl}
                  className="text-[10px] text-slate-400 hover:text-purple-300 underline cursor-pointer"
                >
                  Reset to default
                </button>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal mb-2.5">
                Cloudflare Quick Tunnel URLs are temporary and change when restarted. Paste your current active tunnel URL below:
              </p>

              <form onSubmit={handleSaveApiUrl} className="space-y-2">
                <input
                  type="url"
                  value={tempUrlInput}
                  onChange={(e) => setTempUrlInput(e.target.value)}
                  placeholder="https://your-tunnel.trycloudflare.com/chat"
                  className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono focus:outline-none focus:border-purple-500"
                  required
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-slate-500 font-mono">
                    Method: POST · Field: "question"
                  </span>
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-colors cursor-pointer"
                  >
                    {urlSavedFeedback ? 'Saved!' : 'Save URL'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none shadow-sm'
                      : msg.isError
                      ? 'bg-rose-950/40 border border-rose-800/60 text-rose-200 rounded-bl-none'
                      : 'bg-slate-800/80 border border-slate-700/60 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.isError && (
                    <div className="flex items-center gap-1.5 text-rose-400 font-semibold mb-1 text-xs">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Connection Feedback</span>
                    </div>
                  )}

                  <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                </div>

                {/* Message footer timestamp & copy button */}
                <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-500">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'assistant' && !msg.isError && (
                    <button
                      type="button"
                      onClick={() => handleCopyMessage(msg.id, msg.text)}
                      className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Visible Loading Indicator */}
            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="rounded-2xl rounded-bl-none px-4 py-2.5 bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs flex items-center gap-2.5">
                  <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                  <span>Waiting for FastAPI backend response...</span>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">Thinking</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Prompts */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-3 pb-2 pt-1 border-t border-slate-800/50 bg-[#0d1322]">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-1.5 px-1">
                Suggested Questions
              </div>
              <div className="flex flex-wrap gap-1.5">
                {suggestionPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-[#0a0f1c] border-t border-slate-800">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, skills, or experience..."
                disabled={isLoading}
                className="w-full pl-3.5 pr-11 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-1 focus:ring-purple-500/40 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-1.5 p-2 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 text-white disabled:text-slate-500 transition-colors cursor-pointer disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-slate-500">
              <span>Press <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-300">Enter</kbd> to send</span>
              <span>Calls custom FastAPI /chat</span>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
