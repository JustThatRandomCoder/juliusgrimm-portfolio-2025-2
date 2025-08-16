import './styles/home.css'
import Header from './components/Header'
import { MdInfoOutline, MdLanguage, MdFastRewind, MdFastForward } from 'react-icons/md'
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <div className="content-container">
            <Header />
            <section className="project-section">
                <div className='project-head'>
                    <div className="project-information">
                        <div className="project-logo-container">
                            <img src="../public/projects/vibevote/logo.png" alt="Logo" />
                        </div>
                        <div className='project-names'>
                            <div className='title'>VibeVote</div>
                            <div className='description'>A tool for managing song requests as a DJ</div>
                        </div>
                    </div>
                    <div className="project-links">
                        <motion.div
                            className="tag link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            }}
                        >
                            <MdInfoOutline className='tagIcon' />
                        </motion.div>
                        <motion.div
                            className="tag link"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17
                            }}
                        >
                            <MdLanguage className='tagIcon' />
                            <span>vibevote.de</span>
                        </motion.div>
                    </div>
                </div>
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
                                >
                                    <MdFastForward />
                                </motion.div>
                            </div>
                        </div>
                        <div className="project-showcase">
                            <video autoPlay muted loop playsInline preload="auto">
                                <source src="../public/projects/vibevote/showcase.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
