'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, FileText, Mail, Trophy, GraduationCap, Layers, ArrowRight, Terminal } from 'lucide-react';

const terminalLines = [
  { text: '$ python -m agent.supervisor --init', delay: 100 },
  { text: '[SYS] Initializing Regulatory Intelligence Agent... OK (OSFI E-23 check)', delay: 600 },
  { text: '[SYS] Initializing Model Risk Agent... OK (Fairness & Bias Audit)', delay: 1100 },
  { text: '[SYS] Initializing Reliability Evaluation Agent... OK (PSI & Drift Audit)', delay: 1600 },
  { text: '[SYS] Spawning Local Sandbox Execution Engine...', delay: 2100 },
  { text: '[SANDBOX] Running test payload: Fraud Model v4.1 (AUC: 0.969)', delay: 2600 },
  { text: '[WARNING] PSI (Population Stability Index) = 0.25 > threshold (0.2)', delay: 3100 },
  { text: '[WARNING] AIR (Adverse Impact Ratio) = 0.59 < regulatory minimum (0.8)', delay: 3600 },
  { text: '[CRITICAL] Model risk thresholds breached! Action: BLOCKED', delay: 4100 },
  { text: '[SYS] Supervisor status: ACTIVE | Telemetry logging to BigQuery...', delay: 4600 },
];

const Hero = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll terminal to bottom
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    // Dynamic log feeding
    const timers = terminalLines.map((line) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, line.text]);
      }, line.delay);
    });

    // Reset loop after completion
    const resetTimer = setTimeout(() => {
      setLogs([]);
      // Restart timers
      const nestedTimers = terminalLines.map((line) => {
        return setTimeout(() => {
          setLogs((prev) => [...prev, line.text]);
        }, line.delay);
      });
      timers.push(...nestedTimers);
    }, 12000);

    return () => {
      clearInterval(cursorInterval);
      timers.forEach((t) => clearTimeout(t));
      clearTimeout(resetTimer);
    };
  }, []);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/60 rounded-full text-xs font-semibold text-emerald-400 mb-8 tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          ACTIVE: Seeking ML Engineer, AI Engineer &amp; Data Engineer Roles
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Pitch (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans">
              Christopher Crilly Pienaah
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-mono text-blue-400 font-semibold">
              AI/ML &amp; Data Engineer · Production Pipelines · Agentic Systems
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-400 max-w-2xl font-sans">
              I engineer production-grade ML pipelines, scalable data architectures, and multi-agent AI systems —
              from real-time financial data ingestion to document intelligence APIs and self-healing ETL infrastructure.
              Specialized in building systems that are <span className="font-semibold text-white">governed, highly observable, and OSFI E-23 compliant</span>.
            </p>

            {/* Micro-metrics metrics grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg border-t border-zinc-900 pt-6">
              <div>
                <span className="block text-2xl font-bold text-white font-mono">431M+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Telemetry Logs / Day</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono">95.4%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">PDF-to-SQL Extraction</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono">3×</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">NLP Pipeline Throughput</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-mono">OSFI E-23</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono">Model Risk Compliant</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-900/30"
              >
                Let&apos;s Build Something
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg font-semibold text-sm transition-all"
              >
                <FileText size={16} />
                Resume / CV
              </a>

              <div className="flex gap-2">
                <a
                  href="https://github.com/CrillyPienaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-blue-400 rounded-lg transition-all"
                  title="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/christopher-crilly-pienaah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-blue-400 rounded-lg transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:ccpienaah@gmail.com"
                  className="p-2.5 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-blue-400 rounded-lg transition-all"
                  title="Email Me"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Terminal Simulator (5 columns) */}
          <div className="lg:col-span-5">
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/80 font-mono text-xs">
              
              {/* Header Bar */}
              <div className="bg-zinc-950 px-4 py-3 flex items-center justify-between border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-zinc-500 text-[10px] tracking-wider uppercase flex items-center gap-1.5">
                  <Terminal size={12} className="text-blue-400" />
                  governance-supervisor.sh
                </div>
                <div className="w-4"></div>
              </div>

              {/* Terminal Logs Area */}
              <div className="p-4 h-64 overflow-y-auto space-y-2 bg-zinc-900/90 text-zinc-300">
                <div className="text-zinc-500">Last login: {new Date().toLocaleDateString()} on ttys001</div>
                
                {logs.map((log, index) => {
                  let colorClass = 'text-zinc-300';
                  if (log.startsWith('$')) colorClass = 'text-blue-400 font-bold';
                  else if (log.includes('[SYS]')) colorClass = 'text-zinc-400';
                  else if (log.includes('[WARNING]')) colorClass = 'text-yellow-400';
                  else if (log.includes('[CRITICAL]')) colorClass = 'text-red-400 font-semibold';
                  else if (log.includes('[SANDBOX]')) colorClass = 'text-emerald-400';

                  return (
                    <div key={index} className={`${colorClass} leading-relaxed whitespace-pre-wrap`}>
                      {log}
                    </div>
                  );
                })}

                <div className="inline-block text-blue-400" ref={terminalEndRef}>
                  <span>ccpienaah@workstation:~$</span>
                  <span className={`inline-block w-1.5 h-3 ml-1 bg-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Credibility Strip */}
        <div className="mt-16 pt-8 border-t border-zinc-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Education */}
            <div className="flex items-start gap-3.5 group">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400 group-hover:border-zinc-700 transition-colors">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 text-sm mb-0.5">
                  MPS in Analytics
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  Applied Machine Intelligence<br />
                  Northeastern University, Toronto (May 2026 Grad)
                </p>
              </div>
            </div>

            {/* Trophy / Kaggle */}
            <div className="flex items-start gap-3.5 group">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-yellow-500 group-hover:border-zinc-700 transition-colors">
                <Trophy size={20} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 text-sm mb-0.5">
                  Kaggle × Google AI Agents
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  6-agent LangGraph system competitor<br />
                  <a
                    href="https://kaggle.com/certification/badges/christophercrilly/105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Verified Badge ↗
                  </a>
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex items-start gap-3.5 group">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-purple-400 group-hover:border-zinc-700 transition-colors">
                <Layers size={20} />
              </div>
              <div>
                <h3 className="font-bold text-zinc-100 text-sm mb-0.5">
                  Deep Technical Depth
                </h3>
                <p className="text-xs text-zinc-400 leading-normal">
                  Real-time pipelines, document intelligence, multi-agent pipelines &amp; OSFI E-23 validation.
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
