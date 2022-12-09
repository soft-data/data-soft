import React from 'react'
import { TargetAndTransition } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRightCircle } from 'lucide-react'

const lastnewsVariant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.5,
			staggerChildren: 0.2
		}
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const itemsVariants: {
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

interface Props {
	classes: {
		readonly [key: string]: string
	}
}

const MotionLink = motion(Link)
const MotionImage = motion(Image)

const LastNews = ({ classes }: Props) => {
	return (
		<motion.div
			variants={lastnewsVariant}
			className={classes.lastnews}
		>
			<MotionImage
				variants={itemsVariants}
				className={classes.lastnews_img}
				src={'https://api.lorem.space/image/car'}
				width={400}
				height={600}
				alt='Placeholder'
			/>
			<div className={classes.lastnews_body}>
				<div className={classes.lastnews_info}>
					<motion.h4 variants={itemsVariants}>Subtitle here</motion.h4>
					<motion.h3 variants={itemsVariants}>Project Name</motion.h3>
				</div>
				<MotionLink
					variants={itemsVariants}
					href={'/'}
				>
					<ArrowRightCircle />
				</MotionLink>
			</div>
		</motion.div>
	)
}

export default LastNews
