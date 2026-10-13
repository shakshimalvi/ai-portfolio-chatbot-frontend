/**
 * =============================================================================
 * CHATBOT BACKEND CONFIGURATION
 * =============================================================================
 * 
 * IMPORTANT NOTE ABOUT CLOUDFLARE QUICK TUNNELS:
 * When you launch a Cloudflare Quick Tunnel via `cloudflared tunnel --url http://localhost:8000`,
 * Cloudflare assigns a temporary URL (e.g., https://random-words.trycloudflare.com).
 * Because quick tunnel URLs are ephemeral and change each time you restart the tunnel,
 * you must update this URL whenever you restart your tunnel, or set your active
 * tunnel URL directly in the Chatbot Settings UI in this app.
 * 
 * The FastAPI backend endpoint expects a POST request to `/chat` with JSON body:
 * { "question": "the user's message" }
 * and returns:
 * { "answer": "the assistant's response" }
 * 
 * Make sure your FastAPI backend has CORSMiddleware enabled allowing requests
 * from your web frontend origin (or allow_origins=["*"] for development).
 * =============================================================================
 */
export const DEFAULT_CHATBOT_API_URL = "https://ai-portfolio-chatbot-backend.onrender.com/chat";


const STORAGE_KEY = "shakshi_portfolio_chatbot_api_url";

export function getChatbotApiUrl(): string {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.trim() !== "") {
      return saved.trim();
    }
  }
  return DEFAULT_CHATBOT_API_URL;
}

export function setChatbotApiUrl(url: string): void {
  if (typeof window !== "undefined") {
    if (url.trim() === "" || url === DEFAULT_CHATBOT_API_URL) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, url.trim());
    }
  }
}
