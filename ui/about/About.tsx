'use client'
import React from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import classes from './about.module.scss'
import { Button, Counter, Text } from '../../components'
import Image from 'next/image'

const aboutVariant: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const CustomImg = motion(Image)

const About = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '-100px'
	})
	return (
		<motion.div
			ref={ref}
			variants={aboutVariant}
			initial={false}
			animate={inView ? 'show' : 'hidden'}
			className={classes.about}
		>
			<motion.div
				variants={aboutVariant}
				className={classes.info}
			>
				<Text
					type='body-subtitle'
					text='About us'
				/>
				<Text
					type='h2'
					text='The team will turn your ideas into reality'
				/>
				<Text
					type='body-text'
					text='Lorem ipsum dolor sit amet consectetur. Pulvinar nulla eleifend odio facilisis amet vitae eget. Amet nunc tincidunt in ac at. Risus nibh pulvinar porttitor gravida.Lorem ipsum dolor sit amet consectetur. Pulvinar nulla eleifend odio facilisis amet vitae eget. '
				/>
				<Button
					role='link'
					href='/'
					text='More About Us'
				/>
				<motion.div
					variants={aboutVariant}
					className={classes.stats}
				>
					<div className={classes.counter_wrap}>
						<Counter
							className={classes.counter}
							end='8'
							starting={inView}
						/>
						<Text
							className={classes.counter_title}
							type='body-subtitle'
							text='Operated Year'
						/>
					</div>
					<div className={classes.counter_wrap}>
						<Counter
							className={classes.counter}
							end='200'
							starting={inView}
						/>
						<Text
							className={classes.counter_title}
							type='body-subtitle'
							text='Happy Clients'
						/>
					</div>
					<div className={classes.counter_wrap}>
						<Counter
							className={classes.counter}
							end='40'
							starting={inView}
						/>
						<Text
							className={classes.counter_title}
							type='body-subtitle'
							text='Professionals'
						/>
					</div>
					<div className={classes.counter_wrap}>
						<Counter
							className={classes.counter}
							end='200'
							starting={inView}
						/>
						<Text
							className={classes.counter_title}
							type='body-subtitle'
							text='Amazing Projects'
						/>
					</div>
				</motion.div>
			</motion.div>
			<CustomImg
				variants={aboutVariant}
				src='https://api.lorem.space/image/car'
				alt='image'
				width='300'
				height='300'
				style={{
					height: 'auto'
				}}
				className={classes.img}
			/>
		</motion.div>
	)
}

export default About
