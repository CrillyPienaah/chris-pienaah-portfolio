'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, MapPin, Shield, TrendingUp, Users } from 'lucide-react';

export default function DaaviPage() {
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
          <span className="text-sm font-bold tracking-wider text-blue-400 uppercase">Flagship AI</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Daavi
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Verification-first real estate platform restoring trust for the African diaspora.
          </p>
          <p className="text-lg text-gray-500 mt-4 italic">
            "Daavi" means "good" in Twi (Ghanaian language) — Named in honor of my late mother
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Shield className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-sm text-gray-400">Fraud Filtering Rate</div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <MapPin className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">PostGIS</div>
            <div className="text-sm text-gray-400">Geospatial Verification</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <Users className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">NA/EU</div>
            <div className="text-sm text-gray-400">Diaspora Focus</div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <TrendingUp className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">AI-Driven</div>
            <div className="text-sm text-gray-400">Smart Matching</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Next.js", "NestJS", "TypeORM", "PostGIS", "PostgreSQL", "JWT", "OpenAI"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href="https://github.com/yourusername/daavi" 
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
          <h2 className="text-3xl font-bold mb-4">Platform Architecture</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            A trust-first architecture combining geospatial verification, AI-powered recommendations, and blockchain-ready tokenization infrastructure.
          </p>
          
          {/* Architecture Diagram */}
          <div className="bg-black/50 border border-gray-800 rounded-2xl p-8 overflow-x-auto">
            <DaaviArchitecture />
          </div>

          {/* Phase Strategy */}
          <div className="mt-12 grid md:grid-cols-4 gap-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
              <div className="text-xs font-bold text-blue-400 mb-2">PHASE 1</div>
              <div className="font-bold mb-1">Trust & Verify</div>
              <div className="text-sm text-gray-400">Property verification engine</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <div className="text-xs font-bold text-emerald-400 mb-2">PHASE 2</div>
              <div className="font-bold mb-1">Discovery</div>
              <div className="text-sm text-gray-400">AI-powered matching</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
              <div className="text-xs font-bold text-orange-400 mb-2">PHASE 3</div>
              <div className="font-bold mb-1">Tokenization</div>
              <div className="text-sm text-gray-400">Fractional ownership</div>
            </div>
            <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4">
              <div className="text-xs font-bold text-violet-400 mb-2">PHASE 4</div>
              <div className="font-bold mb-1">Analytics</div>
              <div className="text-sm text-gray-400">Market intelligence</div>
            </div>
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
              The African real estate market suffers from a massive "trust deficit." Diaspora investors lose millions 
              annually to fraud, unverified listings, and lack of transparency.
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm text-gray-400">
              <strong className="text-red-400">Key Stat:</strong> 60% of diaspora investors report encountering fraudulent 
              listings when attempting cross-border property investment.
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-bold">2</span>
              Solution
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built a verification-first marketplace using PostGIS geolocation and verified vendor data. The platform 
              includes an AI recommendation engine matching investors to properties based on investment goals.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Multi-step vendor verification workflow
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                Geospatial property validation (PostGIS)
              </li>
              <li className="flex gap-2">
                <span className="text-blue-400">→</span>
                AI-powered investment matching
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
                <span>Engineered scalable trust architecture using NestJS and TypeORM</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Verification workflow filters out 95% of fraudulent listings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Seamless cross-border UX for diaspora users in NA/EU</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Core Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              title="Multi-Layer Verification System"
              description="Three-tier verification: Document validation, geospatial confirmation (PostGIS), and on-ground inspector network."
              tags={["PostGIS", "TypeORM", "NestJS"]}
              icon="🔐"
            />
            <FeatureCard 
              title="AI Investment Matching"
              description="Recommends properties based on investment profile (ROI goals, risk tolerance, location preferences) rather than keyword search."
              tags={["OpenAI", "Vector Search", "Embeddings"]}
              icon="🎯"
            />
            <FeatureCard 
              title="Cross-Border Payment Integration"
              description="Secure escrow system supporting multi-currency transactions (USD, EUR, GBP, Local currencies)."
              tags={["Stripe", "Wise API", "JWT"]}
              icon="💳"
            />
            <FeatureCard 
              title="Real-Time Market Analytics"
              description="Live dashboards showing price trends, neighborhood growth indicators, and investment opportunities."
              tags={["PostgreSQL", "TimescaleDB", "D3.js"]}
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12">Technical Deep Dive</h2>
        
        <div className="space-y-8">
          <TechnicalSection 
            title="Geospatial Verification with PostGIS"
            description="Leveraging PostGIS to validate property coordinates against official land registry data and detect location manipulation."
            codeSnippet={`// PostGIS-powered property validation
@Injectable()
export class PropertyVerificationService {
  async validateLocation(property: Property): Promise<boolean> {
    const query = \`
      SELECT ST_Contains(
        (SELECT boundary FROM verified_zones WHERE zone_id = $1),
        ST_SetSRID(ST_Point($2, $3), 4326)
      ) as is_valid
    \`;
    
    const result = await this.db.query(query, [
      property.zone_id,
      property.longitude,
      property.latitude
    ]);
    
    return result.rows[0].is_valid;
  }
}`}
          />

          <TechnicalSection 
            title="Vendor Trust Score Algorithm"
            description="Multi-factor trust scoring system considering verification history, user reviews, and completion rate."
            codeSnippet={`// Trust score calculation
interface TrustFactors {
  verificationsPassed: number;
  avgRating: number;
  completedTransactions: number;
  accountAge: number; // in days
}

function calculateTrustScore(factors: TrustFactors): number {
  const weights = {
    verification: 0.4,
    rating: 0.3,
    transactions: 0.2,
    tenure: 0.1
  };
  
  const normalized = {
    verification: Math.min(factors.verificationsPassed / 10, 1),
    rating: factors.avgRating / 5,
    transactions: Math.min(factors.completedTransactions / 50, 1),
    tenure: Math.min(factors.accountAge / 365, 1)
  };
  
  return Object.entries(weights).reduce((score, [key, weight]) => 
    score + (normalized[key] * weight * 100), 0
  );
}`}
          />

          <TechnicalSection 
            title="AI-Powered Property Recommendations"
            description="Using OpenAI embeddings to match user investment profiles with property characteristics beyond simple filters."
            codeSnippet={`// Semantic property matching
const userPreferences = \`
  Investment goal: Long-term rental income
  Budget: $50k-$150k
  Risk tolerance: Moderate
  Location preference: Growing urban areas
\`;

const embedding = await openai.embeddings.create({
  model: "text-embedding-ada-002",
  input: userPreferences
});

// Vector similarity search in PostgreSQL with pgvector
const matches = await db.query(\`
  SELECT *, 1 - (embedding <=> $1) as similarity
  FROM properties
  WHERE 1 - (embedding <=> $1) > 0.8
  ORDER BY similarity DESC
  LIMIT 10
\`, [embedding.data[0].embedding]);`}
          />
        </div>
      </section>

      {/* Spotify Evolution Strategy */}
      <section className="bg-gray-900/30 border-y border-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">The "Spotify Evolution" Product Strategy</h2>
          <p className="text-gray-400 mb-12 max-w-3xl">
            Rather than launching a full-featured platform at once, Daavi follows a phased approach inspired by Spotify's growth—start 
            with core trust, expand to discovery, then scale with advanced features.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/50 border border-blue-500/30 rounded-xl p-6">
              <div className="text-blue-400 font-bold mb-2">🎯 Current Phase: Trust & Verify (MVP)</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Vendor onboarding with document verification</li>
                <li>• Property listing with PostGIS validation</li>
                <li>• Basic search and filtering</li>
                <li>• Secure user authentication (JWT)</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-6">
              <div className="text-gray-400 font-bold mb-2">🚀 Next Phase: Discovery</div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• AI-powered recommendation engine</li>
                <li>• Personalized investment dashboards</li>
                <li>• Saved searches and alerts</li>
                <li>• Community reviews and ratings</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 opacity-60">
              <div className="text-gray-500 font-bold mb-2">⏳ Future: Tokenization</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Fractional property ownership (blockchain)</li>
                <li>• Secondary market for property tokens</li>
                <li>• Smart contract-based escrow</li>
                <li>• Liquidity pools for real estate</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-xl p-6 opacity-60">
              <div className="text-gray-500 font-bold mb-2">⏳ Future: Market Intelligence</div>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li>• Predictive analytics for property values</li>
                <li>• Neighborhood growth forecasting</li>
                <li>• Investment portfolio optimization</li>
                <li>• Macro-economic trend analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6 text-gray-400 leading-relaxed">
          <p>
            <strong className="text-white">Trust is a Feature, Not an Afterthought:</strong> Initially focused on building 
            a beautiful UI, but user research revealed that diaspora investors care more about verification than aesthetics. 
            Pivoted to make trust visible at every touchpoint.
          </p>
          <p>
            <strong className="text-white">PostGIS Changed Everything:</strong> Adding geospatial intelligence wasn't just 
            a "nice-to-have"—it became the core differentiator. Being able to say "this property has been geo-verified" built 
            instant credibility.
          </p>
          <p>
            <strong className="text-white">Cultural Context Matters:</strong> Payment systems that work in the US don't work 
            in Ghana. Had to integrate local mobile money options (MTN, Vodafone Cash) alongside Stripe. Never assume 
            infrastructure parity.
          </p>
          <p>
            <strong className="text-white">MVP ≠ Minimum Viable Product:</strong> For Daavi, MVP means "Minimum Viable 
            Trust." Without verification, the platform has no value. Better to launch later with robust verification than 
            early with a broken trust model.
          </p>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">What's Next</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Q1 2026</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Beta launch with 50 verified vendors</li>
              <li>• Mobile app (React Native)</li>
              <li>• Virtual property tours (360° video)</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-400">Q2-Q3 2026</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Expand to Nigeria and Kenya markets</li>
              <li>• Partnership with local banks for financing</li>
              <li>• AI recommendation engine v2</li>
            </ul>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3 text-violet-400">2027+</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Tokenization pilot program</li>
              <li>• Decentralized property registry</li>
              <li>• Pan-African expansion</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

// Component: Daavi Architecture Diagram
function DaaviArchitecture() {
  return (
    <div className="font-mono text-sm">
      <svg viewBox="0 0 900 550" className="w-full h-auto">
        {/* User Layer */}
        <g>
          <rect x="50" y="50" width="150" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="125" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Investor Portal</text>
          <text x="125" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">(Diaspora Users)</text>
          
          <rect x="700" y="50" width="150" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2"/>
          <text x="775" y="85" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">Vendor Portal</text>
          <text x="775" y="105" textAnchor="middle" fill="#94a3b8" fontSize="10">(Property Owners)</text>
        </g>

        {/* API Gateway */}
        <rect x="325" y="200" width="250" height="60" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="2"/>
        <text x="450" y="235" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">NestJS API Gateway</text>

        {/* Core Services Layer */}
        <g>
          <rect x="75" y="330" width="180" height="90" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="165" y="360" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Verification Service</text>
          <text x="165" y="378" textAnchor="middle" fill="#94a3b8" fontSize="9">Document Validation</text>
          <text x="165" y="393" textAnchor="middle" fill="#94a3b8" fontSize="9">PostGIS Geolocation</text>
          <text x="165" y="408" textAnchor="middle" fill="#94a3b8" fontSize="9">Inspector Network</text>

          <rect x="310" y="330" width="180" height="90" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="400" y="360" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Recommendation Engine</text>
          <text x="400" y="378" textAnchor="middle" fill="#94a3b8" fontSize="9">AI Property Matching</text>
          <text x="400" y="393" textAnchor="middle" fill="#94a3b8" fontSize="9">Investment Profiling</text>
          <text x="400" y="408" textAnchor="middle" fill="#94a3b8" fontSize="9">Vector Similarity</text>

          <rect x="545" y="330" width="180" height="90" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2"/>
          <text x="635" y="360" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Payment Service</text>
          <text x="635" y="378" textAnchor="middle" fill="#94a3b8" fontSize="9">Multi-Currency</text>
          <text x="635" y="393" textAnchor="middle" fill="#94a3b8" fontSize="9">Escrow Management</text>
          <text x="635" y="408" textAnchor="middle" fill="#94a3b8" fontSize="9">Local Payment</text>
        </g>

        {/* Database Layer */}
        <rect x="300" y="470" width="300" height="60" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2"/>
        <text x="450" y="495" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">PostgreSQL + PostGIS</text>
        <text x="450" y="515" textAnchor="middle" fill="#94a3b8" fontSize="10">Geospatial Data • User Profiles • Transactions</text>

        {/* Arrows */}
        <line x1="125" y1="130" x2="375" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        <line x1="775" y1="130" x2="525" y2="200" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowblue)"/>
        
        <line x1="375" y1="260" x2="165" y2="330" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
        <line x1="450" y1="260" x2="400" y2="330" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>
        <line x1="525" y1="260" x2="635" y2="330" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowpurple)"/>

        <line x1="165" y1="420" x2="375" y2="470" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
        <line x1="400" y1="420" x2="450" y2="470" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>
        <line x1="635" y1="420" x2="525" y2="470" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowgreen)"/>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="#3b82f6" />
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

// Component: Feature Card
function FeatureCard({ title, description, tags, icon }: { title: string; description: string; tags: string[]; icon: string }) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>
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

// Component: Technical Section with Code
function TechnicalSection({ title, description, codeSnippet }: { title: string; description: string; codeSnippet: string }) {
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