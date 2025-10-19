import React, { useEffect } from 'react';

const VirtualBodyDoubles = () => {
  useEffect(() => {
    document.title = 'Virtual Body Doubling: The ADHD Productivity Hack Everyone\'s Using in 2025';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Discover virtual body doubling platforms that triple productivity for ADHD brains. Compare Focusmate, Flow Club, Study Together, and AI-powered accountability partners.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover virtual body doubling platforms that triple productivity for ADHD brains. Compare Focusmate, Flow Club, Study Together, and AI-powered accountability partners.';
      document.head.appendChild(meta);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Virtual  Body Doubling: The ADHD Productivity Hack Everyone's Using in 2025",
      "description": "Complete guide to virtual body doubling platforms and techniques for ADHD productivity",
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <article className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">👥</span>
            TRENDING: BODY DOUBLING
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Virtual Body Doubling:<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              The ADHD Game-Changer
            </span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Work alongside someone (virtually) and watch your productivity triple. Here's why body 
            doubling is exploding in 2025—and which platforms actually work.
          </p>
        </header>

        {/* What Is Body Doubling */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            What Is Body Doubling? (And Why It Works)
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
            <p className="text-lg text-slate-800 leading-relaxed mb-4">
              <strong className="text-purple-700">Body doubling</strong> is when you do a task while 
              someone else is present—not helping, just <em>there</em>. For ADHD brains, this passive 
              accountability creates "social pressure" that makes starting tasks 10x easier.
            </p>
            <div className="flex items-start bg-white rounded-lg p-4">
              <div className="text-3xl mr-3">🧠</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">The Neuroscience</h3>
                <p className="text-slate-700 text-sm">
                  Your brain's mirror neuron system activates when observing others work. This "social 
                  facilitation effect" triggers task initiation and sustained focus—especially powerful 
                  for dopamine-deficient ADHD brains.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-5">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-bold text-slate-900 mb-2">Reduces Activation Energy</h3>
              <p className="text-sm text-slate-700">Starting tasks becomes effortless with parallel play</p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5">
              <div className="text-3xl mb-2">⏰</div>
              <h3 className="font-bold text-slate-900 mb-2">Creates Time Structure</h3>
              <p className="text-sm text-slate-700">Sessions have clear start/end times</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-5">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">Anchors Attention</h3>
              <p className="text-sm text-slate-700">Knowing someone's working keeps you on task</p>
            </div>
          </div>
        </section>

        {/* Platform Comparison */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Best Virtual Body Doubling Platforms (2025)
          </h2>

          <div className="space-y-6">
            {[
              {
                name: "Focusmate",
                rating: "⭐ 9.5/10",
                type: "1-on-1 Video Sessions",
                features: [
                  "50-minute sessions with matched partners",
                  "Video on, cameras required (accountability++)",
                  "Global community, 24/7 availability",
                  "Share goals at start/end of session"
                ],
                price: "3 sessions/week free, Unlimited $9.99/mo",
                bestFor: "Deep work, thesis writing, admin tasks",
                color: "blue"
              },
              {
                name: "Flow Club",
                rating: "⭐ 9/10",
                type: "Group Sessions with Facilitators",
                features: [
                  "Host-led sessions with structured check-ins",
                  "25-90 minute flexible session lengths",
                  "Camera optional, less pressure",
                  "Community chat and progress tracking"
                ],
                price: "$24/month or $8/session",
                bestFor: "Those who prefer group energy over 1-on-1",
                color: "purple"
              },
              {
                name: "Study Together",
                rating: "⭐ 8.5/10",
                type: "24/7 Live Study Rooms",
                features: [
                  "Drop-in YouTube livestreams",
                  "No signup required, completely free",
                  "Pomodoro timer on screen",
                  "Chat with other studiers"
                ],
                price: "100% Free",
                bestFor: "Students, casual users, broke college kids",
                color: "green"
              },
              {
                name: "Caveday",
                rating: "⭐ 8/10",
                type: "Structured Deep Work Sprints",
                features: [
                  "Guided 3-hour productivity sessions",
                  "Facilitator keeps group on track",
                  "Music + ambient sounds",
                  "Post-session accountability"
                ],
                price: "$40/month for unlimited sessions",
                bestFor: "Entrepreneurs, freelancers, big projects",
                color: "orange"
              },
              {
                name: "Deepwork.ai (NEW)",
                rating: "⭐ 7.5/10",
                type: "AI-Powered Virtual Partner",
                features: [
                  "AI avatar 'works' alongside you on screen",
                  "Adapts to your focus patterns",
                  "No social anxiety, always available",
                  "Gentle accountability prompts"
                ],
                price: "$15/month",
                bestFor: "Social anxiety, odd hours, full control",
                color: "indigo"
              }
            ].map((platform, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-md border-2 border-${platform.color}-200 hover:shadow-xl transition-all`}>
                <div className="flex flex-wrap justify-between items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{platform.name}</h3>
                    <p className={`text-${platform.color}-600 font-semibold text-sm`}>{platform.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold mb-1">
                      {platform.rating}
                    </div>
                    <div className="text-green-600 font-bold text-sm">{platform.price}</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <svg className={`w-5 h-5 text-${platform.color}-500 mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`bg-${platform.color}-50 rounded-lg p-4 border border-${platform.color}-200`}>
                  <p className="text-sm text-slate-800">
                    <strong className={`text-${platform.color}-700`}>Best for:</strong> {platform.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Get Started */}
        <section className="mb-12 bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🚀 Getting Started with Body Doubling
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-xl font-bold mb-2">Choose Your Style</h3>
              <p className="text-slate-200 text-sm">
                Introverted? Try Study Together or Deepwork.ai. Extroverted? Focusmate or Flow Club. 
                Test 2-3 platforms before committing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-xl font-bold mb-2">Start Small</h3>
              <p className="text-slate-200 text-sm">
                Begin with 25-minute sessions. Build up to 50-90 minutes as your focus stamina improves. 
                Don't overcommit early.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-xl font-bold mb-2">Prepare Your Task</h3>
              <p className="text-slate-200 text-sm">
                Know EXACTLY what you'll work on before the session starts. Body doubling helps you 
                execute, not plan. Have materials ready.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">4️⃣</div>
              <h3 className="text-xl font-bold mb-2">Create Rituals</h3>
              <p className="text-slate-200 text-sm">
                Same time daily builds habits. Morning sessions for deep work, afternoon for admin. 
                Consistency = compounding results.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ❌ Common Body Doubling Mistakes (And How to Avoid Them)
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Picking Tasks That Are Too Vague</h3>
              <p className="text-slate-700 text-sm mb-3">
                ❌ "Work on thesis" → ✅ "Write 500 words of Chapter 3, Section 2.1"
              </p>
              <p className="text-xs text-slate-600 italic">
                Specificity prevents mid-session decision paralysis
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Treating It Like Social Time</h3>
              <p className="text-slate-700 text-sm mb-3">
                Body doubling ≠ chatting with friends. Keep check-ins brief. Work is the focus.
              </p>
              <p className="text-xs text-slate-600 italic">
                Save deep conversations for after sessions
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Skipping the Warm-Up</h3>
              <p className="text-slate-700 text-sm mb-3">
                Start with 5 minutes of easy tasks (organize desk, check email) to build momentum.
              </p>
              <p className="text-xs text-slate-600 italic">
                Cold-starting hard tasks often leads to freezing
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6">
              <h3 className="font-bold text-red-900 mb-2">Multitasking During Sessions</h3>
              <p className="text-slate-700 text-sm mb-3">
                Phone on silent, notifications off, single task only. Respect your partner's focus too.
              </p>
              <p className="text-xs text-slate-600 italic">
                Multitasking defeats the entire purpose
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            💬 Real Success Stories
          </h2>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 italic mb-3">
                "I went from writing 200 words/day to 2,000+ using Focusmate. Finished my thesis 3 months 
                early. Game. Changer."
              </p>
              <p className="text-sm text-slate-600">— Sarah, PhD Student</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 italic mb-3">
                "As a freelancer with severe ADHD, Flow Club literally saved my business. I can finally 
                do admin tasks without wanting to die."
              </p>
              <p className="text-sm text-slate-600">— Marcus, Freelance Designer</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-slate-700 italic mb-3">
                "Study Together got me through finals week. Free, no pressure, perfect for late-night 
                cramming with global students."
              </p>
              <p className="text-sm text-slate-600">— Priya, College Sophomore</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Quick Comparison: Which Platform Is Right for You?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Platform</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Camera Required</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Best Session Length</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Social Anxiety Friendly</th>
                  <th className="px-4 py-3 text-center font-bold text-slate-900">Price/Month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { name: "Focusmate", camera: "✅ Yes", length: "50 min", anxiety: "❌ Low", price: "$9.99" },
                  { name: "Flow Club", camera: "⭐ Optional", length: "25-90 min", anxiety: "✅ Medium", price: "$24" },
                  { name: "Study Together", camera: "❌ No", length: "Flexible", anxiety: "✅ High", price: "Free" },
                  { name: "Caveday", camera: "✅ Yes", length: "3 hours", anxiety: "⭐ Medium", price: "$40" },
                  { name: "Deepwork.ai", camera: "❌ No (AI)", length: "Any", anxiety: "✅ Highest", price: "$15" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.name}</td>
                    <td className="px-4 py-3 text-center text-slate-700">{row.camera}</td>
                    <td className="px-4 py-3 text-center text-slate-700">{row.length}</td>
                    <td className="px-4 py-3 text-center text-slate-700">{row.anxiety}</td>
                    <td className="px-4 py-3 text-center font-bold text-green-600">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-10 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to 3X Your Productivity?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Pick one platform above and book your first session this week. Body doubling works—but 
            only if you actually try it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
              Try Focusmate Free
            </button>
            <button className="bg-purple-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors border-2 border-white/30">
              See All Platforms
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default VirtualBodyDoubles;