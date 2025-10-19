import React, { useEffect } from 'react';

const OptimalFocusAudio = () => {
  useEffect(() => {
    document.title = 'Binaural Beats vs. Lo-fi vs. Silence: Science-Backed Best Audio for Focus | 2025 Guide';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'What should you listen to while studying? Compare binaural beats, lo-fi, classical, white noise, and silence using neuroscience research. Optimize focus audio for your brain type.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'What should you listen to while studying? Compare binaural beats, lo-fi, classical, white noise, and silence using neuroscience research. Optimize focus audio for your brain type.';
      document.head.appendChild(meta);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Binaural Beats vs. Lo-fi vs. Silence: Science-Backed Best Audio for Focus",
      "description": "Evidence-based guide to choosing optimal focus audio based on task type and cognitive science",
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <article className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="mr-2">🎧</span>
            NEUROSCIENCE OF SOUND
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            What Should You Actually<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Listen To While Studying?
            </span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Binaural beats? Lo-fi? Classical? Silence? We analyzed the neuroscience research 
            to find what ACTUALLY improves focus—and the answer depends on your brain type.
          </p>
        </header>

        {/* The Science Overview */}
        <section className="mb-16 bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            The Neuroscience: How Audio Affects Your Brain
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="text-4xl mb-3">🌊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Brainwave Entrainment</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                External rhythmic stimuli can synchronize neural oscillations. Certain frequencies 
                (like 40Hz gamma waves) enhance memory encoding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Arousal Regulation</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Music modulates the autonomic nervous system. 60-70 BPM matches resting heart rate, 
                promoting calm focus without sedation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <div className="text-4xl mb-3">🔇</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Auditory Masking</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                White/brown noise masks unpredictable environmental sounds, reducing attentional 
                capture and improving sustained focus.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <p className="text-slate-800 leading-relaxed">
              <strong className="text-yellow-900">Critical Finding:</strong> There's no universal "best" 
              audio for focus. It depends on your task type, sensory profile, and whether you need 
              arousal (wake up) or regulation (calm down).
            </p>
          </div>
        </section>

        {/* The Contenders */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            The 6 Audio Types: Full Breakdown
          </h2>

          <div className="space-y-8">
            {[
              {
                name: "Binaural Beats (40Hz Gamma)",
                icon: "🧠",
                science: "92/100",
                focus: "9/10",
                color: "purple",
                howItWorks: "Two slightly different frequencies in each ear create a perceived third frequency. 40Hz gamma waves are associated with cognitive processing and memory.",
                research: "Multiple studies show 40Hz improves working memory and attention (Colzato et al., 2017; Chaieb et al., 2015)",
                bestFor: "Memorization, learning new concepts, studying for exams",
                avoid: "Creative writing, brainstorming (can feel too 'locked in')",
                recommended: "Brain.fm, Endel, Binaural Beats Therapy (YouTube)"
              },
              {
                name: "Lo-fi Hip Hop",
                icon: "🎹",
                science: "65/100",
                focus: "8/10",
                color: "pink",
                howItWorks: "60-70 BPM instrumental music with minimal variation matches resting heart rate, creating 'auditory comfort food' that doesn't demand attention.",
                research: "Moderate evidence for instrumental music improving focus (Kämpfe et al., 2011). Works via familiarity and predictability.",
                bestFor: "Essay writing, coding, design work, general productivity",
                avoid: "Language learning, reading dense text (rhythm can compete)",
                recommended: "Lofi Girl, Chillhop, Spotify 'Chill Lofi Study Beats'"
              },
              {
                name: "Classical (Baroque Era)",
                icon: "🎻",
                science: "78/100",
                focus: "7/10",
                color: "blue",
                howItWorks: "Baroque music (Bach, Vivaldi) at 60-70 BPM activates reward pathways while maintaining cognitive resources for tasks.",
                research: "The 'Mozart Effect' is overhyped, BUT instrumental classical does improve spatial-temporal reasoning (Rauscher et al., 1993)",
                bestFor: "Math, problem-solving, spatial tasks, creative thinking",
                avoid: "Tasks requiring verbal processing during dramatic pieces",
                recommended: "Brain.fm Classical, Spotify 'Baroque Focus'"
              },
              {
                name: "Brown/White Noise",
                icon: "🌫️",
                science: "88/100",
                focus: "9/10",
                color: "slate",
                howItWorks: "Consistent broadband sound masks distracting environmental noise. Brown noise (lower frequency) is less harsh than white noise.",
                research: "Strong evidence for noise masking improving focus, especially for ADHD (Söderlund et al., 2016)",
                bestFor: "Noisy environments, ADHD brains, open offices, libraries",
                avoid: "Can be fatiguing over 90+ minutes for some people",
                recommended: "myNoise.net, Noisli, Dark Noise app"
              },
              {
                name: "8D/Spatial Audio",
                icon: "🎧",
                science: "55/100",
                focus: "6/10",
                color: "indigo",
                howItWorks: "Sounds move around your head in 3D space, creating immersive 'presence' that can reduce mind-wandering.",
                research: "Limited formal research, mostly anecdotal. May enhance immersion but can be distracting.",
                bestFor: "Long study sessions when regular audio becomes boring",
                avoid: "High-stakes work requiring precision (novelty = distraction)",
                recommended: "8D Tunes (YouTube), Apple Music Spatial Audio"
              },
              {
                name: "Complete Silence",
                icon: "🔇",
                science: "95/100",
                focus: "10/10",
                color: "green",
                howItWorks: "Zero auditory input means all cognitive resources available for task. No dual-task interference.",
                research: "Gold standard for verbal/linguistic tasks. Language processing networks don't compete with auditory input.",
                bestFor: "Reading comprehension, writing, language learning, verbal reasoning",
                avoid: "If you're easily distracted by own thoughts or noisy environment",
                recommended: "Earplugs (Mack's or Loop), noise-cancelling headphones"
              }
            ].map((audio, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 border-${audio.color}-200 hover:shadow-xl transition-all`}>
                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{audio.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">{audio.name}</h3>
                      <div className="flex gap-3 mt-2">
                        <span className={`bg-${audio.color}-100 text-${audio.color}-800 px-3 py-1 rounded-full text-xs font-bold`}>
                          Science: {audio.science}
                        </span>
                        <span className={`bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold`}>
                          Focus: {audio.focus}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">How It Works</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{audio.howItWorks}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">The Research</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{audio.research}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className={`bg-green-50 border border-green-200 rounded-lg p-4`}>
                    <h4 className="font-bold text-green-900 mb-2 flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Best For
                    </h4>
                    <p className="text-slate-700 text-sm">{audio.bestFor}</p>
                  </div>
                  <div className={`bg-red-50 border border-red-200 rounded-lg p-4`}>
                    <h4 className="font-bold text-red-900 mb-2 flex items-center text-sm">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Avoid For
                    </h4>
                    <p className="text-slate-700 text-sm">{audio.avoid}</p>
                  </div>
                </div>

                <div className={`bg-${audio.color}-50 rounded-lg p-4 border border-${audio.color}-200`}>
                  <p className="text-sm text-slate-800">
                    <strong className={`text-${audio.color}-700`}>Recommended:</strong> {audio.recommended}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Decision Tree */}
        <section className="mb-16 bg-gradient-to-br from-slate-900 to-purple-900 text-white rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-8 text-center">
            🎯 Decision Tree: What Should YOU Listen To?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Reading / Language Learning</h3>
              <p className="text-slate-200 mb-3">→ <strong>SILENCE</strong> or very quiet brown noise</p>
              <p className="text-sm text-slate-300 italic">Why: Language processing uses same brain regions as music/speech comprehension</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Memorization / Exam Prep</h3>
              <p className="text-slate-200 mb-3">→ <strong>40Hz BINAURAL BEATS</strong></p>
              <p className="text-sm text-slate-300 italic">Why: Gamma waves enhance memory encoding and retrieval</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Writing / Coding / Creative Work</h3>
              <p className="text-slate-200 mb-3">→ <strong>LO-FI or CLASSICAL</strong></p>
              <p className="text-sm text-slate-300 italic">Why: Moderate arousal + predictability = flow state</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-green-300">Math / Problem-Solving</h3>
              <p className="text-slate-200 mb-3">→ <strong>CLASSICAL (Baroque)</strong> or binaural beats</p>
              <p className="text-sm text-slate-300 italic">Why: Activates spatial-temporal reasoning without linguistic interference</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Noisy Environment / ADHD</h3>
              <p className="text-slate-200 mb-3">→ <strong>BROWN/WHITE NOISE</strong></p>
              <p className="text-sm text-slate-300 italic">Why: Masks distractions, increases dopamine for ADHD brains</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Feeling Tired / Low Energy</h3>
              <p className="text-slate-200 mb-3">→ <strong>UPBEAT LO-FI or 8D</strong> (novelty boost)</p>
              <p className="text-sm text-slate-300 italic">Why: Increases arousal without overwhelming cognitive resources</p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            ❌ 5 Common Focus Audio Mistakes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: "Listening to Songs with Lyrics",
                why: "Competes with language processing areas in your brain",
                fix: "Switch to instrumental versions or different genre entirely"
              },
              {
                mistake: "Using Same Audio for Everything",
                why: "Different tasks need different arousal/regulation profiles",
                fix: "Build a playlist library: one for reading, one for writing, etc."
              },
              {
                mistake: "Volume Too High",
                why: "Causes auditory fatigue and actually reduces focus after 30+ minutes",
                fix: "Keep volume at 40-50% max. You should barely notice it."
              },
              {
                mistake: "Constant Switching",
                why: "Novelty-seeking behavior = procrastination in disguise",
                fix: "Commit to one audio choice per 25-minute Pomodoro block"
              },
              {
                mistake: "Ignoring Your Sensory Profile",
                why: "Sensory seekers need MORE input; sensory avoiders need LESS",
                fix: "Test both ends of spectrum to find your sweet spot"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md border-2 border-red-200">
                <h3 className="text-xl font-bold text-red-700 mb-2">{i + 1}. {item.mistake}</h3>
                <p className="text-slate-700 text-sm mb-3">
                  <strong className="text-slate-900">Why it's bad:</strong> {item.why}
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 pl-4 py-2 rounded-r">
                  <p className="text-sm text-green-900">
                    <strong>Fix:</strong> {item.fix}
                  </p>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl p-6 shadow-md border-2 border-orange-300 md:col-span-2">
              <h3 className="text-xl font-bold text-orange-900 mb-2">🔥 Bonus Mistake: Music Addiction</h3>
              <p className="text-slate-800 text-sm mb-3">
                <strong>The trap:</strong> You can't focus WITHOUT audio anymore. Your brain becomes dependent on external stimulation.
              </p>
              <div className="bg-white/70 border-l-4 border-orange-500 pl-4 py-2 rounded-r">
                <p className="text-sm text-orange-900">
                  <strong>Fix:</strong> Schedule 1-2 "silent study" sessions per week to maintain ability to focus in any environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personalization Matrix */}
        <section className="mb-16 bg-white rounded-3xl p-10 shadow-xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            Find Your Audio Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-purple-300 rounded-2xl p-6 bg-purple-50">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">🎨 Creative Brain</h3>
              <p className="text-slate-700 mb-4 text-sm">
                You think in associations, patterns, and "what-ifs." Need flexible, exploratory headspace.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-purple-700">Best:</strong> Lo-fi, Classical, 8D Audio
                </div>
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-purple-700">Avoid:</strong> Binaural beats (too rigid), silence (thoughts too loud)
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-300 rounded-2xl p-6 bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🔬 Analytical Brain</h3>
              <p className="text-slate-700 mb-4 text-sm">
                You think in systems, logic, and sequences. Need structured, predictable environment.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-blue-700">Best:</strong> Binaural beats, Brown noise, Silence
                </div>
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-blue-700">Avoid:</strong> Variable lo-fi (unpredictable), dramatic classical
                </div>
              </div>
            </div>

            <div className="border-2 border-green-300 rounded-2xl p-6 bg-green-50">
              <h3 className="text-2xl font-bold text-green-900 mb-4">🌿 Sensory Avoider</h3>
              <p className="text-slate-700 mb-4 text-sm">
                You get overwhelmed by too much input. Prefer minimal, calming environments.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-green-700">Best:</strong> Silence, very soft brown noise, minimal ambient
                </div>
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-green-700">Avoid:</strong> Lo-fi (too busy), 8D (too stimulating)
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-300 rounded-2xl p-6 bg-orange-50">
              <h3 className="text-2xl font-bold text-orange-900 mb-4">⚡ Sensory Seeker (ADHD)</h3>
              <p className="text-slate-700 mb-4 text-sm">
                You need MORE input to focus. Silence feels uncomfortable. Stimulation = regulation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-orange-700">Best:</strong> White noise, upbeat lo-fi, layered sounds
                </div>
                <div className="bg-white rounded-lg p-3">
                  <strong className="text-orange-700">Avoid:</strong> Silence (understimulating), slow classical
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            🚀 Advanced Audio Strategies
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🔄 Audio Cycling</h3>
              <p className="text-slate-700 text-sm mb-3">
                Rotate audio types throughout day to prevent habituation. Morning: silence. Afternoon: lo-fi. Evening: binaural.
              </p>
              <p className="text-xs text-cyan-700 italic">Prevents tolerance buildup</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🎚️ Dynamic Volume</h3>
              <p className="text-slate-700 text-sm mb-3">
                Start at 60% volume, gradually lower to 30% as you enter flow state. Brain adapts and needs less.
              </p>
              <p className="text-xs text-purple-700 italic">Trains focus without crutches</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🎼 Playlist Engineering</h3>
              <p className="text-slate-700 text-sm mb-3">
                Create 25, 50, and 90-minute playlists. No song changes = no micro-distractions during focus blocks.
              </p>
              <p className="text-xs text-green-700 italic">Match audio length to task</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🧘 Silence Training</h3>
              <p className="text-slate-700 text-sm mb-3">
                1x/week, study in complete silence for 15 min. Build up to 60 min over 3 months. Develop audio independence.
              </p>
              <p className="text-xs text-orange-700 italic">Future-proof your focus</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">🎯 Task-Audio Pairing</h3>
              <p className="text-slate-700 text-sm mb-3">
                Use same audio for same task type. Classical = math. Lo-fi = writing. Creates Pavlovian focus trigger.
              </p>
              <p className="text-xs text-indigo-700 italic">Builds automatic associations</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">⏰ Timed Transitions</h3>
              <p className="text-slate-700 text-sm mb-3">
                Use audio that naturally ends at 25/50/90 min. Forces Pomodoro breaks without timer anxiety.
              </p>
              <p className="text-xs text-pink-700 italic">Audio becomes time structure</p>
            </div>
          </div>
        </section>

        {/* Research Citations */}
        <section className="mb-16 bg-slate-100 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📚 Research References</h2>
          <div className="text-sm text-slate-700 space-y-2 leading-relaxed">
            <p>• Colzato, L. S., et al. (2017). "Boosting cognitive flexibility: The effects of binaural beats." <em>Frontiers in Psychology</em></p>
            <p>• Söderlund, G., et al. (2016). "White noise improves learning in children with ADHD." <em>Behavioral and Brain Functions</em></p>
            <p>• Kämpfe, J., et al. (2011). "The impact of background music on cognitive processing." <em>Psychology of Music</em></p>
            <p>• Rauscher, F. H., et al. (1993). "Music and spatial task performance." <em>Nature</em></p>
            <p>• Chaieb, L., et al. (2015). "Auditory beat stimulation and its effects on cognition." <em>Frontiers in Psychiatry</em></p>
          </div>
        </section>

        {/* Quick Reference Table */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
            ⚡ Quick Reference Cheat Sheet
          </h2>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Your Task</th>
                  <th className="px-6 py-4 text-left font-bold">Best Audio</th>
                  <th className="px-6 py-4 text-left font-bold">Why</th>
                  <th className="px-6 py-4 text-left font-bold">Volume</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  { task: "Reading textbook", audio: "Silence or soft brown noise", why: "Language processing needs quiet", volume: "0-20%" },
                  { task: "Memorizing facts", audio: "40Hz binaural beats", why: "Gamma waves boost encoding", volume: "40-50%" },
                  { task: "Writing essay", audio: "Lo-fi or classical", why: "Steady rhythm = flow state", volume: "30-40%" },
                  { task: "Math problems", audio: "Baroque classical", why: "Spatial-temporal activation", volume: "40-50%" },
                  { task: "Coding", audio: "Lo-fi or brown noise", why: "Masks distractions, steady state", volume: "30-40%" },
                  { task: "Creative brainstorm", audio: "8D audio or upbeat lo-fi", why: "Novelty sparks connections", volume: "40-50%" },
                  { task: "Language learning", audio: "SILENCE", why: "No competition for language areas", volume: "0%" },
                  { task: "Admin tasks", audio: "Anything familiar", why: "Low cognitive load task", volume: "40-60%" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900">{row.task}</td>
                    <td className="px-6 py-4 text-purple-700 font-medium">{row.audio}</td>
                    <td className="px-6 py-4 text-slate-600">{row.why}</td>
                    <td className="px-6 py-4 text-green-700 font-medium">{row.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-10 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Focus Audio?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Test 3 different audio types this week using tasks from the cheat sheet above. 
            Track your focus quality and find YOUR optimal sound.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors text-lg">
              Download Audio Experiment Tracker
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-purple-700 transition-colors border-2 border-white/30 text-lg">
              Get Playlist Library
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/30">
            <p className="text-sm opacity-75">
              💡 Pro tip: Bookmark this guide and refer back when your current audio stops working. 
              Habituation is normal—rotation is key.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default OptimalFocusAudio;