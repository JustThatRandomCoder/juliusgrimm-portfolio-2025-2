import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { gsap } from 'gsap'
import './styles/header.css'

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [shouldHideProfile, setShouldHideProfile] = useState(false)
    const containerRef = useRef(null)
    const iconsRef = useRef([])
    const profileInfoRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsExpanded(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const checkSpace = () => {
            const screenWidth = window.innerWidth
            let minRequiredWidth

            if (screenWidth < 480) {
                minRequiredWidth = 400
            } else if (screenWidth < 768) {
                minRequiredWidth = 500
            } else {
                minRequiredWidth = 600
            }

            const newShouldHide = screenWidth < minRequiredWidth && isExpanded

            if (newShouldHide !== shouldHideProfile) {
                setShouldHideProfile(newShouldHide)
            }
        }

        checkSpace()
        window.addEventListener('resize', checkSpace)
        return () => window.removeEventListener('resize', checkSpace)
    }, [isExpanded, shouldHideProfile])

    useEffect(() => {
        const profileInfo = profileInfoRef.current
        if (profileInfo) {
            gsap.to(profileInfo, {
                opacity: shouldHideProfile ? 0 : 1,
                duration: 0.4,
                ease: "power2.out"
            })
        }
    }, [shouldHideProfile])

    useEffect(() => {
        const container = containerRef.current
        if (container) {
            if (!container.style.width) {
                gsap.set(container, { width: "7rem", paddingLeft: "2.5rem", paddingRight: "2.5rem" })
            }

            const screenWidth = window.innerWidth
            let expandedWidth, collapsedPadding, expandedPadding

            if (screenWidth < 480) {
                expandedWidth = "12rem"
                collapsedPadding = "2rem"
                expandedPadding = "1.8rem"
            } else if (screenWidth < 768) {
                expandedWidth = "14rem"
                collapsedPadding = "2.3rem"
                expandedPadding = "1.9rem"
            } else {
                expandedWidth = "16rem"
                collapsedPadding = "2.5rem"
                expandedPadding = "2rem"
            }

            const targetWidth = isExpanded ? expandedWidth : "7rem"

            gsap.to(container, {
                paddingLeft: isExpanded ? expandedPadding : collapsedPadding,
                paddingRight: isExpanded ? expandedPadding : collapsedPadding,
                width: targetWidth,
                duration: 0.7,
                ease: "back.out(1.4)",
                force3D: true
            })
        }
    }, [isExpanded])

    useEffect(() => {
        const container = containerRef.current
        if (container) {
            const screenWidth = window.innerWidth
            let initialPadding = screenWidth < 480 ? "2rem" : screenWidth < 768 ? "2.3rem" : "2.5rem"
            gsap.set(container, { width: "7rem", paddingLeft: initialPadding, paddingRight: initialPadding })
        }
    }, [])

    const handleMailClick = () => {
        if (isExpanded) {
            window.open('mailto:me@juliusgrimmm.dev', '_self')
        } else {
            setIsExpanded(true)
        }
    }

    const handleIconHover = (index, isHovering) => {
        const icon = iconsRef.current[index]
        if (icon) {
            gsap.to(icon, {
                scale: isHovering ? 1.1 : 1,
                duration: 0.25,
                ease: "power2.out"
            })
        }
    }

    const handleIconClick = (index) => {
        const icon = iconsRef.current[index]
        if (icon) {
            gsap.to(icon, {
                scale: 0.9,
                duration: 0.1,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            })
        }
    }

    const socialLinks = [
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://instagram.com/julius_gr_'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin />,
            url: 'https://linkedin.com/in/julius-gr'
        },
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/justthatrandomcoder'
        }
    ]

    const iconVariants = {
        hidden: {
            opacity: 0,
            x: -8,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0,
            x: -8,
            scale: 0.8,
            transition: {
                duration: 0.15,
                ease: [0.4, 0, 1, 1]
            }
        }
    }

    const containerVariants = {
        expanded: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.2
            }
        },
        collapsed: {
            transition: {
                staggerChildren: 0.02,
                delayChildren: 0
            }
        }
    }

    return (
        <header className="header">
            <div className='profile-container'>
                <img src="/profile-picture.jpeg" className='profile-picture' alt="Julius Grimm Profile" />
                <div className='profile-information' ref={profileInfoRef}>
                    <div className='name'>Julius Grimm</div>
                    <div className='username'>@julius_gr_</div>
                </div>
            </div>

            <motion.div
                ref={containerRef}
                className='socials-container'
                variants={containerVariants}
                animate={isExpanded ? "expanded" : "collapsed"}
            >
                <AnimatePresence>
                    {isExpanded && socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='social-icon'
                            ref={(el) => iconsRef.current[index] = el}
                            variants={iconVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onMouseEnter={() => handleIconHover(index, true)}
                            onMouseLeave={() => handleIconHover(index, false)}
                            onMouseDown={() => handleIconClick(index)}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </AnimatePresence>

                <button
                    className='social-icon mail-icon'
                    ref={(el) => iconsRef.current[socialLinks.length] = el}
                    onClick={handleMailClick}
                    onMouseEnter={() => handleIconHover(socialLinks.length, true)}
                    onMouseLeave={() => handleIconHover(socialLinks.length, false)}
                    onMouseDown={() => handleIconClick(socialLinks.length)}
                >
                    <MdOutlineEmail />
                </button>
            </motion.div>
        </header>
    )
}

export default Header
