import React from 'react'
import { TargetAndTransition, motion } from 'framer-motion'

import classes from './servicescard.module.scss'
import Image from 'next/image'
import Text from '../text/Text'
import Button from '../button/Button'

interface Props {}

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

const CustomImg = motion(Image)

const ServicesCard = (props: Props) => {
	return (
		<motion.div
			variants={variant}
			className={classes.card}
		>
			<CustomImg
				src={'https://api.lorem.space/image/car'}
				alt={'Image'}
				width='300'
				height='300'
				variants={variant}
        className={classes.img}
			/>
			<motion.div
				variants={variant}
				className={classes.body}
			>
				<Text
					type='h4'
					className={classes.title}
					text='Website development'
				/>
				<Text
					type='body-text'
					text='Lorem ipsum dolor sit amet consectetur. Scelerisque gravida eu ornare pretium quis ut et tempor.Lorem ipsum dolor sit amet consectetur. Scelerisque gravida eu ornare pretium quis ut et tempor.'
				/>
				<Button
					role='link'
					href='/'
					text='Learn More'
					type='gray'
				/>
			</motion.div>
		</motion.div>
	)
}

export default ServicesCard
