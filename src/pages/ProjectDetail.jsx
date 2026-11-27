import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ChronicleDetail from './ChronicleDetail';
import SocialBeansDetail from './SocialBeansDetail';

const projectData = {
  'social-beans': {
    name: 'Social Beans: Self-Serve Booking Flow',
    role: 'Product Strategy + Figma Wireframing + AI-Assisted Prototyping + QA',
    timeframe: 'Co-founded May 2026',
    goal: 'Replace high-friction manual bookings with an intuitive, self-serve booking flow designed around real attendee behavior.',
    actions: [
      'User-Centered Problem Solving: Identified a real friction point in live business operations where manual booking via DMs caused delays, dropped conversions, and tracking issues.',
      'UI/UX Design in Figma: Structured user journeys into wireframes and clickable Figma prototypes covering event selection, attendee details, and confirmation.',
      'AI-Assisted Prototyping: Moved independently from concept to an interactive, working web prototype.',
      'Iteration & Self-QA: During post-launch testing, detected a critical functional gap where WhatsApp messages did not carry form data, and immediately patched the data payload before user impact.',
    ],
    results: [
      { label: 'Booking Friction', value: 'Solved', color: 'bg-primary-magenta' },
      { label: 'Prototype Status', value: 'Shipped', color: 'bg-accent-mint' },
      { label: 'Form Data QA', value: '100% Fixed', color: 'bg-accent-yellow' },
      { label: 'Workshop Attendance', value: '10-15/event', color: 'bg-primary-blue' },
    ],
    reflection: 'Hands-on iteration and self-QA are just as critical as initial wireframing. Catching the WhatsApp form data payload bug during testing reinforced the value of testing against edge cases before real users encounter them.',
  },
  'social-bean': {
    name: 'Social Beans: Self-Serve Booking Flow',
    role: 'Product Strategy + Figma Wireframing + AI-Assisted Prototyping + QA',
    timeframe: 'Co-founded May 2026',
    goal: 'Replace high-friction manual bookings with an intuitive, self-serve booking flow designed around real attendee behavior.',
    actions: [
      'User-Centered Problem Solving: Identified a real friction point in live business operations where manual booking via DMs caused delays, dropped conversions, and tracking issues.',
      'UI/UX Design in Figma: Structured user journeys into wireframes and clickable Figma prototypes covering event selection, attendee details, and confirmation.',
      'AI-Assisted Prototyping: Moved independently from concept to an interactive, working web prototype.',
      'Iteration & Self-QA: During post-launch testing, detected a critical functional gap where WhatsApp messages did not carry form data, and immediately patched the data payload before user impact.',
    ],
    results: [
      { label: 'Booking Friction', value: 'Solved', color: 'bg-primary-magenta' },
      { label: 'Prototype Status', value: 'Shipped', color: 'bg-accent-mint' },
      { label: 'Form Data QA', value: '100% Fixed', color: 'bg-accent-yellow' },
      { label: 'Workshop Attendance', value: '10-15/event', color: 'bg-primary-blue' },
    ],
    reflection: 'Hands-on iteration and self-QA are just as critical as initial wireframing. Catching the WhatsApp form data payload bug during testing reinforced the value of testing against edge cases before real users encounter them.',
  },
  'crochet-brand': {
    name: '[Crochet Brand Name]',
    role: 'Brand Building, Product Packaging & Inventory Operations',
    timeframe: 'Small Business',
    goal: 'Convert a crochet hobby into a structured, fully branded business with scalable tracking and consistent community engagement.',
    actions: [
      'Defined distinct brand positioning and product catalog structure.',
      'Built data tracking models to log orders, customer inquiries, and inventory costs.',
      'Executed organic community growth strategies through structured visual showcase.',
    ],
    results: [
      { label: 'Hobby to Brand', value: '100%', color: 'bg-primary-magenta' },
      { label: 'Data Model', value: 'Structured', color: 'bg-accent-mint' },
      { label: 'Catalog', value: 'Active', color: 'bg-accent-yellow' },
      { label: 'Engagement', value: 'Growing', color: 'bg-primary-blue' },
    ],
    reflection: 'Scaling a handmade craft business requires blending creative production with structured inventory and booking tracking.',
  }
};

const ProjectDetail = () => {
  const { slug } = useParams();

  if (slug === 'chronicle' || slug === 'chronicle-ai-cursor') {
    return <ChronicleDetail />;
  }

  if (slug === 'social-beans' || slug === 'social-bean') {
    return <SocialBeansDetail />;
  }

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen p-16 pt-24 text-center">
        <h1 className="text-3xl text-deep-maroon font-press-start mb-8">CASE STUDY NOT FOUND</h1>
        <Link to="/case-studies" className="retro-btn">RETURN TO CASE STUDIES</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 md:p-16 pt-24 max-w-4xl mx-auto">
      
      {/* Header Panel */}
      <div className="retro-panel mb-8 bg-bg-cream/50">
        <div className="text-[10px] font-press-start text-primary-magenta mb-2">CASE STUDY</div>
        <h1 className="text-2xl md:text-4xl text-primary-blue font-press-start mb-4 drop-shadow-[2px_2px_0_rgba(122,18,36,0.1)] leading-tight">
          {project.name}
        </h1>
        <div className="font-press-start text-xs text-deep-maroon space-y-2 opacity-80">
          <p><span className="text-primary-magenta">ROLE:</span> {project.role}</p>
          <p><span className="text-primary-magenta">TIME:</span> {project.timeframe}</p>
        </div>
      </div>

      <div className="space-y-12">
        {/* The Goal */}
        <section>
          <h2 className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-magenta inline-block pb-1">
            THE GOAL &amp; PROBLEM
          </h2>
          <div className="retro-panel">
            <p className="font-inter text-base md:text-lg text-deep-maroon leading-relaxed">
              {project.goal}
            </p>
          </div>
        </section>

        {/* What I Did */}
        <section>
          <h2 className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-mint inline-block pb-1">
            WHAT I DESIGNED &amp; BUILT
          </h2>
          <div className="retro-panel">
            <ul className="font-inter text-base md:text-lg space-y-4">
              {project.actions.map((action, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-primary-blue font-bold mt-0.5">►</span>
                  <span className="leading-relaxed">{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-accent-yellow inline-block pb-1">
            OUTCOMES &amp; IMPACT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.results.map((stat, idx) => (
              <div key={idx} className={`border-4 border-deep-maroon p-4 flex flex-col items-center justify-center text-center shadow-[4px_4px_0_0_#7A1224] ${stat.color} hover:-translate-y-1 transition-transform`}>
                <span className="font-press-start text-lg md:text-xl text-deep-maroon mb-2 drop-shadow-[1px_1px_0_rgba(255,255,255,0.8)]">
                  {stat.value}
                </span>
                <span className="font-inter text-xs font-bold text-deep-maroon uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings & Reflections */}
        <section>
          <h2 className="text-xl md:text-2xl text-deep-maroon font-press-start mb-4 border-b-4 border-primary-blue inline-block pb-1">
            LEARNINGS &amp; QA
          </h2>
          <div className="retro-panel bg-bg-cream/50">
            <p className="font-inter text-base md:text-lg text-deep-maroon leading-relaxed italic">
              "{project.reflection}"
            </p>
          </div>
        </section>

        <div className="pt-4">
          <Link to="/case-studies" className="retro-btn">
            &lt; BACK TO CASE STUDIES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
