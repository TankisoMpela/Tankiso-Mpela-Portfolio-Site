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
    githubLink: 'https://github.com/TankisoMpela/paballo-cv',
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
    id: 'product-image-studio',
    title: 'Product Image Studio',
    description: 'I created this interactive design tool because I wanted a faster way to turn raw screenshots into stunning product mockups. It lets you compose beautiful scenes on the fly, entirely in the browser.',
    image: '',
    previewLink: 'https://product-image-studio.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/product-image-studio',
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
          
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-40 h-auto aspect-[3/4] md:w-48 rounded-2xl overflow-hidden border-4 border-gray-100 shadow-md bg-gray-200 flex items-center justify-center relative">
              <img src="/profile.png" alt="Tankiso Mpela" className="w-full h-full object-cover relative z-10" />
            </div>
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
