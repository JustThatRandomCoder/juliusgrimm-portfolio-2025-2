import './case-studie.css'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { MdCalendarToday, MdCode, MdFormatShapes, MdLanguage } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const CaseStudie = () => {
    const { projectName } = useParams()
    const project = projects.find(p => p.name.toLowerCase() === projectName?.toLowerCase())

    if (!project) {
        return (
            <div className="content-container">
                <Header />
                <div className="case-study-error">
                    <h1>Project not found</h1>
                    <p>The requested case study could not be found.</p>
                </div>
            </div>
        )
    }

    const { caseStudy } = project

    const getIcon = (iconName) => {
        const iconMap = {
            'MdCode': MdCode,
            'MdFormatShapes': MdFormatShapes,
            'MdGithub': FaGithub,
            'MdCalendarToday': MdCalendarToday
        }
        return iconMap[iconName] || MdCode
    }

    const handleTagClick = (tag) => {
        if (tag.link) {
            window.open(tag.link, '_blank')
        }
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    }

    const tagVariants = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.95,
            transition: { duration: 0.1 }
        }
    }

    const renderContent = (contentItem, index) => {
        switch (contentItem.type) {
            case 'paragraph':
                return (
                    <p key={index} className="case-study-paragraph">
                        {contentItem.text}
                    </p>
                )

            case 'indent':
                return (
                    <p key={index} className="case-study-indent">
                        {contentItem.text}
                    </p>
                )

            case 'bullets':
                return (
                    <ul key={index} className="case-study-bullets">
                        {contentItem.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                        ))}
                    </ul>
                )

            case 'media':
                if (contentItem.mediaType === 'image') {
                    return (
                        <div key={index} className="case-study-media">
                            <img
                                src={contentItem.src}
                                alt={contentItem.alt}
                                className="case-study-image"
                            />
                        </div>
                    )
                } else if (contentItem.mediaType === 'video') {
                    return (
                        <div key={index} className="case-study-media">
                            <video
                                className="case-study-video"
                                controls
                                preload="metadata"
                            >
                                <source src={contentItem.src} type="video/mp4" />
                            </video>
                        </div>
                    )
                }
                break

            default:
                return null
        }
    }

    return (
        <motion.div
            className="content-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Header />

            <div className="case-study-container">
                <motion.div className="case-study-head" variants={itemVariants}>
                    <div className="project-information">
                        <div className="project-logo-container">
                            <img src={project.logo} alt={`${project.name} Logo`} />
                        </div>
                        <div className='project-names'>
                            <div className='title'>{project.name}</div>
                            <div className='description'>{project.description}</div>
                        </div>
                    </div>
                    <div className='project-links'>
                        {project.tags
                            .filter(tag => tag.type === 'link')
                            .map((linkTag, index) => (
                                <motion.div
                                    key={index}
                                    className="tag link externalLink"
                                    variants={tagVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => window.open(linkTag.url, '_blank')}
                                >
                                    <MdLanguage className="tagIcon" />
                                    <span>{linkTag.text}</span>
                                </motion.div>
                            ))}
                    </div>
                </motion.div>

                <div className="case-study-main">
                    <motion.div className="case-study-left" variants={itemVariants}>
                        <div className="project-showcase-container">
                            <div className='project-showcase-container-inner'>
                                <div className="project-showcase">
                                    <video autoPlay muted loop playsInline preload="auto">
                                        <source src={project.video} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="case-study-right" variants={itemVariants}>
                        <div className="case-study-tags">
                            <motion.div className="tag duration-tag" variants={itemVariants}>
                                <MdCalendarToday className="tagIcon" />
                                <span>{caseStudy.duration}</span>
                            </motion.div>
                            {caseStudy.tools.find(tool => tool.name === 'VS Code') && (
                                <motion.div
                                    className="tag tool-tag"
                                    variants={tagVariants}
                                >
                                    <MdCode className="tagIcon" />
                                    <span>VS Code</span>
                                </motion.div>
                            )}
                            {caseStudy.tools.find(tool => tool.name === 'Figma') && (
                                <motion.div
                                    className={`tag tool-tag ${caseStudy.tools.find(tool => tool.name === 'Figma')?.link ? 'link' : ''}`}
                                    variants={tagVariants}
                                    whileHover={caseStudy.tools.find(tool => tool.name === 'Figma')?.link ? "hover" : {}}
                                    whileTap={caseStudy.tools.find(tool => tool.name === 'Figma')?.link ? "tap" : {}}
                                    onClick={() => {
                                        const figma = caseStudy.tools.find(tool => tool.name === 'Figma');
                                        if (figma?.link) handleTagClick(figma);
                                    }}
                                >
                                    <MdFormatShapes className="tagIcon" />
                                    <span>Figma</span>
                                </motion.div>
                            )}
                            {caseStudy.github && caseStudy.github.url && (
                                <motion.div
                                    className="tag link github-tag"
                                    variants={tagVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={() => window.open(caseStudy.github.url, '_blank')}
                                >
                                    <FaGithub className="tagIcon" />
                                    <span>GitHub</span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>

                <motion.div className="case-study-stack" variants={itemVariants}>
                    <h3>Tech Stack</h3>
                    <p>{caseStudy.stack.join(', ')}</p>
                </motion.div>

                <motion.div className="case-study-description" variants={itemVariants}>
                    {caseStudy.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </motion.div>

                <motion.div className="case-study-sections" variants={itemVariants}>
                    {caseStudy.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="case-study-section">
                            <h2>{section.title}</h2>
                            <div className="case-study-content">
                                {section.content.map((contentItem, contentIndex) =>
                                    renderContent(contentItem, contentIndex)
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CaseStudie