'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* GitHub Activity Section */}
        <div className="mb-12 text-center">
          <h3 className="text-lg font-semibold text-zinc-400 mb-4">Active on GitHub</h3>
          <div className="inline-block bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <img 
              src="https://ghchart.rshah.org/3b82f6/CrillyPienaah" 
              alt="Christopher's GitHub contribution chart"
              className="rounded-lg"
            />
          </div>
          <a 
            href="https://github.com/CrillyPienaah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            View Full Profile on GitHub
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-zinc-900">
          
          {/* Left Side - Name & Tech Stack */}
          <div className="text-center md:text-left">
            <p className="font-bold text-xl mb-1 text-white">Christopher Crilly Pienaah</p>
            <p className="text-zinc-500 text-sm">
              Built with Next.js, TypeScript & Tailwind CSS
            </p>
            <p className="text-zinc-600 text-xs mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/CrillyPienaah" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span className="text-sm font-mono">github</span>
            </a>
            <a 
              href="https://linkedin.com/in/christopher-crilly-pienaah" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span className="text-sm font-mono">linkedin</span>
            </a>
            <a 
              href="mailto:ccpienaah@gmail.com" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Email Christopher"
            >
              <Mail size={20} />
              <span className="text-sm font-mono">email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}