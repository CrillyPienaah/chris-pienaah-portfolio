// ADD THIS ENTRY to data/projects.ts inside the projects array
// Place it SECOND in the array, right after sme-growth-copilot
// so it appears as the first project in the "More Projects" grid

  {
    id: "genai-reliability-framework",
    title: "GenAI Reliability Framework",
    subtitle: "Production-grade LLM evaluation harness for regulated medical and financial workflows — OSFI E-23 aligned.",
    category: "Flagship AI",
    techStack: ["Python", "LangGraph", "FastAPI", "Next.js", "OpenAI", "Supabase", "GCP Vertex AI", "GitHub Actions"],
    imageUrl: "/projects/genai-reliability-cover.png",
    repoUrl: "https://github.com/CrillyPienaah/genai-reliability-framework",
    demoUrl: "https://genai-reliability-framework.vercel.app",
    featured: true,
    description: "Automated validation pipeline that catches LLM hallucinations before they reach production — with bootstrapped CI gates and OSFI E-23 model risk alignment.",
    problem: "Deploying LLMs in regulated industries requires proof that outputs are accurate and traceable. Traditional CI/CD pipelines test whether code breaks — they have no mechanism to detect when a model's judgment degrades after a prompt change or model upgrade.",
    solution: "Built a 5-node LangGraph pipeline: retrieve source context → generate response → deterministic entity grounding check → LLM-as-judge scoring → CI/CD gate. Bootstrapped confidence intervals (n=1,000 resamples) gate deployments on statistical significance, not raw accuracy numbers.",
    impact: [
      "93.3% medical accuracy with 95% CI [90.8%, 96.0%] across 30 clinical test cases",
      "93.5% financial compliance accuracy [89.2%, 97.0%] across 20 OSFI-framed test cases",
      "100% factual grounding score — every entity verified against source documents",
      "CI/CD gate passing on both domains — $0.0002 average cost per evaluation",
      "OSFI E-23 model risk management alignment for Canadian federally regulated institutions"
    ]
  },
