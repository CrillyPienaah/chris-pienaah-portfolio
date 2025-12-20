export default function OGImageGenerator() {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-16 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        
        {/* Header Badge */}
        <div className="flex gap-3 mb-6">
          <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-full text-blue-400 text-sm font-bold">
            MULTI-AGENT AI
          </span>
          <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-400 text-sm font-bold">
            FULL-STACK
          </span>
          <span className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-400 text-sm font-bold">
            DATA ENGINEERING
          </span>
        </div>

        {/* Name */}
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
          Christopher Crilly<br />Pienaah
        </h1>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-300 mb-8">
          AI/ML Product Engineer · Full-Stack Builder · Data Engineer
        </h2>

        {/* Value Prop */}
        <p className="text-2xl text-gray-400 leading-relaxed mb-10">
          Building intelligent systems for underserved markets—from clinical intelligence to verification-first real estate platforms.
        </p>

        {/* Stats */}
        <div className="flex gap-8 text-sm font-mono text-gray-500">
          <div>
            <span className="text-blue-400 font-bold text-2xl">4+</span>
            <span className="ml-2">Production MVPs</span>
          </div>
          <div>
            <span className="text-emerald-400 font-bold text-2xl">3.96</span>
            <span className="ml-2">GPA · Northeastern</span>
          </div>
          <div>
            <span className="text-violet-400 font-bold text-2xl">May '26</span>
            <span className="ml-2">Available</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            christopherpienaah.com
          </div>
          <div className="flex gap-4 text-gray-500 text-sm">
            <span>github.com/CrillyPienaah</span>
            <span>•</span>
            <span>ccpienaah@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}