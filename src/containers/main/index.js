import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './../content/home'
import About from './../content/about'

const Main = () => (
	<div>
		<header>
			<Link to="/">Home</Link>
			<span>&nbsp;</span>
			<Link to="/about">About</Link>
		</header>
		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
		</main>
	</div>
)

export default Main;
