import React from 'react'
import classes from './title.module.scss'
import { motion, TargetAndTransition } from 'framer-motion'

interface Props {
	type: 'h1' | 'h2' | 'h3' | 'body-subtitle'
	title: string
}

const variant: {
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

const Title = ({ type, title }: Props) => {
	switch (type) {
		case 'h1': {
			return (
				<motion.h1
					variants={variant}
					className={classes.h1}
				>
					{title}
				</motion.h1>
			)
		}
		case 'h2': {
			return (
				<motion.h2
					variants={variant}
					className={classes.h2}
				>
					{title}
				</motion.h2>
			)
		}
		case 'h3': {
			return (
				<motion.h3
					variants={variant}
					className={classes.h3}
				>
					{title}
				</motion.h3>
			)
		}
		case 'body-subtitle': {
			return (
				<motion.h4
					variants={variant}
					className={classes.body_subtitle}
				>
					{title}
				</motion.h4>
			)
		}
		default: {
			return null
		}
	}
}

export default Title
