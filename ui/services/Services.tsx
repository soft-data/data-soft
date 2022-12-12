'use client'
import React from 'react'
import { TargetAndTransition, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import classes from './services.module.scss'
import { Text } from '../../components'

const servicesVariants: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
			delayChildren: 0.3,
			staggerChildren: 0.1
		}
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const Services = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '-100px'
	})
	return (
		<motion.div
			ref={ref}
			variants={servicesVariants}
			initial={false}
			animate={inView ? 'show' : 'hidden'}
			className={classes.services}
		>
			<Text
				type='body-subtitle'
				text='Our Services'
				className={classes.subtitle}
			/>
			<Text
				type='h2'
				text='We help buisnesses to make their product come to life, worldwide'
				className={classes.title}
			/>
		</motion.div>
	)
}

export default Services
