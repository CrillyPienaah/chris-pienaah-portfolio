import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { Github, Linkedin, Mail, FileText, Cpu, Database, Layers, Cloud } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 border-b border-gray-800">
        <div className="max-w-4xl">
          {/* Badge Row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide uppercase border border-blue-500/20">
              <Cpu size={14} /> Multi-Agent AI & LLMs
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-wide uppercase border border-purple-500/20">
              <Layers size={14} /> Full-Stack Systems
            </span>
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wide uppercase border border-emerald-500/20">
              <Database size={14} /> Data Warehousing
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-6 tracking-tight">
            Christopher Crilly Pienaah
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            AI/ML Product Engineer · Full-Stack Builder · Data Engineer
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            I design and ship intelligent systems — from <strong>multi-agent LLM workflows</strong> to scalable <strong>data platforms</strong> and production-grade <strong>full-stack apps</strong>.
          </p>

          <p className="text-sm font-mono text-gray-500 mb-10">
            4+ production MVPs · Multi-agent AI · Recommender systems · ETL & Star Schemas · Real-world impact
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:ccpienaah@gmail.com" 
              className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              <Mail size={18} /> Hire Me
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-8 py-3 bg-gray-900 border border-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              <FileText size={18} /> CV
            </a>
            <div className="flex gap-2 ml-2">
                <a href="https://github.com/CrillyPienaah" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 border border-gray-700 rounded-full hover:text-blue-400 transition-colors">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/christopher-crilly-pienaah" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 border border-gray-700 rounded-full hover:text-blue-400 transition-colors">
                    <Linkedin size={20} />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 POSITIONING STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center border-b border-gray-800">
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          I build AI systems that move from <strong className="text-white">idea → architecture → product → impact</strong>—especially for high-stakes and underserved domains where trust isn't optional.
        </p>
      </section>

      {/* 2. FLAGSHIP SPOTLIGHT - SME GROWTH CO-PILOT */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm font-bold tracking-wider text-violet-400 uppercase">⭐ Flagship Project</span>
          <span className="px-3 py-1 bg-violet-500/20 border border-violet-500/40 rounded-full text-xs text-violet-300">
            Google Kaggle AI Agents · 11,494 Participants
          </span>
        </div>
        
        <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border-2 border-violet-500/50 rounded-2xl overflow-hidden hover:border-violet-500 transition-all">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-80 md:h-auto">
              <img 
                src="/projects/sme-growth-landing.png"
                alt="SME Growth Co-Pilot - Multi-agent AI for business growth"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right: Content */}
            <div className="p-8 flex flex-col justify-center bg-black/30">
              <h2 className="text-3xl font-bold mb-3">SME Growth Co-Pilot</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Multi-agent AI system that analyzes business KPIs and generates growth strategies in 60 seconds—replacing $10K/month consultants.
              </p>
              
              {/* Bold Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-violet-400">100%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-emerald-400">1ms</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">$135K</div>
                  <div className="text-xs text-gray-400">Revenue Identified</div>
                </div>
                <div className="bg-black/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">5</div>
                  <div className="text-xs text-gray-400">Specialized Agents</div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Link 
                  href="/projects/sme-growth-copilot"
                  className="px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-600 transition-colors"
                >
                  View Case Study
                </Link>
                <a 
                  href="https://github.com/CrillyPienaah/sme-growth-copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MORE PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
            <div>
                <h3 className="text-3xl font-bold mb-2">More Projects</h3>
                <p className="text-gray-400">Additional production systems and ML case studies.</p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => p.featured && p.id !== 'sme-growth-copilot').map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 3.5 TESTIMONIALS SECTION */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
          
          <div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 rounded-2xl p-8 mb-8">
            <div className="flex gap-1 mb-6 justify-center items-center">
              {[1,2,3,4,5].map((star) => (
                <svg key={star} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 text-2xl font-bold text-yellow-400">5.0</span>
            </div>

            <blockquote className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
              "Great job! This individual and their entire team gave this project their very best effort! Much appreciative of the opportunity to work with him. <span className="text-yellow-400">Personally he really drove this project forward and served in a great 'quarterback role'</span> for this project. We continue to collaborate!"
            </blockquote>

            <div className="text-center">
              <div className="font-bold text-white text-lg">Derrick Raphael</div>
              <div className="text-gray-400">Chief Digital Officer</div>
              <div className="text-gray-500 text-sm mt-2">ICON Leadership Institute</div>
              <div className="text-gray-600 text-xs mt-1">AI Guided Web App Development (DTTP) • September 2025</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-yellow-400 font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-400">Communication</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-yellow-400 font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-400">Professionalism</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-yellow-400 font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-400">Creativity</div>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-yellow-400 font-bold mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-sm text-gray-400">Critical Thinking</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS SNAPSHOT */}
      <section className="bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-24">
            <h3 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* AI / ML */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Cpu size={20} />
                        <h4 className="font-bold">AI / ML</h4>
                    </div>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>LLMs & Transformers</li>
                        <li>LangChain & Agents</li>
                        <li>Prompt Engineering</li>
                        <li>scikit-learn & XGBoost</li>
                        <li>NLP Pipelines</li>
                    </ul>
                </div>

                {/* Full Stack */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <Layers size={20} />
                        <h4 className="font-bold">Full-Stack</h4>
                    </div>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Next.js (React)</li>
                        <li>FastAPI (Python)</li>
                        <li>NestJS (Node)</li>
                        <li>REST & GraphQL APIs</li>
                        <li>Auth & JWT</li>
                    </ul>
                </div>

                {/* Data Engineering */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                        <Database size={20} />
                        <h4 className="font-bold">Data Eng</h4>
                    </div>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>SQL (Advanced)</li>
                        <li>PostgreSQL & MySQL</li>
                        <li>ETL Pipelines</li>
                        <li>Star Schemas (Kimball)</li>
                        <li>Normalization (3NF)</li>
                    </ul>
                </div>

                {/* Cloud & Tools */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-orange-400 mb-2">
                        <Cloud size={20} />
                        <h4 className="font-bold">Cloud & Tools</h4>
                    </div>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>AWS & Azure</li>
                        <li>Docker & Containers</li>
                        <li>Git & CI/CD</li>
                        <li>Power BI & Tableau</li>
                        <li>Vercel Deployment</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to build something intelligent?</h2>
        <p className="text-xl text-gray-400 mb-8">
            I am currently open to new opportunities in AI Product Engineering and Full-Stack Development.
        </p>
        <a 
          href="mailto:ccpienaah@gmail.com" 
          className="inline-block px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-blue-400 hover:text-white transition-all shadow-lg shadow-white/10"
        >
          Let's Talk
        </a>
      </section>
      
    </main>
  );
}