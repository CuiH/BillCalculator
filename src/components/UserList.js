import React, { Component } from 'react';


class UserList extends Component {

	constructor() {
		super();

		this.state = { message: '' };
	}

	tryRemovingUser(index) {
		if (this.props.bills.find(bill =>
				bill.subItems.find(item =>
						item.userIndex === index)))
			this.setState({ message: 'This user has been assigned item(s).' });
		else
			this.props.deleteUser(index);
	}

	render() {
		return this.props.users.length !== 0 ? (
			<div className="ui middle aligned divided list">
				{this.props.users.map(user => (
					<div key={user.id} className="ui image label">
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
