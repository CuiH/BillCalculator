import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewBillForm from './NewBillForm';
import BillList from './BillList';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import BillCalculator from './BillCalculator';


class App extends Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div className="ui container default-container">
				<div className="ui grid">
					<div className="row">
						<div className="seven wide computer sixteen wide mobile column pull-middle">
							<UserList />

							<NewUserForm />


						</div>
					</div>
					<div className="ui divider"></div>


					<div className="row">
						<div className="seven wide computer sixteen wide mobile column pull-middle">
							<BillList />

							<NewBillForm />
						</div>
					</div>

					{this.props.bills.length > 0 ? (
						<div className="ui divider"></div>
					) : null}

					{this.props.bills.length > 0 ? (
						<div className="row">
							<div className="seven wide computer sixteen wide mobile column pull-middle">
								<BillCalculator />
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}

}


export default connect(state => ({
	bills: state.bills
}))(App);
