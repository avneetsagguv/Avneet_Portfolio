import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen p-8 md:p-16 pt-32 max-w-2xl mx-auto flex flex-col items-center justify-center">
      
      <div className="retro-panel w-full flex flex-col items-center py-12">
        <h1 className="text-3xl md:text-4xl text-primary-magenta font-press-start mb-2 drop-shadow-[2px_2px_0_rgba(122,18,36,0.2)]">
          SAVE GAME?
        </h1>
        <p className="font-press-start text-xs md:text-sm text-deep-maroon/60 mb-12">
          RECRUIT TO PARTY
        </p>

        <div className="flex flex-col gap-6 w-full max-w-xs">
          <a 
            id="email-btn"
            href="mailto:avneetsagguv@gmail.com" 
            className="retro-btn text-center text-sm"
          >
            EMAIL
          </a>
          <a 
            id="linkedin-btn"
            href="https://www.linkedin.com/in/avneetsaggu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="retro-btn text-center text-sm bg-primary-blue hover:bg-accent-mint hover:text-deep-maroon"
          >
            LINKEDIN
          </a>
          <a 
            id="resume-btn"
            href="/resume.pdf" 
            download="Avneet_Saggu_Resume.pdf" 
            className="retro-btn text-center text-sm bg-accent-yellow text-deep-maroon hover:bg-primary-magenta hover:text-white"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
