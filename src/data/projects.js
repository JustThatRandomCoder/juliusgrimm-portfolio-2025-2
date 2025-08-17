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
            duration: "May 2024 - September 2024",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://www.figma.com/design/j1938zaam803Krt20GTrOI/vibeVoteRedesign?node-id=0-1&t=BWb0DfjqnmrJ3MGo-1" },
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
                },
                {
                    title: "Development",
                    content: [
                        {
                            type: "paragraph",
                            text: "I built VibeVote completely on my own, using a lightweight and flexible tech stack. The frontend is done in plain HTML and CSS for simplicity and speed, with all UI designs created in Figma. On the backend, I used Python with Flask to handle routing, user sessions and form logic."
                        },
                        {
                            type: "paragraph",
                            text: "MongoDB powers the database, allowing flexible storage for user accounts and individual song request collections. One technical challenge was building a secure login system with encrypted token handling, which I implemented from scratch."
                        },
                        {
                            type: "paragraph",
                            text: "At each event (party) a unique QR code and poster are generated using a Python library. Guests scan the code, submit their song via a simple form and the request appears live on the DJ’s dashboard. Everything runs on a Flask web server and is hosted at vibevote.de"
                        },
                    ]
                },
                {
                    title: "Challenges & Learnings",
                    content: [
                        {
                            type: "paragraph",
                            text: "One of the biggest challenges I faced was implementing a secure login and signup system. I wanted to ensure user authentication was smooth but also secure. I implemented encrypted token handling and ensured the data integrity of individual party sessions and user requests."
                        },
                        {
                            type: "paragraph",
                            text: "Another interesting challenge was designing a system to manage and save the Songrequests in the database. I came up with a system where each user (i.e., DJ or party host) would get their own collection in the database. This meant dynamically creating and managing collections in MongoDB based on user sessions."
                        }
                    ]
                },
                {
                    title: "Promotion & Marketing",
                    content: [
                        {
                            type: "paragraph",
                            text: "To present VibeVote and to find the people looking for an appropriate solution, I focused on a few targeted channels. I created a dedicated Instagram account to share updates, features and behind-the-scenes looks at the project. To give it a stronger visual presence, I produced a short promo video and launched a VibeVote YouTube channel, showcasing how the platform works in a real party scenario."
                        },
                        {
                            type: "paragraph",
                            text: "I also submitted the project to Product Hunt to reach a broader tech-savvy audience and gather feedback from early adopters. These efforts helped build initial visibility and brought the tool into the hands of DJs, organizers, and curious testers."
                        },
                        {
                            type: "paragraph",
                            text: "The short promo video for VibeVote:"
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "../public/projects/vibevote/figures/figure4.mp4",
                            alt: "VibeVote Promo Video"
                        }
                    ]
                },
                {
                    title: "Outcome",
                    content: [
                        {
                            type: "paragraph",
                            text: "VibeVote turned a chaotic paper-based request system into a smooth digital experience. It’s now hosted live at vibevote.de and can be used at parties, school events, or even professional DJ gigs. It’s been a fun and challenging solo build — one that blends utility with a simple and intuitive user experience."
                        },
                        {
                            type: "paragraph",
                            text: "The features I implemented in the final version are:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Easy set up of a Party for the DJ",
                                "Generating and downloading a unique QR code among a poster",
                                "Submitting song requests via a simple form and managing them in a live dashboard",
                            ]
                        },
                    ]
                },
                {
                    title: "What I learned",
                    content: [
                        {
                            type: "paragraph",
                            text: "VibeVote was my first really big software project and because I handled everything on my own, I had to step into many different roles beyond just coding. I built the entire system from the ground up—frontend, backend, database, authentication—but also created the brand, produced a YouTube trailer and promoted it across platforms."
                        },
                        {
                            type: "paragraph",
                            text: "This process was much more than just development. I got deeper into design thinking, product communication and even sound design while editing the promo video. It pushed me to learn how to tell a story around a product and present it in a way that is both clear and engaging."
                        },
                        {
                            type: "paragraph",
                            text: "Working across disciplines gave me a broader perspective on what it takes to build something real — and ship it."
                        },
                        {
                            type: "paragraph",
                            text: "Beyond the code, I also gained valuable experience in product thinking:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Designing for both DJs and guests (two different user groups)",
                                "Breaking down complex features into simple, intuitive interactions",
                                "Promoting a product effectively to reach the right audience",
                            ]
                        },
                    ]
                },
                {
                    title: "Next Steps",
                    content: [
                        {
                            type: "paragraph",
                            text: "VibeVote will remain online and fully functional at vibevote.de, ready to be used at events and parties. However, I don't plan to add new features in the near future. Right now I'm building new projects and continue to grow my skills as a developer and designer."
                        },
                        {
                            type: "paragraph",
                            text: "The project taught me a lot, and I’m proud of what it offers in its current state. While it may not go much for now, it stands as a complete and useful tool — and for me a milestone in my personal development journey."
                        },
                        {
                            type: "paragraph",
                            text: "If you have any questions or want to know more about the project, feel free to contact me via mail or on my socials"
                        },
                    ]
                },
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
