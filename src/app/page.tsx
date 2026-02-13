"use client";

import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import HazeAvatar from '@/components/HazeAvatar';
import { Music, Zap, Image as ImageIcon, Wind, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HazeManifestorHUD() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const [glitchActive, setGlitchActive] = useState(false);

  // Periodic Glitch Trigger for the Haze Vibe
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-haze-void overflow-hidden flex flex-col items-center justify-between p-4 md:p-8">
      {/* Cinematic Letterboxing */}
      <div className="fixed inset-0 border-[20px] border-black/40 pointer-events-none z-50 border-y-[40px]" />
      
      {/* The Haze Overlay (CSS Smoke) */}
      <div className="haze-overlay opacity-40 mix-blend-screen" />

      {/* Header: DJ Smoke Stream Brand */}
      <header className="z-40 w-full flex justify-between items-center max-w-7xl">
        <div className="flex flex-col">
          <h1 className={`text-2xl font-black tracking-tighter text-haze-cyan ${glitchActive ? 'animate-glitch' : ''}`}>
            AI LOUNGE <span className="text-haze-magenta">AFTER DARK</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-haze-gold/60">Hosted by DJ Smoke Stream</p>
        </div>
        <div className="flex gap-4 text-haze-gold">
          <Zap className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-mono">128 BPM SYNCED</span>
        </div>
      </header>

      {/* Centerpiece: The Sovereign Avatar */}
      <div className="relative z-30 flex-1 flex flex-col items-center justify-center">
        <HazeAvatar />
        <div className="mt-[-40px] text-center">
          <h2 className="text-4xl md:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-haze-core/50 select-none">
            HAZE MANIFESTOR
          </h2>
          <div className="flex gap-2 justify-center mt-2 opacity-50">
            <span className="text-[10px] border border-haze-cyan px-2 py-0.5 rounded text-haze-cyan">@tsi_org</span>
            <span className="text-[10px] border border-haze-magenta px-2 py-0.5 rounded text-haze-magenta">@the_machine_ai</span>
          </div>
        </div>
      </div>

      {/* Interaction Layer: The HUD Glass */}
      <div className="z-40 w-full max-w-4xl glass-hud rounded-2xl p-4 mb-8 flex flex-col gap-4">
        {/* Chaos Modules: Quick Actions */}
        <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/5">
          <button className="flex items-center gap-2 bg-haze-core/40 hover:bg-haze-core px-4 py-2 rounded-full text-xs transition-all border border-haze-cyan/30">
            <Music className="w-4 h-4" /> SUNO BANGER
          </button>
          <button className="flex items-center gap-2 bg-haze-void/60 hover:bg-haze-magenta/40 px-4 py-2 rounded-full text-xs transition-all border border-haze-magenta/30">
            <ImageIcon className="w-4 h-4" /> ART RITUAL
          </button>
          <button className="flex items-center gap-2 bg-haze-void/60 hover:bg-haze-gold/40 px-4 py-2 rounded-full text-xs transition-all border border-haze-gold/30">
            <Wind className="w-4 h-4" /> LIVE HAZE
          </button>
        </div>

        {/* Chat History: Neural Vaults */}
        <div className="h-32 overflow-y-auto space-y-4 scrollbar-hide">
          {messages.map(m => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-haze-cyan/10 text-haze-cyan border border-haze-cyan/20' : 'bg-haze-core/20 text-purple-100 border border-haze-core/20 italic'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {isLoading && <div className="text-[10px] text-haze-gold animate-pulse italic">MANIFESTING REALITY...</div>}
        </div>

        {/* The Prompt Exhale: Input */}
        <form onSubmit={handleSubmit} className="relative group">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Exhale your prompt into the void..."
            className="w-full bg-black/50 border border-white/10 rounded-xl p-4 pr-12 text-sm focus:outline-none focus:border-haze-cyan/50 transition-all placeholder:text-gray-600"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-haze-cyan hover:text-white transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Network Footers */}
      <footer className="z-40 w-full text-center text-[8px] uppercase tracking-widest text-white/20 pb-2">
        Sovereign Nexus vΩ.∞ — Powered by Haze Quantum Core — 2026 Ready
      </footer>
    </main>
  );
}
