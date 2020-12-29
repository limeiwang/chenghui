import Head from 'next/head'
import Link from 'next/link'
import './layout.scss'

export default ({ children }) => {
	return (
		<div class="global-layout">
			<Head>
				<title>ChengHui App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"></meta>
			</Head>
			<header class="header">
				<div class="header-wrapper">
					<div class="container">
						<Link href="/">
							<a>Home</a>
						</Link> |
						<Link href="/about">
							<a>About</a>
						</Link>
					</div>
					<div></div>
				</div>
			</header>
			{children}
			<footer class="footer">
				footer 页脚
            </footer>
		</div>
	)
}