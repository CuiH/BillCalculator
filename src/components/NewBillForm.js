import React, { Component } from 'react';


class NewBillForm extends Component {

	constructor() {
		super();

		this.state = {
			showForm: false,
			title:    '',
			date:     '',
			total:    ''
		};

		this.submit = this.submit.bind(this);
		this.input = this.input.bind(this);
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

	submit(event) {
		event.preventDefault();

		this.props.addBill({
			title: this.state.title,
			date:  this.state.date,
			total: this.state.total
		});

		this.setState({
			showForm: false,
			title:    '',
			date:     '',
			total:    ''
		});
	}

	render() {
		return this.state.showForm ? (
			<form onSubmit={this.submit} className="ui form">
				<div className="ui stacked segment">
					<div className="field">
						<label>Title</label>
						<input type="text" name="title" value={this.state.title} onChange={this.input} required />
					</div>

					<div className="two fields">
						<div className="field">
							<label>Date</label>
							<input type="date" name="date" value={this.state.date} onChange={this.input} required />
						</div>
						<div className="field">
							<label>Total</label>
							<input type="text" name="total" pattern="\d+(.\d+)?" onChange={this.input} value={this.state.total} required />
						</div>
					</div>

					<div className="ui fluid buttons">
						<button onClick={() => this.setState({ showForm: false })} className="ui button">Cancel</button>
						<div className="or" />
						<button className="ui positive button">OK</button>
					</div>
				</div>
			</form>
		) : (
			<button onClick={() => this.setState({ showForm: true })} className="ui fluid large teal button">Add bill</button>
		);
	}

}


export default NewBillForm;
