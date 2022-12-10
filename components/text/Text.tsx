import React from 'react'
import classes from './text.module.scss'
import { motion, TargetAndTransition } from 'framer-motion'

interface Props {
	type: 'h1' | 'h2' | 'h3' | 'body-subtitle' | 'body-text'
	text: string
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

const Text = ({ type, text }: Props) => {
	switch (type) {
		case 'h1': {
			return (
				<motion.h1
					variants={variant}
					className={classes.h1}
				>
					{text}
				</motion.h1>
			)
		}
		case 'h2': {
			return (
				<motion.h2
					variants={variant}
					className={classes.h2}
				>
					{text}
				</motion.h2>
			)
		}
		case 'h3': {
			return (
				<motion.h3
					variants={variant}
					className={classes.h3}
				>
					{text}
				</motion.h3>
			)
		}
		case 'body-subtitle': {
			return (
				<motion.h4
					variants={variant}
					className={classes.body_subtitle}
				>
					{text}
				</motion.h4>
			)
		}
		case 'body-text': {
			return (
				<motion.p variants={variant} className={classes.body_text}>
					{text}
				</motion.p>
			)
		}
		default: {
			return null
		}
	}
}

export default Text
