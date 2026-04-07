import './styles/home.css'
import Header from './components/Header'
import { MdInfoOutline, MdLanguage, MdFastRewind, MdFastForward, MdCode, MdFormatShapes, MdCalendarMonth, MdOutlineArrowCircleUp } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { projects } from './data/projects'
import { useNavigate } from 'react-router-dom'
import { aboutText } from './data/aboutText'


const Home = () => {
    const displayedProjects = [...projects].sort((a, b) => {
        if (a.name === 'VibeVote 2.0') return -1
        if (b.name === 'VibeVote 2.0') return 1
        return 0
    })
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const [homeShowcaseLoaded, setHomeShowcaseLoaded] = useState(false)
    const [videoProgress, setVideoProgress] = useState(10)
    const [lastUpdate, setLastUpdate] = useState('...')
    const videoRef = useRef(null)
    const currentProject = displayedProjects[currentProjectIndex]
    const navigate = useNavigate()
    const isVideoFile = (path) => /\.(mp4|webm|ogg)$/i.test(path)
    const resolveAssetPath = (path) => {
        if (!path) return path
        return path.startsWith('./../') ? path.replace(/^\.\/\.\./, '') : path
    }

    const calculateAge = (birthDate) => {
        const today = new Date()
        const birth = new Date(birthDate)
        let age = today.getFullYear() - birth.getFullYear()
        const monthDiff = today.getMonth() - birth.getMonth()

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--
        }

        return age
    }

    const myAge = calculateAge('2010-03-02')
    useEffect(() => {
        fetch('https://api.github.com/repos/JustThatRandomCoder/juliusgrimm-portfolio-2025-2/commits?per_page=1')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const dateStr = data[0].commit.committer.date
                    const dateObj = new Date(dateStr)
                    const day = dateObj.getDate()
                    const month = dateObj.toLocaleString('default', { month: 'long' })
                    const year = dateObj.getFullYear()
                    setLastUpdate(`${day} ${month} ${year}`)
                }
            })
            .catch(() => setLastUpdate('Unknown'))
    }, [])

    const getIcon = (iconName) => {
        const iconMap = {
            'MdInfoOutline': MdInfoOutline,
            'MdLanguage': MdLanguage
        }
        return iconMap[iconName] || MdInfoOutline
    }

    const handleTagClick = (tag) => {
        if (tag.type === 'info') {
            navigate(`/case-study/${currentProject.name.toLowerCase()}`)
        } else if (tag.type === 'link' && tag.url) {
            window.open(tag.url, '_blank')
        }
    }

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === 0 ? displayedProjects.length - 1 : prev - 1
        )
        setHomeShowcaseLoaded(false)
        setVideoProgress(10)
    }

    const handleNextProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === displayedProjects.length - 1 ? 0 : prev + 1
        )
        setHomeShowcaseLoaded(false)
        setVideoProgress(10)
    }

    const handleVideoTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
            const adjustedProgress = 10 + (progress * 0.9)
            setVideoProgress(adjustedProgress || 10)
        }
    }

    const handleDotClick = (index) => {
        setCurrentProjectIndex(index)
        setHomeShowcaseLoaded(false)
        setVideoProgress(10)
    }

    const currentVideoSrc = resolveAssetPath(currentProject.video)

    const projectVariants = {
        enter: {
            opacity: 0,
            x: 100,
            scale: 0.95
        },
        center: {
            opacity: 1,
            x: 0,
            scale: 1
        },
        exit: {
            opacity: 0,
            x: -100,
            scale: 0.95
        }
    }

    const transition = {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
    }

    const handleGoogleSearch = (searchTerm) => {
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`
        window.open(googleSearchUrl, '_blank', 'noopener,noreferrer')
    }
    const renderSegments = (segments) => {
        return segments.map((seg, idx) => {
            if (typeof seg === 'string') return seg
            if (seg && seg.type === 'bold') return <span key={idx} className='bold'>{seg.text}</span>
            return null
        })
    }
    return (
        <div className="content-container">
            <Header />
            <section className="project-section">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentProject.id}
                        className='project-head'
                        variants={projectVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={transition}
                    >
                        <div className="project-information">
                            <div className="project-logo-container">
                                <img src={currentProject.logo} alt={`${currentProject.name} Logo`} />
                            </div>
                            <div className='project-names'>
                                <div className='title'>{currentProject.name}</div>
                                <div className='description'>{currentProject.description}</div>
                            </div>
                        </div>
                        <div className="project-links">
                            {currentProject.tags.map((tag, index) => {
                                const IconComponent = getIcon(tag.icon)
                                const hasUrl = tag.type === 'link' && tag.url
                                const isClickable = tag.type === 'info' || hasUrl
                                return (
                                    <motion.div
                                        key={index}
                                        className={`tag ${isClickable ? 'link' : 'disabled'}`}
                                        whileHover={isClickable ? { scale: 1.05 } : {}}
                                        whileTap={isClickable ? { scale: 0.95 } : {}}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 17
                                        }}
                                        onClick={() => isClickable ? handleTagClick(tag) : null}
                                        style={{ cursor: isClickable ? 'pointer' : 'default' }}
                                    >
                                        <IconComponent className='tagIcon' />
                                        {tag.text && <span>{tag.text}</span>}
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="project-showcase-container">
                    <div className='project-showcase-container-inner'>
                        <div className="project-showcase-overlay">
                            <div className="project-showcase-overlay-controls">
                                <motion.div
                                    className='project-showcase-overlay-icon'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    }}
                                    onClick={handlePreviousProject}
                                >
                                    <MdFastRewind />
                                </motion.div>
                                <motion.div
                                    className='project-showcase-overlay-icon'
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17
                                    }}
                                    onClick={handleNextProject}
                                >
                                    <MdFastForward />
                                </motion.div>
                            </div>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${currentProject.id}-video`}
                                className="project-showcase"
                                variants={projectVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={transition}
                            >
                                {isVideoFile(currentVideoSrc) ? (
                                    <video
                                        key={currentVideoSrc}
                                        ref={videoRef}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                        onTimeUpdate={handleVideoTimeUpdate}
                                        onLoadedData={() => setVideoProgress(0)}
                                    >
                                        <source src={currentVideoSrc} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img
                                        src={currentVideoSrc}
                                        alt={`${currentProject.name} Showcase`}
                                        onLoad={() => setVideoProgress(100)}
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="project-indicators">
                    {displayedProjects.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`project-indicator ${index === currentProjectIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            }}
                        >
                            {index === currentProjectIndex && (
                                <motion.div
                                    className="project-indicator-progress"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${videoProgress}%` }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="skills-section">
                <div className="skills-container">
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>Web developer</span>
                    </div>
                    <div className="tag">
                        <MdFormatShapes className='tagIcon' />
                        <span>UI / UX designer</span>
                    </div>
                </div>
                <div className="tools-container">
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>React</span>
                    </div>
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>Typescript</span>
                    </div>
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>JavaScript</span>
                    </div>
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>Node.js</span>
                    </div>
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>HTML / CSS</span>
                    </div>
                    <div className="tag">
                        <MdCode className='tagIcon' />
                        <span>Python</span>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="text-container">
                    <p className='text'>Hey, I'm <span className='bold'>Julius Grimm</span>, a <span className='bold'>{myAge} y/o web developer</span> and <span className='bold'>UI / UX designer</span> who really likes to think things through. </p>
                    <p className='text space'>I live in <span className='bold'>Tübingen, Germany</span> and I’m a student <span onClick={() => handleGoogleSearch('Uhland-Gymnasium Tübingen')} className='bold link'>@Uhland-Gymnasium Tübingen</span>.</p>
                    <p className='text space'>Previously Intern <span onClick={() => handleGoogleSearch('SAP')} className='bold link'>@SAP</span> in Dresden, Germany & <span onClick={() => handleGoogleSearch('Optocycle')} className='bold link'>@Optocycle</span> in Tübingen, Germany.</p>
                    <p className='text space'>Currently working on my web design studio <span onClick={() => window.open('https://levo-studio.com', '_blank')} className='bold link'>@Levo Studio</span>.</p>                </div>
                <div className="image-container">
                    <div className="main-side">
                        <img className="main" src="./pictures-about/figure1.jpeg" alt="Main" />
                        <img className="side" src="./pictures-about/figure2.jpeg" alt="Side" />
                    </div>
                    <div className="row">
                        <img className="row-img" src="./pictures-about/figure3.jpeg" alt="Figure 3" />
                        <img className="row-img landscape" src="./pictures-about/figure4.jpeg" alt="Figure 4" />
                        <img className="row-img" src="./pictures-about/figure5.jpeg" alt="Figure 5" />
                        <img className="row-img" src="./pictures-about/figure6.jpeg" alt="Figure 6" />
                        <img className="row-img" src="./pictures-about/figure7.jpeg" alt="Figure 7" />
                        <img className="row-img" src="./pictures-about/figure8.jpeg" alt="Figure 8" />
                    </div>
                </div>
                <div className="text-container">
                    <p className='text'>{renderSegments(aboutText.paragraph1)}</p>
                    <p className='text space'>{renderSegments(aboutText.paragraph2)}</p>
                    <p className='text space'>{renderSegments(aboutText.paragraph3)}</p>
                </div>
                <div className="tag-container">
                    <div className='tag'>
                        <MdCalendarMonth className='tagIcon' />
                        <div>
                            <span>Last Update: </span>
                            <span>{lastUpdate}</span>
                        </div>
                    </div>
                    <div className='tag'>
                        <MdInfoOutline className='tagIcon' />
                        <span>© {new Date().getFullYear()} Julius Grimm</span>
                    </div>
                    <motion.div
                        className='tag link'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        }}
                        onClick={() => {
                            const duration = 500;
                            const start = window.scrollY;
                            const startTime = performance.now();
                            function scrollStep(currentTime) {
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                const ease = 1 - Math.pow(1 - progress, 3);
                                window.scrollTo(0, start * (1 - ease));
                                if (progress < 1) {
                                    requestAnimationFrame(scrollStep);
                                }
                            }
                            requestAnimationFrame(scrollStep);
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <MdOutlineArrowCircleUp className='tagIcon' />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
