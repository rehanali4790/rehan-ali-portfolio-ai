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
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
      ),
      title: 'LLM & RAG Expert',
      desc: 'Architecting production RAG systems with LangChain, vector databases, and multi-agent orchestration for enterprise clients.',
      color: '#10b981',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Computer Vision',
      desc: 'Deploying YOLOv8-based ANPR systems, OCR pipelines, and real-time visual processing across government and private sectors.',
      color: '#06b6d4',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
        </svg>
      ),
      title: 'MLOps & Scale',
      desc: 'Building end-to-end ML pipelines with MLflow, Databricks, and CI/CD — reducing deployment time from days to hours.',
      color: '#8b5cf6',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      title: 'Agentic AI',
      desc: 'Creating multi-agent systems for law enforcement, recruitment, and financial research with autonomous decision-making capabilities.',
      color: '#f59e0b',
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

      // Parallax background image
      gsap.to('.about-bg-image', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 -top-20 -bottom-20 z-0">
        <img
          src="/images/about-bg.png"
          alt=""
          className="about-bg-image w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-[#030712]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              I&apos;m an AI/ML Engineer with{' '}
              <span className="text-emerald-400 font-semibold">5+ years</span> of
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
              Pursuing my{' '}
              <span className="text-violet-400 font-semibold">MS in Artificial
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

            {/* Certifications */}
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-white font-semibold text-sm mb-3">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['PMP', 'IBM Data Science', 'Deep Learning', 'ML Specialization', 'Azure Associate'].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400"
                  >
                    {cert}
                  </span>
                ))}
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
                  boxShadow: `0 10px 40px ${item.color}15`,
                  borderColor: `${item.color}30`,
                }}
                className="group p-5 rounded-2xl bg-gray-900/50 border border-white/5 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors"
                  style={{
                    backgroundColor: `${item.color}10`,
                    color: item.color,
                    border: `1px solid ${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:transition-colors" style={{ '--hover-color': item.color } as React.CSSProperties}>
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
