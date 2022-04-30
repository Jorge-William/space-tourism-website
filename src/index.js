import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CrewRoute from './Routes/Crew.router'
import DestinationRoute from './Routes/Destination.router'
import TechnologyRoute from './Routes/Technology.router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/crew' element={<CrewRoute />} />
				<Route path='/destination' element={<DestinationRoute />} />
				<Route path='/technology' element={<TechnologyRoute />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
