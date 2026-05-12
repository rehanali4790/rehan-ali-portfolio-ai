'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Category = 'all' | 'llm' | 'cv' | 'fullstack' | 'nlp' | 'mlops';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  tags: Category[];
  metrics: string[];
  gradient: string;
  accent: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'ConvertoAI',
    desc: 'Enterprise AI agent creation platform enabling businesses to deploy custom chatbots and automation workflows without code. Multi-agent orchestration processing 100K+ conversations monthly.',
    tech: ['Python', 'React', 'LangChain', 'LLMs', 'Vector DBs', 'FastAPI'],
    tags: ['llm', 'fullstack'],
    metrics: ['100K+ conversations/mo', '500+ concurrent agents'],
    gradient: 'from-emerald-600/20 to-cyan-600/20',
    accent: '#10b981',
    link: 'https://convertoai.vercel.app',
  },
  {
    title: 'CrimeRAG',
    desc: 'AI agentic platform for law enforcement automating criminal investigation workflows. Multi-agent orchestration processing case files, witness statements, and forensic data to identify connections.',
    tech: ['Python', 'LangChain', 'Multi-Agent', 'Neo4j', 'Graph DBs'],
    tags: ['llm', 'mlops'],
    metrics: ['65% faster investigations', '50K+ records processed'],
    gradient: 'from-red-600/20 to-orange-600/20',
    accent: '#ef4444',
  },
  {
    title: 'HireFlow AI',
    desc: 'AI-powered recruitment platform with voice interview system, real-time transcription, dynamic question adaptation, and automated scoring with bias-free ML ranking.',
    tech: ['Python', 'FastAPI', 'Voice AI', 'React', 'LangChain'],
    tags: ['llm', 'fullstack'],
    metrics: ['87% faster hiring', '95% quality match', '10K+ interviews'],
    gradient: 'from-violet-600/20 to-purple-600/20',
    accent: '#8b5cf6',
    link: 'https://hireflow-chi.vercel.app',
  },
  {
    title: 'ANPR System',
    desc: 'Automatic Number Plate Recognition system for Government of Sindh. YOLOv8-based vehicle tracking across 50+ checkpoints with real-time surveillance capabilities.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'OCR', 'Edge Computing'],
    tags: ['cv', 'mlops'],
    metrics: ['200K+ vehicles/mo', '94% accuracy', '85% less manual work'],
    gradient: 'from-cyan-600/20 to-blue-600/20',
    accent: '#06b6d4',
  },
  {
    title: 'JobBuddy',
    desc: 'Full-stack AI career mentoring platform serving 5K+ users with resume optimization, job matching, and interview preparation through semantic NLP analysis.',
    tech: ['Python', 'React', 'LLMs', 'RAG', 'PostgreSQL'],
    tags: ['llm', 'fullstack'],
    metrics: ['5K+ users', '45% better matches', '100K+ job listings'],
    gradient: 'from-amber-600/20 to-yellow-600/20',
    accent: '#f59e0b',
    link: 'https://jobuddyai.vercel.app',
  },
  {
    title: 'Traffic Optimization',
    desc: 'Computer vision system analyzing live video feeds to detect congestion and dynamically adjust traffic signals. Reinforcement learning for continuous signal timing optimization.',
    tech: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Edge AI'],
    tags: ['cv', 'mlops'],
    metrics: ['25-30% less congestion', '15-20% faster travel'],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accent: '#14b8a6',
  },
  {
    title: 'NLP Sentiment Engine',
    desc: 'Custom NLP application analyzing customer feedback from social media platforms. Deep learning-based sentiment analysis with demand forecasting using BERT/RoBERTa models.',
    tech: ['Python', 'BERT', 'RoBERTa', 'Spark', 'Kafka'],
    tags: ['nlp', 'mlops'],
    metrics: ['15-20% better forecasts', 'Real-time analysis'],
    gradient: 'from-pink-600/20 to-rose-600/20',
    accent: '#ec4899',
  },
  {
    title: 'PropEdge AI',
    desc: 'AI trading psychology platform serving 2K+ retail traders with personalized mental coaching, emotion detection, and ML-powered journaling for behavioral analysis.',
    tech: ['Python', 'React', 'LLMs', 'Time-series', 'Trading APIs'],
    tags: ['llm', 'fullstack'],
    metrics: ['2K+ traders', '40% fewer emotional trades'],
    gradient: 'from-teal-600/20 to-green-600/20',
    accent: '#10b981',
    link: 'https://propedge-ai-rho.vercel.app',
  },
  {
    title: 'LOCAL JARVIS',
    desc: 'Offline AI solution providing full LLM and Vision model capabilities without external APIs. Custom-built using Django, Flask, and Streamlit for specific business needs.',
    tech: ['Python', 'Django', 'Flask', 'Streamlit', 'LLMs'],
    tags: ['llm', 'mlops'],
    metrics: ['Zero API costs', '100% data privacy'],
    gradient: 'from-orange-600/20 to-amber-600/20',
    accent: '#f97316',
  },
];

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'llm', label: 'LLM & RAG' },
  { key: 'cv', label: 'Computer Vision' },
  { key: 'nlp', label: 'NLP' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'mlops', label: 'MLOps' },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<Category>('all');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.tags.includes(filter));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proj-heading',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="proj-heading mb-12">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3">
            {'// '}Featured Projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What I&apos;ve <span className="text-gradient">Shipped.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Production AI systems that solve real problems — from government surveillance to
            financial research and beyond.
          </p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat.key
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'
                  : 'text-gray-500 hover:text-white border border-white/5 hover:border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="perspective-1000"
              >
                <motion.div
                  whileHover={{
                    rotateY: 5,
                    rotateX: -3,
                    scale: 1.02,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="preserve-3d group relative p-6 rounded-2xl bg-gray-900/60 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient-subtle transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {project.desc}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="text-xs font-medium px-2 py-1 rounded-md"
                          style={{
                            backgroundColor: `${project.accent}10`,
                            color: project.accent,
                          }}
                        >
                          {m}
                        </span>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-gray-500 px-2 py-0.5 rounded bg-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {project.link && hoveredIdx === i && (
                      <motion.a
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-6 right-6 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
