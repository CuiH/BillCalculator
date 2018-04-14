import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calculator from '../helpers/Calculator';


class BillCalculator extends Component {

	constructor() {
		super();

		this.state = {
			running:    false,
			analysis:   null,
			balances:   null,
			operations: null,
		};

		this.calculator = new Calculator();

		this.calculate = this.calculate.bind(this);
	}


	calculate() {
		this.setState({ running: true });

		this.calculator.setData(this.props.bills, this.props.users);
		this.calculator.calculate()
			.then(_ => {
				this.setState({
					running:    false,
					analysis:   this.calculator.getAnalysis(),
					balances:   this.calculator.getBalances(),
					operations: this.calculator.getOperations()
				});
			});
	}

	render() {
		return (
			<div>
				{this.state.analysis ? (
					<div>
						<h3 className="ui header">Analysis</h3>
						<div className="ui middle aligned divided list">
							{this.state.analysis.map((ana, i) => (
								<div className="item" key={i}>
									<div className="content">
										<div className="header">{ana.title}</div>
										{ana.subTitle}
									</div>

									<div className="list">
										{Object.keys(ana.payments).map((user, i) => (
											<div key={i} className="item">
												<div className="content">
													<div className="header">{user + ": $" + ana.payments[user].toFixed(2)}</div>
												</div>
											</div>
										))}
									</div>
								</div>
							))}
						</div>

						<h3 className="ui header">Balances</h3>
						{this.state.balances.length === 0 ? (
							<p>None</p>
						) : (
							<div className="ui middle aligned list">
								{this.state.balances.map((balance, i) => (
									<div key={i} className="item">
										<div className="content">
											<div className="header">{balance.user + ": $" + balance.debt.toFixed(2)}</div>
										</div>
									</div>
								))}
							</div>
						)}

						<h3 className="ui header">Operations</h3>
						{this.state.operations.length === 0 ? (
							<p className="add-margin-bottom">None</p>
						) : (
							<div className="ui middle aligned list add-margin-bottom">
								{this.state.operations.map((operation, i) => (
									<div key={i} className="item">
										<div className="content">
											<div className="header">{operation}</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				) : (
					<div className="ui message">
						<p>No result.</p>
					</div>
				)}

				<button onClick={this.calculate} className={"ui fluid teal button" + (this.state.running ? " loading" : "")}><i className="icon calculator" />Calculate</button>
			</div>
		);
	}

}


export default connect(state => ({
	bills: state.bills,
	users: state.users
}))(BillCalculator);
