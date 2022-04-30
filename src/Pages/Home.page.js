import React from 'react'
import Navbar from '../Components/navbar/Navbar'
import TextComponent from '../Components/home-components/TextComponent'
import './style/home.css'

class Home extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<TextComponent />
			</div>
		)
	}
}

export default Home
