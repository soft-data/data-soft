'use client'
import { motion, TargetAndTransition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import classes from './work.module.scss'
import { Button, Text, WorkCard } from '../../components'

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
	const { ref, inView } = useInView({
		rootMargin: '-100px',
		triggerOnce: true
	})
	return (
		<motion.div
			id='works'
			ref={ref}
			initial='hidden'
			variants={workVariants}
			animate={inView ? 'show' : 'hidden'}
			className={classes.work}
		>
			<Text
				type='body-subtitle'
				text='Our Works'
			/>
			<motion.div
				variants={workVariants}
				className={classes.header}
			>
				<Text
					type='h2'
					text='We help buisnesses to make their product come to life, worldwide'
				/>
				<motion.div
					variants={workVariants}
					className={classes.info}
				>
					<Text
						type='body-text'
						className={classes.body_text}
						text='Lorem ipsum dolor sit amet consectetur. Sed lacus posuere sit ullamcorper dignissim. Pellentesque quis morbi sapien lectus accumsan porttitor malesuada'
					/>
					<Button
						role='link'
						text='See All Warks'
						href='/all-works'
					/>
				</motion.div>
			</motion.div>
			<motion.div
				variants={workVariants}
				className={classes.cards}
			>
				<WorkCard />
				<WorkCard />
			</motion.div>
		</motion.div>
	)
}

export default Work
