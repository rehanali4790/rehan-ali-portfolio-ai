'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    color: '#10b981',
    skills: [
      { name: 'LLMs & RAG', level: 95 },
      { name: 'LangChain / LlamaIndex', level: 92 },
      { name: 'Multi-Agent Systems', level: 90 },
      { name: 'NLP & Sentiment Analysis', level: 88 },
      { name: 'Prompt Engineering', level: 95 },
    ],
  },
  {
    title: 'Computer Vision',
    color: '#06b6d4',
    skills: [
      { name: 'YOLOv8 / Object Detection', level: 93 },
      { name: 'OpenCV & Image Processing', level: 90 },
      { name: 'OCR (Tesseract / Custom)', level: 88 },
      { name: 'ANPR Systems', level: 94 },
    ],
  },
  {
    title: 'MLOps & Infrastructure',
    color: '#8b5cf6',
    skills: [
      { name: 'MLflow & Databricks', level: 90 },
      { name: 'Docker & Kubernetes', level: 85 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Apache Airflow', level: 82 },
    ],
  },
  {
    title: 'Frameworks & Languages',
    color: '#f59e0b',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'React / Next.js', level: 85 },
      { name: 'Django / FastAPI', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    color: '#ec4899',
    skills: [
      { name: 'AWS (EC2, S3, SageMaker)', level: 85 },
      { name: 'Azure / GCP', level: 78 },
      { name: 'Vercel / Railway', level: 92 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skills-heading',
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
    <section id="skills" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="skills-heading mb-16">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3">
            {'// '}Technical Arsenal
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Expertise.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            A comprehensive toolkit spanning the full AI/ML stack — from research to production deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: `${cat.color}25`,
                boxShadow: `0 8px 30px ${cat.color}08`,
              }}
              className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color, boxShadow: `0 0 8px ${cat.color}60` }}
                />
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.3 + ci * 0.1 + si * 0.05 }}
                        className="text-xs font-mono text-gray-500"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.3 + ci * 0.1 + si * 0.05,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`,
                          boxShadow: `0 0 8px ${cat.color}40`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specializations Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-violet-500/5 border border-white/5"
        >
          <h3 className="text-white font-semibold mb-4 text-center">Core Specializations</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'LLMs',
              'RAG Pipelines',
              'Multi-Agent Systems',
              'Computer Vision',
              'NLP',
              'OCR',
              'Voice AI',
              'ANPR',
              'Agentic AI',
              'MLOps',
              'Deep Learning',
              'Time-Series Analysis',
            ].map((spec, i) => (
              <motion.span
                key={spec}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/25 transition-colors cursor-default"
              >
                {spec}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
