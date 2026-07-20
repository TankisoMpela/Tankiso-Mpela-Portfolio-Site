"use client";

import React, { useState } from 'react';

type Version = {
  label: string;
  url?: string;
  status?: string;
  image: string;
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  previewLink?: string;
  githubLink?: string;
  technologies: string[];
  about: string;
  hasVersions?: boolean;
  versions?: Version[];
};

const webDevProjects: Project[] = [
  {
    id: 'rose-city-beauty',
    title: 'Rose City Beauty',
    description: 'Full-featured e-commerce storefront for a beauty brand based in Bloemfontein, South Africa.',
    image: '/placeholders/rose-city.png',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Zustand'],
    about: 'A complete e-commerce platform built for Rose City Beauty, a South African beauty brand. Features include a product catalog with variants, cart and checkout with PayPal + cash-on-delivery payment options, guest checkout, and a full admin dashboard for managing products, orders, customers, and shipping. Priced in ZAR with automatic EUR conversion for PayPal.',
    hasVersions: true,
    versions: [
      {
        label: 'Next.js + Supabase (PayPal & Google Auth)',
        url: 'https://rose-city-store.vercel.app/login',
        image: '/placeholders/rose-city.png',
      },
      {
        label: 'WordPress Version',
        url: 'https://cheery-frangipane-6837d1.netlify.app/',
        status: 'In Progress',
        image: '/placeholders/rose-city.png',
      },
    ],
  },
  {
    id: 'mpela-co-companions',
    title: 'Mpela CO AI Companions',
    description: 'AI-powered assistant platform with 5 specialized companions for legal, wellness, business, career, and finance.',
    image: '/placeholders/mpela-co-companions.png',
    previewLink: 'https://mpela-co-ai-companions.vercel.app',
    technologies: ['React', 'Vite', 'React Router v7', 'OpenRouter API', 'PWA'],
    about: 'A React SPA with 5 AI companions — Legal, Wellness, Business, Career, and Finance — each with distinct personalities and expertise. Powered by OpenRouter API with real-time streaming responses, suggestion chips for guided conversations, dark mode, session history, and full PWA support for mobile install. Built with Vite, React 19, and React Router v7.',
  },
  {
    id: 'tweetfeed-react',
    title: 'TweetFeed React',
    description: 'A full-stack Twitter/X clone with real-time feeds, Google OAuth, DMs, and trending topics.',
    image: '/placeholders/tweetfeed-react.png',
    previewLink: 'https://tweetfeed-react.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/tweetfeed-react',
    technologies: ['React', 'Next.js', 'Supabase', 'Material-UI', 'Realtime'],
    about: 'A fully functional Twitter/X clone built with React and Supabase. Features Google OAuth authentication, a live tweet feed powered by Supabase Realtime, likes, reposts, bookmarks, direct messaging, user profiles with follow/unfollow, trending topics, and a responsive design with custom SVG icons. Full-stack with Supabase handling PostgreSQL, Auth, and real-time subscriptions.',
  },
  {
    id: 'cv-generator',
    title: 'CV Generator',
    description: 'A step-by-step web app that generates professional, print-ready PDF CVs tailored to each user.',
    image: '/placeholders/cv-generator.png',
    previewLink: 'https://paballo-cv.vercel.app',
    githubLink: 'https://github.com/TankisoMpela/CV-Generator-Web-App',
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    about: 'A dynamic web application that guides users through a step-by-step form to enter their professional details, then generates a beautifully structured, print-ready PDF CV. Built with React and Tailwind CSS for a clean, responsive experience.',
  },
];

const marketingVideos = [
  {
    id: '3dom-webdev-elevenlabs',
    title: '3Dom Agency Ad',
    src: '/videos/3dom-webdev-elevenlabs.mp4',
  },
  {
    id: 'rose-city-beauty-v2',
    title: 'Rose City Beauty — Product Showcase',
    src: '/videos/rose-city-beauty-v2.mp4',
  },
];

const techStack = [
  'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'JavaScript (ES6+)',
  'Tailwind CSS', 'WordPress', 'PHP', 'HTML5 & CSS3',
  'Docker', 'Git', 'Linux', 'Java', 'Oracle SQL', 'AI Tooling',
  'Email Marketing', 'Digital Design'
];

const getTechColor = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('next.js')) return 'bg-blue-50 text-blue-700 border-blue-200';
  if (t.includes('node') || t.includes('mongodb') || t.includes('javascript') || t.includes('express')) return 'bg-emerald-50 text-emerald-700 border-emerald-200';
  if (t.includes('wordpress') || t.includes('php')) return 'bg-indigo-50 text-indigo-700 border-indigo-200';
  if (t.includes('html') || t.includes('css') || t.includes('tailwind')) return 'bg-cyan-50 text-cyan-700 border-cyan-200';
  if (t.includes('supabase') || t.includes('postgresql') || t.includes('sql')) return 'bg-violet-50 text-violet-700 border-violet-200';
  if (t.includes('zustand') || t.includes('state')) return 'bg-orange-50 text-orange-700 border-orange-200';
  if (t.includes('figma') || t.includes('canva') || t.includes('ui design') || t.includes('material')) return 'bg-pink-50 text-pink-700 border-pink-200';
  if (t.includes('pwa') || t.includes('service worker')) return 'bg-teal-50 text-teal-700 border-teal-200';
  if (t.includes('openrouter') || t.includes('ai') || t.includes('llm')) return 'bg-purple-50 text-purple-700 border-purple-200';
  if (t.includes('vite')) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
  if (t.includes('realtime') || t.includes('websocket')) return 'bg-red-50 text-red-700 border-red-200';
  return 'bg-gray-50 text-gray-700 border-gray-200';
};

const Modal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    <div
      className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 z-10"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{project.title}</h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">{project.about}</p>

      {project.hasVersions && project.versions ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {project.versions.map((v, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <img
                src={v.image}
                alt={v.label}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-gray-800 text-sm mb-3">{v.label}</p>
                <div className="flex items-center gap-2">
                  {v.url && (
                    <a
                      href={v.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors"
                    >
                      Live View
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {v.status && (
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold rounded-lg">
                      {v.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl mb-4 border border-gray-200"
            />
          )}
          <div className="flex gap-3">
            {project.previewLink && (
              <a
                href={project.previewLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors"
              >
                Live View
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-bold rounded-lg transition-colors"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
);

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <div
    className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col cursor-pointer"
    onClick={onClick}
  >
    <div className={`relative bg-gray-100 overflow-hidden ${project.image ? '' : 'aspect-[4/3]'}`}>
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-auto relative z-0" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gray-50">
          [ Placeholder: {project.id} ]
        </div>
      )}
      <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-4 backdrop-blur-[2px] z-10">
        <span className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-wide rounded-md transition-colors shadow-lg">
          View Details
        </span>
      </div>
    </div>

    <div className="p-8 flex flex-col flex-1">
      <h3 className="font-extrabold text-2xl text-gray-900 mb-3">{project.title}</h3>
      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${getTechColor(tech)}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-32">
      {/* Hero Section */}
      <header className="w-full px-6 py-20 md:py-32 bg-white border-b border-gray-200">
        <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
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

          <div className="flex-1 w-full max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
              Tankiso Mpela
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Self-taught full-stack web developer with a Computer Science background. I build production-ready web applications with React, Next.js, Supabase, and AI integrations. Practical problem-solver comfortable across the full stack, from frontend UI to backend infrastructure and deployment.
            </p>

            <div className="flex flex-wrap gap-2 max-w-3xl">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="flex-auto text-center px-4 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md shadow-sm border border-gray-800 hover:bg-gray-800 transition-colors cursor-default whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[100rem] mx-auto px-6 md:px-12 mt-20">
        {/* Web Apps & Projects */}
        <section className="mb-28">
          <div className="border-b-2 border-gray-200 pb-4 mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">💻 Web Applications & Projects</h2>
            <p className="text-xl text-gray-500 mt-2">Full-stack applications, e-commerce storefronts, and AI-powered tools.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
            {webDevProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {/* Marketing Videos */}
        <section className="mb-28">
          <div className="border-b-2 border-gray-200 pb-4 mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">🎬 Marketing & Video Ads</h2>
            <p className="text-xl text-gray-500 mt-2">Promotional videos and social media ads for brands.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {marketingVideos.map((video) => (
              <div key={video.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="relative group cursor-pointer" onClick={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.requestFullscreen();
                }}>
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full max-h-[600px] object-contain bg-black"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <svg className="w-16 h-16 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v16.5h16.5V3.75H3.75zM15 12l-6 3.75V8.25L15 12z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
