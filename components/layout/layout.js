import Head from 'next/head'
import Header from '../header/header'
import './layout.scss'

export default ({ children }) => {
	return (
		<div className="global-layout">
			<Head>
				<title>ChengHui App</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
			</Head>
			<Header />
			{children}
			<footer className="footer">
				footer 页脚
            </footer>
		</div>
	)
}