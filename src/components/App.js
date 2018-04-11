import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';

import * as billActions from '../actions/billActions';
import * as userActions from '../actions/userActions';
import NewBillForm from './NewBillForm';
import BillList from './BillList';
import UserList from './UserList';
import NewUserForm from './NewUserForm';


class App extends Component {

	render() {
		return (
			<div className="ui container default-container">
				<div className="ui centered grid">
					<div className="row">
						<div className="eight wide column">
							<UserList bills={this.props.bills} users={this.props.users} deleteUser={this.props.actions.deleteUser} />
							<NewUserForm addUser={this.props.actions.addUser} />
						</div>
					</div>

					<div className="row">
						<div className="eight wide column">
							<BillList bills={this.props.bills} users={this.props.users} deleteBill={this.props.actions.deleteBill} />
							<NewBillForm addBill={this.props.actions.addBill} />
						</div>
					</div>
				</div>
			</div>
		);
	}

}


export default connect(state => ({
	bills: state.bills,
	users: state.users
}), dispatch => ({
	actions: bindActionCreators(Object.assign({}, billActions, userActions), dispatch)
}))(App);
