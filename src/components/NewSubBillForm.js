import React, { Component } from 'react';
import { Dropdown, Modal } from 'semantic-ui-react'


class NewSubBillForm extends Component {

	constructor() {
		super();

		this.state = {
			showForm: false,
			title:    '',
			amount:   '',
			message:  ''
		};

		this.selectedUser = null;

		this.submit = this.submit.bind(this);
		this.input = this.input.bind(this);
		this.clear = this.clear.bind(this);
		this.select = this.select.bind(this);
	}

	clear() {
		this.setState({
			showForm: false,
			title:    '',
			amount:   '',
			message:  ''
		});

		this.selectedUser = null;
	}

	select(event, data) {
		this.selectedUser = this.props.users.find(user => user.id === data.value);
	}

	input(event) {
		const value = event.target.value;

		switch (event.target.name) {
			case 'title':
				this.setState({ title: value });

				break;
			case 'amount':
				this.setState({ amount: value });

				break;
			default:
				break;
		}
	}

	submit(event) {
		event.preventDefault();

		if (!this.selectedUser) return this.setState({ message: 'Please select a user.' });

		this.props.addSubBill({
			title:    this.state.title,
			amount:   this.state.amount,
			user:     {
				name: this.selectedUser.name,
				id:   this.selectedUser.id
			}
		});

		this.clear();
	}

	render() {
		const users = this.props.users.map(user => ({
			text:  user.name,
			value: user.id
		}));

		return (
			<div className="move-inline">
				<a onClick={() => this.setState({ showForm: true })} className="add-sub-btn">add</a>

				<Modal size="small" open={this.state.showForm} >
					<Modal.Header>Add a sub bill</Modal.Header>
					<Modal.Content>
						<form onSubmit={this.submit} className="ui form">
							{this.state.message ? <div className="ui red message">{this.state.message}</div> : null}

							<div className="field">
								<label>Title</label>
								<input type="text" name="title" value={this.state.title} onChange={this.input} required />
							</div>

							<div className="two fields">
								<div className="field">
									<label>User</label>
									<Dropdown onChange={this.select} placeholder='Select user' fluid selection options={users} />
								</div>
								<div className="field">
									<label>Amount</label>
									<input type="text" name="amount" pattern="\d+(.\d+)?" value={this.state.amount} onChange={this.input} required />
								</div>
							</div>

							<div className="ui fluid buttons">
								<div onClick={this.clear} className="ui button">Cancel</div>
								<div className="or" />
								<button className="ui positive button">OK</button>
							</div>
						</form>
					</Modal.Content>
				</Modal>
			</div>
		);
	}

}


export default NewSubBillForm;
