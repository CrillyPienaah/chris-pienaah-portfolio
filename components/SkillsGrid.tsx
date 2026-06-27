'use client';

import React, { useState } from 'react';
import { Cpu, Database, Layers, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: number; // 0-100
  projects: string[];
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Cpu className="w-5 h-5" />,
    description: 'Developing sovereign and multi-agent systems with cognitive routing and agent evaluation.',
    skills: [
      { name: 'LLMs & Transformers', proficiency: 95, projects: ['Governance Control Tower', 'SME Growth Co-Pilot'] },
      { name: 'LangChain & LangGraph', proficiency: 90, projects: ['SME Growth Co-Pilot', 'LuminaMed AI'] },
      { name: 'RAG Pipelines', proficiency: 92, projects: ['LuminaMed AI', 'Self-Healing Data Pipeline'] },
      { name: 'NLP & Document AI', proficiency: 88, projects: ['PDF-to-SQL Pipeline'] },
      { name: 'scikit-learn & XGBoost', proficiency: 85, projects: ['Customer Churn Prediction'] },
    ]
  },
  {
    id: 'data-eng',
    name: 'Data Engineering',
    icon: <Database className="w-5 h-5" />,
    description: 'Structuring highly scaleable ETL, multi-timeframe feature stores, and real-time streaming.',
    skills: [
      { name: 'ETL/ELT Pipelines', proficiency: 94, projects: ['Self-Healing Data Pipeline', 'PDF-to-SQL Pipeline'] },
      { name: 'BigQuery & Snowflake', proficiency: 88, projects: ['Self-Healing Data Pipeline'] },
      { name: 'Airflow & dbt', proficiency: 85, projects: ['Self-Healing Data Pipeline'] },
      { name: 'Azure Data Factory', proficiency: 82, projects: ['Enterprise ETL Pipeline'] },
      { name: 'Multi-Timeframe Ingestion', proficiency: 90, projects: ['CHRiSLINE Trading System'] },
    ]
  },
  {
    id: 'mlops',
    name: 'MLOps & Platform',
    icon: <Layers className="w-5 h-5" />,
    description: 'Ensuring model auditability, alignment, fairness testing, and automated healing.',
    skills: [
      { name: 'Regulatory Governance', proficiency: 95, projects: ['Governance Control Tower'] },
      { name: 'OSFI E-23 & SR 11-7', proficiency: 92, projects: ['Governance Control Tower'] },
      { name: 'Model Registry & MLflow', proficiency: 85, projects: ['Self-Healing Data Pipeline'] },
      { name: 'CI/CD & GitHub Actions', proficiency: 88, projects: ['Governance Control Tower', 'Daavi'] },
      { name: 'Docker & Containers', proficiency: 90, projects: ['PDF-to-SQL Pipeline', 'Self-Healing Data Pipeline'] },
    ]
  },
  {
    id: 'cloud-tools',
    name: 'Cloud & Core Tools',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Deploying secure backend APIs and geospatial discovery apps to the cloud.',
    skills: [
      { name: 'FastAPI & Python', proficiency: 96, projects: ['Governance Control Tower', 'PDF-to-SQL Pipeline', 'SME Growth Co-Pilot'] },
      { name: 'PostgreSQL & PostGIS', proficiency: 90, projects: ['Daavi', 'PDF-to-SQL Pipeline', 'LuminaMed AI'] },
      { name: 'AWS & GCP Cloud Services', proficiency: 85, projects: ['Self-Healing Data Pipeline', 'Volta IVA'] },
      { name: 'TypeScript & Next.js', proficiency: 88, projects: ['Daavi', 'SME Growth Co-Pilot Dashboard'] },
      { name: 'Power BI & Looker', proficiency: 80, projects: ['Volta IVA Reporting'] },
    ]
  }
];

export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('ai-ml');

  const selectedCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="w-full py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-white font-sans mb-3">
            Technical Arsenal
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm">
            Categorized by engineering domains. Click on a card to drill down into specific technologies and project implementations.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Category Selection (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            {skillCategories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    isActive 
                      ? 'bg-zinc-900 border-blue-500/50 shadow-md shadow-blue-500/5' 
                      : 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border transition-colors ${
                    isActive
                      ? 'bg-blue-600/10 border-blue-500/30 text-blue-400'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-400'
                  }`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm mb-1 ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {category.name}
                    </h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Skill Breakdown Details (7 columns) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-6">
                <span className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {selectedCategory.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCategory.name}</h3>
                  <span className="text-xs text-zinc-500 font-mono">technical_inventory.json</span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {selectedCategory.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-mono font-medium text-zinc-200">{skill.name}</span>
                      <span className="text-xs text-zinc-500 font-mono">{skill.proficiency}% Proficiency</span>
                    </div>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>

                    {/* Associated Projects */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Applied in:</span>
                      {skill.projects.map((proj, pIdx) => (
                        <span 
                          key={pIdx} 
                          className="inline-flex items-center gap-1 text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                        >
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center gap-2 text-zinc-500 text-xs">
              <Sparkles className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Proficiency ratings are based on deployment scale, code complexity, and system integration depth.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
