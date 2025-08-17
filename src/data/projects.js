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
            stack: ["HTML", "CSS", "Python", "MongoDB", "Socket.io"],
            description: [
                "VibeVote is a digital tool that allows DJs and event organizers to easily collect and manage song requests. Each event gets a unique QR code. Every guests can theirfore submit their song requests directly from their phones. These requests then appear live on a dashboard tailored for DJs, making it seamless to interact with the crowd’s vibe."
            ],
            sections: [
                {
                    title: "Idea",
                    content: [
                        {
                            type: "paragraph",
                            text: "The inspiration for VibeVote came during a school event I helped to organize as part of my schools tech team."
                        },
                        {
                            type: "paragraph",
                            text: "We were hosting a party for students and to keep the music engaging, we allowed guests to request songs, using pen and paper. That quickly turned chaotic. People scribbled illegibly, requests got lost and the list was hard to manage."
                        },
                        {
                            type: "indent",
                            text: "I thought: Why not bring this online?"
                        },

                    ]
                },
                {
                    title: "Research & Insights",
                    content: [
                        {
                            type: "paragraph",
                            text: "Before starting development, I explored how song requests were typically handled at events, especially in smaller or more casual settings like school parties. My own experience at a school event highlighted how messy and inefficient paper-based systems were — but I also wanted to see what digital alternatives existed."
                        },
                        {
                            type: "indent",
                            text: "Existing tools were overly complex: Some platforms did offer song request features, but they were often part of large, bloated DJ software ecosystems or required guests to download apps, create accounts, or navigate through unintuitive interfaces. For quick, casual parties, these were simply an overkill."
                        },
                        {
                            type: "indent",
                            text: "Not optimized for guests: Many tools were DJ-focused, not guest-friendly. The barrier to entry (e.g. signing up or downloading something) turned people down from using these devices altogether."
                        },
                        {
                            type: "indent",
                            text: "No instant setup: Most platforms didn’t offer a way to quickly set up a party, generate a shareable link or QR code and just start collecting requests. I wanted something that worked right out of the box—no tech skills required."
                        },
                        {
                            type: "paragraph",
                            text: "From this research, the core values of VibeVote became clear: no downloads, no signups, just request and done!"
                        },

                    ]
                },
                {
                    title: "Ideation & Wireframing",
                    content: [
                        {
                            type: "paragraph",
                            text: "I had to break down the whole idea and ask myself: What are the core features I need to build? I started with a simple sketch on paper, outlining the main components of the app."
                        },
                        {
                            type: "paragraph",
                            text: "I then moved to Figma to create a more detailed wireframe, focusing on user friendly and intuitive desing."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/vibevote/figures/figure1.png",
                            alt: "Final Figma Sketch of VibeVote"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "../public/projects/vibevote/figures/figure2.png",
                            alt: "Close up of the features of VibeVote"
                        }
                    ]
                },
                {
                    title: "First Prototype",
                    content: [
                        {
                            type: "paragraph",
                            text: "After sketching out the initial idea, I created a simple Figma Prototype, showing what the Application should look like and how I imagined it to work like."
                        },
                        {
                            type: "paragraph",
                            text: "Key features I fully developed in Figma:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Login screen for the DJ",
                                "DJ dashboard with covers to manage song requests",
                                "Generating and downloading unique Posters with QR codes for each event",
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "../public/projects/vibevote/figures/figure3.mp4",
                            alt: "First Figma prototype of VibeVote"
                        },
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
