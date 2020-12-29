import React, { Component } from 'react'
import Link from 'next/link'
import './header.scss'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			opened: false
		};
	}

	handleClick() {
		this.setState({
			opened: !this.state.opened
		});
	}

	render() {
		return (
			<header className="global-header opaque">
				<div className="global-header__wrapper">
					<div className="global-header__large-screen position-relative d-lg-flex justify-content-between d-none w-100 h-100">
						<Link href="/" className="global-header__logo d-flex justify-content-center align-items-center">logo</Link>
						<ul className="global-header__navigation d-flex">
							<li><Link href="/">Home</Link></li> | 
							<li><Link href="/about">About</Link></li>
						</ul>
					</div>
					<div className={`global-header__small-screen position-relative d-lg-none d-flex justify-content-center w-100 h-100 ${this.state.opened ? 'opened': ''}`}>
						<div className="global-header__menu-toggle" onClick={() => this.handleClick()}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<Link href="/" className="global-header__logo">logo</Link>
						<div className="global-header__account">icon</div>
						<div className="global-header__small-screen-menu">
							<div className="global-header__menu-wrapper">
								<ul>
									<li><Link href="/">Home</Link></li>
									<li><Link href="/about">About</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header
