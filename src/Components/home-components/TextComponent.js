import React from 'react'
import './TextComponent.css'

class TextComponent extends React.Component {
	render() {
		return (
			<>
				<div className='main-container'>
					<section>
						<p id='primeiro-paragrafo'>So, you want to travel to</p>
						<br />
						<span id='texto-destaque'>Space</span>
						<p id='segundo-paragrafo'>
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</section>
					<section id='circle'>explore</section>
				</div>
			</>
		)
	}
}

export default TextComponent
