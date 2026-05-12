'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'AI Product Engineer',
    company: 'GCS Pvt LTD',
    location: 'Karachi, Pakistan',
    period: 'Oct 2024 – Present',
    type: 'Full-time',
    color: '#10b981',
    highlights: [
      'Lead AI engineering team architecting enterprise AI solutions for government and private sectors',
      'Architected Media Monitoring Platform processing 150K+ daily broadcast records with 92% accuracy',
      'Deployed ANPR System tracking 200K+ vehicles monthly across 50+ checkpoints using YOLOv8',
      'Built end-to-end AI Recruitment Platform automating hiring lifecycle for 8 departments',
      'Engineered CrimeRAG — AI agentic platform for law enforcement reducing investigation time by 65%',
      'Implemented MLOps infrastructure reducing model deployment time from 3 days to 4 hours',
    ],
  },
  {
    role: 'AI Engineer',
    company: 'GCS Pvt LTD',
    location: 'Karachi, Pakistan',
    period: 'Apr 2023 – Oct 2024',
    type: 'Full-time',
    color: '#06b6d4',
    highlights: [
      'Deployed Financial Research RAG system processing 10K+ monthly queries with 95% accuracy',
      'Fine-tuned computer vision models for healthcare and e-commerce applications',
      'Built OCR extraction system handling 15K+ documents monthly, reducing manual processing by 70%',
    ],
  },
  {
    role: 'AI/ML Consultant',
    company: 'Techfy Solutions',
    location: 'New York, USA',
    period: 'Oct 2024 – Present',
    type: 'Part-time, Remote',
    color: '#8b5cf6',
    highlights: [
      'Provide AI/ML consulting for 5+ concurrent SaaS projects',
      'Engineered emotion analytics for Crowdora streaming platform processing 50K+ daily messages',
      'Developed AI coding assistant for C2D platform reducing deployment time by 65%',
      'Built Django backend integrating Microsoft Dynamics 365 tracking 2K+ student records',
    ],
  },
  {
    role: 'AI Developer',
    company: 'Fiverr, Upwork, Guru',
    location: 'Remote',
    period: 'Nov 2019 – Oct 2024',
    type: 'Freelance',
    color: '#f59e0b',
    highlights: [
      'Delivered 75+ AI/ML projects maintaining 4.9/5 average rating with 100% on-time delivery',
      'Built healthcare chatbot automating 5K+ monthly patient inquiries',
      'Deployed recommendation engine for e-commerce client serving 50K+ users',
      'Implemented predictive maintenance system reducing industrial equipment downtime by 20%',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-heading',
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

      // Animate timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-line',
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="exp-heading mb-16">
          <p className="text-emerald-400 text-sm font-mono tracking-wider uppercase mb-3">
            {'// '}Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Where I&apos;ve <span className="text-gradient">Built.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            From freelance projects to enterprise AI solutions — a journey of building intelligent systems that make a real impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/50 to-violet-500/50 origin-top" />

          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-12 lg:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.15, type: 'spring' }}
                  className="absolute left-2.5 lg:left-6.5 top-6 w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: exp.color,
                    boxShadow: `0 0 12px ${exp.color}60`,
                  }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -3,
                    borderColor: `${exp.color}30`,
                    boxShadow: `0 8px 30px ${exp.color}10`,
                  }}
                  className="p-6 rounded-2xl bg-gray-900/50 border border-white/5 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">{exp.company}</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-500">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: `${exp.color}15`,
                          color: exp.color,
                          border: `1px solid ${exp.color}25`,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-gray-500 text-sm font-mono">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: exp.color }}
                        />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
