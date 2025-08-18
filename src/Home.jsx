import './styles/home.css'
import Header from './components/Header'
import { MdInfoOutline, MdLanguage, MdFastRewind, MdFastForward, MdCode, MdFormatShapes } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { projects } from './data/projects'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const [homeShowcaseLoaded, setHomeShowcaseLoaded] = useState(false)
    const [videoProgress, setVideoProgress] = useState(30)
    const videoRef = useRef(null)
    const currentProject = projects[currentProjectIndex]
    const navigate = useNavigate()

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
            prev === 0 ? projects.length - 1 : prev - 1
        )
        setHomeShowcaseLoaded(false)
        setVideoProgress(30)
    }

    const handleNextProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        )
        setHomeShowcaseLoaded(false)
        setVideoProgress(30)
    }

    const handleVideoTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
            const adjustedProgress = 30 + (progress * 0.7)
            setVideoProgress(adjustedProgress || 30)
        }
    }

    const handleDotClick = (index) => {
        setCurrentProjectIndex(index)
        setHomeShowcaseLoaded(false)
        setVideoProgress(30)
    }

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
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="auto"
                                    onTimeUpdate={handleVideoTimeUpdate}
                                    onLoadedData={() => setVideoProgress(0)}
                                >
                                    <source src={currentProject.video} type="video/mp4" />
                                </video>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="project-indicators">
                    {projects.map((_, index) => (
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
        </div>
    )
}

export default Home
