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
    description: 'E-commerce demo built for a client featuring WooCommerce and a custom mobile-first design.',
    image: '/placeholders/rose-city.jpg',
    previewLink: '#',
  },
  {
    id: 'bloemcoverage',
    title: 'BloemCoverage News',
    description: 'A lightning-fast news portal demo built for a client, fully managed via WordPress.',
    image: '/placeholders/bloemcoverage.jpg',
    previewLink: '#',
  },
];

const webAppProjects: Project[] = [
  {
    id: 'product-image-studio',
    title: 'Product Image Studio',
    description: 'Interactive design tool for creating product mockups and scene compositions from raw screenshots.',
    image: '/placeholders/product-image-studio.jpg',
    previewLink: '#',
    githubLink: '#',
  },
  {
    id: 'my-notes-next',
    title: 'My Notes Next',
    description: 'Next.js-powered knowledge base and personal wiki featuring bidirectional page linking.',
    image: '/placeholders/my-notes.jpg',
    previewLink: '#',
    githubLink: '#',
  },
  {
    id: 'the-h-note',
    title: 'The H-Note',
    description: 'Robust markdown-supported note-taking application featuring clean categorization and real-time sync.',
    image: '/placeholders/h-note.jpg',
    previewLink: '#',
    githubLink: '#',
  },
  {
    id: 'tweetfeed-react',
    title: 'TweetFeed',
    description: 'Full-stack Twitter clone with React, Node.js, Express, and MongoDB.',
    image: '/placeholders/tweetfeed.jpg',
    previewLink: '#',
    githubLink: '#',
  },
  {
    id: 'email-template',
    title: 'HTML Email Framework',
    description: 'A bulletproof, responsive HTML email template framework designed for Outlook compatibility.',
    image: '/placeholders/email.jpg',
    previewLink: '#',
    githubLink: '#',
  },
  {
    id: 'admin-dashboard',
    title: 'Admin Dashboard',
    description: 'Comprehensive business analytics and administrative control panel.',
    image: '/placeholders/admin.jpg',
    previewLink: '#',
    githubLink: '#',
  },
];

const openSourceProjects: Project[] = [
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    description: 'Personal finance and budgeting utility for tracking expenses and income streams.',
    image: '/placeholders/finance.jpg',
    githubLink: '#',
  },
  {
    id: 'open-jobboard',
    title: 'Open Job Board',
    description: 'Open source job board platform built with Gatsby, powered by HrFlow.ai API.',
    image: '/placeholders/jobboard.jpg',
    githubLink: '#',
  },
  {
    id: 'digital-parent',
    title: 'Digital Parent V5',
    description: 'Next-generation digital parent assistant incorporating AI-driven activity insights.',
    image: '/placeholders/parent.jpg',
    githubLink: '#',
  },
  {
    id: 'naledi-theme',
    title: 'Naledi WP Theme',
    description: 'Custom WordPress theme with WooCommerce, custom post types, and modern design.',
    image: '/placeholders/naledi.jpg',
    githubLink: '#',
  },
  {
    id: 'file-browser-pod',
    title: 'File Browser POD',
    description: 'Web interface for managing server files through a browser - upload, delete, preview.',
    image: '/placeholders/file-browser.jpg',
    githubLink: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    {/* Image Container */}
    <div className="relative aspect-video bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
        [ Image Placeholder: {project.id} ]
      </div>
      
      {/* Hover Overlay (WP Theme Style) */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3 backdrop-blur-sm z-10">
        {project.previewLink && (
          <a
            href={project.previewLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded transition-colors"
          >
            Live Preview
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white border border-white/40 text-sm font-semibold rounded transition-colors"
          >
            GitHub Code
          </a>
        )}
      </div>
    </div>
    
    {/* Card Details */}
    <div className="p-5">
      <h3 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {project.description}
      </p>
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-24">
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
          Tankiso Mpela
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
          Full-stack developer building robust web applications, highly optimized WordPress experiences, and open-source tooling.
        </p>
      </header>

      {/* WordPress Showcase */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">WordPress Showcase</h2>
          <p className="text-gray-500 mt-1">Production-ready custom themes and e-commerce solutions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wordpressProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Web Apps */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Web Applications</h2>
          <p className="text-gray-500 mt-1">Full-stack React, Next.js, and Node applications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webAppProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Open Source / Not Deployed */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="border-b border-gray-200 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Open Source & Tools</h2>
          <p className="text-gray-500 mt-1">Utility scripts, backend infrastructure, and code archives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openSourceProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
