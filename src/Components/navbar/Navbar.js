import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/shared/logo.svg'

class Navbar extends React.Component {
	render() {
		return (
			<div id='container'>
				<div id='logo'>
					<img src={logo} alt='logotype' />
				</div>
				<hr />
				<nav id='nav-buttons-container'>
					<ul>
						<li>
							<Link to='/'>
								<span className='numeracao-menu'>00</span>
								HOME
							</Link>
						</li>
						<li>
							<Link to='/destination'>
								<span className='numeracao-menu'>01</span>
								DESTINATION
							</Link>
						</li>
						<li>
							<Link to='/crew'>
								<span className='numeracao-menu'>02</span>
								CREW
							</Link>
						</li>
						<li>
							<Link to='/technology'>
								<span className='numeracao-menu'>03</span>
								TECHNOLOGY
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default Navbar
