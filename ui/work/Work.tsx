'use client'
import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import classes from './work.module.scss'
import { Title } from '../../components'

const workVariants: {
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

const Work = () => {
	const { ref, inView, entry } = useInView({
		rootMargin: '-100px',
		triggerOnce: false
	})
	console.log(entry)
	return (
		<motion.div
			ref={ref}
			initial='hidden'
			variants={workVariants}
			animate={inView ? 'show' : 'hidden'}
			className={classes.work}
		>
			<Title
				type='body-subtitle'
				title='Our Works'
			/>
			<motion.div variants={workVariants} className={classes.header}>
				<Title
					type='h2'
					title='We help buisnesses to make their product come to life, worldwide'
				/>
			</motion.div>
		</motion.div>
	)
}

export default Work
