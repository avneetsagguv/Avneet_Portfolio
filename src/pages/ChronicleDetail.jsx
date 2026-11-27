import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChronicleDetail = () => {
  const [activeTab, setActiveTab] = useState('creation'); // 'creation' or 'canvas'

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 pt-24 max-w-5xl mx-auto">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/case-studies" className="retro-btn text-xs">
          &lt; BACK TO CASE STUDIES
        </Link>
      </div>

      {/* Header Panel */}
      <header className="retro-panel mb-10 bg-bg-cream/60">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-press-start text-[10px] text-white bg-primary-magenta px-2.5 py-1 tracking-wider border-2 border-deep-maroon">
            CASE STUDY
          </span>
          <span className="font-press-start text-[9px] text-deep-maroon bg-accent-yellow px-2 py-0.5 border border-deep-maroon">
            PRODUCT TEARDOWN
          </span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary-blue font-press-start mb-4 drop-shadow-[2px_2px_0_rgba(122,18,36,0.15)] leading-tight">
          Chronicle: AI Cursor for Slides
        </h1>

        <div className="font-press-start text-xs text-deep-maroon space-y-2 opacity-90 mb-4 leading-relaxed">
          <p><span className="text-primary-magenta">ROLE:</span> Product Analysis + Feature Spec + Roadmap + Success Metrics</p>
          <p><span className="text-primary-blue">CONTEXT:</span> Product challenge by The Product Folks</p>
        </div>

        <div className="border-t-2 border-dashed border-deep-maroon/40 pt-3">
          <p className="font-inter text-xs text-deep-maroon/70 italic">
            Note: An independent exercise. Not affiliated with Chronicle.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {/* 1. THE PROBLEM */}
        <section aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            1. THE PROBLEM
          </h2>
          
          <div className="space-y-6">
            {/* Highlighted Problem Banner */}
            <div className="retro-panel bg-primary-magenta text-white shadow-[6px_6px_0_0_#7A1224] border-4 border-deep-maroon p-6">
              <span className="font-press-start text-[10px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon mb-2 inline-block">
                CORE CHALLENGE
              </span>
              <p className="font-press-start text-sm sm:text-base md:text-lg leading-relaxed text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">
                "Design an AI-led 'Cursor for Slides' that makes creation faster from outline to first draft to final deck, by co-creating, iterating and learning."
              </p>
            </div>

            {/* Side-by-side cards: Background & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="retro-panel bg-white border-l-8 border-l-primary-blue">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">📜</span>
                  <h3 className="font-press-start text-xs md:text-sm text-primary-blue">
                    BACKGROUND
                  </h3>
                </div>
                <p className="font-inter text-sm md:text-base text-deep-maroon leading-relaxed">
                  Chronicle turns text into polished slides with AI. First drafts are strong, but users still make heavy manual edits (tone, visual hierarchy, brand alignment) because the product doesn't ingest context or learn from past edits.
                </p>
              </div>

              <div className="retro-panel bg-white border-l-8 border-l-accent-mint">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎯</span>
                  <h3 className="font-press-start text-xs md:text-sm text-deep-maroon">
                    OBJECTIVES
                  </h3>
                </div>
                <ul className="font-inter text-sm md:text-base text-deep-maroon space-y-2 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Reduce post-draft editing time.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Deliver brand-aligned decks from the start.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Learn user preferences to improve future drafts and retention.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY IT MATTERS */}
        <section aria-labelledby="why-heading">
          <h2 id="why-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-mint inline-block pb-1">
            2. WHY IT MATTERS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: '⚡',
                title: 'MAXIMISE VALUE',
                desc: 'Maximise the value of AI generation.',
                accent: 'border-l-primary-magenta bg-white'
              },
              {
                icon: '📈',
                title: 'BOOST RETENTION',
                desc: 'Boost retention across creator lifecycles.',
                accent: 'border-l-primary-blue bg-white'
              },
              {
                icon: '⭐',
                title: 'POWER USERS',
                desc: 'Turn draft users into power users.',
                accent: 'border-l-accent-yellow bg-white'
              },
              {
                icon: '🚀',
                title: 'GROWTH & UPSELL',
                desc: 'Unlock growth and upsell opportunities.',
                accent: 'border-l-accent-mint bg-white'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`retro-panel border-l-8 ${item.accent} p-4 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
              >
                <div>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-press-start text-[11px] text-deep-maroon mb-2">{item.title}</h3>
                </div>
                <p className="font-inter text-xs md:text-sm text-deep-maroon/85 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHO I SOLVED IT FOR */}
        <section aria-labelledby="personas-heading">
          <h2 id="personas-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-yellow inline-block pb-1">
            3. WHO I SOLVED IT FOR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Persona 1: Priya */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white relative">
              <div>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-dashed border-deep-maroon/30">
                  {/* Priya Pixel Avatar SVG */}
                  <div className="w-16 h-16 border-4 border-deep-maroon bg-accent-yellow/30 p-1 flex items-center justify-center shadow-[2px_2px_0_0_#7A1224] flex-shrink-0">
                    <svg viewBox="0 0 32 32" className="w-full h-full" aria-label="Pixel avatar for Priya">
                      <rect width="32" height="32" fill="#FAF6EC" />
                      {/* Hair */}
                      <rect x="8" y="4" width="16" height="8" fill="#4A2E18" />
                      <rect x="6" y="8" width="6" height="14" fill="#4A2E18" />
                      <rect x="20" y="8" width="6" height="14" fill="#4A2E18" />
                      {/* Face */}
                      <rect x="10" y="8" width="12" height="10" fill="#FAD0B1" />
                      {/* Eyes */}
                      <rect x="12" y="11" width="2" height="2" fill="#1C1B1F" />
                      <rect x="18" y="11" width="2" height="2" fill="#1C1B1F" />
                      {/* Blush / Smile */}
                      <rect x="14" y="15" width="4" height="1" fill="#E91E8C" />
                      {/* Clothes */}
                      <rect x="8" y="18" width="16" height="12" fill="#E91E8C" />
                      <rect x="12" y="18" width="8" height="4" fill="#FAF6EC" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-press-start text-xs text-primary-magenta leading-snug">
                      Priya, 21
                    </h3>
                    <p className="font-press-start text-[9px] text-deep-maroon mt-1">
                      THE CURIOUS CREATOR
                    </p>
                    <span className="font-inter text-xs text-deep-maroon/70 font-semibold">
                      Final-year student
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-inter text-xs md:text-sm text-deep-maroon">
                  <div>
                    <span className="font-press-start text-[9px] text-primary-blue block mb-1">GOAL:</span>
                    <p>Professional-looking slides without design skills.</p>
                  </div>
                  <div>
                    <span className="font-press-start text-[9px] text-primary-magenta block mb-1">PAIN POINT:</span>
                    <p>Spends too long fixing AI drafts.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2: Arjun (Priority) */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white relative shadow-[8px_8px_0_0_#2F5FCB]">
              {/* Star Badge */}
              <div className="absolute -top-3 -right-3 bg-accent-yellow text-deep-maroon border-2 border-deep-maroon font-press-start text-[9px] px-2 py-1 shadow-[2px_2px_0_0_#7A1224] flex items-center gap-1 z-10">
                <span>⭐</span> PRIORITY
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-dashed border-deep-maroon/30">
                  {/* Arjun Pixel Avatar SVG */}
                  <div className="w-16 h-16 border-4 border-deep-maroon bg-primary-blue/20 p-1 flex items-center justify-center shadow-[2px_2px_0_0_#7A1224] flex-shrink-0">
                    <svg viewBox="0 0 32 32" className="w-full h-full" aria-label="Pixel avatar for Arjun">
                      <rect width="32" height="32" fill="#FAF6EC" />
                      {/* Short Hair */}
                      <rect x="8" y="4" width="16" height="6" fill="#1C1B1F" />
                      <rect x="6" y="6" width="4" height="6" fill="#1C1B1F" />
                      {/* Face */}
                      <rect x="10" y="8" width="12" height="10" fill="#E0A97E" />
                      {/* Glasses */}
                      <rect x="10" y="10" width="5" height="3" fill="none" stroke="#2F5FCB" strokeWidth="1" />
                      <rect x="17" y="10" width="5" height="3" fill="none" stroke="#2F5FCB" strokeWidth="1" />
                      <rect x="15" y="11" width="2" height="1" fill="#2F5FCB" />
                      {/* Eyes */}
                      <rect x="12" y="11" width="2" height="1" fill="#1C1B1F" />
                      <rect x="19" y="11" width="2" height="1" fill="#1C1B1F" />
                      {/* Beard / Suit */}
                      <rect x="12" y="15" width="8" height="2" fill="#1C1B1F" />
                      <rect x="6" y="18" width="20" height="12" fill="#2F5FCB" />
                      <polygon points="16,18 13,24 19,24" fill="#FAF6EC" />
                      <rect x="15" y="22" width="2" height="8" fill="#E91E8C" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-press-start text-xs text-primary-blue leading-snug">
                      Arjun, 27
                    </h3>
                    <p className="font-press-start text-[9px] text-deep-maroon mt-1">
                      THE BUSY PROFESSIONAL
                    </p>
                    <span className="font-inter text-xs text-deep-maroon/70 font-semibold">
                      Non-design role
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-inter text-xs md:text-sm text-deep-maroon">
                  <div>
                    <span className="font-press-start text-[9px] text-primary-blue block mb-1">GOAL:</span>
                    <p>Final-ready decks that match company branding.</p>
                  </div>
                  <div>
                    <span className="font-press-start text-[9px] text-primary-magenta block mb-1">PAIN POINT:</span>
                    <p>Limited after-work hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 3: Neha Iyer (Priority) */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white relative shadow-[8px_8px_0_0_#2F5FCB]">
              {/* Star Badge */}
              <div className="absolute -top-3 -right-3 bg-accent-yellow text-deep-maroon border-2 border-deep-maroon font-press-start text-[9px] px-2 py-1 shadow-[2px_2px_0_0_#7A1224] flex items-center gap-1 z-10">
                <span>⭐</span> PRIORITY
              </div>

              <div>
                <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-dashed border-deep-maroon/30">
                  {/* Neha Pixel Avatar SVG */}
                  <div className="w-16 h-16 border-4 border-deep-maroon bg-accent-mint/30 p-1 flex items-center justify-center shadow-[2px_2px_0_0_#7A1224] flex-shrink-0">
                    <svg viewBox="0 0 32 32" className="w-full h-full" aria-label="Pixel avatar for Neha Iyer">
                      <rect width="32" height="32" fill="#FAF6EC" />
                      {/* Bun / Hair */}
                      <rect x="12" y="2" width="8" height="4" fill="#2C1B18" />
                      <rect x="8" y="5" width="16" height="8" fill="#2C1B18" />
                      <rect x="6" y="9" width="4" height="12" fill="#2C1B18" />
                      <rect x="22" y="9" width="4" height="12" fill="#2C1B18" />
                      {/* Face */}
                      <rect x="10" y="9" width="12" height="9" fill="#E8B298" />
                      {/* Eyes */}
                      <rect x="12" y="12" width="2" height="2" fill="#1C1B1F" />
                      <rect x="18" y="12" width="2" height="2" fill="#1C1B1F" />
                      {/* Smile */}
                      <rect x="14" y="15" width="4" height="1" fill="#7A1224" />
                      {/* Blazer */}
                      <rect x="6" y="18" width="20" height="12" fill="#7A1224" />
                      <rect x="13" y="18" width="6" height="6" fill="#A8E6A1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-press-start text-xs text-deep-maroon leading-snug">
                      Neha Iyer, 25
                    </h3>
                    <p className="font-press-start text-[9px] text-deep-maroon mt-1">
                      THE KNOWLEDGE SHARER
                    </p>
                    <span className="font-inter text-xs text-deep-maroon/70 font-semibold">
                      Early-career presenter
                    </span>
                  </div>
                </div>

                <div className="space-y-3 font-inter text-xs md:text-sm text-deep-maroon">
                  <div>
                    <span className="font-press-start text-[9px] text-primary-blue block mb-1">GOAL:</span>
                    <p>AI that learns her style.</p>
                  </div>
                  <div>
                    <span className="font-press-start text-[9px] text-primary-magenta block mb-1">PAIN POINT:</span>
                    <p>No brand or template consistency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. END-TO-END FLOW */}
        <section aria-labelledby="flow-table-heading">
          <h2 id="flow-table-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-blue inline-block pb-1">
            4. END-TO-END FLOW
          </h2>
          <p className="font-inter text-sm text-deep-maroon/80 mb-4">
            Auditing the end-to-end slide creation lifecycle across current user friction and AI Cursor opportunities.
          </p>

          <div className="retro-panel p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-deep-maroon text-accent-yellow font-press-start text-[10px] sm:text-xs border-b-4 border-deep-maroon">
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[18%]">STEP</th>
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[27%]">CURRENT FLOW</th>
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[27%]">FRICTION</th>
                    <th className="p-3.5 w-[28%] text-accent-mint">AI CURSOR OPPORTUNITY</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-xs sm:text-sm text-deep-maroon divide-y-2 divide-deep-maroon/20">
                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      1. Idea Input
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Typing raw text or uploading notes
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Unstructured input, hard to visualise flow
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Detect themes, tone and audience to suggest initial structure
                    </td>
                  </tr>

                  <tr className="bg-bg-cream/30 hover:bg-bg-cream/60 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      2. AI Structuring
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Manually arranging slide sequence and titles
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Disjointed flow, repetitive formatting
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Auto-generate logical slide order with titles and bullets
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      3. Design Generation
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Manually applying styles, colours and visuals
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Inconsistent branding, time-intensive
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      One-click branded styling, charts, icons and relevant images
                    </td>
                  </tr>

                  <tr className="bg-bg-cream/30 hover:bg-bg-cream/60 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      4. Editing and Review
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Manually rewording text and reformatting layout
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Iterative edits take time
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Real-time AI rewriting, summarising and visual adjustment
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      5. Export and Share
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Save as PPTX/PDF manually
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      File formatting errors, extra clicks
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      AI-optimised export with sharing and format compatibility
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="font-press-start text-[9px] text-deep-maroon/60 mt-2 text-right">
            ← SCROLL HORIZONTALLY ON MOBILE →
          </p>
        </section>

        {/* 5. THE SOLUTION: AI-led on-canvas slide collaboration */}
        <section aria-labelledby="solution-heading">
          <h2 id="solution-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            5. THE SOLUTION: AI-LED ON-CANVAS SLIDE COLLABORATION
          </h2>

          <div className="retro-panel mb-8 bg-white border-l-8 border-l-primary-magenta">
            <p className="font-inter text-base md:text-lg text-deep-maroon leading-relaxed font-medium">
              A real-time AI partner that refines, personalises and polishes slides directly as you create them. It ingests context, brand assets and user intent, then iterates in real time on tone, visual hierarchy and brand style.
            </p>
          </div>

          {/* User Flow in Pixel Style */}
          <div className="mb-8">
            <h3 className="font-press-start text-xs md:text-sm text-deep-maroon mb-4 flex items-center gap-2">
              <span className="text-primary-magenta">▶</span> USER FLOW DIAGRAM
            </h3>

            <div className="retro-panel bg-white p-6 shadow-[8px_8px_0_0_#2F5FCB]">
              <div className="flex flex-col gap-4">
                {[
                  {
                    step: 'STEP 1: ENTRY',
                    title: 'User > Open Chronicle',
                    desc: 'User opens Chronicle interface to initiate presentation workflow.',
                    badge: 'USER ACTION',
                    badgeColor: 'bg-primary-magenta text-white'
                  },
                  {
                    step: 'STEP 2: INITIATION',
                    title: 'Select / Create Project',
                    desc: 'System: AI cursor ready to listen and assist across creation modes.',
                    badge: 'SYSTEM READY',
                    badgeColor: 'bg-primary-blue text-white'
                  },
                  {
                    step: 'STEP 3: OUTLINE',
                    title: 'AI Outline Generation',
                    desc: 'AI: Ready to help. User goal: Approve or tweak outline before expansion.',
                    badge: 'CO-CREATION',
                    badgeColor: 'bg-accent-yellow text-deep-maroon'
                  },
                  {
                    step: 'STEP 4: EDITING',
                    title: 'In-Slide AI Editing',
                    desc: 'User highlights an element and requests Refine, Summarise or Rephrase. AI updates instantly, keeping brand tone and style. Goal: Polish without leaving the slide.',
                    badge: 'CORE INTERACTION',
                    badgeColor: 'bg-accent-mint text-deep-maroon'
                  },
                  {
                    step: 'STEP 5: FORMATTING',
                    title: 'Auto-Brand and Formatting',
                    desc: 'User clicks Apply Brand Style. AI auto-applies fonts, colours, alignment and layout fixes. Goal: Ready-to-share deck.',
                    badge: 'ONE-CLICK POLISH',
                    badgeColor: 'bg-primary-blue text-white'
                  },
                  {
                    step: 'STEP 6: REVIEW',
                    title: 'Review and Final Tweaks',
                    desc: 'User approves or rejects AI changes. System tracks AI edit acceptance rate.',
                    badge: 'FEEDBACK TELEMETRY',
                    badgeColor: 'bg-primary-magenta text-white'
                  },
                  {
                    step: 'STEP 7: FINISH',
                    title: 'Export and Share',
                    desc: 'Ready-to-share export with PPTX/PDF compatibility and direct link share.',
                    badge: 'COMPLETION',
                    badgeColor: 'bg-accent-yellow text-deep-maroon'
                  }
                ].map((node, index, arr) => (
                  <React.Fragment key={index}>
                    <div className="border-3 border-deep-maroon p-4 bg-bg-cream/40 shadow-[4px_4px_0_0_#7A1224] hover:-translate-y-0.5 transition-transform">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-press-start text-[9px] text-deep-maroon/70">
                          {node.step}
                        </span>
                        <span className={`font-press-start text-[8px] px-2 py-0.5 border border-deep-maroon ${node.badgeColor}`}>
                          {node.badge}
                        </span>
                      </div>
                      <h4 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-1">
                        {node.title}
                      </h4>
                      <p className="font-inter text-xs sm:text-sm text-deep-maroon/85 leading-relaxed">
                        {node.desc}
                      </p>
                    </div>

                    {index < arr.length - 1 && (
                      <div className="flex justify-center items-center py-1 select-none" aria-hidden="true">
                        <div className="flex flex-col items-center">
                          <div className="w-1 h-3 bg-deep-maroon"></div>
                          <span className="font-press-start text-xs text-primary-magenta">▼</span>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Pain Points Addressed with Severity Badges */}
          <div className="mb-8">
            <h3 className="font-press-start text-xs md:text-sm text-deep-maroon mb-4 flex items-center gap-2">
              <span className="text-primary-magenta">▶</span> PAIN POINTS ADDRESSED (GAP IDENTIFIED)
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Users switch to PPT/Canva for fine-tuning',
                  sev: 4,
                  sevText: 'SEVERITY: 4',
                  color: 'bg-primary-magenta text-white',
                  desc: 'Inability to execute nuanced layout, text, and visual tweaks forces users out of the product.'
                },
                {
                  title: 'Generic AI visuals that need manual edits',
                  sev: 3,
                  sevText: 'SEVERITY: 3',
                  color: 'bg-accent-yellow text-deep-maroon',
                  desc: 'AI-generated visuals are often generic, off-brand, or irrelevant, requiring manual adjustments.'
                },
                {
                  title: 'No PowerPoint workflow compatibility',
                  sev: 3,
                  sevText: 'SEVERITY: 3',
                  color: 'bg-accent-yellow text-deep-maroon',
                  desc: 'Inability to seamlessly import and export PPTX creates friction for enterprise and team environments.'
                },
                {
                  title: 'Confusing pricing model',
                  sev: 2,
                  sevText: 'SEVERITY: 2',
                  color: 'bg-accent-mint text-deep-maroon',
                  desc: 'Unclear value propositions beyond trial stages deter ongoing creator subscriptions.'
                }
              ].map((pt, idx) => (
                <div key={idx} className="retro-panel p-4 flex flex-col justify-between border-4 border-deep-maroon bg-white shadow-[4px_4px_0_0_#7A1224]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-press-start text-[9px] text-deep-maroon font-bold">
                        POINT #{idx + 1}
                      </span>
                      <span className={`font-press-start text-[9px] px-2 py-0.5 border border-deep-maroon ${pt.color}`}>
                        {pt.sevText}
                      </span>
                    </div>
                    <h4 className="font-press-start text-xs text-deep-maroon leading-snug mb-2">
                      {pt.title}
                    </h4>
                  </div>
                  <p className="font-inter text-xs text-deep-maroon/80 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Opportunity Card */}
          <div className="retro-panel bg-white border-l-8 border-l-accent-mint shadow-[6px_6px_0_0_#2F5FCB]">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌱</span>
              <h3 className="font-press-start text-xs md:text-sm text-deep-maroon">
                GROWTH OPPORTUNITY: RE-ENGAGING SEMI-ENGAGED CREATORS
              </h3>
            </div>
            <p className="font-inter text-sm md:text-base text-deep-maroon leading-relaxed mb-3">
              Re-engage "semi-engaged creators" who draft but never return to finish, using personalised recommendations from their past decks, on-canvas suggestions, and contextual prompts and tutorials.
            </p>
            <p className="font-inter text-xs md:text-sm text-deep-maroon/80 leading-relaxed italic">
              These creators understand the product's value but abandon due to post-draft friction. Bringing AI editing directly onto the slide removes the need to leave Chronicle.
            </p>
          </div>
        </section>

        {/* 6. FEATURE SPEC */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-blue inline-block pb-1">
            6. FEATURE SPEC
          </h2>
          <p className="font-inter text-sm text-deep-maroon/80 mb-6">
            Detailed specifications for core AI cursor capabilities, including inputs, outputs, telemetry metrics, and user interactions.
          </p>

          <div className="space-y-6 mb-8">
            {/* Feature 1: Rewrite and Summarise */}
            <div className="retro-panel border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#7A1224]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-dashed border-deep-maroon/30">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✍️</span>
                  <h3 className="font-press-start text-sm md:text-base text-primary-magenta">
                    Rewrite and Summarise
                  </h3>
                </div>
                <span className="font-press-start text-[9px] bg-primary-magenta text-white px-2 py-0.5 border border-deep-maroon">
                  FEATURE 01
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-blue block mb-1">INPUT:</span>
                  <p>Highlighted text or full slide.</p>
                </div>
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-magenta block mb-1">OUTPUT:</span>
                  <p>Clearer, shorter or stylistically adapted rewrite.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">SUCCESS METRICS (L1 / L2):</span>
                  <p><strong>L1:</strong> Average edits accepted without changes</p>
                  <p><strong>L2:</strong> Average time saved per rewrite</p>
                </div>
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">UX FLOW STEPS:</span>
                  <p>Highlight text → AI menu appears → Click Rewrite or Summarise → AI replaces text in line with undo.</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Find Source and Contextual Data */}
            <div className="retro-panel border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#2F5FCB]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-dashed border-deep-maroon/30">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  <h3 className="font-press-start text-sm md:text-base text-primary-blue">
                    Find Source and Contextual Data
                  </h3>
                </div>
                <span className="font-press-start text-[9px] bg-primary-blue text-white px-2 py-0.5 border border-deep-maroon">
                  FEATURE 02
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-blue block mb-1">INPUT:</span>
                  <p>Highlighted claim or keyword.</p>
                </div>
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-magenta block mb-1">OUTPUT:</span>
                  <p>Verified source links, short data snippets and citations.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">SUCCESS METRICS (L1 / L2):</span>
                  <p><strong>L1:</strong> Source click-through rate</p>
                  <p><strong>L2:</strong> % of AI-sourced content retained in the final deck</p>
                </div>
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">UX FLOW STEPS:</span>
                  <p>Highlight → Click Find Source → Side panel shows 2-3 credible sources → User inserts directly.</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Paraphrase and Tone Adjustment */}
            <div className="retro-panel border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#7A1224]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-2 border-b-2 border-dashed border-deep-maroon/30">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎭</span>
                  <h3 className="font-press-start text-sm md:text-base text-deep-maroon">
                    Paraphrase and Tone Adjustment
                  </h3>
                </div>
                <span className="font-press-start text-[9px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon">
                  FEATURE 03
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-blue block mb-1">INPUT:</span>
                  <p>Selected sentence or slide text.</p>
                </div>
                <div className="p-3 bg-bg-cream/40 border-2 border-deep-maroon/30">
                  <span className="font-press-start text-[9px] text-primary-magenta block mb-1">OUTPUT:</span>
                  <p>Rephrased text in the chosen tone (formal, persuasive, casual).</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 font-inter text-xs md:text-sm text-deep-maroon">
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">SUCCESS METRICS (L1 / L2):</span>
                  <p><strong>L1:</strong> Tone option usage rate</p>
                  <p><strong>L2:</strong> Engagement score from reviewers</p>
                </div>
                <div className="p-3 bg-white border-2 border-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block mb-1">UX FLOW STEPS:</span>
                  <p>Highlight → Click Paraphrase → Choose a tone from the dropdown → User accepts or rejects.</p>
                </div>
              </div>
            </div>

            {/* Additional Features List */}
            <div className="retro-panel bg-white border-l-8 border-l-accent-yellow">
              <h4 className="font-press-start text-xs text-deep-maroon mb-3">
                ADDITIONAL CAPABILITIES SPECIFIED:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-inter text-xs md:text-sm text-deep-maroon">
                <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                  <span className="text-primary-magenta font-bold">►</span>
                  <span>Grammar and Style Correction</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                  <span className="text-primary-blue font-bold">►</span>
                  <span>Content Arrangement</span>
                </li>
                <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                  <span className="text-accent-mint font-bold">►</span>
                  <span>AI-Powered Prompting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ILLUSTRATIVE UI MOCKUP (Built in HTML/CSS, Dark UI, Pixel-friendly) */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="font-press-start text-xs md:text-sm text-deep-maroon flex items-center gap-2">
                <span className="text-primary-blue">▶</span> ILLUSTRATIVE UI MOCKUPS
              </h3>
              <span className="font-press-start text-[8px] sm:text-[9px] bg-deep-maroon text-accent-yellow px-2 py-1 border border-deep-maroon">
                Illustrative mockup, not the actual product
              </span>
            </div>

            {/* Mockup Tabs */}
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => setActiveTab('creation')}
                className={`font-press-start text-[10px] px-3 py-2 border-2 border-deep-maroon transition-all ${
                  activeTab === 'creation'
                    ? 'bg-primary-blue text-white shadow-[2px_2px_0_0_#7A1224] -translate-y-0.5'
                    : 'bg-white text-deep-maroon hover:bg-bg-cream'
                }`}
              >
                (a) CREATE DECK SCREEN
              </button>
              <button
                onClick={() => setActiveTab('canvas')}
                className={`font-press-start text-[10px] px-3 py-2 border-2 border-deep-maroon transition-all ${
                  activeTab === 'canvas'
                    ? 'bg-primary-magenta text-white shadow-[2px_2px_0_0_#7A1224] -translate-y-0.5'
                    : 'bg-white text-deep-maroon hover:bg-bg-cream'
                }`}
              >
                (b) IN-SLIDE AI CURSOR
              </button>
            </div>

            {/* Mockup Window */}
            <div className="bg-[#12131A] text-white border-4 border-deep-maroon shadow-[8px_8px_0_0_#2F5FCB] rounded-lg overflow-hidden">
              {/* Window Titlebar */}
              <div className="bg-[#1D1E2C] px-4 py-2 border-b-2 border-deep-maroon flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block border border-black/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block border border-black/30"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block border border-black/30"></span>
                  <span className="font-press-start text-[9px] text-[#A5A6C2] ml-2">
                    {activeTab === 'creation' ? 'Chronicle / New Project' : 'Chronicle / Editor / Slide 3'}
                  </span>
                </div>
                <span className="font-press-start text-[7px] text-[#A5A6C2]/60 hidden sm:inline">
                  AI CO-EDITOR ENGINE
                </span>
              </div>

              {/* View A: Create a New Deck */}
              {activeTab === 'creation' && (
                <div className="p-6 sm:p-10 flex flex-col items-center justify-center min-h-[360px]">
                  <div className="text-center max-w-md mb-8">
                    <h4 className="font-press-start text-base sm:text-lg text-white mb-2">
                      Create a new deck
                    </h4>
                    <p className="font-inter text-xs text-[#9B9DAF]">
                      Choose an input method to let the AI co-editor scaffold your outline and visuals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                    <div className="border-2 border-[#2E3048] bg-[#1A1C29] p-5 rounded-md flex flex-col items-center text-center hover:border-primary-magenta transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-lg bg-primary-magenta/20 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                        📄
                      </div>
                      <h5 className="font-press-start text-[11px] text-white mb-2">Paste text</h5>
                      <p className="font-inter text-[11px] text-[#8E90A6]">
                        Create by pasting existing notes or docs
                      </p>
                    </div>

                    <div className="border-2 border-[#2F5FCB] bg-[#1A1C29] p-5 rounded-md flex flex-col items-center text-center hover:border-accent-yellow transition-colors cursor-pointer group shadow-[0_0_15px_rgba(47,95,203,0.3)]">
                      <div className="w-12 h-12 rounded-lg bg-primary-blue/30 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                        ⚡
                      </div>
                      <h5 className="font-press-start text-[11px] text-accent-yellow mb-2">Generate from prompt</h5>
                      <p className="font-inter text-[11px] text-[#8E90A6]">
                        Start from a prompt or outline in seconds
                      </p>
                    </div>

                    <div className="border-2 border-[#2E3048] bg-[#1A1C29] p-5 rounded-md flex flex-col items-center text-center hover:border-accent-mint transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-lg bg-accent-mint/20 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform">
                        🔗
                      </div>
                      <h5 className="font-press-start text-[11px] text-white mb-2">Import from URL</h5>
                      <p className="font-inter text-[11px] text-[#8E90A6]">
                        Import web article, Notion doc, or research link
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* View B: In-Slide AI Cursor Popover */}
              {activeTab === 'canvas' && (
                <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-center">
                  <div className="bg-[#181924] border-2 border-[#2E3048] p-6 sm:p-8 rounded-lg relative max-w-2xl mx-auto w-full shadow-2xl">
                    <span className="font-press-start text-[8px] text-[#6E718B] block mb-2">
                      SLIDE 03 / STRATEGY
                    </span>
                    <h4 className="font-press-start text-sm sm:text-base text-white mb-4">
                      Prime Enhancement Initiative
                    </h4>
                    <p className="font-inter text-xs sm:text-sm text-[#C4C7E0] leading-relaxed mb-4">
                      A top-tier presentation requires thorough research, thoughtful analysis, distilled insights, and purposeful design. But not everyone has the time, expertise, or patience to master all of this.
                    </p>

                    <div className="relative inline-block mb-4">
                      <p className="font-inter text-xs sm:text-sm text-white leading-relaxed">
                        Chronicle transforms your ideas into stunning presentations, so every pitch, report or{' '}
                        <mark className="bg-[#2F5FCB]/50 text-white px-1 py-0.5 rounded border border-[#2F5FCB] font-semibold">
                          proposal you deliver commands attention and has impact.
                        </mark>
                      </p>

                      {/* Floating AI Action Popover Menu */}
                      <div className="absolute top-full left-1/4 mt-2 z-20 bg-white text-deep-maroon border-3 border-deep-maroon shadow-[6px_6px_0_0_#7A1224] rounded p-2 min-w-[210px] animate-in fade-in slide-in-from-top-1">
                        <div className="font-press-start text-[8px] text-primary-magenta px-2 py-1 border-b border-deep-maroon/20 mb-1 flex items-center justify-between">
                          <span>🪄 AI CURSOR</span>
                          <span className="text-[7px] text-deep-maroon/50">ESC</span>
                        </div>
                        <ul className="font-inter text-xs font-semibold space-y-0.5">
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-primary-magenta font-bold">
                            <span>✏️</span> Rewrite
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer">
                            <span>📝</span> Summarise
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-deep-maroon/70">
                            <span>📋</span> Copy
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-deep-maroon/70">
                            <span>🖍️</span> Highlight Text
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-deep-maroon/70">
                            <span>🌐</span> Translate into
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-primary-blue font-bold">
                            <span>🔍</span> Find Source
                          </li>
                          <li className="px-2 py-1 hover:bg-bg-cream rounded flex items-center gap-2 cursor-pointer text-deep-maroon font-bold">
                            <span>🎭</span> Paraphrase
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-6 border-t border-[#2E3048]">
                      <span className="font-press-start text-[9px] text-[#A5A6C2]">
                        BRAND ASSETS: AUTO-ALIGNED
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 7. ROADMAP */}
        <section aria-labelledby="roadmap-heading">
          <h2 id="roadmap-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-mint inline-block pb-1">
            7. ROADMAP
          </h2>
          <p className="font-inter text-sm text-deep-maroon/80 mb-6">
            A 12-week phased delivery model moving from internal validation to private beta and public scaling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phase 1 */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#7A1224] border-t-8 border-t-primary-magenta">
              <div>
                <span className="font-press-start text-[9px] bg-primary-magenta text-white px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                  PHASE 1 (WEEKS 1-4)
                </span>
                <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-2">
                  INITIAL TESTING
                </h3>
                <p className="font-inter text-xs text-deep-maroon/80 mb-4">
                  <strong>Objective:</strong> Validate core AI features with a small internal group.
                </p>

                <div className="space-y-2 mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-primary-magenta block">MILESTONES:</span>
                  <ul className="space-y-1">
                    <li className="flex gap-1.5"><span className="text-primary-magenta font-bold">►</span><span>W1 core rewrite, summarise and tone features ready</span></li>
                    <li className="flex gap-1.5"><span className="text-primary-magenta font-bold">►</span><span>W2 internal testing</span></li>
                    <li className="flex gap-1.5"><span className="text-primary-magenta font-bold">►</span><span>W3 feedback and bug fixes</span></li>
                    <li className="flex gap-1.5"><span className="text-primary-magenta font-bold">►</span><span>W4 prep beta</span></li>
                  </ul>
                </div>

                <div className="mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon/80 block">TEAM:</span>
                  <p className="mt-1">1 PM, 2 AI/ML engineers, 1 UX designer, 1 QA tester</p>
                </div>
              </div>

              <div className="p-3 bg-bg-cream border-2 border-deep-maroon">
                <span className="font-press-start text-[9px] text-primary-magenta block mb-1">KPIS (TARGETS):</span>
                <ul className="font-inter text-xs text-deep-maroon space-y-1">
                  <li>• 80% or more of testers report time saved</li>
                  <li>• 5% or fewer major bugs</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#2F5FCB] border-t-8 border-t-primary-blue">
              <div>
                <span className="font-press-start text-[9px] bg-primary-blue text-white px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                  PHASE 2 (WEEKS 5-8)
                </span>
                <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-2">
                  BETA LAUNCH
                </h3>
                <p className="font-inter text-xs text-deep-maroon/80 mb-4">
                  <strong>Objective:</strong> Test with about 100 external users.
                </p>

                <div className="space-y-2 mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-primary-blue block">MILESTONES:</span>
                  <ul className="space-y-1">
                    <li className="flex gap-1.5"><span className="text-primary-blue font-bold">►</span><span>W5 closed beta</span></li>
                    <li className="flex gap-1.5"><span className="text-primary-blue font-bold">►</span><span>W6-7 monitor usage and engagement</span></li>
                    <li className="flex gap-1.5"><span className="text-primary-blue font-bold">►</span><span>W8 improvements and fixes</span></li>
                  </ul>
                </div>

                <div className="mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon/80 block">TEAM:</span>
                  <p className="mt-1">1 PM, 2 developers, 1 data analyst</p>
                </div>
              </div>

              <div className="p-3 bg-bg-cream border-2 border-deep-maroon">
                <span className="font-press-start text-[9px] text-primary-blue block mb-1">KPIS (TARGETS):</span>
                <ul className="font-inter text-xs text-deep-maroon space-y-1">
                  <li>• Weekly active user rate 60% or more</li>
                  <li>• Rewrite and Summarise adoption 70% or more</li>
                  <li>• Average session 5 minutes or more</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="retro-panel flex flex-col justify-between border-4 border-deep-maroon bg-white shadow-[6px_6px_0_0_#7A1224] border-t-8 border-t-accent-yellow">
              <div>
                <span className="font-press-start text-[9px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                  PHASE 3 (WEEKS 9-12)
                </span>
                <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-2">
                  GENERAL AVAILABILITY
                </h3>
                <p className="font-inter text-xs text-deep-maroon/80 mb-4">
                  <strong>Objective:</strong> Public release and scale.
                </p>

                <div className="space-y-2 mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon block">MILESTONES:</span>
                  <ul className="space-y-1">
                    <li className="flex gap-1.5"><span className="text-deep-maroon font-bold">►</span><span>W9 marketing and docs ready</span></li>
                    <li className="flex gap-1.5"><span className="text-deep-maroon font-bold">►</span><span>W10 full public launch</span></li>
                    <li className="flex gap-1.5"><span className="text-deep-maroon font-bold">►</span><span>W11-12 post-launch monitoring</span></li>
                  </ul>
                </div>

                <div className="mb-4 font-inter text-xs text-deep-maroon">
                  <span className="font-press-start text-[9px] text-deep-maroon/80 block">TEAM:</span>
                  <p className="mt-1">Dev team, Marketing, Scalable cloud infra, CRM</p>
                </div>
              </div>

              <div className="p-3 bg-bg-cream border-2 border-deep-maroon">
                <span className="font-press-start text-[9px] text-deep-maroon block mb-1">KPIS (TARGETS):</span>
                <ul className="font-inter text-xs text-deep-maroon space-y-1">
                  <li>• Retention 40% or more</li>
                  <li>• Average time saved per deck 20% or more</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FEEDBACK LOOP AND SUCCESS METRICS */}
        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-yellow inline-block pb-1">
            8. FEEDBACK LOOP AND SUCCESS METRICS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Feedback Loop Cycle SVG Diagram */}
            <div className="retro-panel bg-white p-6 shadow-[6px_6px_0_0_#7A1224] flex flex-col items-center">
              <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-4 self-start">
                CONTINUOUS FEEDBACK CYCLE
              </h3>

              {/* Responsive SVG Feedback Cycle */}
              <div className="w-full max-w-sm py-2">
                <svg viewBox="0 0 320 280" className="w-full h-auto" aria-label="Feedback loop cycle diagram">
                  {/* Outer Loop Arrows */}
                  <path d="M 160 30 C 250 30, 290 80, 290 140" fill="none" stroke="#2F5FCB" strokeWidth="4" strokeDasharray="6 6" />
                  <polygon points="290,140 284,125 296,125" fill="#2F5FCB" />

                  <path d="M 290 140 C 290 200, 240 250, 160 250" fill="none" stroke="#E91E8C" strokeWidth="4" strokeDasharray="6 6" />
                  <polygon points="160,250 175,244 175,256" fill="#E91E8C" />

                  <path d="M 160 250 C 80 250, 30 200, 30 140" fill="none" stroke="#2F5FCB" strokeWidth="4" strokeDasharray="6 6" />
                  <polygon points="30,140 36,155 24,155" fill="#2F5FCB" />

                  <path d="M 30 140 C 30 80, 70 30, 160 30" fill="none" stroke="#E91E8C" strokeWidth="4" strokeDasharray="6 6" />
                  <polygon points="160,30 145,36 145,24" fill="#E91E8C" />

                  {/* Node 1: AI generates output (Top) */}
                  <g transform="translate(70, 8)">
                    <rect width="180" height="42" fill="#FFFFFF" stroke="#7A1224" strokeWidth="3" rx="4" />
                    <text x="90" y="26" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="8" fill="#7A1224">
                      AI Generates Output
                    </text>
                  </g>

                  {/* Node 2: Instant Feedback Capture (Right) */}
                  <g transform="translate(160, 115)">
                    <rect width="150" height="52" fill="#FAF6EC" stroke="#7A1224" strokeWidth="3" rx="4" />
                    <text x="75" y="24" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="7" fill="#E91E8C">
                      Instant Feedback
                    </text>
                    <text x="75" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#7A1224" fontWeight="bold">
                      Capture 👍 / 👎
                    </text>
                  </g>

                  {/* Node 3: Model Improvement (Bottom) */}
                  <g transform="translate(70, 228)">
                    <rect width="180" height="42" fill="#FFFFFF" stroke="#7A1224" strokeWidth="3" rx="4" />
                    <text x="90" y="26" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="8" fill="#2F5FCB">
                      Model Improvement
                    </text>
                  </g>

                  {/* Node 4: Continuous Enhancement (Left) */}
                  <g transform="translate(10, 115)">
                    <rect width="140" height="52" fill="#FAF6EC" stroke="#7A1224" strokeWidth="3" rx="4" />
                    <text x="70" y="24" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="7" fill="#7A1224">
                      Continuous
                    </text>
                    <text x="70" y="38" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="7" fill="#2F5FCB">
                      Enhancement
                    </text>
                  </g>
                </svg>
              </div>

              <p className="font-inter text-xs text-deep-maroon/80 text-center mt-3 border-t border-deep-maroon/20 pt-2 italic">
                Caption: User sentiment is captured through in-product thumbs up/down on AI suggestions.
              </p>
            </div>

            {/* Metrics Hierarchy Card */}
            <div className="retro-panel bg-white p-6 shadow-[6px_6px_0_0_#2F5FCB] border-4 border-deep-maroon space-y-6">
              <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon mb-2">
                MEASURING SUCCESS (METRICS FRAMEWORK)
              </h3>

              {/* North Star */}
              <div className="p-4 bg-accent-yellow/20 border-3 border-deep-maroon">
                <span className="font-press-start text-[9px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon inline-block mb-1">
                  NORTH STAR METRIC
                </span>
                <p className="font-press-start text-xs sm:text-sm text-deep-maroon leading-relaxed mt-2">
                  % of slides created using the AI Cursor
                </p>
              </div>

              {/* L1 Metrics */}
              <div className="p-4 bg-primary-blue/10 border-3 border-deep-maroon">
                <span className="font-press-start text-[9px] bg-primary-blue text-white px-2 py-0.5 border border-deep-maroon inline-block mb-1">
                  L1 PRIMARY METRIC
                </span>
                <p className="font-inter text-sm sm:text-base text-deep-maroon font-semibold mt-1">
                  Time saved per deck (average minutes)
                </p>
              </div>

              {/* L2 Metrics */}
              <div className="p-4 bg-primary-magenta/10 border-3 border-deep-maroon">
                <span className="font-press-start text-[9px] bg-primary-magenta text-white px-2 py-0.5 border border-deep-maroon inline-block mb-1">
                  L2 SECONDARY METRICS
                </span>
                <ul className="font-inter text-xs sm:text-sm text-deep-maroon space-y-1.5 mt-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>User satisfaction (thumbs, CSAT)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Error correction rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Retention and repeat usage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 9. WHAT THIS SHOWS */}
        <section aria-labelledby="hypothesis-heading">
          <h2 id="hypothesis-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            9. WHAT THIS SHOWS
          </h2>

          <div className="retro-panel bg-white border-4 border-deep-maroon shadow-[8px_8px_0_0_#7A1224] p-6 space-y-4">
            <div className="p-5 bg-accent-yellow/30 border-3 border-deep-maroon">
              <span className="font-press-start text-[9px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                Hypothesis, to be validated in beta
              </span>
              <p className="font-press-start text-sm sm:text-base text-deep-maroon leading-relaxed">
                40-50% estimated time saved on structuring, formatting and polishing.
              </p>
            </div>

            <div className="p-4 bg-primary-blue/10 border-2 border-deep-maroon flex items-start gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <span className="font-press-start text-[9px] text-primary-blue block mb-1">
                  IMMEDIATE NEXT STEP:
                </span>
                <p className="font-inter text-sm text-deep-maroon font-medium leading-relaxed">
                  Next step: validate the biggest risk (AI suggestions that feel generic) with 5 user interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-dashed border-deep-maroon/30">
          <Link to="/case-studies" className="retro-btn text-xs md:text-sm w-full sm:w-auto text-center">
            &lt; BACK TO CASE STUDIES
          </Link>
          <Link 
            to="/case-studies/social-beans" 
            className="retro-btn text-xs md:text-sm bg-accent-yellow text-deep-maroon hover:bg-primary-magenta hover:text-white w-full sm:w-auto text-center"
          >
            NEXT CASE STUDY: SOCIAL BEANS &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChronicleDetail;
