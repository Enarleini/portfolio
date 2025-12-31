import React, { useState, useEffect } from "react";

import TabBarDesktop from "./TabBarDesktop";
import BackgroundEffects from "./BackgroundEffects";
import TypewriterText from "./TypewriterText";

import { Terminal, Github, Linkedin } from "lucide-react";

import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

import type { Tab } from "./TabButton";

const tabs: Tab[] = ["Home", "Experience", "Skills", "Projects", "Contact"];

const Home = () => {
    const [activeTab, setActiveTab] = useState<Tab>("Home");
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);


        const observer = new IntersectionObserver(
            (entries) => {
                let mostVisibleEntry: IntersectionObserverEntry | null = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (
                            !mostVisibleEntry ||
                            entry.intersectionRatio > mostVisibleEntry.intersectionRatio
                        ) {
                            mostVisibleEntry = entry;
                        }
                    }
                });

                if (mostVisibleEntry !== null) {
                    const target = mostVisibleEntry.target as HTMLElement;
                    const id = target.id;
                    const capitalized = id.charAt(0).toUpperCase() + id.slice(1);
                    if (tabs.includes(capitalized as Tab)) {
                        setActiveTab(capitalized as Tab);
                    }
                }
            },
            { threshold: 0.5 }
        );


        tabs.forEach((tab) => {
            const section = document.getElementById(tab.toLowerCase());
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove as any);
            observer.disconnect();
        };
    }, []);

    const handleTabClick = (tab: Tab, e: MouseEvent | any) => {
        e.preventDefault();
        setActiveTab(tab);
        const section = document.getElementById(tab.toLowerCase());
        section?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <main className="min-h-screen bg-gray-900 text-white overflow-x-hidden scroll-smooth pt-16">
            <TabBarDesktop activeTab={activeTab} onClick={handleTabClick} tabs={tabs} />

            <BackgroundEffects mouseX={mousePosition.x} mouseY={mousePosition.y} />

            <section
                id="home"
                className={`flex items-center justify-center px-4 ${
                    activeTab === "Home" ? "pt-32" : "pt-0"
                } scroll-mt-16 min-h-screen`}
            >
                <div
                    className="text-center max-w-4xl relative z-10"
                    style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(30px)" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">Enar<span className="mx-4" />Leini</h1>

                    <div className="mb-8 relative">
                        <div
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-800 border border-gray-700 backdrop-blur-sm"
                            style={{ transition: "transform 0.3s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                        >
                            <Terminal className="w-5 h-5 text-gray-400" />
                            <TypewriterText />
                        </div>
                    </div>

                    <div className="space-x-6">
                        <a
                            href="https://github.com/enarL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg text-gray-400 font-semibold hover:text-white hover:border-white transition"
                        >
                            <Github className="w-5 h-5" /> GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/enar-leini"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg text-gray-400 font-semibold hover:text-white hover:border-white transition"
                        >
                            <Linkedin className="w-5 h-5" /> LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            <section id="experience" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-8">
                <Experience />
            </section>

            <section id="skills" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-8">
                <Skills />
            </section>

            <section id="projects" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-8">
                <Projects />
            </section>

            <section id="contact" className="max-w-7xl mx-auto px-4 py-12 scroll-mt-8">
                <Contact />
            </section>
        </main>
    );
};

export default Home;
