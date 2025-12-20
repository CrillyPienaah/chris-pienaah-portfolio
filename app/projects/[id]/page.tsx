import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowLeft, Github, Globe, CheckCircle } from "lucide-react";

// 1. We keep this function to tell Next.js which pages to build
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// 2. The Type definition changes to Promise
interface ProjectDetailProps {
  params: Promise<{ id: string }>;
}

// 3. The Component becomes 'async'
export default async function ProjectDetail({ params }: ProjectDetailProps) {
  // 4. We MUST 'await' the params before using them
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full border-b border-gray-800">
        {project.imageUrl ? (
            <>
                <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover opacity-40"
                priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </>
        ) : (
            <div className="absolute inset-0 bg-gray-900" />
        )}

        {/* Title Content */}
        <div className="absolute bottom-0 w-full max-w-5xl left-1/2 -translate-x-1/2 px-6 pb-12">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
                 <span className="text-xs font-bold tracking-wider text-black bg-blue-400 px-3 py-1 rounded-full">
                    {project.category}
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
                {project.subtitle}
            </p>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-5xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: The Case Study */}
        <div className="lg:col-span-2 space-y-12">
            {project.problem && (
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">{project.problem}</p>
                </section>
            )}

            {project.solution && (
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">{project.solution}</p>
                </section>
            )}

            {project.impact && (
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Key Impact</h2>
                    <ul className="space-y-4">
                        {project.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400 text-lg">
                                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
            
            {/* Fallback if no case study data exists */}
            {!project.problem && (
               <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
               </section>
            )}
        </div>

        {/* RIGHT COLUMN: Metadata & Links */}
        <div className="space-y-8">
            <div className="p-6 border border-gray-800 rounded-2xl bg-gray-900/30">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                        <span key={t} className="text-sm bg-black border border-gray-700 px-3 py-1 rounded text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" className="flex justify-center items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
                    <Github className="w-5 h-5" /> View Code
                    </a>
                )}
                {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" className="flex justify-center items-center gap-2 border border-gray-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                    <Globe className="w-5 h-5" /> Live Demo
                    </a>
                )}
            </div>
        </div>

      </div>
    </main>
  );
}