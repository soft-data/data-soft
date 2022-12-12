import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import Image from 'next/image'
import Text from '../text/Text'
import Link from 'next/link'
import { ArrowRightCircle } from 'lucide-react'

import classes from './workcard.module.scss'

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
const CustomLink = motion(Link)

const WorkCard = (props: Props) => {
	return (
		<motion.div
			variants={variant}
			className={classes.card}
		>
			<CustomImg
				variants={variant}
				className={classes.img}
				src={'https://api.lorem.space/image/car'}
				alt={'Image'}
				width='300'
				height='300'
			/>
			<motion.div
				variants={variant}
				className={classes.body}
			>
				<motion.div
					variants={variant}
					className={classes.info}
				>
					<Text
						type='h3'
						text='Bloomey, housplants store'
					/>
					<Text
						type='body-subtitle'
						text='Website Development'
					/>
				</motion.div>
				<CustomLink
					className={classes.link}
					href={'/'}
				>
					<ArrowRightCircle />
				</CustomLink>
			</motion.div>
		</motion.div>
	)
}

export default WorkCard
