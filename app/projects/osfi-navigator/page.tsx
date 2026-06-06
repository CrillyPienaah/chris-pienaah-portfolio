'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Shield, Search, Database, Zap } from 'lucide-react';

export default function OSFINavigatorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="text-sm font-bold tracking-wider text-blue-400 uppercase">Flagship AI · RAG · Live Demo</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            OSFI Navigator
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            RAG-powered Canadian financial regulatory compliance assistant — grounded answers from OSFI E-23, FINTRAC, B-20, IFRS 9, Basel III, PIPEDA, and CASL.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-xl p-6">
            <Shield className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">7</div>
            <div className="text-sm text-gray-400">Regulatory Domains</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <Search className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">RAG</div>
            <div className="text-sm text-gray-400">Grounded Answers</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <Database className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">2</div>
            <div className="text-sm text-gray-400">LLM Models</div>
          </div>
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <Zap className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">Live</div>
            <div className="text-sm text-gray-400">Production Deploy</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "FastAPI", "LangChain", "ChromaDB", "Next.js", "TypeScript", "Railway", "Vercel", "OpenAI", "OSFI E-23", "RAG"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">{tech}</span>
          ))}
        </div>

        <div className="flex gap-4 mb-16">
          <a href="https://osfi-navigator-frontend.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            <ExternalLink size={20} />
            Live Demo
          </a>
          <a href="https://github.com/CrillyPienaah/osfi-navigator" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors">
            <Github size={20} />
            Backend
          </a>
          <a href="https://github.com/CrillyPienaah/osfi-navigator-frontend" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors">
            <Github size={20} />
            Frontend
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-4">1 · Problem</div>
            <p className="text-gray-400 leading-relaxed">Canadian banks deploying AI need to validate that their LLMs understand Canadian regulatory frameworks. No tool existed to quickly query OSFI, FINTRAC, and other Canadian regulatory sources with grounded, cited answers.</p>
          </div>
          <div>
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-4">2 · Solution</div>
            <p className="text-gray-400 leading-relaxed">OSFI Navigator uses RAG (Retrieval-Augmented Generation) to ground every answer in primary regulatory text. Users ask plain-English questions and receive precise answers with citations to the exact guideline section — zero hallucination on covered domains.</p>
          </div>
          <div>
            <div className="text-orange-400 font-bold text-sm tracking-wider uppercase mb-4">3 · Architecture</div>
            <ul className="text-gray-400 leading-relaxed space-y-2 text-sm">
              <li>✓ FastAPI backend on Railway</li>
              <li>✓ LangChain RAG pipeline</li>
              <li>✓ ChromaDB vector store</li>
              <li>✓ OpenAI embeddings + GPT-4o</li>
              <li>✓ Next.js frontend on Vercel</li>
              <li>✓ Powered by CanFinBench corpus</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Regulatory Coverage</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { domain: "OSFI E-23", desc: "Model risk management, AI governance, lifecycle requirements" },
            { domain: "FINTRAC / PCMLTFA", desc: "AML/KYC, suspicious transaction reporting, structuring detection" },
            { domain: "OSFI B-20", desc: "Mortgage stress test, MQR, GDS/TDS ratios, LTV limits" },
            { domain: "IFRS 9 ECL", desc: "Expected credit loss staging, SICR, management overlays" },
            { domain: "Basel III / OSFI CAR", desc: "Capital adequacy, CET1, D-SIB surcharge, output floor" },
            { domain: "PIPEDA / Quebec Law 25", desc: "Data privacy, automated decision-making, PIAs" },
            { domain: "CASL", desc: "Anti-spam, express consent, AI-driven marketing compliance" },
          ].map((item) => (
            <div key={item.domain} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <div className="font-semibold text-white mb-1">{item.domain}</div>
              <div className="text-gray-400 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Try OSFI Navigator</h2>
            <p className="text-gray-400">Ask any question about Canadian financial regulation and get a grounded, cited answer.</p>
          </div>
          <a href="https://osfi-navigator-frontend.vercel.app" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors">
            <ExternalLink size={20} />
            Open Live Demo
          </a>
        </div>
      </section>
    </main>
  );
}
