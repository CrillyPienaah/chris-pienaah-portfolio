import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Briefcase, GraduationCap, Heart, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        {/* Header */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Building Intelligent Systems for Underserved Markets
          </h1>
          <p className="text-2xl text-gray-400 leading-relaxed">
            I'm not your typical AI engineer. My path to building multi-agent systems and production-grade platforms 
            started in Ghana, running my own business and learning what it means to build for markets where trust is 
            scarce and stakes are high.
          </p>
        </section>

        {/* The Journey */}
        <section className="space-y-8 text-gray-300 leading-loose mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                🌍
              </span>
              The Journey
            </h2>
            <p className="mb-4">
              Before writing code that processes millions of pharmacy claims or architecting multi-agent clinical intelligence 
              systems, I spent <strong className="text-white">six years in Ghana</strong> as founder of CHRISLINE Prints & Advertising. 
              I learned firsthand how technology can transform local markets—but only when it's built with deep cultural understanding 
              and real trust architectures.
            </p>
            <p className="mb-4">
              That experience taught me something most engineers never learn in a classroom: <strong className="text-white">the best 
              algorithms are useless if people don't trust them</strong>. Trust isn't a feature you add at the end—it's the foundation 
              you build on from day one.
            </p>
            <p>
              After earning a Master's in Entrepreneurship, I pivoted into <strong className="text-white">Tech Project Management</strong> 
              for 4+ years, then pursued my M.S. in Analytics at Northeastern University (3.96 GPA). This unconventional path gave me 
              something rare: I understand what it takes to launch a product, manage stakeholders, AND build the technical systems that 
              make it work.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6 bg-blue-500/5 py-4 rounded-r-lg">
            <p className="text-gray-300 italic">
              "My advantage isn't just technical depth—it's knowing how to bridge the gap between complex AI systems and 
              human-centered product strategy. I've sat on both sides of the table."
            </p>
          </div>
        </section>

        {/* What I Build */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              🛠️
            </span>
            What I Build
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Multi-Agent AI Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                Building autonomous agents that can reason, plan, and execute tasks. LuminaMed AI orchestrates specialized 
                agents for medical triage and patient education—reducing radiologist workload by 40%.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-emerald-400">Trust-First Platforms</h3>
              <p className="text-gray-400 leading-relaxed">
                Daavi uses PostGIS geolocation and multi-tier verification to solve the trust deficit in African real estate. 
                95% fraud filtering rate because trust isn't optional—it's the product.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-violet-400">AI-Powered SaaS</h3>
              <p className="text-gray-400 leading-relaxed">
                Hyperlocal Ad Optimizer turns 4 hours of campaign setup into 15 minutes using GPT-4. Built for SMEs who 
                can't afford $10K/month agencies but deserve professional-grade marketing tools.
              </p>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Data Engineering Pipelines</h3>
              <p className="text-gray-400 leading-relaxed">
                Designed star schemas and ETL pipelines that process 5M+ pharmacy claims monthly. Clean data architecture 
                matters because bad data breaks good AI.
              </p>
            </div>
          </div>
        </section>

        {/* Why This Work Matters - The Heart Section */}
        <section className="mb-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="text-red-400" size={32} />
            Why This Work Matters
          </h2>
          
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              In January 2024, I lost my mother, <strong className="text-white">Mrs. Felicia Pienaah</strong>. In our 
              language (Ewe), we called her <strong className="text-white">"Daavi"</strong>—which means "mum."
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              When I built a real estate platform to restore trust for the African diaspora, there was only one name it 
              could have: <strong className="text-blue-400">Daavi</strong>. Because that's what the platform represents—
              goodness, trust, and the legacy of someone who always believed in building things that help people.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              Every system I build is guided by a simple question she would have asked: 
              <em className="text-white block mt-3 ml-6 border-l-4 border-blue-500 pl-6 py-2">
                "Who does this help, and how does it make their life better?"
              </em>
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              That's why I focus on <strong className="text-white">underserved markets and high-impact domains</strong>—
              diaspora real estate, clinical intelligence for overwhelmed radiologists, growth tools for cash-strapped SMEs. 
              These aren't just portfolio projects. They're solutions to real problems for real people who deserve better technology.
            </p>
          </div>
        </section>

        {/* Current Focus & Recognition */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">Current Role & Education</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Briefcase className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI/ML Product Strategist</h3>
                <p className="text-gray-400 mb-2">ICON Leadership Institute</p>
                <p className="text-sm text-gray-500">
                  Empowering BIPOC youth to access competitive tech careers at Goldman Sachs, RBC, TD, Manulife, 
                  McKinsey & Company, and more.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-emerald-500/10 rounded-lg">
                <GraduationCap className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Master's in Analytics (3.96 GPA)</h3>
                <p className="text-gray-400 mb-2">Northeastern University | Applied Machine Intelligence Track</p>
                <p className="text-sm text-gray-500">Graduating May 2026</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-violet-500/10 rounded-lg">
                <Award className="text-violet-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hackathon Success</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">→</span>
                    <span>Top 4 of 25+ teams - Co.Lab DTTP Hackathon (Final Pitch Selection)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400 mt-0.5">→</span>
                    <span>Selected as Peer Leader - AI-Guided Web Development Program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-amber-400" size={32} />
            Certifications & Continuous Learning
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Latest - Dec 2025 */}
            <div className="border border-amber-500/50 rounded-xl p-6 hover:border-amber-500 transition-colors bg-gradient-to-br from-amber-500/5 to-orange-500/5 relative">
              <div className="absolute top-4 right-4">
                <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full font-bold">Latest</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-white">5-Day AI Agents Intensive</div>
                  <div className="text-sm text-gray-400">Kaggle + Google Cloud</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Advanced course on multi-agent systems, LangGraph, function calling, and agentic workflows with Google Gemini.
              </p>
              <div className="text-xs text-amber-400 font-semibold">December 18, 2025</div>
            </div>

            {/* Aug 2025 */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="font-bold text-white">Applied AI & No-Code Product Dev</div>
                  <div className="text-sm text-gray-400">DTTP Program</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Excelled in program hackathon. Built production MVPs with Co.Lab, WIL, Riipen, and Atila partnerships.
              </p>
              <div className="text-xs text-gray-500">August 8, 2025</div>
            </div>

            {/* July 2025 */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">☁️</span>
                </div>
                <div>
                  <div className="font-bold text-white">Introducing Generative AI with AWS</div>
                  <div className="text-sm text-gray-400">Udacity</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Responsible AI development, bias mitigation, ethical AI frameworks, and AWS AI/ML services (SageMaker, Bedrock).
              </p>
              <div className="text-xs text-gray-500">July 13, 2025</div>
            </div>

            {/* 2024 - Co.Lab */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <div className="font-bold text-white">AI-Guided Web Development</div>
                  <div className="text-sm text-gray-400">Co.Lab (Peer Leader)</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Selected as Peer Leader. Built full-stack AI applications with FastAPI, React, and OpenAI integration.
              </p>
              <div className="text-xs text-gray-500">2024</div>
            </div>

            {/* 2024 - AWS */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-white">AWS Machine Learning Foundations</div>
                  <div className="text-sm text-gray-400">Amazon Web Services</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Supervised learning, model evaluation, Amazon SageMaker, Polly, Rekognition, and cloud ML deployment.
              </p>
              <div className="text-xs text-gray-500">2024</div>
            </div>

            {/* 2024 - Google */}
            <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <div className="font-bold text-white">Google Data Analytics Professional</div>
                  <div className="text-sm text-gray-400">Google</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                SQL, R/Python programming, data visualization, statistical analysis, and business intelligence fundamentals.
              </p>
              <div className="text-xs text-gray-500">2024</div>
            </div>
          </div>

          {/* Learning Path Note */}
          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-blue-400">Learning Trajectory:</strong> From data analytics foundations → Cloud ML infrastructure → 
              Full-stack AI development → Advanced multi-agent systems. Each certification strategically built toward production-grade AI/ML engineering expertise.
            </p>
          </div>
        </section>

        {/* Beyond the Code */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6">Beyond the Code</h2>
          <div className="space-y-4 text-gray-300 leading-loose">
            <p>
              When I'm not architecting systems, I'm deeply engaged in <strong className="text-white">PropTech for emerging 
              markets</strong> and <strong className="text-white">HealthTech innovation</strong>. I'm driven by the challenge 
              of building "trust architectures"—systems that use data and verification to create transparency in high-stakes industries.
            </p>
            <p>
              I also believe in <strong className="text-white">building in public</strong> and giving back. As a Peer Leader at 
              Co.Lab and Product Strategist at ICON, I mentor aspiring developers and help BIPOC youth access careers in tech 
              at companies like Goldman Sachs, RBC, McKinsey, and Manulife.
            </p>
            <p>
              My approach to AI is simple: <strong className="text-white">technology should expand access, not gatekeep it</strong>. 
              Whether it's helping patients understand their radiology reports or helping diaspora investors buy property safely, 
              I build systems that democratize opportunities previously reserved for those with resources.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="mb-20 border-t border-gray-800 pt-12">
          <h2 className="text-3xl font-bold text-white mb-6">My Product Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold mb-2">Impact Over Innovation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The best technology is invisible. Success is measured by lives improved, not features shipped.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="text-lg font-bold mb-2">Trust as Infrastructure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In emerging markets, trust isn't a feature—it's the foundation. Build verification systems first, polish later.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Ship, Learn, Iterate</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I believe in building in public. Deploy fast, gather feedback, and let users shape the roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Currently Seeking */}
        <section className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Currently Seeking Opportunities</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Full-Time Roles (May 2026)</h3>
              <p className="text-gray-300 mb-3">
                Actively seeking positions in <strong className="text-white">AI/ML Engineering</strong> and 
                <strong className="text-white"> Product Strategy</strong> at financial institutions, HealthTech companies, 
                and tech-forward organizations.
              </p>
              <p className="text-sm text-gray-400">
                Target companies: RBC, Scotiabank, TD, Manulife, FinTech startups, Healthcare AI companies
              </p>
            </div>

        

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">PhD Programs (Fall 2026)</h3>
              <p className="text-gray-300">
                Exploring doctoral opportunities focused on <strong className="text-white">verifiable multi-modal medical AI</strong> 
                and automated radiology report generation with emphasis on reducing hallucinations and improving clinical trust.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a 
              href="mailto:ccpienaah@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Download Resume
            </a>
            <a 
              href="https://linkedin.com/in/christopher-crilly-pienaah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <ExternalLink size={18} />
              LinkedIn Profile
            </a>
          </div>
        </section>

        {/* In Loving Memory */}
        <section className="border-t border-gray-800 pt-12 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-500 text-sm mb-4 italic">In Loving Memory</p>
            <p className="text-gray-400 text-lg leading-relaxed">
              <strong className="text-white">Mrs. Felicia Pienaah</strong>
            </p>
            <p className="text-gray-500 text-sm mt-2">(1960 - 2024)</p>
            <p className="text-gray-500 mt-4 italic">
              "Daavi" — Your legacy of strength and encouragement lives in everything I build.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}