'use client'
import React from 'react'
import { Hero, Work } from '../ui'
import { motion, TargetAndTransition } from 'framer-motion'

const variant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.1
		}
	},
	hidden: {}
}

const Home = () => {
	return (
		<motion.div
			initial={false}
			variants={variant}
		>
			<Hero />
			<Work />
		</motion.div>
	)
}

export default Home
