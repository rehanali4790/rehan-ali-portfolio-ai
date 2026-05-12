'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, User } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm Rehan's AI assistant. Ask me anything about his experience, skills, projects, or how he can help with your AI needs!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat?XTransformPort=3000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are an AI assistant for Rehan Ali's portfolio website. Rehan is an AI/ML Engineer with 5+ years of experience. 
Key facts about Rehan:
- Works at GCS Pvt LTD as AI Product Engineer (Oct 2024 - Present)
- Previously AI Engineer at GCS (Apr 2023 - Oct 2024)
- AI/ML Consultant at Techfy Solutions, New York (Oct 2024 - Present)
- Freelance AI Developer on Fiverr/Upwork (Nov 2019 - Oct 2024), 75+ projects, 4.9/5 rating
- MS in AI at NED University (Expected Dec 2025), BE in Mechanical Engineering (Oct 2023)
- Expert in: LLMs, RAG, Multi-Agent Systems, Computer Vision (YOLOv8, ANPR, OCR), NLP, MLOps
- Key projects: ConvertoAI (AI agent platform), CrimeRAG (law enforcement), HireFlow AI (recruitment), JobBuddy (career mentoring), PropEdge AI (trading psychology), ANPR system (200K+ vehicles/mo), LOCAL JARVIS (offline AI), NLP Sentiment Engine, Business Dashboard, Traffic Optimization
- Tech stack: Python, React, Next.js, LangChain, LlamaIndex, TensorFlow, PyTorch, YOLOv8, MLflow, Databricks, Docker, K8s, AWS, Azure, PostgreSQL, MongoDB, Vector DBs (Pinecone, Weaviate, ChromaDB), Neo4j
- Achieved 60-75% cost reduction through AI automation, 50K+ users served, 10+ production AI platforms
- Contact: rehanalikhan4790@gmail.com, +92-323-0298501, linkedin.com/in/rehanaliaiml, github.com/rehanali4790
Be helpful, concise, and professional. If asked about hiring, encourage them to reach out via email or the contact form.`,
            },
            ...messages.slice(-6).map((m) => ({ role: m.role, content: m.content })),
            { role: 'user', content: userMsg },
          ],
        }),
      });

      const data = await res.json();
      const reply =
        data.choices?.[0]?.message?.content ||
        "I'd be happy to help! Please feel free to reach out to Rehan directly at rehanalikhan4790@gmail.com for detailed discussions.";
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "Sorry, I'm having trouble connecting right now. Please try again or reach out directly at rehanalikhan4790@gmail.com.",
        },
      ]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-gray-950 shadow-lg shadow-emerald-500/25 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <Bot className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring */}
      {!open && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full border-2 border-emerald-500/30"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] sm:w-[400px] max-h-[500px] rounded-2xl bg-gray-900 border border-white/10 shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 bg-gray-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">AI Assistant</h4>
                  <p className="text-xs text-gray-500">Ask about Rehan&apos;s work</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[340px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-3 h-3 text-emerald-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-emerald-500 text-gray-950 rounded-br-sm'
                        : 'bg-white/5 text-gray-300 rounded-bl-sm border border-white/5'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-md bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-3 h-3 text-cyan-400" />
                    </div>
                  )}
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="flex gap-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/5">
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/5 bg-gray-900/80 backdrop-blur-sm">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Rehan's AI work..."
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50"
                />
                <motion.button
                  type="submit"
                  disabled={!input.trim() || loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg bg-emerald-500 text-gray-950 flex items-center justify-center disabled:opacity-30 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
