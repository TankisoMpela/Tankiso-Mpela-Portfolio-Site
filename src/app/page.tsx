import React from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  previewLink?: string;
  githubLink?: string;
};

const wordpressProjects: Project[] = [
  {
    id: 'rose-city-beauty',
    title: 'Rose City Beauty',
    description: 'I built this fully responsive e-commerce experience for a beauty brand. It features a custom WooCommerce integration that makes checking out a breeze, wrapped in a mobile-first design that prioritizes speed and usability.',
    image: '/placeholders/rose-city.png',
    previewLink: 'https://cheery-frangipane-6837d1.netlify.app/',
  },
  {
    id: 'bloemcoverage',
    title: 'BloemCoverage News',
    description: 'A dynamic, lightning-fast news portal designed to handle high traffic without breaking a sweat. I tailored the WordPress backend so the editorial team can publish breaking news instantly without wrestling with complex layouts.',
    image: '/placeholders/bloemcoverage.png',
    previewLink: 'https://reliable-buttercream-c21213.netlify.app/',
  },
];

const webAppProjects: Project[] = [
  {
    id: 'cv-generator',
    title: 'CV Generator Web App',
    description: 'A dynamic web application that generates professional, tailored CVs. It features a step-by-step form for entering details and exports beautifully structured, print-ready PDF resumes.',
    image: '/placeholders/cv-generator.png',
    previewLink: 'https://paballo-cv.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/CV-Generator-Web-App',
  },
  {
    id: 'admin-dashboard',
    title: 'Business Dashboard',
    description: 'A comprehensive administrative control panel designed to make sense of complex data. I focused heavily on the UX to turn raw business analytics into readable, actionable insights at a glance.',
    image: '/placeholders/admin-dashboard.png',
    previewLink: 'https://tankiso-admin-dashboard.netlify.app/',
    githubLink: 'https://github.com/TankisoMpela/admin-dashboard',
  },
  {
    id: 'drifter-studio',
    title: 'Drifter Studio Portfolio',
    description: 'A portfolio I did for a client that was for their creative art product showcase, featuring high-resolution galleries and custom branding.',
    image: '/placeholders/drifter-studio.png',
    previewLink: 'https://drifter-studio-omega.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/DrifterStudio',
  },
  {
    id: 'b2b-outreach',
    title: 'B2B Client Outreach Email Template',
    description: 'A clean, highly readable, responsive B2B email template designed to solve client acquisition and outreach problems. Engineered using table-based structures for robust cross-client rendering (Gmail, Outlook, Apple Mail), featuring key B2B value-proposition blocks and a prominent call-to-action button.',
    image: '/placeholders/b2b-outreach.png',
    previewLink: 'https://timely-mochi-f1d467.netlify.app/',
    githubLink: 'https://github.com/TankisoMpela/email-portfolio',
  },
  {
    id: 'tweetfeed-react',
    title: 'TweetFeed - Twitter Clone',
    description: 'A full-stack Twitter clone built from the ground up to handle real-time social interactions. I wired up React, Node.js, Express, and MongoDB to seamlessly handle user feeds, posts, and dynamic rendering.',
    image: '/placeholders/tweetfeed-react.png',
    previewLink: 'https://tweetfeeder.netlify.app/',
    githubLink: 'https://github.com/TankisoMpela/tweetfeed-react',
  },
  {
    id: 'the-h-note',
    title: 'The H-Note',
    description: 'A robust note-taking app that doesn\'t compromise on performance. It features deep Markdown support, clean categorization, and real-time syncing so your thoughts are always exactly where you left them.',
    image: '/placeholders/the-h-note.png',
    previewLink: 'https://the-h-note.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/The-H-Note',
  },
];


const techStack = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)',
  'HTML5', 'CSS3', 'Tailwind CSS', 'WordPress', 'wp-env', 'PHP',
  'Docker', 'Git', 'GitHub', 'Linux', 'Java', 'Oracle SQL', 'AI Tooling'
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    {/* Image Container */}
    <div className={`relative bg-gray-100 overflow-hidden ${project.image ? '' : 'aspect-[4/3]'}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto relative z-0"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
          [ Screenshot: {project.id} ]
        </div>
      )}
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 backdrop-blur-[2px] z-10">
        {project.previewLink && (
          <a
            href={project.previewLink}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-wide rounded-md transition-colors shadow-lg"
          >
            Live Preview
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-transparent hover:bg-white/20 text-white border-2 border-white/60 text-sm font-bold tracking-wide rounded-md transition-all"
          >
            View Source Code
          </a>
        )}
      </div>
    </div>
    
    {/* Card Details */}
    <div className="p-8">
      <h3 className="font-extrabold text-2xl text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 text-base leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-32">
      {/* Hero Section */}
      <header className="w-full px-6 py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
          
          {/* Profile Picture & Actions */}
          <div className="flex-shrink-0 flex flex-col items-center gap-4">
            <div className="w-40 h-auto aspect-[3/4] md:w-48 rounded-2xl overflow-hidden border-4 border-gray-100 shadow-md bg-gray-200 flex items-center justify-center relative">
              <img src="/profile.png" alt="Tankiso Mpela" className="w-full h-full object-cover relative z-10" />
            </div>
            <a 
              href="https://github.com/TankisoMpela" 
              target="_blank" 
              rel="noreferrer"
              className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              My GitHub
            </a>
          </div>

          {/* Bio & Stack */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
              Tankiso Mpela
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl leading-relaxed mb-8">
              Self-taught web developer with a Computer Science background from Tshwane University of Technology (Java, Oracle SQL, Linux). Financial circumstances meant I couldn't finish the degree, but I kept building—teaching myself WordPress, React, Git, Docker, and AI tooling through hands-on projects and freelance work since 2023. I am a practical problem-solver, comfortable across the full stack.
            </p>

            {/* Tech Stack Buttons */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-4 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 mt-20">
        
        {/* WordPress Showcase */}
        <section className="mb-28">
          <div className="border-b-2 border-gray-200 pb-4 mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">WordPress Showcase</h2>
            <p className="text-xl text-gray-500 mt-2">Production-ready custom themes and e-commerce solutions.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-10">
            {wordpressProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Web Apps */}
        <section className="mb-28">
          <div className="border-b-2 border-gray-200 pb-4 mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Web Applications</h2>
            <p className="text-xl text-gray-500 mt-2">Full-stack React, Next.js, and Node applications.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
            {webAppProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>



      </div>
    </div>
  );
}
