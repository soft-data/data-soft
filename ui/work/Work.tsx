'use client'
import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const workVariants: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const Work = () => {
	const { ref, inView, entry } = useInView({
		rootMargin: '-150px',
    // initialInView: false,
    delay: 1000,
	})
	return (
		<motion.div
			ref={ref}
			initial='hidden'
			variants={workVariants}
			animate={inView ? 'show' : 'hidden'}
			style={{
				background: 'red',
				height: '100vh'
			}}
		>
			Work
		</motion.div>
	)
}

export default Work
