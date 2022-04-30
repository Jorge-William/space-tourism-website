import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component {
	render() {
		return (
			<section>
				<nav>
					<ul>
						<li>
							<Link to='/'>00 Home</Link>
						</li>
						<li>
							<Link to='/destination'>01 Destination</Link>
						</li>
						<li>
							<Link to='/crew'>02 Crew</Link>
						</li>
						<li>
							<Link to='/technology'>03 Technology</Link>
						</li>
					</ul>
				</nav>
			</section>
		)
	}
}

export default Navbar
