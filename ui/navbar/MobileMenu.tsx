'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import navList, { NavItem } from './navbarList'

import { motion, TargetAndTransition, useAnimation, useDragControls } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const Expanded: {
	closed: TargetAndTransition
	open: TargetAndTransition
} = {
	closed: {
		opacity: 0,
		x: '-100%',
		type: 'tween',

		transition: {
			delay: 0.4,
			x: {
				delay: 0.5
			},
			opacity: {
				delay: 0
			}
		}
	},
	open: {
		type: 'tween',
		opacity: 1,
		x: 0,
		transition: {
			duration: 2,
			opacity: {
				delay: 0.1
			},
			x: {
				duration: 0
			},
			delayChildren: 0.4,
			staggerChildren: 0.1
		}
	}
}

const ItemAnimation: {
	open: TargetAndTransition
	closed: TargetAndTransition
} = {
	closed: {
		opacity: 0,
		y: -20,
		scale: [1, 1.1, 1],
		originX: 0,
		originY: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	},
	open: {
		opacity: 1,
		y: 0,
		scale: [1, 1.1, 1],
		originX: 0,
		originY: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	}
}

interface Props {
	classes: {
		readonly [key: string]: string
	}
	open: boolean
}

const Item = ({
	classes,
	navItem
}: {
	classes: {
		readonly [key: string]: string
	}
	navItem: NavItem
}) => {
	const pathname = usePathname()

	return (
		<motion.li
			variants={ItemAnimation}
			className={`${classes.nav_item} ${pathname === navItem.href ? classes.active : ''}`}
		>
			<Link href={navItem.href}>
				<navItem.icon strokeWidth={2} />
				{navItem.text}
			</Link>
		</motion.li>
	)
}

const MobileMenu = ({ open, classes }: Props) => {
	return (
		<motion.div
			variants={Expanded}
			initial={false}
			animate={open ? 'open' : 'closed'}
			className={classes.navbar_expand}
		>
			<ul className={classes.nav_menu}>
				{navList.map((item, index) => {
					return (
						<Item
							classes={classes}
							navItem={item}
							key={item.id}
						/>
					)
				})}
			</ul>
		</motion.div>
	)
}

export default MobileMenu
