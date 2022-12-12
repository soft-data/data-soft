import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../components'

interface Props {
	classes: {
		readonly [key: string]: string
	}
}

const bannervariant = {
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1
		}
	},
	hidden: {
		y: -20,
		opacity: 0
	}
}

const Banner = ({ classes }: Props) => {
	return (
		<motion.div
			variants={bannervariant}
			className={classes.banner}
		>
			<motion.div
				variants={bannervariant}
				className={classes.body}
			>
				<motion.div
					variants={bannervariant}
					className={classes.info}
				>
					<motion.h2
						variants={bannervariant}
						className={classes.subtitle}
					>
						Software Development Service
					</motion.h2>
					<motion.h1
						variants={bannervariant}
						className={classes.title}
					>
						We are a website & app development agency
					</motion.h1>
				</motion.div>
				<Button
					role='link'
					href='/'
					text='Bog`lanish'
					type='light'
				/>
			</motion.div>
		</motion.div>
	)
}

export default Banner
