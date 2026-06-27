'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Cpu, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onViewArchitecture?: (project: Project) => void;
}

export default function ProjectCard({ project, featured = false, onViewArchitecture }: ProjectCardProps) {
  const projectMetrics: Record<string, { value: string; label: string; color: string }[]> = {
    'governance-control-tower': [
      { value: 'OSFI E-23', label: 'regulatory', color: 'text-blue-400' },
      { value: 'Blocked', label: 'fairness fail', color: 'text-red-400' }
    ],
    'sme-growth-copilot': [
      { value: '100%', label: 'success rate', color: 'text-emerald-400' },
      { value: '1ms', label: 'response time', color: 'text-blue-400' }
    ],
    'luminamed': [
      { value: '92%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '-40%', label: 'time saved', color: 'text-blue-400' }
    ],
    'daavi': [
      { value: '95%', label: 'fraud filtering', color: 'text-emerald-400' }
    ],
    'customer-churn': [
      { value: '86.93%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '2x', label: 'sensitivity', color: 'text-blue-400' }
    ],
    'self-healing-pipelines': [
      { value: '431M+', label: 'records/day', color: 'text-blue-400' },
      { value: '-78%', label: 'downtime', color: 'text-emerald-400' }
    ],
    'pdf-to-sql-pipeline': [
      { value: '95.4%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '$0.0005', label: 'per doc', color: 'text-blue-400' }
    ],
    'chrisline-trading': [
      { value: '2.51', label: 'profit factor', color: 'text-emerald-400' },
      { value: '1.6%', label: 'max drawdown', color: 'text-blue-400' }
    ],
    'volta-iva': [
      { value: 'GH₵2.95bn', label: 'verified', color: 'text-amber-400' },
      { value: '3-source', label: 'reconciliation', color: 'text-blue-400' }
    ],
  };

  const metrics = projectMetrics[project.id] || [];

  const categoryColors: Record<string, string> = {
    "Flagship AI": "from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/40",
    "Data Engineering": "from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-emerald-500/40",
    "Machine Learning": "from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-orange-500/40",
    "Product Strategy": "from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-purple-500/40"
  };

  const categoryTextColors: Record<string, string> = {
    "Flagship AI": "text-blue-400",
    "Data Engineering": "text-emerald-400",
    "Machine Learning": "text-orange-400",
    "Product Strategy": "text-purple-400"
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewArchitectureClick = (e: React.MouseEvent) => {
    if (onViewArchitecture) {
      e.preventDefault();
      e.stopPropagation();
      onViewArchitecture(project);
    }
  };

  return (
    <article className={`relative h-full bg-gradient-to-br ${categoryColors[project.category]} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col border p-6 ${featured ? 'md:col-span-2' : ''}`}>

      {/* Image Section */}
      {project.imageUrl ? (
        <div className={`relative w-full ${featured ? 'h-64' : 'h-44'} bg-zinc-950 rounded-xl overflow-hidden mb-6 group/image cursor-pointer`}>
          <Link href={`/projects/${project.id}`}>
            <Image
              src={project.imageUrl}
              alt={`${project.title} preview`}
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>

          {/* Hover actions */}
          <div className="absolute inset-0 bg-black/75 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
            {project.repoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.repoUrl!)}
                className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-blue-400 hover:border-zinc-700 transition-colors"
                aria-label="View Code"
              >
                <Github size={18} className="text-zinc-300" />
              </button>
            )}
            {project.demoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.demoUrl!)}
                className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg hover:text-blue-400 hover:border-zinc-700 transition-colors"
                aria-label="View Demo"
              >
                <ExternalLink size={18} className="text-zinc-300" />
              </button>
            )}
            {onViewArchitecture && (
              <button
                onClick={handleViewArchitectureClick}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Cpu size={14} /> Arch Overview
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={`relative w-full ${featured ? 'h-64' : 'h-44'} bg-zinc-950 border border-zinc-900/60 rounded-xl mb-6 flex items-center justify-center`}>
          <div className="text-4xl opacity-20">🚀</div>
        </div>
      )}

      {/* Content Section */}
      <Link href={`/projects/${project.id}`} className="flex flex-col flex-grow group">
        <div className="flex items-center justify-between mb-3.5">
          <span className={`text-xs font-mono font-bold tracking-wider uppercase ${categoryTextColors[project.category]}`}>
            {project.category}
          </span>
          <ArrowUpRight
            size={18}
            className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          />
        </div>

        {/* Metrics Strip */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-3.5 pb-3 border-b border-zinc-800/50">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-baseline gap-1">
                <span className={`text-xl font-bold font-mono ${metric.color}`}>{metric.value}</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <h3 className={`font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-snug ${featured ? 'text-2xl' : 'text-lg'}`}>
          {project.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-4 text-xs flex-grow">
          {project.subtitle}
        </p>

        {/* Action Button Row */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-900">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 max-w-[70%]">
            {project.techStack.slice(0, featured ? 4 : 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > (featured ? 4 : 3) && (
              <span className="text-[9px] font-mono text-zinc-600 px-1 py-0.5">
                +{project.techStack.length - (featured ? 4 : 3)}
              </span>
            )}
          </div>

          {/* Quick Arch Button */}
          {onViewArchitecture && (
            <button
              onClick={handleViewArchitectureClick}
              className="text-[11px] font-mono text-blue-400 hover:text-white flex items-center gap-1 bg-blue-500/10 hover:bg-blue-600 border border-blue-500/20 hover:border-blue-500 px-2 py-1 rounded transition-all cursor-pointer"
            >
              <Cpu size={12} />
              Arch
            </button>
          )}
        </div>
      </Link>
    </article>
  );
}
