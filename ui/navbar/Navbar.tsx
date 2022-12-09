'use client'
import React from 'react'
import { Phone } from 'lucide-react'
import Link from 'next/link'
import { useMenu } from '../../hooks'
import MobileMenu from './MobileMenu'
import NavbarToggler from './NavbarToggler'
import classes from './navbar.module.scss'
import DesktopMenu from './DesktopMenu'

import { motion, TargetAndTransition } from 'framer-motion'

const navbar: {
	show: TargetAndTransition
	hidden: TargetAndTransition
} = {
	show: {
		opacity: 1,
		y: 0,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.1
		}
	},
	hidden: {
		opacity: 0,
		y: -20
	}
}

const Navbar = () => {
	const { open, onToggle } = useMenu()
	return (
		<motion.div
			variants={navbar}
			initial={'hidden'}
			animate='show'
			className={classes.navbar}
			data-open={open}
		>
			<MobileMenu
				open={open}
				classes={classes}
			/>
			<div className={classes.container}>
				<NavbarToggler
					classes={classes}
					onToggle={onToggle}
					open={open}
				/>
				<Link
					className={classes.logo}
					href={'/'}
				>
					DATA SOFT
				</Link>

				<div className={classes.end}>
					<DesktopMenu classes={classes} />
					<Link
						className={classes.navbar_btn}
						href={'/'}
					>
						<span className={classes.text}>Bog`lanish</span>
						<span className={classes.icon}>
							<Phone size={20} />
						</span>
					</Link>
				</div>
			</div>
		</motion.div>
	)
}

export default Navbar
