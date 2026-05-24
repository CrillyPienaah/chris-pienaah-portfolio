'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const projectMetrics: Record<string, { value: string; label: string; color: string }[]> = {
    'luminamed': [
      { value: '92%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '-40%', label: 'time saved', color: 'text-blue-400' }
    ],
    'daavi': [
      { value: '95%', label: 'fraud filtering', color: 'text-emerald-400' }
    ],
    'hyperlocal-ad': [
      { value: '94%', label: 'faster setup', color: 'text-violet-400' }
    ],
    'customer-churn': [
      { value: '86.93%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '2x', label: 'sensitivity', color: 'text-blue-400' }
    ],
    'propensity-modeling': [
      { value: '93%', label: 'AUC', color: 'text-blue-400' },
      { value: '3x', label: 'ROI lift', color: 'text-emerald-400' }
    ],
    'hud-inspections': [
      { value: '87%', label: 'accuracy', color: 'text-emerald-400' },
      { value: '$500K+', label: 'savings', color: 'text-blue-400' }
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
    "Flagship AI": "from-blue-500/20 to-purple-500/20 border-blue-500/30",
    "Data Engineering": "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    "Machine Learning": "from-orange-500/20 to-red-500/20 border-orange-500/30",
    "Product Strategy": "from-violet-500/20 to-pink-500/20 border-violet-500/30"
  };

  const categoryTextColors: Record<string, string> = {
    "Flagship AI": "text-blue-400",
    "Data Engineering": "text-emerald-400",
    "Machine Learning": "text-orange-400",
    "Product Strategy": "text-violet-400"
  };

  const handleLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className={`relative h-full bg-gradient-to-br ${categoryColors[project.category]} backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col border ${featured ? 'p-8 md:col-span-2' : 'p-6'}`}>

      {/* Image Section */}
      {project.imageUrl ? (
        <div className={`relative w-full ${featured ? 'h-64' : 'h-48'} bg-gray-900/50 rounded-xl overflow-hidden mb-6 group/image cursor-pointer`}>
          <Link href={`/projects/${project.id}`}>
            <Image
              src={project.imageUrl}
              alt={`${project.title} preview`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
            {project.repoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.repoUrl!)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={20} className="text-white" />
              </button>
            )}
            {project.demoUrl && (
              <button
                onClick={(e) => handleLinkClick(e, project.demoUrl!)}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={20} className="text-white" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={`relative w-full ${featured ? 'h-64' : 'h-48'} bg-gradient-to-br ${categoryColors[project.category]} rounded-xl mb-6 flex items-center justify-center`}>
          <div className="text-6xl opacity-20">🚀</div>
        </div>
      )}

      {/* Content Section */}
      <Link href={`/projects/${project.id}`} className="flex flex-col flex-grow group">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-bold tracking-wider uppercase ${categoryTextColors[project.category]}`}>
            {project.category}
          </span>
          <ArrowUpRight
            size={20}
            className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />
        </div>

        {/* Metrics Strip */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-gray-800/50">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-baseline gap-1.5">
                <span className={`text-2xl font-bold ${metric.color}`}>{metric.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">{metric.label}</span>
              </div>
            ))}
          </div>
        )}

        <h3 className={`font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 leading-tight ${featured ? 'text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>

        <p className={`text-gray-400 leading-relaxed mb-6 flex-grow ${featured ? 'text-base' : 'text-sm'}`}>
          {project.subtitle}
        </p>

        {/* Impact for Featured */}
        {project.impact && project.impact.length > 0 && featured && (
          <div className="mb-6 p-4 bg-black/20 rounded-lg border border-gray-800/50">
            <p className="text-sm font-semibold text-gray-300 mb-2">Key Impact:</p>
            <p className="text-sm text-gray-400">{project.impact[0]}</p>
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.slice(0, featured ? 8 : 5).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-gray-300 bg-gray-900/50 px-3 py-1.5 rounded-full border border-gray-700/50 hover:border-gray-600 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > (featured ? 8 : 5) && (
            <span className="text-xs font-medium text-gray-500 px-3 py-1.5">
              +{project.techStack.length - (featured ? 8 : 5)}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
