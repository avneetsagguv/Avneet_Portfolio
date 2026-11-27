import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const caseStudies = [
    { 
      id: 1, 
      slug: 'social-beans', 
      name: 'Social Beans', 
      tag: 'Self-Serve Booking Flow / Co-founded',
      desc: 'Designing and shipping a real self-serve booking flow for a creative workshop brand — from Figma wireframe to working prototype, including post-launch QA.',
      icon: '☕',
      colorClass: 'bg-primary-magenta'
    },
    { 
      id: 3, 
      slug: 'chronicle', 
      name: 'Chronicle: AI Cursor for Slides', 
      tag: 'AI Product Teardown / Roadmap',
      desc: 'A teardown and 12-week roadmap for an AI co-editing feature, covering the user flow, pain points, feature specs, metrics and feedback loop.',
      icon: '🪄',
      colorClass: 'bg-primary-blue'
    },
    { 
      id: 2, 
      slug: 'crochet-brand', 
      name: '[Crochet Brand Name]', 
      tag: 'Small Business / Brand Building',
      desc: 'Converted a crochet hobby into a fully branded business — structured product positioning, inventory tracking, and organic growth.',
      icon: '🧶',
      colorClass: 'bg-primary-blue',
      hidden: true // Set to false to show this card again
    },
  ];

  return (
    <div className="min-h-screen p-8 md:p-16 pt-24 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-5xl text-primary-blue mb-4 border-b-8 border-primary-blue inline-block pb-2 drop-shadow-[4px_4px_0_rgba(122,18,36,0.2)]">
        CASE STUDIES
      </h1>
      <p className="font-press-start text-xs text-deep-maroon/70 mb-12">
        APPLIED PRODUCT WORK &amp; USER-CENTERED SOLUTIONS
      </p>
      
      <div className="flex flex-col gap-8">
        {caseStudies.filter(study => !study.hidden).map(study => (
          <div key={study.id} className="retro-panel flex flex-col md:flex-row gap-6 hover:-translate-y-2 transition-transform duration-300 items-start">
            
            {/* Icon Box */}
            <div className={`w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center border-4 border-deep-maroon text-4xl shadow-[4px_4px_0_0_#7A1224] ${study.colorClass}`}>
              {study.icon}
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow justify-between h-full w-full">
              <div>
                <div className="flex flex-wrap gap-4 items-center mb-3">
                  <h2 className="text-xl md:text-2xl text-deep-maroon font-press-start leading-tight">{study.name}</h2>
                  <span className="font-press-start text-[10px] text-white bg-deep-maroon px-2 py-1 tracking-widest border-2 border-deep-maroon/50">
                    {study.tag}
                  </span>
                </div>
                <p className="font-inter text-base text-deep-maroon/80 mb-6 font-medium leading-relaxed">
                  {study.desc}
                </p>
              </div>
              
              <Link to={`/case-studies/${study.slug}`} className="retro-btn text-center text-xs md:text-sm self-start">
                VIEW CASE STUDY &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
