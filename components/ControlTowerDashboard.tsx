'use client';

import React, { useState } from 'react';
import { Cpu, ShieldCheck, Terminal, Layers, AlertOctagon, HelpCircle, Activity, ChevronRight, Settings, ExternalLink, GitBranch } from 'lucide-react';

interface AgentInfo {
  name: string;
  role: string;
  adkPattern: string;
  mcpTools: string[];
  metrics: string[];
  osfiFocus: string;
  description: string;
}

const agents: Record<string, AgentInfo> = {
  regulatory: {
    name: 'Regulatory Intelligence Agent',
    role: 'Monitors updates in regulatory guidelines (OSFI E-23, SR 11-7) and updates evaluation vector mappings.',
    adkPattern: 'Supervisor -> Worker (Read-Only)',
    mcpTools: ['get_latest_guidelines()', 'query_regulatory_vectors(topic)'],
    metrics: ['Mapping Latency: < 200ms', 'Regulatory Vector Sync: 100%'],
    osfiFocus: 'Guideline E-23 Section II.A (Regulatory Traceability)',
    description: 'Autonomous crawler and embedding processor that continuously monitors OSFI updates. It converts legal PDF text chunks into structured vectors in ChromaDB, flagging changes that require adjustments to compliance checklists.'
  },
  compliance: {
    name: 'Compliance Assessment Agent',
    role: 'Audits model documentation, conceptual soundness, and verification checklists.',
    adkPattern: 'Worker -> Critic Feedback loop',
    mcpTools: ['analyze_doc_completeness(file_path)', 'check_conceptual_soundness()'],
    metrics: ['Documentation Completeness: 98.2%', 'Checklist Pass Rate: 95.4%'],
    osfiFocus: 'Guideline E-23 Section II.C (Independent Model Validation)',
    description: 'Uses few-shot prompt mappings to review model validation documents (MRDs). It identifies gaps in model lineage, missing uncertainty quantification steps, or omitted mathematical definitions required by auditors.'
  },
  risk: {
    name: 'Model Risk Monitoring Agent',
    role: 'Calculates fairness metrics, adversarial bias, and AIR (Adverse Impact Ratio) across demographics.',
    adkPattern: 'Supervisor -> Parallel Worker Task',
    mcpTools: ['calculate_air(demographic_data)', 'run_bias_audit(predictions_path)'],
    metrics: ['Fairness Audit Speed: < 1.2s', 'Bias Deviation Flags: 0'],
    osfiFocus: 'Guideline E-23 Section I.D (Model Bias & Fairness Auditing)',
    description: 'Enforces mathematical fairness rules. It monitors the Adverse Impact Ratio (AIR) on model predictions. If the ratio drops below the 0.80 historical threshold (suggesting disparate impact), it fires a critical policy alert.'
  },
  reliability: {
    name: 'Reliability Evaluation Agent',
    role: 'Monitors population stability (PSI), data drift, and input feature changes.',
    adkPattern: 'Worker Task (Streaming telemetry)',
    mcpTools: ['calculate_psi(reference_df, current_df)', 'detect_drift_anomalies()'],
    metrics: ['Drift Detection Lag: 30s', 'Telemetry Sampling: 431M+ records'],
    osfiFocus: 'Guideline E-23 Section II.E (Model Maintenance & Monitoring)',
    description: 'Analyzes incoming production data streams against reference distributions. It calculates the Population Stability Index (PSI). Any PSI deviation above 0.20 indicates model performance degradation, triggering automatic rollback.'
  },
  benchmarking: {
    name: 'Benchmarking Agent',
    role: 'Compares model predictions against reference benchmarks like CanFraudBench.',
    adkPattern: 'Dual worker check',
    mcpTools: ['run_calibration_analysis()', 'compare_ece_metrics(benchmark_id)'],
    metrics: ['ECE Calibration Delta: 0.015', 'Benchmarking Coverage: 100%'],
    osfiFocus: 'Guideline E-23 Section II.B (Conceptual Soundness & Calibration)',
    description: 'Runs parallel validation payloads against the CanFraudBench dataset to measure Expected Calibration Error (ECE) and ROC AUC, ensuring model predictions are well-calibrated and mathematically sound.'
  }
};

const guardrailRules = [
  { id: 'R1', rule: 'AUC > 0.85', desc: 'Model predictive power threshold', status: 'PASS' },
  { id: 'R2', rule: 'AIR >= 0.80', desc: 'Adverse Impact Ratio (Fairness)', status: 'FAIL' },
  { id: 'R3', rule: 'PSI <= 0.20', desc: 'Population Stability Index (Drift)', status: 'FAIL' },
  { id: 'R4', rule: 'ECE <= 0.05', desc: 'Expected Calibration Error', status: 'PASS' },
  { id: 'R5', rule: 'Missing Docs = 0', desc: 'No missing validation checklists', status: 'PASS' },
  { id: 'R6', rule: 'Uncertainty Check', desc: 'Quantified variance boundaries', status: 'PASS' },
  { id: 'R7', rule: 'Auditable Log = True', desc: 'TAMPER-PROOF Merkle validation', status: 'PASS' },
  { id: 'R8', rule: 'LLM Override = False', desc: 'No LLM can override policy engine', status: 'PASS' }
];

export default function ControlTowerDashboard() {
  const [activeTab, setActiveTab] = useState<string>('regulatory');

  const selectedAgent = agents[activeTab];

  return (
    <section className="w-full py-16 bg-zinc-950 border-t border-zinc-900 font-sans">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>AI Governance Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Enterprise AI Governance Control Tower
          </h2>
          <p className="text-zinc-400 max-w-3xl text-sm md:text-base leading-relaxed">
            Coordinated via <strong>Google ADK (Agent Development Kit)</strong>, this multi-agent supervisor orchestrates specialized workers using <strong>Model Context Protocol (MCP)</strong> interfaces to enforce model compliance with Canadian **OSFI Guideline E-23** model risk management standards.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              href="https://osfi-navigator-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>OSFI Navigator Portal</span>
            </a>
            <a 
              href="https://osfi-audit-copilot-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>OSFI Audit Copilot</span>
            </a>
            <a 
              href="https://huggingface.co/datasets/CrillyPienaah/CanFinBench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>CanFinBench Benchmark</span>
            </a>
            <a 
              href="https://model-risk-dashboard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Model Risk Dashboard &mdash; OSFI E-23</span>
            </a>
            <a 
              href="https://daavi-production.up.railway.app/api/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-350 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>API Swagger Docs</span>
            </a>
          </div>
        </div>

        {/* 5 Agents & Policy Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tabbed Agents List (5 columns) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Specialized Agents</span>
            {Object.entries(agents).map(([key, value]) => {
              const isActive = key === activeTab;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-zinc-900 border-blue-500/40 shadow-lg shadow-blue-500/5' 
                      : 'bg-zinc-950 border-zinc-900/80 hover:border-zinc-800 hover:bg-zinc-900/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg border transition-all duration-300 ${
                        isActive ? 'bg-blue-600/10 border-blue-500/20 text-blue-400' : 'bg-zinc-950 border-zinc-900 text-zinc-500'
                      }`}>
                        <Cpu className="w-4 h-4" />
                      </div>
                      <span className={`text-xs font-bold font-mono tracking-tight transition-colors duration-350 ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {value.name.split(' ')[0]} {value.name.split(' ')[1]}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-blue-400 translate-x-0.5' : 'text-zinc-700'}`} />
                  </div>
                </button>
              );
            })}

            {/* Google ADK Callout */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-xl p-4 space-y-3 mt-6">
              <div className="flex items-center gap-2 text-zinc-300">
                <Settings className="w-4 h-4 text-purple-400" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">ADK Orchestration Framework</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-normal">
                Google ADK acts as the supervisor model core. It reads worker schemas, handles thread locks, validates JSON configurations, and manages validation feedback loops.
              </p>
            </div>
          </div>

          {/* Middle Column: Agent Console Details (7 columns) */}
          <div 
            key={activeTab}
            className="lg:col-span-7 bg-zinc-900/10 border border-zinc-900 rounded-2xl p-6 md:p-8 space-y-6 animate-fade-in shadow-inner"
          >
            
            <div className="flex items-center gap-3 border-b border-zinc-900 pb-4">
              <span className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                <Cpu className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{selectedAgent.name}</h3>
                <span className="text-[10px] text-zinc-500 font-mono">adk_pattern: {selectedAgent.adkPattern}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Role &amp; Prompt Scope</span>
                <p className="text-zinc-300 text-xs leading-relaxed">{selectedAgent.role}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Deep Technical Scope</span>
                <p className="text-zinc-400 text-xs leading-relaxed">{selectedAgent.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2 bg-zinc-950 border border-zinc-900 rounded-lg p-3">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">MCP Tool Interface</span>
                  <div className="space-y-1 font-mono text-[10px]">
                    {selectedAgent.mcpTools.map((t) => (
                      <div key={t} className="text-blue-400 flex items-center gap-1.5 hover:text-white transition-colors duration-200">
                        <Terminal className="w-3.5 h-3.5 text-zinc-700" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 bg-zinc-950 border border-zinc-900 rounded-lg p-3">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Validation Metrics</span>
                  <div className="space-y-1 font-mono text-[10px]">
                    {selectedAgent.metrics.map((m) => (
                      <div key={m} className="text-emerald-400 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-zinc-700" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-900">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">OSFI E-23 Alignment</span>
                <span className="inline-block bg-zinc-900 border border-zinc-850 rounded px-2.5 py-1 text-[10px] text-zinc-350 font-mono">
                  {selectedAgent.osfiFocus}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Case Study Block & Guardrail Status */}
        <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 md:p-8 space-y-6 shadow-md shadow-black/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-900 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-red-500 animate-pulse" />
                Case Study: Deterministic Model Block Telemetry
              </h3>
              <p className="text-zinc-500 text-xs mt-0.5 font-sans">
                Audit logs evaluating a high-performing fraud classification model (v4.1) for credit card application risk.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-zinc-500">Policy Gate Decision:</span>
              <span className="bg-red-500/10 border border-red-500/35 text-red-400 px-2.5 py-1 rounded font-bold uppercase tracking-wider">
                BLOCKED (CRITICAL)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Guardrail Rules Checklist (5 columns) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Deterministic Policy Engine (8 Rules)</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {guardrailRules.map((rule) => {
                  const isFail = rule.status === 'FAIL';
                  return (
                    <div 
                      key={rule.id} 
                      className={`border p-2.5 rounded-lg font-mono text-[11px] flex justify-between items-start transition-all duration-300 ${
                        isFail 
                          ? 'bg-red-950/10 border-red-500/25 text-red-400 shadow-sm shadow-red-950/20' 
                          : 'bg-zinc-950 border-zinc-900 text-zinc-300 hover:border-zinc-800'
                      }`}
                    >
                      <div>
                        <span className="font-semibold block">{rule.id}: {rule.rule}</span>
                        <span className="text-[9px] text-zinc-500 block leading-tight mt-0.5">{rule.desc}</span>
                      </div>
                      <span className={`text-[10px] font-bold ${isFail ? 'text-red-400' : 'text-emerald-400'}`}>
                        {rule.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Simulated Terminal Telemetry stream (7 columns) */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden shadow-inner font-mono text-xs">
              <div className="bg-zinc-900/60 px-4 py-2 border-b border-zinc-900/80 flex justify-between items-center text-[10px]">
                <span className="text-zinc-500 uppercase flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-red-400" />
                  supervisor_guardrail_verdict.sh
                </span>
                <span className="text-zinc-600">TAMPER_PROOF_HASH_SHA256</span>
              </div>
              <div className="p-4 space-y-1.5 text-zinc-400 leading-relaxed max-h-56 overflow-y-auto">
                <div>[SYS] Model package ingestion detected: <span className="text-white">FraudModel_V4.1.tar.gz</span></div>
                <div>[SYS] Running evaluation sandbox suite on CanFraudBench dataset...</div>
                <div>[AUDIT] Model Accuracy: <span className="text-emerald-400 font-semibold">AUC = 0.969</span> (Threshold &gt; 0.85) <span className="text-emerald-500">PASS</span></div>
                <div>[AUDIT] Compliance check: Model lineage document validation... <span className="text-emerald-500">PASS</span></div>
                <div>[WARN] Fairness Monitor: Testing Adverse Impact Ratio (AIR) across demographic segments...</div>
                <div className="text-red-400 font-semibold">[FAIL] Fairness Exception: AIR = 0.59 (Demographic variance threshold is &gt;= 0.80)</div>
                <div>[WARN] Reliability Monitor: Measuring data distribution alignment on validation set...</div>
                <div className="text-red-400 font-semibold">[FAIL] Reliability Exception: PSI = 0.25 (Data drift threshold exceeded: &lt;= 0.20)</div>
                <div>[SYS] Final Verification Summary: 6 PASS, 2 FAIL (Strict Mode Active)</div>
                <div className="text-red-500 font-bold">[CRITICAL] DECISION: Model deployment BLOCKED. Deterministic override disabled.</div>
                <div>[SYS] Writing telemetry state logs to Trillian Merkle Tree (RFC 3161 timestamp)... OK</div>
              </div>
            </div>

        </div>
      </div>

        {/* 4-Layer Compliance Stack Hierarchy */}
        <div className="border-t border-zinc-900 pt-12 space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              4-Layer Compliance Stack Hierarchy
            </h3>
            <p className="text-zinc-500 text-xs font-sans">
              How the system coordinates from raw benchmarks up to automated promotion gateways.
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden shadow-inner">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-450">
                  <th className="p-3 font-bold uppercase tracking-wider">Layer</th>
                  <th className="p-3 font-bold uppercase tracking-wider">System</th>
                  <th className="p-3 font-bold uppercase tracking-wider">Function</th>
                </tr>
              </thead>
              <tbody className="text-zinc-400 divide-y divide-zinc-900">
                <tr>
                  <td className="p-3 text-blue-400 font-bold">Layer 4</td>
                  <td className="p-3 font-bold text-white">GovernanceOps</td>
                  <td className="p-3">Automated promotion pipeline, evaluating deterministic rules pre-deployment.</td>
                </tr>
                <tr>
                  <td className="p-3 text-purple-400 font-bold">Layer 3</td>
                  <td className="p-3 font-bold text-white">Governance Control Tower</td>
                  <td className="p-3">Multi-agent orchestration via Google ADK coordinating auditing tasks.</td>
                </tr>
                <tr>
                  <td className="p-3 text-orange-400 font-bold">Layer 2</td>
                  <td className="p-3 font-bold text-white">Live Governance Systems</td>
                  <td className="p-3">Specialist agents executing model validation checklists &amp; monitors.</td>
                </tr>
                <tr>
                  <td className="p-3 text-emerald-400 font-bold">Layer 1</td>
                  <td className="p-3 font-bold text-white">CanFraudBench / CanFinBench</td>
                  <td className="p-3">Published regulatory datasets and calibration baseline benchmarks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
