import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../actions/userActions';


class UserList extends Component {

	tryRemovingUser(name) {
		if (!this.props.bills.find(bill =>
				bill.payer === name || bill.subBills.find(subBill => subBill.user === name)))
			this.props.actions.deleteUser(name);
	}

	render() {
		return this.props.users.length !== 0 ? (
			<div className="ui middle aligned divided list">
				{this.props.users.map((user, i) => (
					<div key={i} className="ui large label">
						{user}<i onClick={() => this.tryRemovingUser(user)} className="delete icon" />
					</div>
				))}
			</div>
		) : (
			<div className="ui message">
				<p>No user.</p>
			</div>
		);
	}

}


export default connect(state => ({
	bills:    state.bills,
	users:    state.users
}), dispatch => ({
	actions: bindActionCreators(userActions, dispatch)
}))(UserList);
