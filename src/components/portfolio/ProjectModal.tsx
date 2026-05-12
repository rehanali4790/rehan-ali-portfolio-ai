'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { X, ExternalLink, Github } from 'lucide-react';

interface ProjectDetail {
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  image: string;
  tech: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  gradient: string;
  accent: string;
  challenges: string[];
  results: string[];
  link?: string;
}

const projectDetails: Record<string, ProjectDetail> = {
  ConvertoAI: {
    title: 'ConvertoAI',
    subtitle: 'Enterprise AI Agent Creation Platform',
    desc: 'Enabling businesses to deploy custom chatbots and automation workflows without code.',
    longDesc: 'ConvertoAI is a comprehensive enterprise platform that allows businesses to create, deploy, and manage custom AI agents without writing a single line of code. The platform features a multi-agent orchestration system that can handle complex workflows, integrate with external tools and APIs, and maintain context across conversations. Built with a robust RAG pipeline using vector embeddings, the system supports over 500 concurrent agents across diverse business domains, processing more than 100K conversations monthly with context-aware responses.',
    image: '/images/project-convertoai.png',
    tech: ['Python', 'React', 'LangChain', 'LLMs', 'Vector DBs', 'FastAPI', 'PostgreSQL'],
    tags: ['LLM', 'RAG', 'Multi-Agent', 'Enterprise'],
    metrics: [
      { label: 'Monthly Conversations', value: '100K+' },
      { label: 'Concurrent Agents', value: '500+' },
      { label: 'Response Accuracy', value: '92%' },
      { label: 'Uptime', value: '99.9%' },
    ],
    gradient: 'from-emerald-600/20 to-cyan-600/20',
    accent: '#10b981',
    challenges: [
      'Designing a no-code interface that could handle complex multi-agent orchestration workflows',
      'Building a RAG pipeline capable of supporting 500+ concurrent agents with low latency',
      'Ensuring context-aware responses across long conversation histories',
      'Creating a scalable architecture to handle 100K+ monthly conversations',
    ],
    results: [
      'Successfully deployed across multiple enterprise clients with diverse business needs',
      'Achieved 92% response accuracy through optimized RAG pipelines and fine-tuned models',
      'Reduced client customer service costs by an average of 40%',
      'Real-time analytics dashboard provides actionable insights on agent performance',
    ],
    link: 'https://convertoai.vercel.app',
  },
  CrimeRAG: {
    title: 'CrimeRAG',
    subtitle: 'AI Agentic Platform for Law Enforcement',
    desc: 'Automating criminal investigation workflows with multi-agent AI orchestration.',
    longDesc: 'CrimeRAG is a groundbreaking AI platform engineered specifically for law enforcement agencies. It uses multi-agent orchestration to process case files, witness statements, forensic data, and criminal records to identify hidden connections between cases. The system implements graph-based knowledge retrieval using Neo4j, linking criminal profiles, locations, and modus operandi across 50K+ records. By combining semantic search with automated evidence correlation, CrimeRAG has dramatically reduced investigation time and improved pattern recognition capabilities for law enforcement teams.',
    image: '/images/project-crimerag.png',
    tech: ['Python', 'LangChain', 'Multi-Agent Systems', 'Graph DBs', 'Neo4j', 'FastAPI'],
    tags: ['LLM', 'Multi-Agent', 'Graph AI', 'Government'],
    metrics: [
      { label: 'Investigation Time Reduction', value: '65%' },
      { label: 'Records Processed', value: '50K+' },
      { label: 'Pattern Recognition Accuracy', value: '89%' },
      { label: 'Cases Connected', value: '2K+' },
    ],
    gradient: 'from-red-600/20 to-orange-600/20',
    accent: '#ef4444',
    challenges: [
      'Processing unstructured data from diverse sources (case files, witness statements, forensic reports)',
      'Building a graph-based knowledge retrieval system linking criminal profiles and modus operandi',
      'Ensuring data privacy and security for sensitive law enforcement data',
      'Creating an intuitive interface for investigators with varying technical skills',
    ],
    results: [
      'Reduced investigation time by 65% through semantic search and automated evidence correlation',
      'Connected over 2K previously unrelated cases through pattern recognition',
      'Improved officer productivity by automating routine investigative tasks',
      'Deployed across multiple law enforcement agencies with positive feedback',
    ],
  },
  'HireFlow AI': {
    title: 'HireFlow AI',
    subtitle: 'AI-Powered Recruitment Platform',
    desc: 'Processing 10K+ interviews with voice AI and bias-free ML ranking.',
    longDesc: 'HireFlow AI revolutionizes the recruitment process with an end-to-end AI-powered platform. It features a sophisticated voice interview system with real-time transcription and dynamic question adaptation based on candidate responses. The platform uses bias-free ML ranking algorithms to ensure fair assessments across diverse candidate pools, processing over 10K interviews with a 95% candidate quality match rate. Built-in analytics provide hiring managers with skill gap analysis and candidate comparison metrics, reducing the entire hiring timeline by 87%.',
    image: '/images/project-hireflow.png',
    tech: ['Python', 'FastAPI', 'Voice AI', 'React', 'LangChain', 'PostgreSQL'],
    tags: ['Voice AI', 'LLM', 'ML', 'Enterprise'],
    metrics: [
      { label: 'Interviews Processed', value: '10K+' },
      { label: 'Quality Match Rate', value: '95%' },
      { label: 'Hiring Time Reduction', value: '87%' },
      { label: 'Bias Elimination', value: '99%' },
    ],
    gradient: 'from-violet-600/20 to-purple-600/20',
    accent: '#8b5cf6',
    challenges: [
      'Building a real-time voice interview system with accurate transcription and question adaptation',
      'Implementing truly bias-free ML ranking algorithms for fair candidate assessment',
      'Handling diverse accents and languages in voice interviews',
      'Creating comprehensive analytics dashboards for hiring managers',
    ],
    results: [
      'Achieved 87% reduction in total hiring time from initial screening to offer',
      '95% candidate quality match rate through AI-driven assessment',
      'Eliminated unconscious bias in initial screening phases',
      'Reduced HR operational costs by 75% across 8 departments',
    ],
    link: 'https://hireflow-chi.vercel.app',
  },
  ANPR: {
    title: 'ANPR System',
    subtitle: 'Automatic Number Plate Recognition for Government',
    desc: 'Tracking 200K+ vehicles monthly across 50+ checkpoints using YOLOv8.',
    longDesc: 'This Automatic Number Plate Recognition system was deployed for the Government of Sindh to enhance urban security and traffic management. Built on YOLOv8 computer vision models, the system uses edge computing for fast processing directly at traffic cameras and local servers. It achieves 94% license plate recognition accuracy even in challenging conditions like low light, varying angles, and high-speed vehicles. The system also performs vehicle color detection and brand classification, providing comprehensive surveillance capabilities that reduced manual surveillance efforts by 85%.',
    image: '/images/project-anpr.png',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'OCR', 'Edge Computing', 'TensorFlow'],
    tags: ['Computer Vision', 'YOLO', 'OCR', 'Government'],
    metrics: [
      { label: 'Vehicles Tracked Monthly', value: '200K+' },
      { label: 'Recognition Accuracy', value: '94%' },
      { label: 'Checkpoints Active', value: '50+' },
      { label: 'Manual Work Reduction', value: '85%' },
    ],
    gradient: 'from-cyan-600/20 to-blue-600/20',
    accent: '#06b6d4',
    challenges: [
      'Achieving reliable plate detection across varying lighting, weather, and vehicle speeds',
      'Implementing edge computing for real-time processing at 50+ distributed checkpoints',
      'Integrating with existing government surveillance infrastructure and databases',
      'Handling diverse plate formats and regional variations in license plate designs',
    ],
    results: [
      '94% license plate recognition accuracy in production deployment',
      'Tracking 200K+ vehicles monthly across 50+ checkpoints in real-time',
      'Reduced manual surveillance workload by 85% for law enforcement agencies',
      'Improved vehicle recovery rates and incident response times significantly',
    ],
  },
  JobBuddy: {
    title: 'JobBuddy',
    subtitle: 'AI Career Mentoring Platform',
    desc: 'Serving 5K+ users with resume optimization, job matching, and interview prep.',
    longDesc: 'JobBuddy is a full-stack AI career mentoring platform designed to transform the job search experience. It uses semantic NLP analysis for precise candidate-job matching, achieving a 45% improvement in match rates compared to traditional keyword-based approaches. The platform offers AI-powered resume optimization with ATS compatibility scoring, personalized interview preparation with mock interview simulations, and real-time job market analytics from 100K+ listings. Reinforcement learning algorithms create personalized learning paths that adapt to individual career goals and skill gaps.',
    image: '/images/project-jobuddy.png',
    tech: ['Python', 'React', 'LLMs', 'RAG', 'PostgreSQL', 'OpenAI API'],
    tags: ['LLM', 'NLP', 'Full-Stack', 'SaaS'],
    metrics: [
      { label: 'Active Users', value: '5K+' },
      { label: 'Better Job Matches', value: '45%' },
      { label: 'Job Listings Analyzed', value: '100K+' },
      { label: 'User Satisfaction', value: '4.8/5' },
    ],
    gradient: 'from-amber-600/20 to-yellow-600/20',
    accent: '#f59e0b',
    challenges: [
      'Building a semantic NLP matching engine that goes beyond keyword-based approaches',
      'Creating personalized learning paths using reinforcement learning for diverse career goals',
      'Integrating real-time job market APIs for salary insights and career recommendations',
      'Optimizing resume scoring algorithms for ATS compatibility across different systems',
    ],
    results: [
      '45% improvement in candidate-job match rates through semantic NLP analysis',
      'Serving 5K+ active users with personalized career mentoring',
      'Real-time salary insights and career recommendations from 100K+ job listings',
      'Personalized learning paths significantly improved user skill development outcomes',
    ],
    link: 'https://jobuddyai.vercel.app',
  },
  Traffic: {
    title: 'Traffic Optimization System',
    subtitle: 'Computer Vision for Smart Cities',
    desc: 'Reducing congestion by 25-30% through real-time video analysis and adaptive signals.',
    longDesc: 'This computer vision-based traffic optimization system analyzes live video feeds from traffic cameras to detect congestion patterns and dynamically adjust traffic signal timings. Using YOLO for real-time vehicle detection and tracking, the system classifies congestion levels based on vehicle density, flow rate, and movement patterns. A reinforcement learning module continuously optimizes signal timing based on historical and real-time traffic data. The system has been deployed across multiple cities, reducing traffic congestion by 25-30% and improving average commute times by 15-20%.',
    image: '/images/project-traffic.png',
    tech: ['Python', 'YOLO', 'OpenCV', 'TensorFlow', 'Edge AI', 'Reinforcement Learning'],
    tags: ['Computer Vision', 'YOLO', 'RL', 'Smart City'],
    metrics: [
      { label: 'Congestion Reduction', value: '25-30%' },
      { label: 'Travel Time Improvement', value: '15-20%' },
      { label: 'Cities Deployed', value: 'Multiple' },
      { label: 'Real-time Analysis', value: 'Yes' },
    ],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accent: '#14b8a6',
    challenges: [
      'Processing live video streams from multiple cameras with minimal latency',
      'Accurate congestion detection across varying weather and lighting conditions',
      'Integrating with existing traffic signal infrastructure without disrupting operations',
      'Scaling the system across cities with different road designs and traffic patterns',
    ],
    results: [
      'Reduced traffic congestion by 25-30% in the first six months of deployment',
      'Average commute time improvement of 15-20% for daily commuters',
      'Measurable decrease in carbon emissions from reduced vehicle idling',
      'Successfully scaled and adapted to multiple cities with unique traffic conditions',
    ],
  },
  NLP: {
    title: 'NLP Sentiment Engine',
    subtitle: 'Customer Sentiment Analysis & Demand Forecasting',
    desc: 'Analyzing customer feedback from social media with BERT/RoBERTa models.',
    longDesc: 'This custom NLP application analyzes customer feedback from multiple social media platforms and online sources to extract sentiment and predict product demand. It uses fine-tuned BERT and RoBERTa models for text classification, with specialized modules for sarcasm detection and emotion analysis. The demand forecasting component uses time-series models (ARIMA, XGBoost, LSTM) combined with sentiment-derived features to predict product demand with 15-20% better accuracy than traditional methods. Built on Apache Kafka and Spark for real-time streaming, the system handles large data volumes while providing actionable business insights.',
    image: '/images/project-nlp.png',
    tech: ['Python', 'BERT', 'RoBERTa', 'Spark', 'Kafka', 'LSTM', 'XGBoost'],
    tags: ['NLP', 'Deep Learning', 'Data Engineering'],
    metrics: [
      { label: 'Forecast Improvement', value: '15-20%' },
      { label: 'Data Sources', value: 'Multiple' },
      { label: 'Real-time Processing', value: 'Yes' },
      { label: 'Sarcasm Detection', value: 'Enabled' },
    ],
    gradient: 'from-pink-600/20 to-rose-600/20',
    accent: '#ec4899',
    challenges: [
      'Processing unstructured data from diverse social media sources with varying formats',
      'Detecting sarcasm and subtle emotions in noisy social media text',
      'Mapping sentiment signals to quantifiable demand forecasts',
      'Building scalable real-time streaming architecture for large data volumes',
    ],
    results: [
      '15-20% improvement in demand prediction accuracy over traditional methods',
      'Enabled proactive customer service through real-time sentiment monitoring',
      'Businesses gained competitive advantage by staying ahead of customer trends',
      'Modular architecture deployed across different industries and markets',
    ],
  },
  PropEdge: {
    title: 'PropEdge AI',
    subtitle: 'AI Trading Psychology Platform',
    desc: 'Serving 2K+ traders with personalized mental coaching and behavioral analysis.',
    longDesc: 'PropEdge AI is a unique trading psychology platform that combines AI-driven behavioral analysis with personalized mental coaching for retail traders. The system analyzes trading patterns to identify psychological biases like revenge trading, FOMO, and loss aversion through NLP sentiment analysis of trading journals. An AI trading mentor provides real-time feedback on decision-making processes and risk management strategies. The journaling system uses ML-powered insights to help traders recognize and reduce emotional trading decisions by 40%, leading to more disciplined and profitable trading behavior.',
    image: '/images/project-propedge.png',
    tech: ['Python', 'React', 'LLMs', 'Time-series Analysis', 'Trading APIs', 'NLP'],
    tags: ['LLM', 'NLP', 'FinTech', 'Full-Stack'],
    metrics: [
      { label: 'Active Traders', value: '2K+' },
      { label: 'Emotional Trade Reduction', value: '40%' },
      { label: 'Bias Types Detected', value: '15+' },
      { label: 'Journal Entries Analyzed', value: '50K+' },
    ],
    gradient: 'from-teal-600/20 to-green-600/20',
    accent: '#10b981',
    challenges: [
      'Building NLP models to detect subtle psychological biases from trading journal text',
      'Creating a real-time feedback system for trading decisions without being intrusive',
      'Integrating with trading platforms for seamless data flow and analysis',
      'Designing personalized coaching algorithms that adapt to individual trader profiles',
    ],
    results: [
      '40% reduction in emotional trading decisions through ML-powered journal insights',
      'Serving 2K+ active retail traders with personalized coaching',
      'AI mentor provides real-time feedback improving risk management strategies',
      'Users report significantly improved trading discipline and profitability',
    ],
    link: 'https://propedge-ai-rho.vercel.app',
  },
  Jarvis: {
    title: 'LOCAL JARVIS',
    subtitle: 'Offline AI Solution for Businesses',
    desc: 'Full LLM and Vision capabilities without external APIs — zero cost, 100% privacy.',
    longDesc: 'LOCAL JARVIS provides businesses with a powerful offline AI solution that delivers full LLM and Vision model capabilities without relying on external APIs or cloud services. Built on open-source AI technologies and customized using Python frameworks like Django, Flask, and Streamlit, it eliminates recurring API costs and internet dependency. The system processes visual data including images and videos for applications like document processing and security monitoring. With all data remaining within the company infrastructure, LOCAL JARVIS ensures complete data privacy and regulatory compliance, making it ideal for industries handling sensitive information.',
    image: '/images/project-jarvis.png',
    tech: ['Python', 'Django', 'Flask', 'Streamlit', 'Open-Source LLMs', 'Vision Models'],
    tags: ['LLM', 'Vision AI', 'Offline', 'Privacy'],
    metrics: [
      { label: 'API Cost Savings', value: '100%' },
      { label: 'Data Privacy', value: '100%' },
      { label: 'Internet Required', value: 'No' },
      { label: 'Customization', value: 'Full' },
    ],
    gradient: 'from-orange-600/20 to-amber-600/20',
    accent: '#f97316',
    challenges: [
      'Optimizing open-source LLMs to run efficiently on local hardware',
      'Creating a flexible framework compatible with Django, Flask, and Streamlit',
      'Integrating vision models for image and video processing without cloud services',
      'Ensuring competitive performance compared to cloud-based AI solutions',
    ],
    results: [
      'Eliminated all recurring API costs for businesses with high AI usage',
      '100% data privacy — all processing remains within company infrastructure',
      'Successfully deployed across healthcare, finance, and government sectors',
      'Comparable performance to cloud-based solutions for most use cases',
    ],
  },
};

interface ProjectModalProps {
  projectKey: string;
  onClose: () => void;
}

export default function ProjectModal({ projectKey, onClose }: ProjectModalProps) {
  const project = projectDetails[projectKey];
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.modal-content',
        { y: 40, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }, modalRef);
    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-start justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto my-4 sm:my-8 mx-4"
      >
        <div className="modal-content rounded-2xl bg-gray-950 border border-white/10 overflow-hidden">
          {/* Close Button */}
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex items-center gap-2 mb-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${project.accent}20`,
                      color: project.accent,
                      border: `1px solid ${project.accent}30`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm">{project.subtitle}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ color: project.accent }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                Overview
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.longDesc}
              </p>
            </div>

            {/* Challenges & Results */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.accent }}
                  />
                  Results
                </h3>
                <ul className="space-y-2">
                  {project.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: '#10b981' }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg text-gray-300"
                    style={{
                      backgroundColor: `${project.accent}10`,
                      border: `1px solid ${project.accent}20`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    backgroundColor: project.accent,
                    color: '#030712',
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              <a
                href="https://github.com/rehanali4790"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export { projectDetails };
export type { ProjectDetail };
