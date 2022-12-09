'use client'
import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'

import classes from './hero.module.scss'
import Banner from './Banner'
import LastNews from './LastNews'

const herovariant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.1
		}
	},
	hidden: {
		y: -20,
		opacity: 0
	}
}

const Hero = () => {
	return (
		<motion.div
			variants={herovariant}
			initial={'hidden'}
			animate={'show'}
			id='hero'
			className={classes.hero}
		>
			<Banner classes={classes}/>
			<LastNews classes={classes}/>
		</motion.div>
	)
}

export default Hero
