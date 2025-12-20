import React from 'react';
import { Github, Linkedin, FileText, Mail, Trophy, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

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
          Available for full-time opportunities · May 2026 grad
        </div>

        {/* Main Content */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Christopher Crilly Pienaah
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300">
            AI/ML Product Engineer · Full-Stack Builder · Data Engineer
          </h2>
          
          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
            I build intelligent systems for <span className="font-semibold text-slate-900 dark:text-slate-100">underserved markets and high-impact domains</span>—from 
            diaspora real estate platforms to clinical intelligence tools. Multi-agent LLM workflows, scalable data infrastructure, and production-grade full-stack applications.
          </p>
          
          {/* Proof Line - More Outcome Focused */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              4+ production MVPs shipped
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Multi-agent AI systems
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Enterprise data pipelines
            </span>
            <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
              Real-world measurable impact
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-6">
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30"
              aria-label="Contact me for opportunities"
            >
              Let's Build Something
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
                href="https://github.com/crillypienaah" 
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="View GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20}/>
              </a>
              <a 
                href="https://linkedin.com/in/christopher-crilly-pienaah" 
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="View LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20}/>
              </a>
              <a 
                href="mailto:ccpienaah@gmail.com" 
                className="p-3 border-2 border-slate-300 dark:border-slate-700 rounded-lg hover:text-blue-600 hover:border-blue-600 dark:hover:border-blue-600 transition-all"
                aria-label="Send email"
              >
                <Mail size={20}/>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Credibility Strip */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950/50 transition-colors">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  M.S. Analytics (3.96 GPA)
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Applied Machine Intelligence<br/>
                  Northeastern University
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-950/50 transition-colors">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Award-Winning Builder
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Top-4 hackathon finish for rapid AI prototyping
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 group sm:col-span-2 lg:col-span-1">
              <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-100 dark:group-hover:bg-purple-950/50 transition-colors">
                <Rocket size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                  Entrepreneurial Experience
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Built platforms serving healthcare, real estate & SME sectors
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