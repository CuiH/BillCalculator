import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SubBillList from './SubBillList';
import NewSubBillForm from './NewSubBillForm';
import * as billActions from '../actions/billActions';
import * as subBillActions from '../actions/subBillActions';


class NewBillForm extends Component {

	constructor() {
		super();

		this.state = {
			showForm: false,
			title:    '',
			date:     '',
			total:    '',
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
			date:     '',
			total:    '',
			message:  ''
		});

		this.selectedUser = null;

		this.props.actions.deleteAllSubBills();
	}

	input(event) {
		const value = event.target.value;

		switch (event.target.name) {
			case 'title':
				this.setState({ title: value });

				break;
			case 'date':
				this.setState({ date: value });

				break;
			case 'total':
				this.setState({ total: value });

				break;
			default:
				break;
		}
	}

	select(event, data) {
		this.selectedUser = data.value;
	}

	submit(event) {
		event.preventDefault();

		if (!this.selectedUser) return this.setState({ message: 'Please select a payer.' });

		this.props.actions.addBill({
			title:    this.state.title,
			date:     this.state.date,
			total:    this.state.total,
			subBills: this.props.subBills.map(subBill => Object.assign({}, subBill)),
			payer:    this.selectedUser
		});

		this.clear();
	}

	render() {
		const users = this.props.users.map(user => ({
			text:  user,
			value: user
		}));

		return this.state.showForm ? (
			<form onSubmit={this.submit} className="ui form">
				<div className="ui stacked segment">
					{this.state.message ? <div className="ui red message">{this.state.message}</div> : null}

					<h4 className="ui dividing header">Basic information</h4>

					<div className="two fields">
						<div className="field">
							<label>Title</label>
							<input type="text" name="title" value={this.state.title} onChange={this.input} required />
						</div>
						<div className="field">
							<label>Payer</label>
							<Dropdown onChange={this.select} placeholder='Select user' fluid selection options={users} />
						</div>
					</div>

					<div className="two fields">
						<div className="field">
							<label>Date</label>
							<input type="date" name="date" value={this.state.date} onChange={this.input} required />
						</div>
						<div className="field">
							<label>Total</label>
							<input type="text" name="total" pattern="\d+(.\d+)?" value={this.state.total} onChange={this.input} required />
						</div>
					</div>

					<h4 className="ui dividing header">
						Sub bills

						<NewSubBillForm />
					</h4>

					<SubBillList />

					<div className="ui fluid buttons">
						<div onClick={this.clear} className="ui button">Cancel</div>
						<div className="or" />
						<button className="ui positive button">OK</button>
					</div>

				</div>
			</form>
		) : (
			<button onClick={() => this.setState({ showForm: true })} className="ui fluid teal button"><i className="icon money bill alternate" />Add bill</button>
		);
	}

}


export default connect(state => ({
	subBills: state.subBills,
	users:    state.users
}), dispatch => ({
	actions: bindActionCreators(Object.assign({}, billActions, subBillActions), dispatch)
}))(NewBillForm);
