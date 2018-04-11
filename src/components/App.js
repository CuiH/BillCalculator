import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';

import * as billActions from '../actions/billActions';
import * as userActions from '../actions/userActions';
import * as subBillActions from '../actions/subBillActions';
import NewBillForm from './NewBillForm';
import BillList from './BillList';
import UserList from './UserList';
import NewUserForm from './NewUserForm';
import BillCalculator from './BillCalculator';


class App extends Component {

	render() {
		return (
			<div className="ui container default-container">
				<div className="ui grid">
					<div className="row">
						<div className="eight wide column pull-middle">
							<UserList
								bills={this.props.bills}
								users={this.props.users}
								deleteUser={this.props.actions.deleteUser} />

							<NewUserForm
								users={this.props.users}
								addUser={this.props.actions.addUser} />
						</div>
					</div>

					<div className="row">
						<div className="eight wide column pull-middle">
							<BillList
								bills={this.props.bills}
								deleteBill={this.props.actions.deleteBill} />

							<NewBillForm
								users={this.props.users}
								subBills={this.props.subBills}
								addBill={this.props.actions.addBill}
								addSubBill={this.props.actions.addSubBill}
								deleteSubBill={this.props.actions.deleteSubBill}
								deleteAllSubBills={this.props.actions.deleteAllSubBills} />
						</div>
					</div>

					{this.props.bills.length > 0 ? (
						<div className="row">
							<div className="eight wide column pull-middle">
								<BillCalculator bills={this.props.bills} />
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}

}


export default connect(state => ({
	bills:    state.bills,
	subBills: state.subBills,
	users:    state.users
}), dispatch => ({
	actions: bindActionCreators(Object.assign({}, billActions, userActions, subBillActions), dispatch)
}))(App);
