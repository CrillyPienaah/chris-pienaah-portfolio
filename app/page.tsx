import React from 'react';
import { Github, Linkedin, ExternalLink, Mail, Terminal, Shield } from 'lucide-react';
import ControlTowerDashboard from '@/components/ControlTowerDashboard';
import ProjectMetricsGrid from '@/components/ProjectMetricsGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-blue-500/20">
      
      {/* 1. HERO SECTION */}
      <main className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative overflow-hidden border-b border-zinc-900">
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="max-w-3xl w-full relative z-10 space-y-8 text-center md:text-left">
          
          {/* Terminal Header Decoration */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-850 rounded-lg text-xs font-mono text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>system_status: online</span>
          </div>

          {/* Hero Copy */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-sans">
              Christopher Crilly Pienaah
            </h1>
            
            <h2 className="text-xl md:text-3xl font-semibold font-mono text-blue-400">
              Applied ML &amp; Agentic AI Engineer
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
              Engineering robust multi-agent systems, scalable machine learning pipelines, and secure model governance architectures. Specialized in LangGraph workflows, real-time data ingestion, and OSFI E-23 compliance.
            </p>
          </div>

          {/* Tech Stack Highlights */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Python', 'LangGraph', 'LLMs', 'MLOps', 'Docker', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="text-xs font-mono bg-zinc-900/60 border border-zinc-800 px-3 py-1 rounded-md text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          {/* Professional Action Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4 border-t border-zinc-900">
            {/* Live Vercel App Link */}
            <a 
              href="https://chris-pienaah-portfolio.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-all shadow-md shadow-blue-900/30"
            >
              <span>Live Showcase</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* GitHub Link */}
            <a 
              href="https://github.com/CrillyPienaah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg text-sm font-semibold transition-all font-mono"
            >
              <Github className="w-4 h-4" />
              <span>gitHub</span>
            </a>

            {/* LinkedIn Link */}
            <a 
              href="https://linkedin.com/in/christopher-crilly-pienaah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg text-sm font-semibold transition-all font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>linkedIn</span>
            </a>

            {/* Contact Email */}
            <a 
              href="mailto:ccpienaah@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg text-sm font-semibold transition-all font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>email</span>
            </a>
          </div>

          {/* Governance / Verification Badge */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500 text-xs font-mono pt-2">
            <Shield className="w-3.5 h-3.5 text-zinc-650" />
            <span>Verified: 5-Day AI Agents Intensive with Google</span>
          </div>

        </div>
      </main>

      {/* 2. GOVERNANCE CONTROL TOWER DASHBOARD */}
      <ControlTowerDashboard />

      {/* 3. VERIFIABLE SYSTEMS & PROJECTS GRID */}
      <ProjectMetricsGrid />

      {/* 4. TESTIMONIALS SECTION */}
      <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 font-sans">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">Client Feedback</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">What People Say</h2>
          </div>

          <div className="bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl rounded-full"></div>
            
            {/* Rating header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-4">
              <div className="flex items-center gap-1.5 text-yellow-500 font-mono text-sm font-bold">
                <span>5.0</span>
                <span className="tracking-widest">⭐⭐⭐⭐⭐</span>
              </div>
              <div className="text-zinc-550 text-xs font-mono">
                <span>AI Guided Web App Development (DTTP) &bull; September 2025</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-zinc-300 text-sm md:text-base leading-relaxed italic">
              &ldquo;Great job! This individual and their entire team gave this project their very best effort! Much appreciative of the opportunity to work with him. Personally he really drove this project forward and served in a great 'quarterback role' for this project. We continue to collaborate!&rdquo;
            </blockquote>

            {/* Author details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900">
              <div>
                <cite className="not-italic font-bold text-white block text-sm">Derrick Raphael</cite>
                <span className="text-xs text-zinc-500 block mt-0.5">Chief Digital Officer, ICON Leadership Institute</span>
              </div>
              
              {/* Star ratings grid */}
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                {['Communication', 'Professionalism', 'Creativity'].map((metric) => (
                  <span key={metric} className="inline-block bg-zinc-950 border border-zinc-900 px-2.5 py-1 rounded text-zinc-400">
                    {metric}: <span className="text-yellow-500 font-bold font-sans">5/5 &starf;</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-12 border-t border-zinc-900 bg-zinc-950 text-center font-mono text-[11px] text-zinc-550">
        <div className="max-w-6xl mx-auto px-6">
          <p>
            Feedback from professionals in model risk, compliance, audit, AI governance, and financial services is always welcome.
          </p>
        </div>
      </footer>

    </div>
  );
}