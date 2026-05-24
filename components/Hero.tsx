'use client';

import React from 'react';
import { Github, Linkedin, FileText, Mail, Trophy, GraduationCap, Layers, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for ML Engineer, AI Engineer &amp; Data Engineer roles · May 2026 grad
        </div>

        {/* Main Content */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Christopher Crilly Pienaah
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300">
            AI/ML &amp; Data Engineer · Production Pipelines · Agentic Systems · Financial Data
          </h2>

          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
            I engineer production-grade ML pipelines, scalable data architectures, and multi-agent AI systems.
            From real-time financial data ingestion to document intelligence APIs and self-healing ETL infrastructure —
            building systems that are <span className="font-semibold text-slate-900 dark:text-slate-100">observable, governed, and reliable</span> at enterprise scale.
          </p>

          {/* Proof Line */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Self-Healing Pipelines · 431M+ records
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              PDF-to-SQL · 95.4% accuracy · $0.0005/doc
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              NLP Pipelines · 3× throughput scaled
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              OSFI E-23 &amp; SR 11-7 Compliant
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30"
              aria-label="Contact me for opportunities"
            >
              Let&apos;s Build Something
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-600 transition-all"
              aria-label="Download resume"
            >
              <FileText size={18} />
              Resume
            </a>
            <div className="flex gap-3">
              <a
                href="https://github.com/CrillyPienaah"
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="View GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/christopher-crilly-pienaah"
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="View LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ccpienaah@gmail.com"
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="Send email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Credibility Strip */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Education */}
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  MPS in Analytics
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Applied Machine Intelligence<br />
                  Northeastern University, Toronto<br />
                  <span className="text-slate-500 dark:text-slate-500">Graduated May 2026</span>
                </p>
              </div>
            </div>

            {/* Kaggle - accurate */}
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-950/50 transition-colors">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Kaggle × Google AI Agents Intensive
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Built and deployed a production 6-agent LangGraph system.<br />
                  <a
                    href="https://kaggle.com/certification/badges/christophercrilly/105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                  >
                    Verified badge ↗
                  </a>
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-start gap-4 group sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-950/50 transition-colors">
                <Layers size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  10+ Years Engineering Experience
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Production ML systems · Real-time financial data ·
                  Document intelligence · Multi-agent orchestration ·
                  Enterprise data governance
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
