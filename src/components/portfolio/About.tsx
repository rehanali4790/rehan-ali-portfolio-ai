'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: '🧠',
      title: 'LLM & RAG Expert',
      desc: 'Architecting production RAG systems with LangChain, vector databases, and multi-agent orchestration for enterprise clients.',
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      desc: 'Deploying YOLOv8-based ANPR systems, OCR pipelines, and real-time visual processing across government and private sectors.',
    },
    {
      icon: '🚀',
      title: 'MLOps & Scale',
      desc: 'Building end-to-end ML pipelines with MLflow, Databricks, and CI/CD — reducing deployment time from days to hours.',
    },
    {
      icon: '🤖',
      title: 'Agentic AI',
      desc: 'Creating multi-agent systems for law enforcement, recruitment, and financial research with autonomous decision-making capabilities.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-heading mb-16">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3">
            {'// '}About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Engineering Intelligence,
            <br />
            <span className="text-gradient">At Scale.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;m an AI/ML Engineer with <span className="text-emerald-400 font-semibold">5+ years</span> of
              experience delivering production-grade AI solutions across government, enterprise
              SaaS, and automation platforms. Currently leading AI engineering at{' '}
              <span className="text-cyan-400 font-semibold">GCS Pvt LTD</span>, I architect
              end-to-end ML systems that serve{' '}
              <span className="text-white font-semibold">50K+ users</span> across HR tech,
              fintech, healthcare, and law enforcement domains.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My expertise spans the full AI stack — from fine-tuning LLMs and building RAG
              pipelines to deploying computer vision models at scale. I specialize in
              transforming complex business requirements into intelligent, automated systems
              that reduce operational costs by 60-75% through smart MLOps practices.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Pursuing my <span className="text-violet-400 font-semibold">MS in Artificial
              Intelligence</span> at NED University, I combine academic rigor with hands-on
              production experience. I&apos;m passionate about pushing the boundaries of what AI
              can achieve in real-world applications.
            </p>

            {/* Education */}
            <div className="pt-4 border-t border-white/5">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">MS in Artificial Intelligence</h4>
                  <p className="text-gray-500 text-sm">NED University — Expected Dec 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">BE in Mechanical Engineering</h4>
                  <p className="text-gray-500 text-sm">NED University — Oct 2023</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 40px rgba(16, 185, 129, 0.15)',
                }}
                className="group p-5 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-emerald-500/20 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
