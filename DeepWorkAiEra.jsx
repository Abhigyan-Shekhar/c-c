import React, { useEffect } from 'react';

const DeepWorkAiEra = () => {
  useEffect(() => {
    document.title = 'Deep Work in the AI Era: Productivity Strategies for 2025 | Future-Proof Your Focus';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Master deep work in the AI age. Learn which tasks require human focus, how to use AI as a focus amplifier, and productivity strategies that matter in 2025 and beyond.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Master deep work in the AI age. Learn which tasks require human focus, how to use AI as a focus amplifier, and productivity strategies that matter in 2025 and beyond.';
      document.head.appendChild(meta);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Deep Work in the AI Era: Productivity Strategies for 2025",
      "description": "How to adapt deep work practices for the AI age and future-proof your productivity",
      "author": {
        "@type": "Organization",
        "name": "Cram and Conquer"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cram and Conquer",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.cramandconquer.com/logo.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">🤖</span>
            AI ERA PRODUCTIVITY
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Deep Work in the AI Era
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AI can write essays, code apps, and analyze data—so what's left for humans? 
            The answer: Deep Work 2.0. Here's how to stay productive and valuable in 2025.
          </p>
        </header>

        {/* The Paradigm Shift */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            The Productivity Paradigm Has Shifted
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-950/50 rounded-xl p-6 border border-red-500/30">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ Old Model (Pre-2023)</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Productivity = Getting more done faster</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Value in executing routine tasks efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep work meant "uninterrupted focus time"</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Humans did all cognitive labor</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-950/50 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-green-400 mb-4">✅ New Model (2025+)</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Productivity = Creating what AI can't</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Value in original thinking, not execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep work = AI-augmented creative synthesis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Humans direct, AI executes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
            <p className="text-lg text-slate-200 leading-relaxed">
              <strong className="text-cyan-400">Bottom Line:</strong> The skills that made you 
              productive in 2020 won't cut it in 2025. AI handles execution; humans must excel 
              at strategic thinking, creative connection-making, and complex problem framing.
            </p>
          </div>
        </section>

        {/* What AI Can't Do */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
            What AI Still Can't Do (And Why That Matters)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎨",
                title: "Original Creative Synthesis",
                description: "AI remixes existing patterns. Humans create entirely new frameworks by connecting disparate domains.",
                example: "Combining neuroscience + UX design to invent new interaction paradigms"
              },
              {
                icon: "🤝",
                title: "High-Stakes Relationship Building",
                description: "AI can't read micro-expressions, build trust, or navigate political nuance in human organizations.",
                example: "Negotiating partnerships, managing team dynamics, leadership"
              },
              {
                icon: "🎯",
                title: "Strategic Problem Framing",
                description: "AI answers questions brilliantly. Humans must ask the RIGHT questions in the first place.",
                example: "Identifying what problem actually needs solving vs. what customers say"
              },
              {
                icon: "💡",
                title: "Ethical Judgment in Gray Areas",
                description: "AI follows rules. Humans navigate moral ambiguity where competing values clash.",
                example: "Deciding when to break company policy for customer welfare"
              },
              {
                icon: "🔮",
                title: "Long-Term Vision Setting",
                description: "AI optimizes for knowable outcomes. Humans imagine futures that don't exist yet.",
                example: "Defining a 10-year company vision in an uncertain market"
              },
              {
                icon: "🧩",
                title: "Cross-Domain Pattern Recognition",
                description: "AI is domain-specific. Humans spot analogies across wildly different fields.",
                example: "Applying lessons from jazz improvisation to software development"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="bg-slate-950/50 rounded-lg p-3 border border-slate-700">
                  <p className="text-xs text-slate-400">
                    <strong className="text-cyan-400">Example:</strong> {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Deep Work 2.0 Framework */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Deep Work 2.0 Framework
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1",
                title: "AI-Powered Research Sprint",
                duration: "30 minutes",
                description: "Use AI to gather information, synthesize sources, identify knowledge gaps.",
                tools: ["ChatGPT", "Perplexity", "Claude", "Consensus"],
                human: "Asking strategic questions, evaluating source quality, spotting contradictions"
              },
              {
                phase: "Phase 2",
                title: "Deep Thinking Block",
                duration: "90 minutes",
                description: "Humans-only synthesis. Connect dots AI can't see. Generate original frameworks.",
                tools: ["Paper notebook", "Whiteboard", "Obsidian", "Mind mapping"],
                human: "Creating novel connections, identifying patterns, ethical evaluation"
              },
              {
                phase: "Phase 3",
                title: "AI-Assisted Production",
                duration: "60 minutes",
                description: "Use AI to execute your creative vision—draft, code, design, analyze data.",
                tools: ["GPT-4", "Midjourney", "GitHub Copilot", "Notion AI"],
                human: "Directing AI, quality control, maintaining strategic coherence"
              },
              {
                phase: "Phase 4",
                title: "Human Refinement",
                duration: "45 minutes",
                description: "Add nuance, personality, and wisdom that AI can't replicate. Polish for humans.",
                tools: ["Your brain", "Peer feedback", "Domain expertise"],
                human: "Adding voice, ethical review, strategic editing, final polish"
              }
            ].map((phase, i) => (
              <div key={i} className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 border-l-4 border-cyan-500">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-3">
                  <div>
                    <div className="text-cyan-400 font-bold text-sm mb-1">{phase.phase}</div>
                    <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                  </div>
                  <div className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full font-bold text-sm">
                    {phase.duration}
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">{phase.description}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-sm font-bold text-purple-400 mb-2">🤖 AI Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.tools.map((tool, j) => (
                        <span key={j} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
                    <h4 className="text-sm font-bold text-cyan-400 mb-2">👤 Human Role</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{phase.human}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Strategies */}
        <section className="mb-16 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-10 border border-purple-500/30">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-300">
            10 Practical Strategies for AI-Era Deep Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "1. The 10-Prompt Rule",
                content: "Before using AI output, iterate through 10+ prompts to get from generic to genius."
              },
              {
                title: "2. Manual Mondays",
                content: "One day/week, do core creative work without ANY AI. Keeps human muscles strong."
              },
              {
                title: "3. The Synthesis Session",
                content: "30 min daily: read AI outputs, handwrite connections in notebook. AI finds info; you find meaning."
              },
              {
                title: "4. Reverse Prompting",
                content: "Ask AI to generate questions for YOU to answer. Flips the script—you become the oracle."
              },
              {
                title: "5. The Human-Only Hour",
                content: "First hour of deep work = zero AI. Pure human thinking builds originality before automation."
              },
              {
                title: "6. Cross-Domain Fridays",
                content: "Study field unrelated to your work. AI can't make these creative leaps—you can."
              },
              {
                title: "7. The Stupidity Check",
                content: "Ask: 'Could AI have created this?' If yes, you're replaceable. Go deeper."
              },
              {
                title: "8. Analog Ideation",
                content: "Whiteboard/paper for initial brainstorming. Physical writing activates different neural networks."
              },
              {
                title: "9. The Teaching Test",
                content: "If you can't explain it without AI-generated notes, you didn't learn it—AI did."
              },
              {
                title: "10. Strategic AI Fasting",
                content: "1 week/quarter: zero AI tools. Forces skill maintenance and reveals over-dependence."
              }
            ].map((strategy, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all">
                <h3 className="text-lg font-bold text-purple-300 mb-2">{strategy.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{strategy.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills to Develop */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
            Future-Proof Skills to Develop NOW
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-cyan-300 mb-4">🧠 Cognitive Skills</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Systems thinking</li>
                <li>• First-principles reasoning</li>
                <li>• Analogical thinking</li>
                <li>• Metacognition (thinking about thinking)</li>
                <li>• Bayesian updating (changing beliefs with evidence)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">🎨 Creative Skills</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Conceptual blending</li>
                <li>• Divergent thinking</li>
                <li>• Aesthetic judgment</li>
                <li>• Storytelling & narrative</li>
                <li>• Cross-domain pattern recognition</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-xl p-6 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-300 mb-4">🤝 Human Skills</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Empathy & emotional intelligence</li>
                <li>• Persuasion & negotiation</li>
                <li>• Trust building</li>
                <li>• Leadership in ambiguity</li>
                <li>• Ethical reasoning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real Examples */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Real-World Examples: Before & After AI
            </span>
          </h2>

          <div className="space-y-6">
            {[
              {
                role: "Student Writing Essay",
                before: "Research papers → Read → Take notes → Write draft → Edit (12 hours)",
                after: "Frame argument → AI research sprint → Human synthesis → AI draft → Human refinement (4 hours, 3x better)",
                key: "Student focuses on original argumentation, not summarizing sources"
              },
              {
                role: "Software Developer",
                before: "Code entire feature → Debug → Refactor → Deploy (2 weeks)",
                after: "Design architecture → AI generates boilerplate → Human review/customize → Test (3 days)",
                key: "Developer focuses on system design, not syntax"
              },
              {
                role: "Marketing Manager",
                before: "Brainstorm → Write copy → A/B test → Analyze (1 month)",
                after: "Strategic positioning → AI generates 50 variants → Human selects 5 → AI optimizes (1 week)",
                key: "Human provides brand voice and strategic direction"
              }
            ].map((example, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">{example.role}</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <div className="text-red-400 font-bold text-sm mb-2">❌ OLD WAY</div>
                    <p className="text-slate-300 text-sm">{example.before}</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-400 font-bold text-sm mb-2">✅ NEW WAY</div>
                    <p className="text-slate-300 text-sm">{example.after}</p>
                  </div>
                </div>
                <div className="bg-cyan-500/10 border-l-4 border-cyan-500 rounded-r-lg p-4">
                  <p className="text-cyan-300 text-sm">
                    <strong>Key Insight:</strong> {example.key}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Warning Section */}
        <section className="mb-16 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 border-2 border-orange-500/50">
          <div className="flex items-start">
            <div className="text-5xl mr-4">⚠️</div>
            <div>
              <h2 className="text-3xl font-bold text-orange-300 mb-4">
                The Skill Atrophy Trap
              </h2>
              <p className="text-slate-200 leading-relaxed mb-4">
                Here's the danger: AI makes certain skills SO easy, you stop practicing them. 
                Then one day, you need that skill and realize you can't do it anymore without AI.
              </p>
              <div className="bg-slate-950/50 rounded-lg p-5 border border-orange-500/30">
                <h3 className="font-bold text-orange-300 mb-3">Skills Being Lost Right Now:</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-slate-300 text-sm">
                  <li>• Mental math</li>
                  <li>• Spelling & grammar intuition</li>
                  <li>• Research methodology</li>
                  <li>• Writing from scratch</li>
                  <li>• Debugging without AI</li>
                  <li>• Creative problem-solving</li>
                </ul>
              </div>
              <p className="text-orange-200 mt-4 font-bold">
                Solution: Practice core skills manually 20% of the time, even when AI could do it faster.
              </p>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
            Your 30-Day Action Plan
          </h2>

          <div className="space-y-4">
            {[
              {
                week: "Week 1",
                title: "Audit Your AI Dependence",
                tasks: ["List every task you use AI for", "Identify which skills you're losing", "Try 1 major task fully manual"]
              },
              {
                week: "Week 2",
                title: "Implement Deep Work 2.0",
                tasks: ["Test the 4-phase framework", "Schedule AI-free thinking blocks", "Journal: What can only YOU create?"]
              },
              {
                week: "Week 3",
                title: "Develop Future-Proof Skills",
                tasks: ["Choose 1 cognitive + 1 creative skill", "Daily practice: 30 min each", "Read books from unrelated fields"]
              },
              {
                week: "Week 4",
                title: "Create Your Hybrid System",
                tasks: ["Document your AI+Human workflow", "Set boundaries (what AI never touches)", "Measure: Are you more valuable than AI?"]
              }
            ].map((week, i) => (
              <div key={i} className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm">{week.week}</div>
                    <h3 className="text-xl font-bold text-white">{week.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {week.tasks.map((task, j) => (
                    <li key={j} className="flex items-start text-slate-300">
                      <svg className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">The Future Belongs to AI-Augmented Humans</h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Not humans who fear AI. Not humans who blindly trust AI. But humans who master the 
            dance between algorithmic power and irreplaceable human creativity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors text-lg">
              Download Deep Work 2.0 Workbook
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors border-2 border-white/30 text-lg">
              Join AI-Era Community
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default DeepWorkAiEra;