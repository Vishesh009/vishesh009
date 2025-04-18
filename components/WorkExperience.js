"use client";
import cognizant from "../img/cognizant.png";
import { useEffect, useRef } from "react";

const workExperiences = [
  {
    company: "Cognizant",
    url: "https://procol.io",
    logo: { cognizant },
    role: "Software Engineer",
    period: "August 2021 - Present",
    description:
      "Part of the lighthouse team responsible for key architectural decisions and the development of core frameworks. Played a significant role in reducing cloud costs by optimizing server configurations, resulting in a 60% cost reduction. Worked on enterprise client projects, enhancing modules like eRFX, Awarding, and Approvals, which are expected to increase ARPA by 60%. Created the core framework for storing and accessing data as forms and pages, inspired by Notion, which now interacts with all other microservices and verticals at Procol. Previously, wrote the Lightspeed micro-service handling WebSockets across the platform, migrated the core codebase from Rails 5.1 to Rails 7, and scaled the core Auction product to support 100k entities.",
  },
];

export default function WorkExperience() {
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="work" className="py-12 md:py-16" ref={sectionRef}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="animate-on-scroll text-2xl font-bold mb-8 opacity-0 translate-y-6 transition-all duration-500 ease-out">
          Work Experience
        </h2>

        <div className="space-y-6">
          {workExperiences.map((exp, index) => (
            <a
              key={index}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-on-scroll block group opacity-0 translate-y-6 transition-all duration-500 ease-out hover:-translate-y-0.5"
            >
              <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 flex">
                <div className="flex-none mr-4">
                  <div className="relative flex shrink-0 overflow-hidden rounded-full border border-gray-200 dark:border-gray-600 size-12 bg-gray-50 dark:bg-gray-700">
                    <img
                      className="aspect-square h-full w-full object-contain p-1.5"
                      alt={exp.company}
                      src={exp.logo}
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-x-2">
                      <h3 className="inline-flex items-center font-semibold text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                        >
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                      </h3>
                      <div className="text-xs sm:text-sm tabular-nums text-gray-500 dark:text-gray-400">
                        {exp.period}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 line-clamp-3 group-hover:line-clamp-none">
                    {exp.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fadeInUp {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
