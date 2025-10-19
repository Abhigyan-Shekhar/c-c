import React, { useEffect } from 'react';

const NeuroscienceStudySpaces = () => {
  useEffect(() => {
    document.title = 'Neuroscience-Backed Study Space Design: Optimize Your Environment for Deep Focus';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Design your study space using neuroscience research. Learn how lighting, color psychology, spatial layout, and sensory optimization boost focus and memory retention.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Design your study space using neuroscience research. Learn how lighting, color psychology, spatial layout, and sensory optimization boost focus and memory retention.';
      document.head.appendChild(meta);
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Neuroscience-Backed Study Space Design for Deep Focus",
      "description": "Evidence-based guide to optimizing your study environment using cognitive science research",
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
    <div className="min-h-screen bg-white">
      <article className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <header className="mb-16 text-center">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🧠 NEUROSCIENCE-BACKED
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Design Your Study Space<br />Using Brain Science
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stop guessing. Use peer-reviewed neuroscience research to create an environment 
            that maximizes focus, memory retention, and cognitive performance.
          </p>
        </header>

        {/* The Science */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Why Your Environment Controls Your Brain
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Context-Dependent Memory</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Your brain creates stronger neural pathways when studying in consistent, 
                optimized environments. Cues in your space trigger memory recall.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cognitive Load Theory</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Visual clutter increases extraneous cognitive load, leaving less working 
                memory for actual learning. Minimalism isn't aesthetic—it's functional.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Circadian Rhythm Impact</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Light temperature and intensity directly affect cortisol and melatonin 
                production, controlling alertness and focus throughout the day.
              </p>
            </div>
          </div>
        </section>

        {/* Lighting Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            1. Lighting: The Foundation of Focus
          </h2>
          
          <div className="bg-slate-50 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Science</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Melanopsin cells in your retina detect light and regulate circadian rhythms. 
              Blue-enriched light (5000K+) in morning/afternoon increases alertness by suppressing 
              melatonin. Warm light (2700K) in evening protects sleep quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-blue-900 mb-3">✅ Optimal Setup</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Daylight-temperature LED desk lamp (5000-6500K) for daytime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Position 15-20° above eye level to reduce glare</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Layer with ambient lighting to reduce contrast</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Use smart bulbs that auto-adjust color temperature</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-red-200 rounded-xl p-6">
              <h4 className="text-xl font-bold text-red-900 mb-3">❌ Avoid</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Single overhead lighting (causes harsh shadows)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Studying in dim light (increases eye strain, reduces alertness)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Blue light after 8 PM (disrupts sleep onset)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Direct window glare on screen</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <p className="text-slate-800">
              <strong className="text-amber-900">Product Recommendation:</strong> Philips Hue Go or BenQ ScreenBar for automatic color temperature adjustment throughout the day.
            </p>
          </div>
        </section>

        {/* Color Psychology */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            2. Color Psychology & Cognitive Performance
          </h2>

          <div className="bg-slate-50 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">The Science</h3>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Color impacts cognitive function through both biological (wavelength perception) and 
              psychological (learned associations) pathways. Different hues activate different 
              neural networks associated with specific mental states.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-3"></div>
              <h4 className="font-bold text-slate-900 mb-2">Blue</h4>
              <p className="text-sm text-slate-700 mb-2">Enhances analytical thinking and focus</p>
              <p className="text-xs text-slate-600 italic">Best for: Math, coding, problem-solving</p>
            </div>

            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg mb-3"></div>
              <h4 className="font-bold text-slate-900 mb-2">Green</h4>
              <p className="text-sm text-slate-700 mb-2">Reduces eye strain, promotes calmness</p>
              <p className="text-xs text-slate-600 italic">Best for: Long reading sessions, writing</p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-3"></div>
              <h4 className="font-bold text-slate-900 mb-2">Yellow</h4>
              <p className="text-sm text-slate-700 mb-2">Stimulates creativity and optimism</p>
              <p className="text-xs text-slate-600 italic">Best for: Brainstorming, creative work</p>
            </div>

            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <div className="w-12 h-12 bg-red-500 rounded-lg mb-3"></div>
              <h4 className="font-bold text-slate-900 mb-2">Red (Use Sparingly)</h4>
              <p className="text-sm text-slate-700 mb-2">Increases attention to detail</p>
              <p className="text-xs text-slate-600 italic">Best for: Proofreading, urgent tasks</p>
            </div>
          </div>

          <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
            <h4 className="font-bold text-lg mb-3">💡 Application Strategy</h4>
            <p className="text-slate-300 leading-relaxed">
              Keep walls neutral (white, light gray, beige) to minimize distraction. Use color 
              strategically through desk accessories, plants, or LED bias lighting behind your monitor. 
              Change accent colors based on task type using smart RGB strips.
            </p>
          </div>
        </section>

        {/* Spatial Layout */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            3. Spatial Layout & Ergonomics
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Desktop Organization</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Monitor at Eye Level</h4>
                    <p className="text-sm text-slate-700">Top of screen at or slightly below eye level, 20-28" away</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Keyboard at Elbow Height</h4>
                    <p className="text-sm text-slate-700">90° elbow angle prevents strain, wrists neutral</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Reference Materials Left</h4>
                    <p className="text-sm text-slate-700">Books, notes to non-dominant side to avoid arm crossing</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">One Plant in Periphery</h4>
                    <p className="text-sm text-slate-700">Boosts mood +15%, reduces stress (University of Hyogo study)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Room Positioning</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Face Wall, Not Window</h4>
                    <p className="text-sm text-slate-700">Reduces visual distractions, window should be to side for natural light</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Door in Peripheral Vision</h4>
                    <p className="text-sm text-slate-700">Subconscious threat monitoring reduces if you see entry point</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Separate from Sleep Area</h4>
                    <p className="text-sm text-slate-700">Critical for context-dependent memory formation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Temperature 68-72°F</h4>
                    <p className="text-sm text-slate-700">Optimal cognitive performance range (Helsinki study)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sensory Optimization */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            4. Sensory Optimization
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="text-3xl mr-3">👂</span>
                Auditory
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Silence:</strong> Best for verbal/linguistic tasks</li>
                <li><strong>White/Brown Noise:</strong> Masks distractions, improves focus</li>
                <li><strong>8D Binaural Beats:</strong> 40Hz gamma waves for memory encoding</li>
                <li><strong>Lo-fi Instrumental:</strong> 60-70 BPM matches resting heart rate</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Avoid:</strong> Lyrics in your native language (competes with language processing)
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="text-3xl mr-3">👃</span>
                Olfactory
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Rosemary:</strong> Improves memory retention by 15%</li>
                <li><strong>Peppermint:</strong> Increases alertness and focus</li>
                <li><strong>Lemon:</strong> Reduces stress, enhances mood</li>
                <li><strong>Coffee Scent:</strong> Boosts analytical reasoning (even without drinking)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Method:</strong> Essential oil diffuser or scented candle 10+ feet away
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                <span className="text-3xl mr-3">🤚</span>
                Tactile
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li><strong>Fidget Tools:</strong> Reduce restlessness without attention drain</li>
                <li><strong>Textured Surfaces:</strong> Grounding mats for anxiety</li>
                <li><strong>Temperature Control:</strong> Weighted blanket on lap for ADHD</li>
                <li><strong>Foot Rest:</strong> Improves circulation, reduces fatigue</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-600">
                  <strong>Tip:</strong> Silent fidget toys only (avoid clicks/sounds)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Setup Checklist */}
        <section className="mb-16 bg-slate-900 text-white rounded-3xl p-10">
          <h2 className="text-4xl font-bold mb-6 text-center">
            🎯 Your 30-Minute Setup Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Install daylight-temperature desk lamp (5000K+)",
              "Position monitor at eye level, 20-28\" away",
              "Remove all visual clutter from desk",
              "Add one small plant to left or right periphery",
              "Set up white noise machine or app",
              "Place essential oil diffuser with rosemary/peppermint",
              "Ensure room temperature is 68-72°F",
              "Position desk to face wall with door in peripheral",
              "Add bias lighting behind monitor to reduce eye strain",
              "Keep water bottle and healthy snacks within arm's reach"
            ].map((item, i) => (
              <div key={i} className="flex items-start bg-slate-800 rounded-lg p-4">
                <div className="bg-green-500 text-slate-900 rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Citations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">📚 Research References</h2>
          <div className="bg-slate-50 rounded-xl p-6 text-sm text-slate-700 space-y-2">
            <p>• Mehta, R., & Zhu, R. (2009). Blue or Red? Color and cognitive performance. <em>Science</em></p>
            <p>• Lohr, V. I., et al. (1996). Interior plants improve workplace wellbeing. <em>J. Environ. Horticulture</em></p>
            <p>• Küller, R., et al. (2006). Impact of light and color on mood. <em>Ergonomics</em></p>
            <p>• Moss, M., et al. (2003). Aromas of rosemary and lavender essential oils. <em>Int. J. Neuroscience</em></p>
            <p>• Lan, L., et al. (2011). Effects of thermal discomfort on cognitive performance. <em>Indoor Air</em></p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-10 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Brain Environment?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Download our free study space audit checklist with room diagrams and product recommendations.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-emerald-50 transition-colors text-lg">
            Get Free Checklist
          </button>
        </section>
      </article>
    </div>
  );
};

export default NeuroscienceStudySpaces;