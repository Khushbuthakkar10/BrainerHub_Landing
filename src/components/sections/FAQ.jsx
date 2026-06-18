import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How is a 14-day delivery physically possible?",
    answer: "We work with tightly defined priorities from the start. Before we start, we lock scope to exactly one production-ready AI feature - no scope creep, no “while we're at it.” We use a pre-built integration library for common AI patterns (LLM calls, embeddings, vector search) so the pod focuses 100% on your unique business logic. Daily async cycles keep momentum without meetings eating your time."
  },
  {
    question: "What if you don't deliver in 14 days?",
    answer: "Simple: we keep working for free until it's done. This guarantee is built directly into our model. It keeps delivery accountable from day one. The discovery call exists specifically to prevent scope issues from arising."
  },
  {
    question: "Who owns the code and IP after the sprint?",
    answer: "You own the entire codebase, architecture, credentials, and infrastructure setup from Day 14 onward. We don't retain ownership, platform dependencies, or long-term lock-ins."
  },
  {
    question: "What kind of AI features can you build in 14 days?",
    answer: "Typical sprint builds include AI chatbots using your internal data, LLM-powered document analysis, intelligent search, workflow automation, GPT-driven content systems, and internal reporting tools."
  },
  {
    question: "How do we stay informed during the sprint?",
    answer: "From Day 5 onward, you get access to a shared staging environment. We share async Loom updates every 2 days so you always know what's shipping. You also receive a shared Notion log covering decisions, progress, and sprint updates."
  },
  {
    question: "What happens after the sprint ends?",
    answer: "You can continue independently with your internal team, book another sprint, or move into a longer-term dedicated AI pod engagement."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10 my-24 md:my-40" id="faq">
      <div className="section-container">
        {/* Header Area */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-6">
            <span className="text-xs font-bold text-brand-400 tracking-widest uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Verified <span className="text-brand-gradient">Answers.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            High-velocity engineering requires full transparency. Here's exactly how our model works.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border-t py-5 md:py-7 border-white/10 transition-all duration-300 ${openIndex === idx ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full flex items-center gap-6 text-left group"
              >
                {/* <div className={`mt-1 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ${openIndex === idx
                  ? 'bg-brand-500/10 border-brand-500/30 text-brand-400'
                  : 'bg-white/5 border-white/10 text-gray-400 group-hover:border-white/20'
                  }`}>
                  <span className="text-xs font-mono font-bold">{(idx + 1).toString().padStart(2, '0')}</span>
                </div> */}

                <h3 className={`flex-1 text-base md:text-lg font-bold transition-colors duration-300 ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                  {faq.question}
                </h3>



                <div className={`shrink-0 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                  {openIndex === idx ? (
                    <Minus className="w-6 h-6 text-brand-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-gray-400" />
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
              >
                <p className="text-gray-400 px-4 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
