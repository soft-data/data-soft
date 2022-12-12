import React from 'react'
import Link from 'next/link'
import { motion, TargetAndTransition } from 'framer-motion'
import classes from './button.module.scss'

interface Props {
	role: 'button' | 'link'
	href?: string
	text: string
	type?: 'primary' | 'light' | 'gray'
}

const CustomLink = motion(Link)

const variants: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	hidden: {
		opacity: 0,
		y: -20
	},
	show: {
		opacity: 1,
		y: 0
	}
}

const Button = ({ role, href, text, type = 'primary' }: Props) => {
	if (role === 'button') {
		return (
			<motion.button
				variants={variants}
				data-type={type}
				className={classes.btn}
			>
				{text}
			</motion.button>
		)
	}
	if (role === 'link' && href) {
		return (
			<CustomLink
				variants={variants}
				data-type={type}
				className={classes.btn}
				href={href}
			>
				{text}
			</CustomLink>
		)
	}
	return null
}

export default Button
