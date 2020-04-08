import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
	increment,
	incrementAsync,
	decrement,
	decrementAsync
} from './../../modules/counter'

const Home = props => (
	<div>
		<h1>Home</h1>
		<div>Count: {props.count}</div>
		<div>
			<button onClick={props.increment}>Increment</button>
		</div>
		<div>
			<button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
		</div>
		<div>
			<button onClick={props.decrement}>Decrementing</button>
		</div>
		<div>
			<button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
		</div>
		<div>
			<div onClick={() => props.changePage()}>Go to about page</div>
		</div>
	</div>
)

const mapStateToProps = ({ counter }) => ({
	count: counter.count,
	isIncrementing: counter.isIncrementing,
	isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
	increment,
	incrementAsync,
	decrement,
	decrementAsync,
	changePage: () => push('/about')
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)
