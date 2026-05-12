'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        nameRef.current,
        { y: 80, opacity: 0, rotateX: 40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          titleRef.current,
          { y: 40, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current?.children ? Array.from(statsRef.current.children) : [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.3'
        );

      // Floating badge animation
      gsap.to('.hero-badge', {
        y: -8,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '10+', label: 'AI Platforms' },
    { value: '50K+', label: 'Users Served' },
    { value: '75+', label: 'Projects Delivered' },
  ];

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          <span className="text-emerald-400 text-sm font-medium">
            Available for AI Engineering Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0"
          style={{ perspective: '1000px' }}
        >
          <span className="text-white">Hi, I&apos;m </span>
          <span className="text-gradient">Rehan Ali</span>
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 max-w-3xl mx-auto mb-4 opacity-0 font-light"
        >
          AI/ML Engineer &middot; LLM Architect &middot; Computer Vision Specialist
        </p>
        <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto mb-12 opacity-0">
          Building production-grade AI systems that transform industries. From RAG pipelines
          to multi-agent orchestration — I architect the future of intelligent automation.
        </p>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center opacity-0">
              <div className="text-3xl sm:text-4xl font-bold text-gradient-subtle">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-emerald-500 text-gray-950 font-semibold rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-white/10 text-white font-semibold rounded-xl hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
