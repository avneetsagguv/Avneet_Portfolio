import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SocialBeansDetail = () => {
  // State for interactive UI mockup
  const [selectedWorkshop, setSelectedWorkshop] = useState('pottery');
  const [seats, setSeats] = useState(2);
  const [attendeeName, setAttendeeName] = useState('Priya Sharma');
  const [attendeePhone, setAttendeePhone] = useState('9876543210');

  const workshops = {
    pottery: { name: 'Weekend Clay & Sip Workshop', price: 1200, date: 'Saturday, 4:00 PM' },
    painting: { name: 'Canvas & Coffee Painting Session', price: 950, date: 'Sunday, 11:00 AM' },
    crochet: { name: 'Beginner Crochet & Yarn Meet', price: 1100, date: 'Sunday, 3:30 PM' }
  };

  const currentWorkshop = workshops[selectedWorkshop];
  const totalPrice = currentWorkshop.price * seats;

  // Formatted WhatsApp payload demonstration
  const encodedMessage = `Hi Social Beans! ☕ I'd like to book ${seats} seat(s) for the ${currentWorkshop.name} (${currentWorkshop.date}).\nName: ${attendeeName}\nPhone: ${attendeePhone}\nTotal: ₹${totalPrice}`;

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 pt-24 max-w-5xl mx-auto">
      {/* Top Back Navigation */}
      <div className="mb-6">
        <Link to="/case-studies" className="retro-btn text-xs">
          &lt; BACK TO CASE STUDIES
        </Link>
      </div>

      {/* Header Panel */}
      <header className="retro-panel mb-10 bg-bg-cream/60">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="font-press-start text-[10px] text-white bg-primary-magenta px-2.5 py-1 tracking-wider border-2 border-deep-maroon">
            CASE STUDY
          </span>
          <span className="font-press-start text-[9px] text-deep-maroon bg-accent-mint px-2 py-0.5 border border-deep-maroon font-bold">
            ZERO-TO-ONE PRODUCT
          </span>
          <span className="font-press-start text-[9px] text-white bg-deep-maroon px-2 py-0.5 border border-deep-maroon">
            CO-FOUNDED
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary-blue font-press-start mb-4 drop-shadow-[2px_2px_0_rgba(122,18,36,0.15)] leading-tight">
          Social Beans: Self-Serve Booking Flow
        </h1>

        <div className="font-press-start text-xs text-deep-maroon space-y-2 opacity-90 mb-4 leading-relaxed">
          <p><span className="text-primary-magenta">ROLE:</span> Product Strategy + Figma Wireframing + AI-Assisted Prototyping + QA</p>
          <p><span className="text-primary-blue">TIMEFRAME:</span> Co-founded May 2026 – Present</p>
          <p><span className="text-deep-maroon/70">STARTUP:</span> Weekend creative arts &amp; crafts workshop brand in Pune</p>
        </div>

        <div className="border-t-2 border-dashed border-deep-maroon/40 pt-3">
          <p className="font-inter text-xs text-deep-maroon/70 italic">
            Taking a consumer business from zero to 30+ events by identifying friction, shipping an automated self-serve booking prototype, and patching critical data payloads before user impact.
          </p>
        </div>
      </header>

      <div className="space-y-12">
        {/* 1. THE PROBLEM */}
        <section aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            1. THE PROBLEM &amp; CONTEXT
          </h2>

          <div className="space-y-6">
            {/* Highlighted Banner */}
            <div className="retro-panel bg-primary-magenta text-white shadow-[6px_6px_0_0_#7A1224] border-4 border-deep-maroon p-6">
              <span className="font-press-start text-[10px] bg-accent-yellow text-deep-maroon px-2 py-0.5 border border-deep-maroon mb-2 inline-block">
                CORE CHALLENGE
              </span>
              <p className="font-press-start text-sm sm:text-base md:text-lg leading-relaxed text-white drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">
                "Replace high-friction manual bookings via Instagram DMs with an intuitive self-serve booking flow designed around real attendee behavior."
              </p>
            </div>

            {/* Background & Objectives */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="retro-panel bg-white border-l-8 border-l-primary-blue">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">💬</span>
                  <h3 className="font-press-start text-xs md:text-sm text-primary-blue">
                    BACKGROUND &amp; FRICTION
                  </h3>
                </div>
                <p className="font-inter text-sm md:text-base text-deep-maroon leading-relaxed">
                  In live operations, interested workshop attendees had to message via Instagram DMs or WhatsApp to check dates, verify open seat counts, and request payment details. This manual back-and-forth created a 15-minute barrier to purchase, resulted in ~30% dropped customer intent during off-hours, and required tedious manual spreadsheet logging.
                </p>
              </div>

              <div className="retro-panel bg-white border-l-8 border-l-accent-mint">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎯</span>
                  <h3 className="font-press-start text-xs md:text-sm text-deep-maroon">
                    PRODUCT OBJECTIVES
                  </h3>
                </div>
                <ul className="font-inter text-sm md:text-base text-deep-maroon space-y-2 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Eliminate booking friction with a frictionless, under-60-second checkout flow.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Automate ticket reservations and WhatsApp payload generation with zero manual data entry.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary-magenta font-bold">►</span>
                    <span>Maintain personal brand warmth while scaling operations to 30+ workshops.</span>
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
                title: 'SUB-60S FLOW',
                desc: 'Reduced booking time from 15 minutes of manual messaging to under 60 seconds.',
                accent: 'border-l-primary-magenta'
              },
              {
                icon: '🎯',
                title: 'CONVERSION INTENT',
                desc: 'Captured spontaneous weekend workshop bookings right when attendee excitement peaked.',
                accent: 'border-l-primary-blue'
              },
              {
                icon: '🛡️',
                title: 'ZERO OVERBOOKING',
                desc: 'Eliminated seat counting errors, double bookings, and manual spreadsheet delays.',
                accent: 'border-l-accent-yellow'
              },
              {
                icon: '📈',
                title: 'UNIT ECONOMICS',
                desc: 'Freed host time to scale to 30+ events with a 65% gross margin and 42% MoM growth.',
                accent: 'border-l-accent-mint'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className={`retro-panel border-l-8 ${card.accent} bg-white p-4 flex flex-col justify-between hover:-translate-y-1 transition-transform`}
              >
                <div>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h3 className="font-press-start text-[11px] text-deep-maroon mb-2">{card.title}</h3>
                </div>
                <p className="font-inter text-xs md:text-sm text-deep-maroon/85 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. END-TO-END FLOW COMPARISON */}
        <section aria-labelledby="flow-table-heading">
          <h2 id="flow-table-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-blue inline-block pb-1">
            3. END-TO-END FLOW: BEFORE VS AFTER
          </h2>
          <p className="font-inter text-sm text-deep-maroon/80 mb-4">
            Comparing the legacy manual DM booking process against the automated self-serve product experience.
          </p>

          <div className="retro-panel p-0 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-deep-maroon text-accent-yellow font-press-start text-[10px] sm:text-xs border-b-4 border-deep-maroon">
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[18%]">STEP</th>
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[26%]">MANUAL DM FLOW (BEFORE)</th>
                    <th className="p-3.5 border-r-2 border-deep-maroon/40 w-[26%]">FRICTION POINTS</th>
                    <th className="p-3.5 w-[30%] text-accent-mint">SELF-SERVE FLOW (AFTER)</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-xs sm:text-sm text-deep-maroon divide-y-2 divide-deep-maroon/20">
                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      1. Discovery &amp; Schedule
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Reading Instagram caption text or story highlights
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Schedule buried in graphics; users miss timings and pricing
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Live interactive workshop schedule with date picker &amp; real-time seat counter
                    </td>
                  </tr>

                  <tr className="bg-bg-cream/30 hover:bg-bg-cream/60 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      2. Seat Selection
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      DMing host: "Any spots open for this Saturday?"
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Waiting hours for reply; user moves on to other weekend plans
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      One-click seat stepper with live scarcity indicator ("Only 3 spots left!")
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      3. Attendee Details
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Host repeatedly asks for name, contact, and guest count in chat
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Incomplete details, missing phone numbers, typos in attendee list
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Clean structured form validating attendee name, WhatsApp number, and seat count
                    </td>
                  </tr>

                  <tr className="bg-bg-cream/30 hover:bg-bg-cream/60 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      4. Confirmation &amp; Payment
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Sending UPI QR screenshot in chat, waiting for manual check
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Delayed verification, lost screenshots, payment tracking errors
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Automated URL payload generator opening WhatsApp with pre-filled booking verification
                    </td>
                  </tr>

                  <tr className="bg-white hover:bg-bg-cream/50 transition-colors">
                    <td className="p-3.5 font-press-start text-[10px] text-primary-blue border-r-2 border-deep-maroon/20 font-bold">
                      5. Event Roster Logging
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20">
                      Host manually copy-pastes customer details into Google Sheets
                    </td>
                    <td className="p-3.5 border-r-2 border-deep-maroon/20 text-deep-maroon/80">
                      Tedious admin overhead, accidental double-bookings, duplicate entries
                    </td>
                    <td className="p-3.5 font-medium text-deep-maroon bg-accent-mint/15">
                      Standardized data structure ready for automated attendee logging &amp; event prep
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

        {/* 4. USER FLOW DIAGRAM */}
        <section aria-labelledby="solution-heading">
          <h2 id="solution-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            4. THE SOLUTION: END-TO-END BOOKING USER FLOW
          </h2>

          <div className="retro-panel mb-8 bg-white border-l-8 border-l-primary-magenta">
            <p className="font-inter text-base md:text-lg text-deep-maroon leading-relaxed font-medium">
              We translated the chaotic Instagram DM conversation into a streamlined 5-step digital journey. By leveraging AI-assisted web prototyping and Figma wireframes, we turned customer intent into instant, validated booking payloads.
            </p>
          </div>

          {/* User Flow in Pixel Style */}
          <div className="retro-panel bg-white p-6 shadow-[8px_8px_0_0_#2F5FCB] mb-8">
            <div className="flex flex-col gap-4">
              {[
                {
                  step: 'STAGE 1: DISCOVERY',
                  title: '1. Browse & Select Workshop',
                  desc: 'Attendee visits booking link from Instagram bio or event poster. Sees upcoming workshops, dates, live seats remaining, and price per person.',
                  badge: 'ATTENDEE ACTION',
                  badgeColor: 'bg-primary-magenta text-white'
                },
                {
                  step: 'STAGE 2: CAPACITY CHECK',
                  title: '2. Seat Stepper & Live Total',
                  desc: 'User picks 1 to 5 seats. System updates pricing dynamically and prevents exceeding workshop room capacity (capped at 15 attendees).',
                  badge: 'LOGIC & VALIDATION',
                  badgeColor: 'bg-primary-blue text-white'
                },
                {
                  step: 'STAGE 3: DETAILS CAPTURE',
                  title: '3. Attendee Form Input',
                  desc: 'User enters primary attendee name and WhatsApp contact number. Form validates required fields inline.',
                  badge: 'DATA INGESTION',
                  badgeColor: 'bg-accent-yellow text-deep-maroon'
                },
                {
                  step: 'STAGE 4: AUTOMATED DISPATCH',
                  title: '4. WhatsApp Payload Generator',
                  desc: 'Clicking "Confirm via WhatsApp" triggers a pre-serialized URI deep link carrying workshop name, date, seat count, and attendee details directly into WhatsApp chat.',
                  badge: 'CORE AUTOMATION',
                  badgeColor: 'bg-accent-mint text-deep-maroon'
                },
                {
                  step: 'STAGE 5: CONFIRMATION',
                  title: '5. Instant Reservation & Host Sync',
                  desc: 'Attendee sends pre-populated message with zero typing required. Host verifies payment and dispatches event reminder pin.',
                  badge: 'EVENT FULFILLMENT',
                  badgeColor: 'bg-primary-blue text-white'
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
        </section>

        {/* 5. CRITICAL SELF-QA & BUG PATCH DIAGRAM */}
        <section aria-labelledby="qa-heading">
          <h2 id="qa-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-yellow inline-block pb-1">
            5. CRITICAL SELF-QA: THE WHATSAPP FORM PAYLOAD BUG
          </h2>

          <div className="retro-panel bg-white p-6 shadow-[8px_8px_0_0_#7A1224] border-4 border-deep-maroon mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🔍</span>
              <h3 className="font-press-start text-xs sm:text-sm text-deep-maroon">
                PRE-LAUNCH QA TESTING: CATCHING THE PAYLOAD SERIALIZATION BUG
              </h3>
            </div>

            <p className="font-inter text-sm md:text-base text-deep-maroon leading-relaxed mb-6">
              During comprehensive pre-launch regression testing across devices, I discovered a critical edge-case bug: while the UI form validated user inputs, clicking "Confirm via WhatsApp" opened WhatsApp Web/Mobile with an <strong>empty message box</strong>. The form data payload was being dropped during client-side URL encoding.
            </p>

            {/* Diagnostic Flowchart (Inline SVG & Pixel Nodes) */}
            <div className="p-4 sm:p-6 bg-bg-cream/70 border-3 border-deep-maroon mb-6">
              <h4 className="font-press-start text-xs text-primary-magenta mb-4 text-center">
                BUG DIAGNOSTIC &amp; RESOLUTION WORKFLOW
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Bug State */}
                <div className="border-3 border-[#FF5F56] bg-white p-4 shadow-[4px_4px_0_0_#FF5F56]">
                  <span className="font-press-start text-[8px] bg-[#FF5F56] text-white px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                    BUG IDENTIFIED (QA)
                  </span>
                  <h5 className="font-press-start text-[11px] text-deep-maroon mb-2">Dropped Form Payload</h5>
                  <p className="font-inter text-xs text-deep-maroon/85 leading-relaxed">
                    Form input state was not propagating to the WhatsApp deep link generator. WhatsApp opened with a blank text field, risking high user confusion.
                  </p>
                </div>

                {/* Root Cause & Patch */}
                <div className="border-3 border-primary-blue bg-white p-4 shadow-[4px_4px_0_0_#2F5FCB]">
                  <span className="font-press-start text-[8px] bg-primary-blue text-white px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                    ROOT CAUSE &amp; PATCH
                  </span>
                  <h5 className="font-press-start text-[11px] text-deep-maroon mb-2">URL Serialization Fix</h5>
                  <p className="font-inter text-xs text-deep-maroon/85 leading-relaxed">
                    Refactored state binding and implemented strict URI component sanitization (<code className="bg-bg-cream px-1 font-mono text-[10px]">encodeURIComponent</code>) for special characters, newlines, and emojis.
                  </p>
                </div>

                {/* Shipped Result */}
                <div className="border-3 border-accent-mint bg-white p-4 shadow-[4px_4px_0_0_#7A1224]">
                  <span className="font-press-start text-[8px] bg-accent-mint text-deep-maroon px-2 py-0.5 border border-deep-maroon inline-block mb-2">
                    VERIFIED &amp; SHIPPED
                  </span>
                  <h5 className="font-press-start text-[11px] text-deep-maroon mb-2">100% Reliable Payload</h5>
                  <p className="font-inter text-xs text-deep-maroon/85 leading-relaxed">
                    Tested across iOS, Android, and Desktop WhatsApp Web. 100% of user entries arrived pre-formatted in host chat with zero missing records.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-accent-yellow/20 border-2 border-deep-maroon">
              <span className="font-press-start text-[9px] text-deep-maroon block mb-1">
                KEY PRODUCT LESSON:
              </span>
              <p className="font-inter text-xs sm:text-sm text-deep-maroon font-medium leading-relaxed">
                Catching edge cases during hands-on testing before real users touch the software is what protects product trust. A polished prototype that drops data at the last mile is worse than no automation.
              </p>
            </div>
          </div>
        </section>

        {/* 6. ILLUSTRATIVE UI MOCKUP */}
        <section aria-labelledby="mockup-heading">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 id="mockup-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start border-b-4 border-primary-blue inline-block pb-1">
              6. INTERACTIVE BOOKING FLOW MOCKUP
            </h2>
            <span className="font-press-start text-[8px] sm:text-[9px] bg-deep-maroon text-accent-yellow px-2 py-1 border border-deep-maroon">
              Interactive prototype demonstration
            </span>
          </div>

          <div className="retro-panel bg-[#12131A] text-white border-4 border-deep-maroon shadow-[8px_8px_0_0_#2F5FCB] p-6 sm:p-8 rounded-lg">
            {/* Window Titlebar */}
            <div className="border-b border-[#2E3048] pb-3 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block border border-black/30"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block border border-black/30"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block border border-black/30"></span>
                <span className="font-press-start text-[10px] text-accent-yellow ml-2">
                  SOCIAL BEANS / SELF-SERVE CHECKOUT
                </span>
              </div>
              <span className="font-press-start text-[8px] text-[#A5A6C2] hidden sm:inline">
                LIVE DEMO
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Side: Interactive Controls */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <label className="font-press-start text-[9px] text-[#C4C7E0] block mb-2">
                    1. CHOOSE WORKSHOP SESSION:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { key: 'pottery', label: 'Clay & Sip', price: '₹1200' },
                      { key: 'painting', label: 'Canvas Paint', price: '₹950' },
                      { key: 'crochet', label: 'Crochet Meet', price: '₹1100' }
                    ].map(item => (
                      <button
                        key={item.key}
                        onClick={() => setSelectedWorkshop(item.key)}
                        className={`font-press-start text-[9px] p-2.5 border-2 text-center transition-all ${
                          selectedWorkshop === item.key
                            ? 'border-accent-yellow bg-primary-magenta text-white shadow-[2px_2px_0_0_#F4C430]'
                            : 'border-[#2E3048] bg-[#1A1C29] text-[#C4C7E0] hover:border-[#4B4E6D]'
                        }`}
                      >
                        <div>{item.label}</div>
                        <div className="text-[8px] opacity-80 mt-1">{item.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-[#1A1C29] border border-[#2E3048] rounded">
                  <div>
                    <span className="font-press-start text-[9px] text-[#C4C7E0] block">
                      2. NUMBER OF SEATS:
                    </span>
                    <span className="font-inter text-xs text-accent-mint">
                      Max 5 per order (Room cap: 15)
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSeats(Math.max(1, seats - 1))}
                      className="w-8 h-8 font-press-start bg-[#2E3048] text-white hover:bg-primary-magenta border border-deep-maroon flex items-center justify-center text-sm"
                    >
                      -
                    </button>
                    <span className="font-press-start text-sm text-accent-yellow px-2">
                      {seats}
                    </span>
                    <button
                      onClick={() => setSeats(Math.min(5, seats + 1))}
                      className="w-8 h-8 font-press-start bg-[#2E3048] text-white hover:bg-primary-magenta border border-deep-maroon flex items-center justify-center text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="font-press-start text-[8px] text-[#C4C7E0] block mb-1">
                      PRIMARY ATTENDEE NAME:
                    </label>
                    <input
                      type="text"
                      value={attendeeName}
                      onChange={(e) => setAttendeeName(e.target.value)}
                      className="w-full bg-[#1A1C29] border border-[#2E3048] p-2.5 font-inter text-sm text-white focus:outline-none focus:border-accent-yellow"
                    />
                  </div>

                  <div>
                    <label className="font-press-start text-[8px] text-[#C4C7E0] block mb-1">
                      WHATSAPP NUMBER:
                    </label>
                    <input
                      type="text"
                      value={attendeePhone}
                      onChange={(e) => setAttendeePhone(e.target.value)}
                      className="w-full bg-[#1A1C29] border border-[#2E3048] p-2.5 font-inter text-sm text-white focus:outline-none focus:border-accent-yellow"
                    />
                  </div>
                </div>

                <div className="p-4 bg-[#1A1C29] border-2 border-primary-blue flex items-center justify-between">
                  <div>
                    <span className="font-press-start text-[9px] text-[#8E90A6] block">TOTAL AMOUNT:</span>
                    <span className="font-press-start text-base sm:text-lg text-accent-yellow">
                      ₹{totalPrice}
                    </span>
                  </div>
                  <span className="font-press-start text-[8px] text-accent-mint bg-[#27C93F]/20 px-2 py-1 border border-[#27C93F]">
                    {seats} × ₹{currentWorkshop.price}
                  </span>
                </div>
              </div>

              {/* Right Side: Generated WhatsApp Payload Preview */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="font-press-start text-[9px] text-[#C4C7E0] block mb-2">
                    AUTOMATED WHATSAPP PAYLOAD PREVIEW:
                  </span>
                  
                  <div className="bg-[#0B141B] border-2 border-[#1F2C34] rounded-lg p-4 font-inter text-xs text-[#E9EDEF] space-y-2 shadow-inner min-h-[180px]">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#222E35]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
                      <span className="font-semibold text-[11px] text-[#25D366]">WhatsApp Message Payload</span>
                    </div>

                    <div className="bg-[#202C33] p-3 rounded text-[11px] leading-relaxed whitespace-pre-wrap font-mono text-[#D1D7DB] border-l-2 border-[#25D366]">
                      {encodedMessage}
                    </div>

                    <p className="text-[10px] text-[#8696A0] pt-1 italic">
                      Payload serialized into deep link URI with zero typing needed from the customer.
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="w-full font-press-start text-xs bg-[#25D366] text-black py-3 px-4 border-2 border-deep-maroon text-center shadow-[4px_4px_0_0_#7A1224] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#1EBE5D] transition-colors">
                    <span>💬</span> CONFIRM VIA WHATSAPP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUTCOMES & IMPACT */}
        <section aria-labelledby="outcomes-heading">
          <h2 id="outcomes-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-mint inline-block pb-1">
            7. OUTCOMES &amp; QUANTITATIVE IMPACT
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Repeat Booking Rate in Q1', value: '35%', color: 'bg-primary-magenta' },
              { label: 'MoM Revenue Growth', value: '42%', color: 'bg-accent-mint' },
              { label: 'Payload QA Bug Patch', value: '100%', color: 'bg-accent-yellow' },
              { label: 'Workshops Shipped', value: '30+', color: 'bg-primary-blue' },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className={`border-4 border-deep-maroon p-5 flex flex-col items-center justify-center text-center shadow-[4px_4px_0_0_#7A1224] ${stat.color} hover:-translate-y-1 transition-transform`}
              >
                <span className="font-press-start text-2xl md:text-3xl text-deep-maroon mb-2 drop-shadow-[1px_1px_0_rgba(255,255,255,0.8)]">
                  {stat.value}
                </span>
                <span className="font-inter text-xs font-bold text-deep-maroon uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="retro-panel bg-white border-l-8 border-l-primary-blue p-5">
            <h4 className="font-press-start text-xs text-deep-maroon mb-2">OPERATIONAL HIGHLIGHTS:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-inter text-xs md:text-sm text-deep-maroon">
              <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                <span className="text-primary-magenta font-bold">►</span>
                <span><strong>65% Gross Margin:</strong> Negotiated 18% lower vendor costs</span>
              </li>
              <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                <span className="text-primary-blue font-bold">►</span>
                <span><strong>10-15 Attendees:</strong> Consistent average per weekend event</span>
              </li>
              <li className="flex items-center gap-2 p-2 bg-bg-cream/40 border border-deep-maroon">
                <span className="text-accent-mint font-bold">►</span>
                <span><strong>Zero Overbooking:</strong> 100% clean seat allocation across runs</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 8. KEY TAKEAWAYS */}
        <section aria-labelledby="reflection-heading">
          <h2 id="reflection-heading" className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            8. KEY PRODUCT REFLECTIONS
          </h2>

          <div className="retro-panel bg-bg-cream/50 border-4 border-deep-maroon p-6 space-y-4">
            <p className="font-inter text-base md:text-lg text-deep-maroon leading-relaxed">
              "Building Social Beans proved that true product rigor isn't just about drawing wireframes or writing specifications—it's about understanding real user friction, testing every edge case before users experience it, and moving swiftly from concept to shipped prototype."
            </p>
            <p className="font-inter text-sm md:text-base text-deep-maroon/80 leading-relaxed italic">
              Catching the WhatsApp form data payload bug during self-QA reaffirmed that hands-on iteration and regression validation are non-negotiable parts of great product execution.
            </p>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-6 pb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-dashed border-deep-maroon/30">
          <Link to="/case-studies" className="retro-btn text-xs md:text-sm w-full sm:w-auto text-center">
            &lt; BACK TO CASE STUDIES
          </Link>
          <Link 
            to="/case-studies/chronicle" 
            className="retro-btn text-xs md:text-sm bg-accent-yellow text-deep-maroon hover:bg-primary-magenta hover:text-white w-full sm:w-auto text-center"
          >
            NEXT CASE STUDY: CHRONICLE &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialBeansDetail;
