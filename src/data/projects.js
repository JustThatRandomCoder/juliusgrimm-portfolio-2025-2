export const projects = [
    {
        id: 1,
        name: "Lyra",
        description: "An AI-Powered Playlist Generator",
        logo: "./../projects/lyra/logo.png",
        video: "./../projects/lyra/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "Currently Offline" }
        ],
        caseStudy: {
            duration: "July 14 - July 24",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://www.figma.com/design/zkDkKZzkWxb1GAVbi9DJjI/lyra?node-id=0-1&t=gw7E9ObHN6WMxq7N-1" },
                { name: "VS Code", icon: "MdCode" }
            ],
            github: {
                url: "https://github.com/justthatrandomcoder/lyra",
                icon: "MdGithub"
            },
            stack: ["React", "TypeScript", "Node.js", "CSS", "Groq API", "Spotify API", "Ngrok"],
            description: [
                "Lyra is a web app that generates playlists based on a user’s mood and preferred genres. Unlike static curated playlists, Lyra combines AI-driven recommendations with direct Spotify integration to create fully customized playlists with unique names and cover art.",
            ],
            sections: [
                {
                    title: "Idea",
                    content: [
                        {
                            type: "paragraph",
                            text: "The idea for Lyra came from my curiosity about how AI could enhance music discovery. I noticed how often I (and friends around me) would scroll endlessly through Spotify, trying to find a playlist that really matched the vibe of the moment — whether that was “chill jazz” for studying or “happy techno” for getting energy back."
                        },
                    ]
                },
                {
                    title: "Research & Insights",
                    content: [
                        {
                            type: "paragraph",
                            text: "Before starting development, I explored how people typically generate playlists."
                        },
                        {
                            type: "bullets",
                            items: [
                                "Spotify itself offers playlists, but they are broad, not personalized to both mood and genre.",
                                "Third-party apps either focus too much on manual input or require downloading an app, creating accounts, or learning a complex interface. This creates friction.",
                                "AI-based playlist apps exist, but most don’t integrate tightly into Spotify — often they just suggest a list of songs that you still have to build manually."
                            ]
                        },
                        {
                            type: "paragraph",
                            text: "From this research, the opportunity was clear:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Make playlist creation instant and frictionless.",
                                "Keep the experience Spotify-native — playlists should appear directly in the user’s account.",
                                "Add delightful details: names, cover art, smooth UI animations."
                            ]
                        },
                    ]
                },
                {
                    title: "Ideation & Wireframing",
                    content: [
                        {
                            type: "paragraph",
                            text: "I broke the idea into core features:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Mood & genre selection (with optional seed artists)",
                                "AI playlist generation (tracks, name, cover art)",
                                "Preview inside a clean, animated UI",
                                "One-click export to Spotify"
                            ]
                        },
                        {
                            type: "paragraph",
                            text: "I sketched the flow on paper and then moved to Figma for wireframes, focusing on clarity and simplicity: minimal steps for the user, strong visual appeal, and smooth transitions between stages."
                        }, {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/lyra/figures/figure1.png",
                            alt: "First Figma Sketch of Lyra"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/lyra/figures/figure2.png",
                            alt: "Mobile View of Lyra"
                        }
                    ]
                },
                {
                    title: "Development",
                    content: [
                        {
                            type: "paragraph",
                            text: "I built Lyra as a full-stack application:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Frontend: Vite + React, styled with a focus on smooth animations and responsive layouts",
                                "Backend: Node.js server handling API requests and OAuth logic",
                                "AI Integration: Groq API generates playlists, names, and cover art",
                                "Fallback System: Curated track database used when AI responses are unavailable",
                                "Spotify Integration: OAuth 2.0 for authentication, playlist creation in the user’s account"
                            ]
                        },
                        {
                            type: "paragraph",
                            text: "This combination made the experience fluid, reliable, and enjoyable to use."
                        },
                        {
                            type: "paragraph",
                            text: "I used GitHub for version control and collaboration, ensuring smooth integration of our work."
                        },
                    ]
                },
                {
                    title: "Challenges & Learnings",
                    content: [
                        {
                            type: "paragraph",
                            text: "The biggest technical challenge came with Spotify authentication."
                        },
                        {
                            type: "indent",
                            text: "Problem: Spotify does not allow localhost as a callback address for authentication. This broke the OAuth flow during local development."
                        },
                        {
                            type: "indent",
                            text: "Solution: I used ngrok to expose the local backend to the web. This created a secure, public URL that I could set as a valid redirect URI in the Spotify Developer Dashboard."
                        },
                        {
                            type: "paragraph",
                            text: "To make this easier, I added:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "ngrok.yml for configuration",
                                "update-ngrok-url.js script to refresh redirect URIs",
                                "NGROK_SETUP.md guide for setup"
                            ]
                        },
                        {
                            type: "paragraph",
                            text: "This ensured smooth local development without deploying to staging."
                        }
                    ]
                },
                {
                    title: "Outcome",
                    content: [
                        {
                            type: "paragraph",
                            text: "Lyra turned the idea of “AI-powered music discovery” into a working product. It generates playlists based on moods and genres, adds names and cover art, and integrates directly with Spotify. While it won’t be developed further, it stands as a complete showcase project."
                        },
                        {
                            type: "paragraph",
                            text: "Lyra successfully delivered:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "AI-powered playlists based on mood and genre",
                                "Automatic playlist names and cover art",
                                "Spotify integration that creates playlists directly in the user’s account",
                                "A fallback system for when AI fails",
                                "A polished, animated UI that works across devices"
                            ]
                        },
                    ]
                },
                {
                    title: "What I learned",
                    content: [
                        {
                            type: "paragraph",
                            text: "Through Lyra I deepened my understanding of OAuth and authentication flows, learned how to use ngrok effectively in development, and saw how much polish in UI and user flow can elevate a project."
                        },
                        {
                            type: "paragraph",
                            text: "...but in a nutshell, I learned:"
                        },
                        {
                            type: "indent",
                            text: "Technical: Deeper understanding of OAuth, authentication flows, and tunneling with ngrok"
                        },
                        {
                            type: "indent",
                            text: "Design: How much UI polish (animations, clean layout) can shape the perception of a project"
                        },
                        {
                            type: "indent",
                            text: "Product: Building fallback systems improves reliability and user trust"
                        },
                        {
                            type: "indent",
                            text: "Process: Automating configuration and documenting setup makes onboarding much smoother"
                        },
                    ]
                },
                {
                    title: "Next Steps",
                    content: [
                        {
                            type: "paragraph",
                            text: "Lyra will remain online as a showcase project but will not be further developed."
                        },
                        {
                            type: "paragraph",
                            text: "For now, Lyra stands as a complete showcase of integrating AI with Spotify, and a personal milestone in tackling OAuth, full-stack development, and product polish."
                        },
                        {
                            type: "paragraph",
                            text: "If you have any questions or want to know more about the project, feel free to contact me via mail or on my socials"
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 2,
        name: "VibeVote",
        description: "A tool for managing song requests as a DJ",
        logo: "./../projects/vibevote/logo.png",
        video: "./../projects/vibevote/showcase.mp4",
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
                            src: "./../projects/vibevote/figures/figure1.png",
                            alt: "Final Figma Sketch of VibeVote"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/vibevote/figures/figure2.png",
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
                            src: "./../projects/vibevote/figures/figure3.mp4",
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
                            src: "./../projects/vibevote/figures/figure4.mp4",
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
        id: 3,
        name: "FestiFly",
        description: "An AI based tool for hosting events",
        logo: "./../projects/festifly/logo.png",
        video: "./../projects/festifly/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "Currently Offline" }
        ],
        caseStudy: {
            duration: "September 2024 - April 2025",
            tools: [
                { name: "Figma", icon: "MdFormatShapes", link: "https://www.figma.com/design/lRYgfX8UyjW5NuXghUjkg4/FestiFly?node-id=0-1&t=7lq6k2x8kDVANpPr-1" },
                { name: "VS Code", icon: "MdCode" }
            ],
            stack: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Google Places API"],
            description: [
                "FestiFly is a modern web app that aimed to streamline event planning for young people through intuitive design and smart automation. We decided not to continue development after completing the frontend. However during the project we gained valuable lessons in product design, team collaboration and user-centered thinking.",
            ],
            sections: [
                {
                    title: "The Problem",
                    content: [
                        {
                            type: "paragraph",
                            text: "Planning events is often chaotic and fragmented, especially for young people. Existing tools are either too complex or lack modern, user-friendly designs. FestiFly set out to solve this by creating an intuitive, all-in-one platform. To achieve that organizing events becomes effortless and enjoyable."
                        },
                    ]
                },
                {
                    title: "Research & Insights",
                    content: [
                        {
                            type: "paragraph",
                            text: "We talked to potential users and explored competing products. Key insights:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Event planning is often chaotic and fragmented, especially for young people.",
                                "Existing tools are either too complex or lack modern, user-friendly designs.",
                                "FestiFly set out to solve this by creating an intuitive, all-in-one platform."
                            ]
                        },
                        {
                            type: "indent",
                            text: "Therefore we focused on three main design goals: simplicity, speed, and individuality."
                        }
                    ]
                },
                {
                    title: "Research & Insights",
                    content: [
                        {
                            type: "paragraph",
                            text: "I created initial low-fidelity wireframes in Figma, exploring different flows for onboarding, event creation and user collaboration."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/festifly/figures/figure1.png",
                            alt: "First Figma Sketch of FestiFly"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/festifly/figures/figure2.png",
                            alt: "First concept of the website"
                        }
                    ]
                },
                {
                    title: "Design & Prototyping",
                    content: [
                        {
                            type: "paragraph",
                            text: "I developed a colorful, clean UI using a consistent design system in Tailwind CSS. Animations were built from the start with Framer Motion and GSAP, creating smooth transitions and dynamic effects that made the product feel responsive and alive."
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/festifly/figures/figure3.png",
                            alt: "First Figma Sketch of FestiFly"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/festifly/figures/figure4.png",
                            alt: "First concept of the website"
                        },
                        {
                            type: "paragraph",
                            text: "Key features I fully developed in Figma:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Creating events with a few clicks, including sending invites",
                                "Selecting the service providers and locations",
                                "Managing the event with services like a shared photo album"
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "video",
                            src: "./../projects/festifly/showcase.mp4",
                            alt: "Final Prototype of Festifly"
                        }
                    ]
                },
                {
                    title: "Development",
                    content: [
                        {
                            type: "paragraph",
                            text: "I built the full frontend in TypeScript with React and Vite. Styling was done with Tailwind CSS and animations were handled using GSAP and Framer Motion. My teammate focused on backend logic in Node.js, while I focused on user flows, visual design and responsiveness."
                        },
                        {
                            type: "paragraph",
                            text: "We used GitHubfor version control and collaboration, ensuring smooth integration of our work."
                        },
                    ]
                },
                {
                    title: "Outcome",
                    content: [
                        {
                            type: "paragraph",
                            text: "Although we successfully completed the Figma sketches and parts of the Frontend, we decided to stop short of a full development. Building and maintaining a production-ready backend with AI features would have exceeded our current budget and time resources."
                        },
                        {
                            type: "paragraph",
                            text: "Still, the project was a major success in terms of:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Skill development",
                                "Team collaboration",
                                "User-first thnking and design principles"
                            ]
                        },
                    ]
                },
                {
                    title: "What I learned",
                    content: [
                        {
                            type: "paragraph",
                            text: "I enjoyed the process of creating a product from scratch, from ideation to design and development. I learned valuable skills and I cloud furhter improve my design and coding abilities. I also learned how to work in a group, communicate effectively and manage my time and resources. I did better understand to what extent, building and handling big software projects is a complex task that requires a lot of planning, testing, and iteration."
                        },
                        {
                            type: "paragraph",
                            text: "...but in a nutshell, I learned:"
                        },
                        {
                            type: "indent",
                            text: "Designing from wireframes to final animations taught me how to create consistent, engaging UI experiences."
                        },
                        {
                            type: "indent",
                            text: "Working with animation libraries like GSAP requires detailed planning to maintain performance and code readability."
                        },
                        {
                            type: "indent",
                            text: "Real-world product scope often changes."
                        },
                    ]
                },
                {
                    title: "Next Steps",
                    content: [
                        {
                            type: "paragraph",
                            text: "While FestiFly won’t be launched publicly, the knowledge and components we created are already being used in our new projects. I plan to reuse parts of the design system and UI logic in upcoming apps."
                        },
                        {
                            type: "paragraph",
                            text: "If you have any questions or want to know more about the project, feel free to cantact me via mailor on my socials"
                        }
                    ]
                },
            ]
        }
    },
    {
        id: 4,
        name: "SkyView",
        description: "An open-source weather app focused on design",
        logo: "./../projects/skyview/logo.svg",
        video: "./../projects/skyview/showcase.mp4",
        tags: [
            { type: "info", icon: "MdInfoOutline" },
            { type: "link", icon: "MdLanguage", text: "skyview.juliusgrimm.dev", url: "https://skyview.juliusgrimm.dev" }
        ],
        caseStudy: {
            duration: "14 July 2024 - 16 July 2024",
            tools: [
                { name: "Figma", icon: "MdFormatShapes" },
                { name: "VS Code", icon: "MdCode" }
            ],
            github: {
                url: "https://github.com/justthatrandomcoder/skyview",
                icon: "MdGithub"
            },
            stack: ["HTML", "CSS", "JavaScript", "Python", "OpenWeatherMap API"],
            description: [
                "SkyView is a fast, no-tracking, open-source weather app created for a mini-hackathon hosted by YouTuber @Kevin Chromik. The challenge: Build something useful using the OpenWeatherMap API in the duration of a weekend.",
                "I decided to build a tool that respects user privacy, doesn’t track data and still looks great across devices — all within a 48-hour sprint.",
            ],
            sections: [
                {
                    title: "The Idea",
                    content: [
                        {
                            type: "paragraph",
                            text: "Many weather apps are overloaded with ads, require GPS permissions, or ask users to sign up. Why can’t checking the weather just be… simple?"
                        },
                        {
                            type: "paragraph",
                            text: "Inspired by minimalist tools and the hackathon’s tight time constraint, I set out to make a clean, open-source weather app that:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Requires no login",
                                "Doesn’t track the user",
                                "Looks good on mobile and desktop"
                            ]
                        }
                    ]
                },
                {
                    title: "Hackathon Context",
                    content: [
                        {
                            type: "paragraph",
                            text: "This project was built as part of a community mini-hackathon hosted by Kevin Chromik — a developer-focused creator on YouTube. The challenge was to build anything using the OpenWeatherMap API in just a couple of days."
                        },
                        {
                            type: "paragraph",
                            text: "My goal was to create something that felt complete, polished, and immediately usable — not just a prototype."
                        },
                    ]
                },
                {
                    title: "Research & Planning",
                    content: [
                        {
                            type: "paragraph",
                            text: "I looked at popular weather apps and found three recurring problems:"
                        },
                        {
                            type: "indent",
                            text: "Privacy Invasion – Forced location permissions and tracking."
                        },
                        {
                            type: "indent",
                            text: "Cluttered UIs – Weather data buried under ads and widgets."
                        },
                        {
                            type: "indent",
                            text: "Slow Performance – Overuse of JavaScript frameworks slowed things down."
                        },
                        {
                            type: "paragraph",
                            text: "I decided to go in the opposite direction: Fast. Clean. Anonymous. Useful."
                        },
                    ]
                },
                {
                    title: "Ideation & Wireframing",
                    content: [
                        {
                            type: "paragraph",
                            text: "With just 48 hours, I sketched the key screens on paper first, then quickly moved into Figma to visualize the layout. I focused on:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Large, readable weather data",
                                "Minimal input (just a city name)",
                                "Responsive layout that works equally well on phones and desktops"
                            ]
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./projects/skyview/figures/figure1.png",
                            alt: "Final Figma Sketch of SkyView"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./projects/skyview/figures/figure2.png",
                            alt: "Final App"
                        }
                    ]
                },
                {
                    title: "Development",
                    content: [
                        {
                            type: "paragraph",
                            text: "SkyView was built with simplicity and speed in mind, both in terms of user experience and development approach. I used Python with Flask as the backend framework to handle routing and API requests to OpenWeatherMap, while the frontend was kept intentionally lightweight using HTML, CSS and JavaScript."
                        },
                        {
                            type: "paragraph",
                            text: "The core functionality revolves around a user input field where anyone can type in a city name. This triggers a call to the OpenWeatherMap API and the relevant weather data — temperature, description, humidity, wind speed and more — is displayed instantly on the page."
                        },
                        {
                            type: "paragraph",
                            text: "To ensure the app respects privacy, I deliberately avoided any kind of location tracking, cookie usage or analytics scripts. All requests are initiated manually by the user, and no data is stored or logged in the backend."
                        },
                    ]
                },
                {
                    title: "Challenges",
                    content: [
                        {
                            type: "paragraph",
                            text: "One of the biggest challenges during the development of SkyView was working with the OpenWeatherMap API under a tight time constraint. While the API is powerful, its documentation is fairly extensive and understanding the exact structure of the data response took more time than expected — especially in a fast-paced hackathon setting."
                        },
                        {
                            type: "paragraph",
                            text: "At first, I struggled to filter out only the essential information (like temperature, description, and wind speed) without getting lost in the broader documentation. Parsing nested JSON responses and mapping them cleanly into the frontend required extra attention."
                        },
                        {
                            type: "paragraph",
                            text: "However, once I got familiar with the API’s structure, things started to get real. I was able to build a functional integration that reliably fetched and displayed the right weather data for any city and I even added proper error handling for invalid inputs or failed requests."
                        },
                        {
                            type: "paragraph",
                            text: "This challenge taught me how to quickly navigate documentation, identify what’s truly important and make something work under pressure—all valuable lessons for future API-driven projects."
                        },
                    ]
                },
                {
                    title: "Presentation",
                    content: [
                        {
                            type: "paragraph",
                            text: "To showcase SkyView to other participants at the end of the hackathon, I created a simple promo poster and a short video demo. The poster highlighted the app’s key features and clean interface, while the video walked viewers through the core functionality — from entering a city to getting real-time weather data."
                        },
                        {
                            type: "paragraph",
                            text: "This quick presentation helped communicate the app’s purpose clearly and gave it a more polished, product-like feel despite the short development window."
                        },
                        {
                            type: "paragraph",
                            text: "This Image shows the poster for the presentation:"
                        },
                        {
                            type: "media",
                            mediaType: "image",
                            src: "./../projects/skyview/figures/figure3.png",
                            alt: "Poster for presenting SkyView"
                        }
                    ]
                },
                {
                    title: "Outcome",
                    content: [
                        {
                            type: "paragraph",
                            text: "SkyView successfully delivered on its goal: a clean, privacy - focused weather app built in under 48 hours. Despite the time constraints, it turned into a fully functional tool with a smooth user experience and a clear purpose. The feedback from other participants was positive, especially around the simplicity and visual design. While it’s a small project, it serves as a complete example of what can be achieved in a short, focused sprint."
                        },
                        {
                            type: "paragraph",
                            text: "The Features I implemeted in the final version are:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Functional landing page",
                                "48-hour weather forecast",
                                "Responsive and clean design"
                            ]
                        },
                    ]
                },
                {
                    title: "What I learned",
                    content: [
                        {
                            type: "paragraph",
                            text: "This mini-hackathon was my first ever hackathon and needing to complete a full project in just 48 hours was a great learning experience. It challenged me to make fast, focused decisions and balance both design and development under pressure. SkyView specifically taught me how to quickly navigate and work with a large API under tight time pressure. Understanding the OpenWeatherMap structure, pulling only what I needed and turning it into something usable was a valuable hands-on experience."
                        },
                        {
                            type: "paragraph",
                            text: "Beyond the technical side, the project pushed me to build, document and present a complete app — all within a weekend. It was a crash course in fast-paced development and clear communication."
                        },
                        {
                            type: "paragraph",
                            text: "summarizing the experience, I learned a lot about:"
                        },
                        {
                            type: "bullets",
                            items: [
                                "Efficiently working with large, unfamiliar APIs",
                                "Building and shipping a functional project on a deadline",
                                "Presenting ideas clearly through visuals and demos"
                            ]
                        },
                    ]
                },
                {
                    title: "Next Steps",
                    content: [
                        {
                            type: "paragraph",
                            text: "SkyView will remain available on GitHub as an open-source project, showcasing both the idea and the execution. I don’t plan to add new features for now, as the hackathon challenge has been completed — but the project stands as a finished, usable app and a personal milestone in rapid prototyping and clean design"
                        },
                        {
                            type: "paragraph",
                            text: "If you have any questions or want to know more about the project, feel free to contact me via mailor on my socials"
                        },
                    ]
                }
            ]
        }
    }
];
