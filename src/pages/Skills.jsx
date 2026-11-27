import React, { useState } from 'react';

const skillsData = [
  // Product & Execution
  {
    id: 1,
    name: 'Product Testing & Validation',
    category: 'Product & Execution',
    icon: '🛡️',
    desc: 'Prepared test cases and validated financial process modules at Accenture, ensuring accuracy before deployment.'
  },
  {
    id: 2,
    name: 'Data-Driven Decision Making',
    category: 'Product & Execution',
    icon: '📊',
    desc: 'Tracked performance metrics to identify what content resonates and refine strategy accordingly.'
  },
  {
    id: 3,
    name: 'Stakeholder Communication',
    category: 'Product & Execution',
    icon: '🗣️',
    desc: 'Translated technical testing outcomes into clear updates for non-technical clients and internal teams at Accenture.'
  },
  {
    id: 4,
    name: 'Cross-Functional Coordination',
    category: 'Product & Execution',
    icon: '🤝',
    desc: 'Managed priorities across 3 client teams simultaneously in a fast-paced delivery environment.'
  },
  {
    id: 5,
    name: 'User-Centered Problem Solving',
    category: 'Product & Execution',
    icon: '🎯',
    desc: 'Identified a real friction point in a live business (manual bookings) and designed a solution around actual user behavior.'
  },
  {
    id: 6,
    name: 'Iteration & Self-QA',
    category: 'Product & Execution',
    icon: '🔍',
    desc: 'Caught and fixed a functional gap in a shipped product flow (WhatsApp message not carrying form data) through hands-on testing.'
  },
  {
    id: 7,
    name: 'AI Product Strategy',
    category: 'Product & Execution',
    icon: '🪄',
    desc: 'Mapped a user flow, wrote feature specs, set success metrics and a 12-week roadmap for an AI co-editing feature.'
  },

  // Technical & Prototyping
  {
    id: 8,
    name: 'UI/UX Design (Figma)',
    category: 'Tech & Prototyping',
    icon: '🎨',
    desc: 'Currently designing wireframes and clickable prototypes in Figma for a real booking flow, translating a user journey into structured screens.'
  },
  {
    id: 9,
    name: 'AI-Assisted Prototyping',
    category: 'Tech & Prototyping',
    icon: '⚡',
    desc: 'Building functional product prototypes moving from idea to working demo independently.'
  },
  {
    id: 10,
    name: 'Data Modeling',
    category: 'Tech & Prototyping',
    icon: '🧱',
    desc: 'Learning to structure relational data to support scalable tracking of bookings and customer records.'
  },
  {
    id: 11,
    name: 'SQL Fundamentals',
    category: 'Tech & Prototyping',
    icon: '💾',
    desc: 'Building basic query skills to support future data analysis needs in product work.'
  }
];

const Skills = () => {
  const [selectedItem, setSelectedItem] = useState(skillsData[0]);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredItems = activeFilter === 'ALL'
    ? skillsData
    : skillsData.filter(item => item.category === activeFilter);

  const productCount = skillsData.filter(item => item.category === 'Product & Execution').length;
  const techCount = skillsData.filter(item => item.category === 'Tech & Prototyping').length;

  return (
    <div className="min-h-screen p-6 md:p-16 pt-24 max-w-5xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl text-primary-blue mb-4 border-b-8 border-primary-blue inline-block pb-2 drop-shadow-[4px_4px_0_rgba(122,18,36,0.2)]">
        INVENTORY
      </h1>
      <p className="font-press-start text-xs text-deep-maroon/70 mb-8 text-center">
        EQUIPPED SKILLS & COMPETENCY SLOTS
      </p>

      {/* Tooltip / Item Inspector Display Area */}
      <div className="w-full max-w-3xl min-h-[7.5rem] mb-8 retro-panel flex flex-col justify-center bg-white border-4 border-deep-maroon shadow-[6px_6px_0_0_#2F5FCB] p-5 transition-all">
        {selectedItem ? (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-2xl">{selectedItem.icon}</span>
              <h3 className="font-press-start text-primary-magenta text-sm md:text-base">
                {selectedItem.name}
              </h3>
              <span className="font-press-start text-[9px] px-2 py-0.5 border border-deep-maroon bg-accent-yellow text-deep-maroon">
                {selectedItem.category}
              </span>
            </div>
            <p className="font-inter text-deep-maroon text-sm md:text-base leading-relaxed pl-1">
              {selectedItem.desc}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="font-press-start text-xs text-deep-maroon/50 animate-pulse">
              CLICK OR HOVER OVER AN ITEM TO INSPECT
            </p>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {[
          { key: 'ALL', label: `ALL SLOTS (${skillsData.length})` },
          { key: 'Product & Execution', label: `PRODUCT & EXECUTION (${productCount})` },
          { key: 'Tech & Prototyping', label: `TECH & PROTOTYPING (${techCount})` },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`font-press-start text-[10px] md:text-xs px-3 py-2 border-2 border-deep-maroon transition-all ${
              activeFilter === tab.key
                ? 'bg-primary-magenta text-white shadow-[3px_3px_0_0_#7A1224] -translate-y-0.5'
                : 'bg-white text-deep-maroon hover:bg-bg-cream'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Inventory Grid Container */}
      <div className="w-full max-w-3xl bg-deep-maroon p-6 border-8 border-primary-blue shadow-[8px_8px_0_0_rgba(0,0,0,0.3)] mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {filteredItems.map((item) => {
            const isSelected = selectedItem?.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                onMouseEnter={() => setSelectedItem(item)}
                className={`group relative p-2 aspect-square bg-white border-4 transition-all flex flex-col items-center justify-center text-center shadow-inner ${
                  isSelected
                    ? 'border-accent-yellow bg-accent-yellow/20 scale-105 shadow-[0_0_12px_rgba(255,225,106,0.8)]'
                    : 'border-[#A39E93] hover:border-accent-mint hover:bg-bg-cream/40'
                }`}
              >
                <span className="absolute top-1 left-1.5 font-press-start text-[8px] text-deep-maroon/50">
                  #{item.id}
                </span>
                <div className="text-3xl md:text-4xl mb-1 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-press-start text-[7px] md:text-[8px] text-deep-maroon leading-tight line-clamp-2 px-0.5">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
