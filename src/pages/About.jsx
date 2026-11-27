import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Product Thinking & UX (Figma)', value: 78, color: 'bg-primary-magenta' },
    { label: 'Data & Analytics', value: 85, color: 'bg-primary-blue' },
    { label: 'Stakeholder Communication', value: 85, color: 'bg-primary-magenta' },
    { label: 'Structured Problem Solving', value: 80, color: 'bg-primary-blue' },
  ];

  return (
    <div className="min-h-screen p-8 md:p-16 pt-24 max-w-6xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl text-primary-blue mb-12 border-b-8 border-primary-blue inline-block pb-2 drop-shadow-[4px_4px_0_rgba(122,18,36,0.2)]">
        CHARACTER SHEET
      </h1>
      
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Left Side: Avatar Card */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="retro-panel flex flex-col items-center">
            <div className="w-48 h-48 bg-bg-cream border-4 border-deep-maroon flex items-center justify-center mb-6 relative overflow-hidden">
              {/* Simple geometric pixel portrait placeholder */}
              <div className="w-16 h-16 bg-primary-magenta absolute top-8" />
              <div className="w-24 h-24 bg-primary-blue absolute bottom-0" />
              <div className="absolute font-press-start text-xs text-deep-maroon bottom-2 right-2 opacity-50">Level 24</div>
            </div>
            <h2 className="font-press-start text-xl text-deep-maroon text-center mb-2">Avneet Saggu</h2>
            <div className="px-4 py-1 bg-accent-yellow border-2 border-deep-maroon font-press-start text-xs text-deep-maroon mb-6">
              HP: 100/100
            </div>

            {/* Trivia Box */}
            <div className="w-full border-t-4 border-dashed border-deep-maroon pt-6">
              <h3 className="font-press-start text-sm text-primary-magenta mb-4">TRIVIA LOG</h3>
              <ul className="font-inter text-sm space-y-3">
                <li className="flex gap-2">
                  <span className="text-accent-mint font-bold">►</span> 
                  <span>Designed and shipped a real booking flow for my own workshop brand, from Figma wireframe to working prototype</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-mint font-bold">►</span> 
                  <span>Prepared test cases and validated financial systems at Accenture before they reached real clients</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-mint font-bold">►</span> 
                  <span>Converted a crochet hobby into a fully branded business</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-mint font-bold">►</span> 
                  <span>Fluent in both spreadsheets and Figma mockups</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent-mint font-bold">►</span> 
                  <span>Can ship a prototype faster than my coffee cools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Bio & Stats */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          <div className="retro-panel">
            <div className="font-inter text-base md:text-lg space-y-4 text-deep-maroon leading-relaxed">
              <p>
                My journey didn't start in product. I originally leveled up my analytical skills in Finance and Operations, spending 2+ years testing and validating financial process systems (SAP FICA) at Accenture. It taught me how to work with complex data, catch what's broken before it ships, and think in structured, testable steps.
              </p>
              <p>
                I found my real strength when I started applying that analytical rigor to building things people actually use. I co founded Social Beans, a creative workshop brand, and went further than just running it, designing and shipping a real self serve booking flow for it using Figma and AI assisted prototyping. (See the <Link to="/case-studies" className="text-primary-blue underline font-bold hover:text-primary-magenta">Case Studies</Link> section for the full story, including a real bug I caught and fixed post launch.)
              </p>
              <p>
                Now I sit at the intersection of Product, Data, and Communication, proving you can be analytically rigorous AND user focused AND actually ship things, not just plan them.
              </p>
            </div>
          </div>

          <div className="retro-panel">
            <h2 className="font-press-start text-xl text-deep-maroon mb-8 border-b-4 border-deep-maroon inline-block pb-2">
              SKILL STATS
            </h2>
            
            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <div className="font-press-start text-xs md:text-sm text-deep-maroon w-full md:w-5/12 leading-relaxed">
                    {stat.label}
                  </div>
                  <div className="w-full md:w-7/12 h-7 bg-bg-cream border-2 border-deep-maroon relative overflow-hidden shadow-inner">
                    <div 
                      className={`h-full border-r-2 border-deep-maroon ${stat.color}`}
                      style={{ width: `${stat.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
