import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import config from '../config';
import Logo from './Logo';

const WhatsAppIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

const ContactFAB: React.FC = () => {
  // UI State
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Chat State
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY > 300;
      setIsVisible(shouldBeVisible);
      if (!shouldBeVisible) setIsOpen(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const initializeChat = () => {
    if (!chat) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = "You are a friendly, expert sales and support assistant for EMPHZ, a global manufacturer of GRP composite solutions. Your goal is to answer user questions about products and help them find the right solution. Be professional and concise. The main product categories are: GRP Electrical Enclosures, Modular & Portable Structures, Utility & Infrastructure Products, Industrial Components, Marine/Offshore Solutions, Sustainable/Smart Solutions, and Transport/Automotive Components. If you don't know an answer, politely say you need to check with a human engineer and suggest they use the contact form.";
        
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
        setChat(newChat);
        setMessages([{ sender: 'ai', text: "Hi there! I'm the EMPHZ AI Assistant. How can I help you with our composite solutions today?" }]);
      } catch (error) {
        console.error("Failed to initialize Gemini AI:", error);
        setMessages([{ sender: 'ai', text: "Sorry, the AI assistant is currently unavailable. Please use our contact form." }]);
      }
    }
  };

  const toggleChat = () => {
    const newIsOpenState = !isOpen;
    setIsOpen(newIsOpenState);
    if (newIsOpenState && !chat) {
      initializeChat();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: currentInput });
      const aiMessage: ChatMessage = { sender: 'ai', text: response.text };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Gemini API error:", error);
      const errorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative">
      <div
        className={`
          w-[calc(100vw-3rem)] max-w-sm h-auto bg-[var(--color-background)] rounded-lg shadow-xl border border-[var(--color-border)] flex flex-col
          transition-[transform,opacity] duration-300 ease-in-out origin-bottom-right absolute bottom-[calc(100%+1rem)] right-0
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="p-4 bg-[var(--color-primary)] text-white flex items-center gap-3 rounded-t-lg">
          <Logo className="h-10 w-auto flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg">EMPHZ AI Assistant</h3>
            <p className="text-xs text-gray-300">Typically replies instantly</p>
          </div>
        </div>
        
        <div className="p-3 flex-grow bg-[var(--color-surface)] h-96 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-2xl px-4 py-2 max-w-[80%] whitespace-pre-wrap ${msg.sender === 'user' ? 'bg-[var(--color-brand)] text-white rounded-br-none' : 'bg-white text-[var(--color-text-primary)] rounded-bl-none shadow-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2 bg-white text-[var(--color-text-primary)] rounded-bl-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    </div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-3 border-t border-[var(--color-border)] bg-white flex items-center gap-2 rounded-b-lg">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading || !chat}
            className="flex-grow w-full px-4 py-2 border rounded-full focus:ring-2 focus:ring-[var(--color-brand)]/50 focus:border-[var(--color-brand)] transition-colors duration-200 text-sm disabled:bg-gray-100"
            aria-label="Your message"
          />
          <button
            type="submit"
            disabled={isLoading || !userInput.trim() || !chat}
            aria-label="Send message"
            className="flex-shrink-0 bg-[var(--color-brand)] hover:bg-[var(--color-accent)] text-white p-2.5 rounded-full transition-all transform hover:scale-110 disabled:bg-gray-400 disabled:scale-100"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
          </button>
        </form>
      </div>

      <button
        onClick={toggleChat}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close AI chat' : 'Open AI chat'}
      >
        {isOpen ? <CloseIcon /> : <WhatsAppIcon />}
      </button>
    </div>
  );
};

export default ContactFAB;
