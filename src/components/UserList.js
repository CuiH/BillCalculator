import React, { Component } from 'react';


class UserList extends Component {

	tryRemovingUser(id) {
		if (!this.props.bills.find(bill =>
				bill.payer.id === id || bill.subBills.find(subBill => subBill.user.id === id)))
			this.props.deleteUser(id);
	}

	render() {
		return this.props.users.length !== 0 ? (
			<div className="ui middle aligned divided list">
				{this.props.users.map(user => (
					<div key={user.id} className="ui large label">
						{user.name}<i onClick={() => this.tryRemovingUser(user.id)} className="delete icon" />
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


export default UserList;
