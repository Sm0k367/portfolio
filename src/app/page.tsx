"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Text, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import Typed from 'react-typed'
import Lottie from 'lottie-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'
import particlesData from '@/public/particles-cyberpunk.json' // Assume Lottie file

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const lenisRef = useRef<any>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
      setScrollProgress(lenis.scroll / lenis.limit)
    }

    requestAnimationFrame(raf)

    gsap.to(heroRef.current, {
      scale: 1.1,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    })

    ScrollTrigger.normalizeScroll(true)

    return () => lenis.destroy()
  }, [])

  const projects = [
    { category: 'AI Chatbots', items: [
      { name: 'Machine Built', url: 'https://machine-built.vercel.app/', icon: '🤖' },
      { name: 'Epic AI Bot', url: 'https://epic-ai-bot.vercel.app/', icon: '💻' },
      { name: 'The Chat 2', url: 'https://the-chat-2.vercel.app/', icon: '🗣️' },
    ]},
    { category: 'Gaming', items: [
      { name: 'Game', url: 'https://sm0k367.github.io/game/', icon: '🎮' },
      { name: 'High Stakes', url: 'https://sm0k367.github.io/high-stakes/', icon: '♦️' },
      { name: 'Music Vault', url: 'https://music-vault-eta.vercel.app/', icon: '🎵' },
    ]},
    { category: 'Neural Systems', items: [
      { name: 'Neural Lounge', url: 'https://sm0k367.github.io/neural-lounge/', icon: '🧠' },
      { name: 'Vault', url: 'https://sm0k367.github.io/vault/', icon: '🔒' },
      { name: 'Vault 1', url: 'https://sm0k367.github.io/vault1/', icon: '🛡️' },
    ]},
    { category: 'Modern Apps', items: [
      { name: 'One Site Tau', url: 'https://one-site-tau.vercel.app/', icon: '🌐' },
      { name: 'Innovative Project', url: 'https://innovative-project-jc7m.bolt.host', icon: '🚀' },
    ]}
  ]

  return (
    <main className="min-h-screen w-full relative overflow-hidden">
      {/* Cyberpunk Hero */}
      <section ref={heroRef} className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 via-cyber-800 to-neon-magenta/10" />
        <Canvas className="absolute inset-0">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Float>
            <mesh>
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial color="neon-cyan" emissive="neon-cyan" emissiveIntensity={0.5} />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} />
        </Canvas>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-20 px-4 max-w-5xl mx-auto cyber-glass p-12 rounded-3xl neon-glow"
        >
          <motion.div 
            animate={{ textShadow: ['0 0 20px #00FFFF', '0 0 30px #FF00FF'] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            className="text-7xl md:text-9xl lg:text-[10rem] font-cyber font-black uppercase tracking-wider mb-8 glitch"
          >
            <Typed 
              strings={['Sm0kn420', 'Cyber Empire', 'TSI x AI']}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </motion.div>
          <motion.h2 className="text-3xl md:text-5xl font-neon font-bold mb-8 bg-gradient-to-r from-neon-lime to-neon-orange bg-clip-text text-transparent">
            Building the Future with @tsi_org
          </motion.h2>
          <motion.p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            x.com/@Sm0kn420 - AI-Powered Web Experiences that redefine reality. All GitHub/Vercel projects live in neon glory.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button className="cyber-glass px-12 py-6 text-xl font-bold rounded-3xl border-2 border-neon-cyan hover:border-neon-magenta neon-glow transition-all duration-300">
              Enter Matrix <span className="ml-2">⚡</span>
            </motion.button>
            <motion.button className="cyber-glass px-12 py-6 text-xl font-bold rounded-3xl border-2 border-white/30 hover:border-neon-lime">
              GitHub Repo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid - Floating Cyber Cards */}
      <section className="py-32 px-8 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-cyber font-black text-center mb-24 neon-glow"
        >
          Neural Network
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.flatMap(cat => cat.items.map((proj, i) => (
            <motion.a 
              key={proj.name}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="cyber-glass p-10 rounded-3xl group hover:neon-glow cursor-pointer relative overflow-hidden h-64 flex flex-col justify-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{proj.icon}</div>
              <h3 className="text-2xl font-cyber font-black mb-4 group-hover:text-neon-cyan">{proj.name}</h3>
              <div className="flex items-center space-x-2 text-neon-lime font-bold text-sm">
                Launch <span>→</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neon-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          )))}
        </div>
      </section>

      {/* Tech Stack - 3D Orbit */}
      <section className="py-32 px-8 bg-cyber-800/50 relative">
        <h2 className="text-6xl md:text-7xl font-cyber font-black text-center mb-24 neon-glow">
          Cyber Stack
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {['Next.js 14+', 'TypeScript', 'Tailwind CSS', 'Vercel Edge', 'OpenAI GPT', 'Three.js R3F'].map((tech, i) => (
            <motion.div 
              key={tech}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              className="cyber-glass p-8 rounded-3xl text-center hover:rotate-y-12 neon-glow cursor-default"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-cyber font-bold">{tech}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 text-center border-t border-neon-cyan/20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-cyber mb-8 neon-glow">x.com/@Sm0kn420</h3>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="https://github.com/Sm0k367" className="neon-glow hover:scale-110"><Github size={48} /></a>
            <a href="https://twitter.com/Sm0ken420" className="neon-glow hover:scale-110"><Twitter size={48} /></a>
            <a href="https://getmytsi.org" className="neon-glow hover:scale-110">🌟 TSI</a>
          </div>
          <p className="text-neon-lime/70">Powered by @tsi_org | Cyberpunk Edition 2026</p>
        </div>
      </footer>
    </main>
  )
}