import React, { Component } from 'react';


class BillCalculator extends Component {

	constructor() {
		super();

		this.state = {
			loading: false,
			results: []
		};

		this.calculate = this.calculate.bind(this);
	}

	calculate() {
		this.setState({loading: true});

		new Promise((res, rej) => {

		}).then(res => {
			this.setState({
				loading: false,
				results: res
			});
		});
	}

	render() {
		return (
			<div>
				{this.state.results.length !== 0 ? (
					<div>results</div>
					) : (
					<div className="ui message">
						<p>No result.</p>
					</div>
				)}

				<button onClick={this.calculate} className={"ui fluid large teal button" + (this.state.loading ? " loading" : "")}><i className="icon calculator" />Calculate</button>
			</div>

		);
	}

}


export default BillCalculator;
