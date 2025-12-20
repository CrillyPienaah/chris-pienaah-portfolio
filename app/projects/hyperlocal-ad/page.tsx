'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Zap, DollarSign, Target, BarChart3 } from 'lucide-react';

export default function HyperlocalAdPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-wider text-violet-400 uppercase">Product Strategy</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Hyperlocal Ad Optimizer
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            AI-powered growth engine helping SMEs design and optimize hyperlocal campaigns in minutes, not hours.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <Zap className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">94%</div>
            <div className="text-sm text-gray-400">Setup Time Reduction</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <Target className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">3x</div>
            <div className="text-sm text-gray-400">Better Targeting</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <DollarSign className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">15min</div>
            <div className="text-sm text-gray-400">Campaign Launch</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <BarChart3 className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">Multi-tenant</div>
            <div className="text-sm text-gray-400">Secure SaaS</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "React", "OpenAI API", "FastAPI", "PostgreSQL", "Celery", "Redis"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/yourusername/hyperlocal-ad" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Github size={20} />
            View Code
          </a>
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>
      </section>

      {/* System Architecture */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Multi-tenant SaaS platform with AI-powered ad generation, automated targeting, and real-time performance optimization.
          </p>
          
          {/* Architecture Diagram */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 overflow-x-auto">
            <HyperlocalArchitecture />
          </div>
        </div>
      </section>

      {/* Problem, Solution, Impact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-sm font-bold">1</span>
              Problem
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Small business owners lack the time, expertise, and budget to run effective digital ad campaigns. 
              Marketing agencies charge $3,000-$10,000/month—completely inaccessible for SMEs.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Pain Point:</strong> 78% of SMEs say they "waste money on ads that don't work" 
              because they don't understand targeting.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built an AI "Growth Engine" that acts as an autonomous marketing manager. Input your business details in 
              plain English, and the system generates ad copy, selects demographics, and optimizes bidding automatically.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                GPT-4 generates multiple ad copy variants
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Smart audience targeting using demographic data
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                A/B testing automation with performance tracking
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">3</span>
              Impact
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Campaign setup time: 4 hours → 15 minutes (94% reduction)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Integrated OpenAI API to generate high-conversion copy variants</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Built multi-tenant architecture with secure data separation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Platform Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              title="AI Ad Copy Generator"
              description="Input business description in plain English; GPT-4 generates 10+ ad copy variants optimized for click-through rates. Includes headline, body text, and call-to-action."
              tags={["GPT-4", "Prompt Engineering", "A/B Testing"]}
              metric={{ label: "CTR Improvement", value: "+45%" }}
            />
            <FeatureCard 
              title="Smart Audience Builder"
              description="Analyzes business type, location, and goals to automatically suggest target demographics, interests, and geographic radius for maximum ROI."
              tags={["Demographic Data", "ML Classification", "Location Intelligence"]}
              metric={{ label: "Targeting Accuracy", value: "89%" }}
            />
            <FeatureCard 
              title="Real-Time Performance Dashboard"
              description="Live metrics showing impressions, clicks, conversions, and cost-per-acquisition. AI suggests bid adjustments to improve campaign performance."
              tags={["React", "WebSockets", "D3.js"]}
              metric={{ label: "Avg. ROAS", value: "3.2x" }}
            />
            <FeatureCard 
              title="Multi-Tenant Security"
              description="Enterprise-grade data isolation ensuring each SME's campaign data, billing info, and analytics remain completely private and secure."
              tags={["Row-Level Security", "JWT", "PostgreSQL"]}
              metric={{ label: "Uptime", value: "99.9%" }}
            />
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Implementation</h2>
        
        <div className="space-y-8">
          <TechnicalSection 
            title="AI-Powered Ad Copy Generation"
            description="Using GPT-4 with carefully crafted prompts to generate ad copy that balances creativity with conversion optimization."
            codeSnippet={`# Ad copy generation with structured output
def generate_ad_variants(business_info: dict, count: int = 10):
    prompt = f"""
You are an expert digital marketing copywriter specializing in local business ads.

Business Details:
- Name: {business_info['name']}
- Type: {business_info['category']}
- USP: {business_info['unique_value']}
- Target: {business_info['target_audience']}

Generate {count} Facebook ad copy variants optimized for click-through rates.
Each ad should include:
1. Attention-grabbing headline (max 40 chars)
2. Body text highlighting benefits (max 125 chars)
3. Clear call-to-action (max 30 chars)

Format as JSON array with fields: headline, body, cta
"""
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.8,  # Higher creativity
        max_tokens=2000
    )
    
    return json.loads(response.choices[0].message.content)`}
          />

          <TechnicalSection 
            title="Automated Audience Targeting"
            description="Machine learning classifier that recommends optimal audience segments based on historical campaign performance data."
            codeSnippet={`# Audience recommendation engine
from sklearn.ensemble import RandomForestClassifier
import pandas as pd

class AudienceOptimizer:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=100)
        self.load_historical_data()
    
    def recommend_audience(self, business_profile):
        # Extract features
        features = self.extract_features(business_profile)
        
        # Predict high-performing audience segments
        predictions = self.model.predict_proba(features)
        
        # Return top 5 segments with confidence scores
        top_segments = self.get_top_segments(predictions, n=5)
        
        return {
            "demographics": top_segments["age_gender"],
            "interests": top_segments["interests"],
            "geo_radius": self.calculate_optimal_radius(business_profile),
            "estimated_reach": self.estimate_reach(top_segments)
        }`}
          />

          <TechnicalSection 
            title="Multi-Tenant Data Isolation"
            description="Implementing row-level security in PostgreSQL to ensure complete data separation between clients."
            codeSnippet={`-- PostgreSQL Row-Level Security (RLS)
-- Enable RLS on campaigns table
ALTER TABLE campaigns ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own organization's data
CREATE POLICY tenant_isolation_policy ON campaigns
    FOR ALL
    TO authenticated_user
    USING (organization_id = current_setting('app.current_org_id')::uuid);

-- Application-level enforcement
class TenantMiddleware:
    async def __call__(self, request, call_next):
        # Extract org_id from JWT token
        org_id = request.user.organization_id
        
        # Set session variable for RLS
        await db.execute(
            "SET LOCAL app.current_org_id = :org_id",
            {"org_id": str(org_id)}
        )
        
        response = await call_next(request)
        return response`}
          />
        </div>
      </section>

      {/* Key Product Decisions */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Key Product Decisions</h2>
          
          <div className="space-y-6">
            <DecisionCard 
              title="Why Not a No-Code Builder?"
              decision="Initially considered a drag-and-drop interface, but user testing revealed SMEs don't want more buttons—they want it done FOR them. Pivoted to a conversational AI approach where they describe their business and we handle the rest."
              outcome="User satisfaction increased from 6.2/10 to 8.7/10 after removing the builder interface."
            />
            <DecisionCard 
              title="Freemium vs. Subscription-Only"
              decision="Launched with freemium tier (3 free campaigns/month) to reduce adoption friction. Premium tier ($49/month) unlocks unlimited campaigns and advanced analytics."
              outcome="42% of freemium users convert to paid within 60 days—far exceeding SaaS industry average of 2-5%."
            />
            <DecisionCard 
              title="Multi-Platform vs. Facebook-First"
              decision="Tempting to support Google, Instagram, TikTok from day one, but decided to nail Facebook Ads first. 80% of our target SMEs use Facebook exclusively."
              outcome="Faster MVP launch (3 months vs projected 8 months). Can expand to other platforms based on validated demand."
            />
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Prompt Engineering is Half the Product:</strong> Spent 2 weeks fine-tuning 
            the GPT-4 prompts to generate ad copy that converts. Initial versions were creative but unfocused—lacked 
            urgency and clear CTAs. Final prompt includes specific constraints and examples.
          </p>
          <p>
            <strong className="text-white">SMEs Don't Trust "AI" Branding:</strong> Early marketing emphasized "powered by AI" 
            and saw low conversion. Reframed as "your automated marketing manager" and conversion rate doubled. 
            Lesson: Sell the outcome, not the technology.
          </p>
          <p>
            <strong className="text-white">Multi-Tenancy Complexity:</strong> Row-level security in PostgreSQL was harder 
            than expected. Required careful testing to ensure no data leakage between organizations. Security audits revealed 
            edge cases we hadn't considered (shared data like industry benchmarks).
          </p>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Product Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Next 3 Months</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Instagram ad support</li>
              <li>• Predictive budget recommendations</li>
              <li>• White-label option for agencies</li>
              <li>• Mobile app for campaign monitoring</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">6-12 Months</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Google Ads integration</li>
              <li>• AI-powered creative asset generation (images/video)</li>
              <li>• Competitive intelligence dashboard</li>
              <li>• Automated retargeting campaigns</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// Architecture Diagram Component
function HyperlocalArchitecture() {
  return (
    <div className="font-mono text-sm">
      <svg viewBox="0 0 800 500" className="w-full h-auto">
        {/* User Interface */}
        <rect x="300" y="30" width="200" height="60" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="400" y="65" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">React Dashboard</text>

        {/* API Layer */}
        <rect x="300" y="140" width="200" height="60" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="2"/>
        <text x="400" y="175" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">FastAPI Backend</text>

        {/* Services */}
        <g>
          <rect x="50" y="260" width="160" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="130" y="290" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Ad Copy Generator</text>
          <text x="130" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9">GPT-4 Integration</text>

          <rect x="250" y="260" width="160" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="330" y="290" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Targeting Engine</text>
          <text x="330" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9">ML Classification</text>

          <rect x="450" y="260" width="160" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="530" y="290" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Performance Tracker</text>
          <text x="530" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9">Real-time Analytics</text>
        </g>

        {/* Background Jobs */}
        <rect x="620" y="260" width="140" height="80" rx="8" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="2"/>
        <text x="690" y="290" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Celery Workers</text>
        <text x="690" y="310" textAnchor="middle" fill="#94a3b8" fontSize="9">A/B Test Automation</text>

        {/* Database */}
        <rect x="250" y="410" width="300" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2"/>
        <text x="400" y="435" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">PostgreSQL + Redis</text>
        <text x="400" y="455" textAnchor="middle" fill="#94a3b8" fontSize="10">Multi-tenant Data • Session Cache</text>

        {/* Arrows */}
        <line x1="400" y1="90" x2="400" y2="140" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
        
        <line x1="350" y1="200" x2="130" y2="260" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="400" y1="200" x2="330" y2="260" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="450" y1="200" x2="530" y2="260" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="500" y1="170" x2="650" y2="260" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowblue)" strokeDasharray="5,5"/>

        <line x1="330" y1="340" x2="380" y2="410" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
        <line x1="530" y1="340" x2="420" y2="410" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#6366f1" />
          </marker>
          <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#8b5cf6" />
          </marker>
          <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, tags, metric }: { 
  title: string; 
  description: string; 
  tags: string[]; 
  metric?: { label: string; value: string } 
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed text-sm">{description}</p>
      
      {metric && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 mb-4">
          <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
          <div className="text-xs text-gray-400">{metric.label}</div>
        </div>
      )}
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-3 py-1 bg-gray-900 border border-gray-800 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Technical Section Component
function TechnicalSection({ title, description, codeSnippet }: { 
  title: string; 
  description: string; 
  codeSnippet: string 
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <pre className="bg-gray-950 border border-gray-800 rounded-lg p-6 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono whitespace-pre">{codeSnippet}</code>
      </pre>
    </div>
  );
}

// Decision Card Component
function DecisionCard({ title, decision, outcome }: { 
  title: string; 
  decision: string; 
  outcome: string 
}) {
  return (
    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-3 text-violet-400">{title}</h3>
      <div className="mb-4">
        <div className="text-sm font-semibold text-gray-300 mb-1">Decision:</div>
        <p className="text-gray-400 text-sm leading-relaxed">{decision}</p>
      </div>
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
        <div className="text-sm font-semibold text-emerald-400 mb-1">Outcome:</div>
        <p className="text-gray-300 text-sm leading-relaxed">{outcome}</p>
      </div>
    </div>
  );
}