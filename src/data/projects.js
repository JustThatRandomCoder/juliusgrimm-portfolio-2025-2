export const projects = [
    {
        id: 1,
        name: "VibeVote",
        description: "A tool for managing song requests as a DJ",
        logo: "../public/projects/vibevote/logo.png",
        video: "../public/projects/vibevote/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "vibevote.de", url: "https://vibevote.de" }
        ],
        caseStudy: {
            duration: "March 2024 - May 2024",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://figma.com/your-project-link" },
                { name: "VS Code", icon: "MdCode" }
            ],
            github: {
                url: "https://github.com/yourusername/vibevote",
                icon: "MdGithub"
            },
            stack: ["React", "Node.js", "MongoDB", "Socket.io"],
            description: [
                "VibeVote revolutionizes how DJs interact with their audience by creating a seamless song request experience.",
                "The platform allows party-goers to submit song requests in real-time, while giving DJs complete control over their playlist and crowd engagement.",
                "Built with modern web technologies, VibeVote bridges the gap between DJs and their audience, creating more interactive and memorable events."
            ],
            sections: [
                {
                    title: "Idea",
                    content: [
                        {
                            type: "paragraph",
                            text: "The concept for VibeVote emerged from observing the disconnect between DJs and their audience at events."
                        },
                        {
                            type: "paragraph",
                            text: "Traditional methods of song requests were often chaotic and inefficient, leading to frustrated party-goers and overwhelmed DJs."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/vibevote/idea-sketch.jpg",
                            alt: "Initial concept sketches"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Problem: DJs couldn't effectively manage song requests",
                                "Solution: Create a digital platform for organized requests",
                                "Goal: Enhance the party experience for everyone involved"
                            ]
                        },
                        {
                            type: "indent",
                            text: "This indented paragraph provides additional context or a detailed explanation that supports the main content above. It's visually separated to show hierarchy and relationship to the parent content."
                        }
                    ]
                },
                {
                    title: "Design Process",
                    content: [
                        {
                            type: "paragraph",
                            text: "The design phase focused on creating an intuitive interface for both DJs and party-goers."
                        },
                        {
                            type: "bullets",
                            items: [
                                "User research with professional DJs",
                                "Wireframing and prototyping",
                                "Usability testing with target audience"
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "../public/projects/vibevote/design-process.mp4",
                            alt: "Design process walkthrough"
                        },
                        {
                            type: "paragraph",
                            text: "The final design emphasizes simplicity and real-time feedback."
                        },
                        {
                            type: "indent",
                            text: "User testing revealed that the simplified interface increased user engagement by 40% compared to traditional request methods."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/vibevote/wireframes.jpg",
                            alt: "Application wireframes"
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 2,
        name: "FestiFly",
        description: "An AI based tool for hosting events",
        logo: "../public/projects/festifly/logo.png",
        video: "../public/projects/festifly/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "festifly.ai", url: "https://festifly.ai" }
        ],
        caseStudy: {
            duration: "January 2024 - April 2024",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://figma.com/festifly-project" },
                { name: "VS Code", icon: "MdCode" }
            ],
            stack: ["React", "Python", "OpenAI API", "PostgreSQL"],
            description: [
                "FestiFly harnesses the power of artificial intelligence to revolutionize event planning and management.",
                "The platform uses advanced AI algorithms to automate complex event logistics, from venue selection to guest management and catering coordination.",
                "Built for event professionals and organizations, FestiFly reduces planning time by 70% while ensuring every detail is perfectly orchestrated."
            ],
            sections: [
                {
                    title: "Problem Statement",
                    content: [
                        {
                            type: "paragraph",
                            text: "Event planning is notoriously complex and time-consuming, often requiring coordination of multiple vendors, venues, and stakeholders."
                        },
                        {
                            type: "paragraph",
                            text: "Traditional event planning methods rely heavily on manual processes, leading to errors and inefficiencies."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/festifly/problem-analysis.jpg",
                            alt: "Event planning challenges analysis"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Challenge: Overwhelming amount of coordination required",
                                "Pain Point: Lack of centralized communication",
                                "Opportunity: Leverage AI to automate repetitive tasks"
                            ]
                        },
                        {
                            type: "indent",
                            text: "Research conducted with 50+ event planners revealed that 80% of their time was spent on repetitive coordination tasks that could be automated."
                        }
                    ]
                },
                {
                    title: "AI Implementation",
                    content: [
                        {
                            type: "paragraph",
                            text: "The core of FestiFly lies in its sophisticated AI engine that learns from event patterns and user preferences."
                        },
                        {
                            type: "paragraph",
                            text: "The system uses machine learning to predict optimal event configurations and automate vendor selection."
                        },
                        {
                            type: "bullets",
                            items: [
                                "Natural language processing for event requirement analysis",
                                "Predictive algorithms for budget optimization",
                                "Automated scheduling and conflict resolution"
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "../public/projects/festifly/ai-demo.mp4",
                            alt: "AI features demonstration"
                        }
                    ]
                }
            ]
        }
    },
    {
        id: 3,
        name: "SkyView",
        description: "An open-source weather app focused on design",
        logo: "../public/projects/skyview/logo.svg",
        video: "../public/projects/skyview/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "skyview.juliusgrimm.dev", url: "https://skyview.juliusgrimm.dev" }
        ],
        caseStudy: {
            duration: "June 2024 - July 2024",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://figma.com/skyview-design" },
                { name: "VS Code", icon: "MdCode" }
            ],
            github: {
                url: "https://github.com/yourusername/skyview",
                icon: "MdGithub"
            },
            stack: ["React Native", "TypeScript", "Weather API"],
            description: [
                "SkyView reimagines weather applications with a focus on beautiful design and intuitive user experience.",
                "The app goes beyond basic weather information to provide contextual insights and personalized recommendations based on weather conditions.",
                "As an open-source project, SkyView demonstrates how thoughtful design can transform everyday utility apps into delightful experiences."
            ],
            sections: [
                {
                    title: "Design Philosophy",
                    content: [
                        {
                            type: "paragraph",
                            text: "The design of SkyView was driven by the principle that weather information should be both beautiful and functional."
                        },
                        {
                            type: "paragraph",
                            text: "Every visual element was carefully crafted to convey weather conditions intuitively, using color, typography, and animation."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/skyview/design-system.jpg",
                            alt: "Design system and color schemes"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Minimalist interface design",
                                "Contextual color schemes based on weather",
                                "Smooth animations and micro-interactions"
                            ]
                        },
                        {
                            type: "indent",
                            text: "The color system dynamically adapts based on weather conditions - warm oranges for sunny days, cool blues for rainy weather, creating an emotional connection with the current conditions."
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "../public/projects/skyview/animations.mp4",
                            alt: "App animations showcase"
                        },
                        {
                            type: "paragraph",
                            text: "The goal was to create an app that users would enjoy opening, regardless of the weather outside."
                        }
                    ]
                },
                {
                    title: "Technical Implementation",
                    content: [
                        {
                            type: "paragraph",
                            text: "SkyView was built using React Native to ensure cross-platform compatibility while maintaining native performance."
                        },
                        {
                            type: "paragraph",
                            text: "The app integrates with multiple weather APIs to provide accurate and comprehensive weather data."
                        },
                        {
                            type: "bullets",
                            items: [
                                "Cross-platform mobile development",
                                "Real-time weather data integration",
                                "Offline caching for reliable access"
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/skyview/architecture.jpg",
                            alt: "Application architecture diagram"
                        },
                        {
                            type: "paragraph",
                            text: "The technical architecture prioritizes performance and reliability, ensuring users always have access to weather information when they need it."
                        }
                    ]
                }
            ]
        }
    }
];
