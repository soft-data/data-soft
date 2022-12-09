import { Briefcase, Home, Info, LucideProps, Users } from 'lucide-react'

export interface NavItem {
	id: number | string
	text: string
	href: string
	icon: (props: LucideProps) => JSX.Element
}

const navList: NavItem[] = [
	{
		id: 1,
		href: '/',
		text: 'Home',
		icon: Home
	},
	{
		id: 2,
		href: '/#works',
		text: 'Works',
		icon: Briefcase
	},
	{
		id: 3,
		href: '/#about',
		text: 'About',
		icon: Info
	},
	{
		id: 4,
		href: '/#team',
		text: 'Team',
		icon: Users
	}
]

export default navList
