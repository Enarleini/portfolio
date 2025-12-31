import React from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        company: "Menken Trials",
        position: "Software Engineer",
        startDate: "August 2025",
        endDate: "Present",
        technologies: ["Java Spring Boot", "Next.js", "React", "PostgreSQL", "AWS S3", "AWS SQS"],
        description: "Developing and maintaining scalable web applications using modern technologies and cloud services.",
    },
    {
        company: "University of Tartu",
        position: "Full Stack Developer",
        startDate: "September 2024",
        endDate: "January 2025",
        technologies: ["Django", "Next.js", "Docker", "Kubernetes", "Keycloak", "Python"],
        description: [
            "Led full stack development with primary focus on backend and client communication, building an app for Waldur, a platform for creating hybrid cloud solutions.",
            "Orchestrated Kubernetes deployment and containerization, and integrated with Waldur APIs for automated report generation and email distribution."
        ],
    },
];

const Experience = () => (
    <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative">
            {/* Vertical timeline line - left side */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>
            
            <div className="space-y-4">
                {experiences.map((experience, idx) => (
                    <div key={idx} className="relative flex items-start gap-6">
                        {/* Timeline dot */}
                        <div className="relative z-10 flex-shrink-0">
                            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-900 shadow-lg mt-1.5" style={{ marginLeft: 'calc(2rem - 0.5rem)' }}></div>
                        </div>
                        
                        {/* Content card - always on right */}
                        <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/60 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300">
                            <h3 className="text-lg font-bold mb-1 text-white">{experience.position}</h3>
                            <p className="text-base mb-2 text-blue-400">{experience.company}</p>
                            <div className="flex items-center gap-2 text-xs text-gray-300 mb-3">
                                <Calendar className="w-3 h-3" />
                                <span>
                                    {experience.startDate} - {experience.endDate}
                                </span>
                            </div>
                            {experience.description && (
                                <ul className="text-xs mb-3 text-gray-400 leading-relaxed space-y-1 text-left">
                                    {Array.isArray(experience.description) ? (
                                        experience.description.map((point, i) => (
                                            <li key={i} className="list-disc list-inside">
                                                {point}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="list-disc list-inside">
                                            {experience.description}
                                        </li>
                                    )}
                                </ul>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                                {experience.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-0.5 text-xs bg-gray-700/80 text-blue-200 rounded-full border border-gray-600/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
