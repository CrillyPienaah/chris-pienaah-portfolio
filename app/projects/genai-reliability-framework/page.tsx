'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Shield, Activity, CheckCircle, Database } from 'lucide-react';

export default function GenAIReliabilityPage() {
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
          <span className="text-sm font-bold tracking-wider text-emerald-400 uppercase">Flagship AI · OSFI E-23 Aligned</span>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            GenAI Reliability Framework
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            Production-grade LLM evaluation harness for regulated medical and financial workflows — with bootstrapped CI gates, deterministic grounding checks, and OSFI E-23 alignment.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-xl p-6">
            <Activity className="text-emerald-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">93.3%</div>
            <div className="text-sm text-gray-400">Medical Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
            <CheckCircle className="text-blue-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">93.5%</div>
            <div className="text-sm text-gray-400">Finance Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
            <Shield className="text-orange-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-gray-400">Grounding Score</div>
          </div>

          <div className="bg-gradient-to-br from-violet-500/10 to-pink-500/10 border border-violet-500/30 rounded-xl p-6">
            <Database className="text-violet-400 mb-3" size={24} />
            <div className="text-3xl font-bold text-white mb-1">$0.0002</div>
            <div className="text-sm text-gray-400">Cost per Call</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["Python", "LangGraph", "FastAPI", "Next.js", "OpenAI", "Supabase", "GCP Vertex AI", "GitHub Actions", "Vercel"].map((tech) => (
            <span key={tech} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-16">
          <a
            href="https://github.com/CrillyPienaah/genai-reliability-framework"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Github size={20} />
            View Code
          </a>
          <a
            href="https://genai-reliability-framework.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Pipeline Architecture</h2>
        <div className="bg-gray-900 rounded-2xl p-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-mono">
            {["Retrieve", "→", "Generate", "→", "Ground ✓", "→", "Judge", "→", "Log + CI Gate"].map((step, i) => (
              <span
                key={i}
                className={step === "→"
                  ? "text-gray-600"
                  : step.includes("Ground")
                  ? "px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-emerald-400"
                  : step.includes("CI Gate")
                  ? "px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400"
                  : "px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300"
                }
              >
                {step}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            5-node LangGraph DAG — deterministic grounding gate before any LLM judge call
          </p>
        </div>
      </section>

      {/* Problem / Solution / Impact */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-blue-400 font-bold text-sm tracking-wider uppercase mb-4">1 · Problem</div>
            <p className="text-gray-400 leading-relaxed">
              Deploying LLMs in regulated industries — healthcare, finance, legal — requires proof that outputs are accurate and traceable. Traditional CI/CD pipelines test whether code breaks. They have no mechanism to detect when a model's judgment degrades after a prompt change or model upgrade.
            </p>
          </div>
          <div>
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-4">2 · Solution</div>
            <p className="text-gray-400 leading-relaxed">
              Built a LangGraph multi-agent evaluation pipeline that extracts entities from model outputs, verifies them deterministically against source documents, then scores with a cross-family LLM judge. Bootstrapped confidence intervals (n=1,000) gate CI/CD — a PR fails if accuracy regresses beyond statistical significance.
            </p>
          </div>
          <div>
            <div className="text-orange-400 font-bold text-sm tracking-wider uppercase mb-4">3 · Impact</div>
            <ul className="text-gray-400 leading-relaxed space-y-2">
              <li>✓ 93.3% medical accuracy [CI: 90.8–96.0%]</li>
              <li>✓ 93.5% financial accuracy [CI: 89.2–97.0%]</li>
              <li>✓ 100% factual grounding across 50 test cases</li>
              <li>✓ CI/CD gate passing on both domains</li>
              <li>✓ OSFI E-23 model risk alignment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Key Engineering Decisions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-emerald-400">Deterministic Grounding Before LLM Judge</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              spaCy + regex entity extraction verifies every number, drug name, and date against source documents before any LLM judge call. This provides traceable, auditable evidence — the kind OSFI E-23 requires. Only grounding-passed outputs proceed to the judge, saving cost and eliminating unverifiable hallucinations.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-400">Bootstrapped Confidence Intervals</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every metric includes 95% CIs via bootstrap resampling (n=1,000). A CI gate fails the PR only when accuracy regression is statistically significant — not just numerically lower. An 84%→86% change with overlapping CIs is noise; the system treats it as such.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-orange-400">Cross-Family Anti-Bias Judging</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              During calibration, GPT-4o as judge achieved κ=0.71 on Claude outputs but κ=0.84 on its own outputs — measurable self-evaluation inflation. The judge is always from a different provider family than the model under test. Cohen's kappa calibration against human labels ensures judge reliability.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h3 className="text-lg font-semibold mb-3 text-violet-400">OSFI E-23 Model Risk Alignment</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Canadian federally regulated financial institutions must validate AI outputs as model outputs under OSFI Guideline E-23 by May 2027. This framework provides the traceable validation evidence, performance benchmarking, and CI/CD regression gating that OSFI E-23 requires for non-deterministic AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Code Sample */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Technical Deep Dive</h2>
        <div className="bg-gray-900 rounded-2xl p-8 mb-6">
          <p className="text-sm text-gray-500 mb-4 font-mono">// Bootstrap CI scorer — statistical rigour for the CI gate</p>
          <pre className="text-sm text-gray-300 overflow-x-auto font-mono leading-relaxed">{`def bootstrap_metric(values, n_iterations=1000, confidence=0.95):
    arr = np.array(values)
    rng = np.random.default_rng(seed=42)
    
    boot_means = np.array([
        rng.choice(arr, size=len(arr), replace=True).mean()
        for _ in range(n_iterations)
    ])
    
    alpha = 1.0 - confidence
    ci_lower = np.percentile(boot_means, 100 * (alpha / 2))
    ci_upper = np.percentile(boot_means, 100 * (1 - alpha / 2))
    
    return BootstrappedMetric(
        mean=float(arr.mean()),
        ci_lower=ci_lower,
        ci_upper=ci_upper,
        n_samples=len(values)
    )

def is_regression(baseline, candidate, threshold=0.02):
    drop = baseline.mean - candidate.mean
    if drop <= 0 or drop < threshold:
        return False  # better or below noise floor
    return not cis_overlap(baseline, candidate)  # only flag if significant`}</pre>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Results</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-800">
                <th className="text-left py-3 pr-8">Domain</th>
                <th className="text-left py-3 pr-8">Accuracy</th>
                <th className="text-left py-3 pr-8">95% CI</th>
                <th className="text-left py-3 pr-8">Grounding</th>
                <th className="text-left py-3 pr-8">Cost/Call</th>
                <th className="text-left py-3">CI Gate</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-900">
                <td className="py-4 pr-8 font-medium">Medical Q&amp;A (30 cases)</td>
                <td className="py-4 pr-8 text-emerald-400 font-bold">93.3%</td>
                <td className="py-4 pr-8 text-gray-400">[90.8%, 96.0%]</td>
                <td className="py-4 pr-8 text-emerald-400">100%</td>
                <td className="py-4 pr-8">$0.0002</td>
                <td className="py-4 text-emerald-400 font-semibold">✓ PASS</td>
              </tr>
              <tr>
                <td className="py-4 pr-8 font-medium">Financial Compliance (20 cases)</td>
                <td className="py-4 pr-8 text-emerald-400 font-bold">93.5%</td>
                <td className="py-4 pr-8 text-gray-400">[89.2%, 97.0%]</td>
                <td className="py-4 pr-8 text-emerald-400">100%</td>
                <td className="py-4 pr-8">$0.0002</td>
                <td className="py-4 text-emerald-400 font-semibold">✓ PASS</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mt-4">
          The confidence intervals on medical vs. financial accuracy overlap — no statistically significant domain gap. One model, two regulated domains, consistent reliability.
        </p>
      </section>

      {/* Lessons Learned */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h2 className="text-3xl font-bold mb-8">Lessons Learned</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-white mb-2">Judge Inflation Bias is Real</h3>
            <p className="text-gray-400 leading-relaxed">
              During calibration, GPT-4o as judge scored its own outputs significantly higher than outputs from other model families. Cohen's kappa dropped from 0.84 (self-judging) to 0.71 (cross-family). The fix — always use a different provider family as judge — was simple once discovered, but the bias is invisible without a human-labelled calibration set.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Statistical Significance Matters More Than Raw Numbers</h3>
            <p className="text-gray-400 leading-relaxed">
              Early runs showed accuracy jumping from 84% to 86% after a prompt tweak. Without bootstrapped CIs, this looked like an improvement. With CIs, the intervals overlapped completely — the change was noise. This is the core insight: production AI systems need statistical rigour, not just accuracy scores.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Deterministic Gates Are Cheaper and More Auditable</h3>
            <p className="text-gray-400 leading-relaxed">
              Running LLM-as-judge on every output is expensive. By running deterministic entity verification first and only passing grounded outputs to the judge, judge API costs dropped by ~40% while adding an auditable paper trail that regulators can inspect.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-900">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Explore the Framework</h2>
            <p className="text-gray-400">Live leaderboard, full source code, and OSFI E-23 documentation.</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://genai-reliability-framework.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
            <a
              href="https://github.com/CrillyPienaah/genai-reliability-framework"
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

      {/* GitHub Chart Footer */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900">
        <h3 className="text-lg font-semibold mb-4 text-gray-400">Active on GitHub</h3>
        <img
          src="https://ghchart.rshah.org/3b82f6/CrillyPienaah"
          alt="Christopher's GitHub contribution chart"
          className="w-full"
        />
        <a
          href="https://github.com/CrillyPienaah"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Full Profile on GitHub →
        </a>
      </section>
    </main>
  );
}
