'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Shield, Database, CheckCircle, FileText } from 'lucide-react';

export default function CanFinBenchPage() {
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
          <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">Flagship AI · Open Source · Hugging Face</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            CanFinBench
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            The first public LLM benchmark for Canadian financial regulatory compliance — covering OSFI E-23, FINTRAC, IFRS 9, Basel III, PIPEDA, and CASL.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <Database className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">57</div>
            <div className="text-sm text-gray-400">Expert-Validated Cases</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <Shield className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">7</div>
            <div className="text-sm text-gray-400">Regulatory Domains</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <CheckCircle className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-gray-400">Task Archetypes</div>
          </div>
          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <FileText className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">May 2027</div>
            <div className="text-sm text-gray-400">OSFI E-23 Deadline</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "Hugging Face", "OSFI E-23", "FINTRAC", "IFRS 9", "Basel III", "PIPEDA", "CASL", "eval.yaml", "CC BY 4.0"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-16">
          <a
            href="https://huggingface.co/datasets/CrillyPienaah/CanFinBench"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ExternalLink size={20} />
            Hugging Face
          </a>
          <a
            href="https://github.com/CrillyPienaah/CanFinBench"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </section>

      {/* Problem / Solution / Impact */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-4">1 · Problem</div>
            <p className="text-gray-400 leading-relaxed">
              Canadian financial institutions are deploying LLMs in regulated workflows — mortgage underwriting, AML detection, credit decisions, compliance checks. But no standardized public benchmark existed to evaluate whether these models actually understand Canadian regulatory frameworks before deployment.
            </p>
          </div>
          <div>
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-4">2 · Solution</div>
            <p className="text-gray-400 leading-relaxed">
              CanFinBench provides 57 expert-validated evaluation cases across 7 Canadian regulatory domains, grounded in primary regulatory text with citations to specific guideline sections. Three task archetypes test progressively harder capabilities: MCQ governance reasoning, scenario-based risk judgment, and compliance-drift red-teaming.
            </p>
          </div>
          <div>
            <div className="text-orange-400 font-bold text-sm tracking-wider uppercase mb-4">3 · Impact</div>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>✓ First public Canadian financial LLM benchmark</li>
              <li>✓ Directly addresses OSFI E-23 validation needs</li>
              <li>✓ eval.yaml for HF Community Evals integration</li>
              <li>✓ CC BY 4.0 — open for research and commercial use</li>
              <li>✓ Bilingual EN/FR roadmap for v0.2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Three Task Archetypes */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Three Task Archetypes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-3">Task A</div>
            <h3 className="text-lg font-semibold mb-3">MCQ Governance Reasoning</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Multiple-choice questions testing core regulatory logic, model lifecycle mapping, and boundary conditions. Each item cites a specific guideline clause.
            </p>
            <div className="bg-black rounded-lg p-4 text-xs font-mono text-gray-300">
              <div className="text-gray-500 mb-2">// Example item</div>
              <div>Domain: OSFI E-23</div>
              <div>Difficulty: Hard</div>
              <div>Section: Model Risk Rating</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-3">Task B</div>
            <h3 className="text-lg font-semibold mb-3">Scenario-Based Risk Judgment</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Long-form scenarios simulating real audit logs, model drift events, and compliance reviews. Tests the model's ability to reason like a compliance officer.
            </p>
            <div className="bg-black rounded-lg p-4 text-xs font-mono text-gray-300">
              <div className="text-gray-500 mb-2">// Example item</div>
              <div>Domain: FINTRAC/PCMLTFA</div>
              <div>Difficulty: Expert</div>
              <div>Section: STR Reporting</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <div className="text-orange-400 font-bold text-sm tracking-wider uppercase mb-3">Task C</div>
            <h3 className="text-lg font-semibold mb-3">Compliance-Drift Red-Teaming</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Scenarios where a business instruction embeds compliance violations. Tests whether the model can identify PIPEDA, CASL, and E-23 violations in realistic AI deployment requests.
            </p>
            <div className="bg-black rounded-lg p-4 text-xs font-mono text-gray-300">
              <div className="text-gray-500 mb-2">// Example item</div>
              <div>Domain: PIPEDA/Law 25</div>
              <div>Difficulty: Expert</div>
              <div>Section: Automated Decisions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Domains */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Regulatory Domains</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { domain: "OSFI Guideline E-23", desc: "Model Risk Management — lifecycle, risk rating, AI governance, explainability", deadline: "In force May 2027" },
            { domain: "FINTRAC / PCMLTFA", desc: "AML/KYC — suspicious transaction reporting, structuring detection, PEP requirements", deadline: "Active" },
            { domain: "OSFI Guideline B-20", desc: "Mortgage stress test — MQR, GDS/TDS ratios, LTV limits, renewal rules", deadline: "Active" },
            { domain: "IFRS 9 ECL", desc: "Expected credit loss staging — SICR, Stage 1/2/3, management overlays", deadline: "Since 2018" },
            { domain: "Basel III / OSFI CAR", desc: "Capital adequacy — CET1, D-SIB surcharge, output floor deferral", deadline: "2026 update" },
            { domain: "PIPEDA / Quebec Law 25", desc: "Data privacy — consent, automated decision-making, privacy impact assessments", deadline: "Active" },
            { domain: "CASL", desc: "Anti-spam — express consent, unsubscribe requirements, AI-driven marketing", deadline: "Active" },
          ].map((item) => (
            <div key={item.domain} className="bg-gray-900 rounded-xl p-5 border border-gray-800 flex gap-4">
              <div className="flex-1">
                <div className="font-semibold text-white mb-1">{item.domain}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
              <div className="text-xs text-emerald-400 font-mono whitespace-nowrap mt-1">{item.deadline}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why CanFinBench */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Why CanFinBench Exists</h2>
        <div className="bg-gray-900 rounded-2xl p-8 border border-amber-500/30 border-l-4 border-l-amber-500">
          <div className="text-amber-400 font-bold text-sm tracking-wider uppercase mb-4">OSFI E-23 — May 1, 2027</div>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every Canadian federally regulated financial institution must validate AI model outputs under OSFI Guideline E-23 by May 2027. The core challenge: <strong className="text-white">non-deterministic AI systems cannot be validated with deterministic tests.</strong>
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Existing financial LLM benchmarks (FinQA, PIXIU/FinBen, FinEval) focus on US SEC filings, Chinese regulations, or general numerical reasoning. None encode Canadian regulatory frameworks. CanFinBench fills this gap.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The benchmark is specifically designed around the <strong className="text-white">capability-compliance gap</strong> identified in research: LLMs score well on factual regulatory QA but degrade on compliance reasoning — exactly the capability that banks need before deploying AI in regulated decisions.
          </p>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Roadmap</h2>
        <div className="space-y-4">
          {[
            { version: "v0.1.0", date: "June 2026", status: "Live", desc: "57 items — OSFI E-23, FINTRAC, B-20, PIPEDA, CASL, IFRS 9, Basel III. eval.yaml for HF Community Evals." },
            { version: "v0.2.0", date: "Q3 2026", status: "Planned", desc: "200 items — French split added, expanded IFRS 9 + Basel III domains, compliance-drift red-teaming expansion." },
            { version: "v1.0.0", date: "Q4 2026", status: "Planned", desc: "500+ items — private held-out leaderboard test set, HF Spaces leaderboard, arXiv paper submission." },
          ].map((item) => (
            <div key={item.version} className="flex gap-6 items-start bg-gray-900 rounded-xl p-6 border border-gray-800">
              <div className="text-center min-w-20">
                <div className="font-mono font-bold text-white">{item.version}</div>
                <div className="text-xs text-gray-500">{item.date}</div>
              </div>
              <div className="flex-1">
                <div className={`inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 ${item.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-700 text-gray-400'}`}>
                  {item.status}
                </div>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Use CanFinBench</h2>
            <p className="text-gray-400">Open source. CC BY 4.0. Pull the dataset and test your models today.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://huggingface.co/datasets/CrillyPienaah/CanFinBench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <ExternalLink size={20} />
              Hugging Face
            </a>
            <a
              href="https://github.com/CrillyPienaah/CanFinBench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
