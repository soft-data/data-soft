'use client'
import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import classes from './about.module.scss'

const aboutVAriant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const About = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '-100px'
	})
	return (
		<motion.div
			ref={ref}
			variants={aboutVAriant}
			initial={false}
			animate={inView ? 'show' : 'hidden'}
			className={classes.about}
		>
			About
		</motion.div>
	)
}

export default About
