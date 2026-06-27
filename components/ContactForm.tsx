'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Terminal, CheckCircle } from 'lucide-react';

interface LogLine {
  text: string;
  type: 'cmd' | 'info' | 'warn' | 'success';
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [logs, setLogs] = useState<LogLine[]>([]);
  
  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const runSimulation = () => {
    setStatus('submitting');
    setLogs([]);

    const steps = [
      { text: '$ mailer --send --to ccpienaah@gmail.com', type: 'cmd' as const, delay: 0 },
      { text: '[SMTP] Connecting to mx.gmail.com:587...', type: 'info' as const, delay: 500 },
      { text: '[SMTP] Connection established. Initiating STARTTLS handshake...', type: 'info' as const, delay: 1100 },
      { text: '[TLS] Cipher Suite: ECDHE-RSA-AES256-GCM-SHA384 active.', type: 'info' as const, delay: 1700 },
      { text: '[ENCRYPT] Message envelope packaged (AES-256 payload).', type: 'info' as const, delay: 2300 },
      { text: `[TRANSMIT] Sending body payload (len: ${message.length} chars)`, type: 'info' as const, delay: 2800 },
      { text: '[SUCCESS] Queued message ID: ' + Math.random().toString(36).substring(2, 10).toUpperCase() + '-MAILGATE', type: 'success' as const, delay: 3400 },
      { text: '[SYS] Dispatched message from ' + email + ' (Name: ' + name + ')', type: 'success' as const, delay: 3900 },
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, { text: step.text, type: step.type }]);
      }, step.delay);
    });

    // Complete simulation
    setTimeout(() => {
      setStatus('success');
    }, 4500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    runSimulation();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setLogs([]);
  };

  return (
    <section id="contact" className="w-full py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Raw Fallbacks (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">
                Let&apos;s Build Something Intelligent
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I am currently open to full-time opportunities as an ML Engineer, AI Engineer, or Data Engineer across Canada. Let&apos;s discuss multi-agent systems, data workflows, or model governance pipelines.
              </p>
            </div>

            {/* Raw Text Fallbacks */}
            <div className="space-y-4 pt-4">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Direct Channels</span>
              
              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Email</span>
                  <a href="mailto:ccpienaah@gmail.com" className="text-zinc-200 hover:text-blue-400 font-mono text-sm transition-colors">
                    ccpienaah@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3 p-3 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <div className="p-2 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-lg">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">GitHub</span>
                  <a href="https://github.com/CrillyPienaah" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-blue-400 font-mono text-sm transition-colors">
                    github.com/CrillyPienaah
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 p-3 bg-zinc-900/30 border border-zinc-900 rounded-xl">
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">LinkedIn</span>
                  <a href="https://linkedin.com/in/christopher-crilly-pienaah" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-blue-400 font-mono text-sm transition-colors">
                    linkedin.com/in/christopher-crilly-pienaah
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Terminal Simulator (7 columns) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-zinc-900 rounded-2xl p-6 md:p-8">
            
            {status !== 'success' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Your Name</label>
                    <input 
                      id="form-name"
                      type="text" 
                      required
                      disabled={status === 'submitting'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="form-email" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Email Address</label>
                    <input 
                      id="form-email"
                      type="email" 
                      required
                      disabled={status === 'submitting'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-msg" className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">Message Payload</label>
                  <textarea 
                    id="form-msg"
                    rows={4}
                    required
                    disabled={status === 'submitting'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter project specs, roles, or general comments..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  ></textarea>
                </div>

                {status === 'idle' && (
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Dispatch Message
                  </button>
                )}
              </form>
            )}

            {/* Terminal Logging Section */}
            {status !== 'idle' && (
              <div className="mt-4 border border-zinc-800 rounded-xl overflow-hidden shadow-lg bg-zinc-950 font-mono text-xs">
                
                {/* Console Bar */}
                <div className="bg-zinc-900/60 px-4 py-2 flex items-center justify-between border-b border-zinc-800/80">
                  <span className="text-zinc-500 text-[10px] tracking-wider uppercase flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    smtp-delivery-daemon.sh
                  </span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
                  </div>
                </div>

                {/* Log Outputs */}
                <div className="p-4 space-y-2 h-44 overflow-y-auto bg-zinc-950/80">
                  {logs.map((log, index) => {
                    let color = 'text-zinc-400';
                    if (log.type === 'cmd') color = 'text-blue-400 font-bold';
                    else if (log.type === 'success') color = 'text-emerald-400';
                    else if (log.type === 'warn') color = 'text-yellow-400';

                    return (
                      <div key={index} className={`${color} leading-relaxed`}>
                        {log.text}
                      </div>
                    );
                  })}
                  
                  {status === 'submitting' && (
                    <div className="text-blue-400 flex items-center gap-1">
                      <span>_</span>
                      <span className="w-1.5 h-3 bg-blue-400 animate-pulse"></span>
                    </div>
                  )}

                  <div ref={logEndRef} />
                </div>
              </div>
            )}

            {/* Success Action */}
            {status === 'success' && (
              <div className="text-center py-6 space-y-4">
                <div className="inline-flex items-center justify-center p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Transmission Successful</h3>
                  <p className="text-zinc-400 text-xs mt-1">
                    Your message has been processed and routed. I will reply shortly.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-white rounded-lg text-xs font-mono transition-colors cursor-pointer"
                >
                  reset_form.sh
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
