import { Montserrat } from '@next/font/google'
import '../styles/globals.scss'
import { Navbar } from '../ui/'

const font = Montserrat({
	subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body className={font.className}>
				<div className='wrapper container'>
					<header className='header'>
						<Navbar />
					</header>
					<main className='main'>{children}</main>
					<footer className='footer'>
						<h2>footer</h2>
					</footer>
				</div>
			</body>
		</html>
	)
}
