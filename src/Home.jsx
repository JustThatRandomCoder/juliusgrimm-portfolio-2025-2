import './styles/home.css'
import Header from './components/Header'
import { MdInfoOutline, MdLanguage, MdFastRewind, MdFastForward, MdCode, MdFormatShapes } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { projects } from './data/projects'


const Home = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
    const currentProject = projects[currentProjectIndex]

    const getIcon = (iconName) => {
        const iconMap = {
            'MdInfoOutline': MdInfoOutline,
            'MdLanguage': MdLanguage
        }
        return iconMap[iconName] || MdInfoOutline
    }

    const handleTagClick = (tag) => {
        if (tag.type === 'info') {
            console.log(`Navigate to: /case-study/${currentProject.name.toLowerCase()}`)
        } else if (tag.type === 'link' && tag.url) {
            window.open(tag.url, '_blank')
        }
    }

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        )
    }

    const handleNextProject = () => {
        setCurrentProjectIndex((prev) =>
            prev === projects.length - 1 ? 0 : prev + 1
        )
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
                                return (
                                    <motion.div
                                        key={index}
                                        className="tag link"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 17
                                        }}
                                        onClick={() => handleTagClick(tag)}
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
                                <video autoPlay muted loop playsInline preload="auto">
                                    <source src={currentProject.video} type="video/mp4" />
                                </video>
                            </motion.div>
                        </AnimatePresence>
                    </div>
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
