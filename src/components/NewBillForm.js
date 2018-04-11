import React, { Component } from 'react';


class NewBillForm extends Component {

	constructor() {
		super();

		this.state = {
			showBasicForm: false,
			showSubForm:   false,
			title:         '',
			date:          '',
			total:         '',
			subItems:      []
		};

		this.submit = this.submit.bind(this);
		this.inputBasic = this.inputBasic.bind(this);
	}

	inputBasic(event) {
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
			showBasicForm: false,
			showSubForm:   false,
			title:         '',
			date:          '',
			total:         '',
			subItems:      []
		});
	}

	render() {
		return this.state.showBasicForm ? (
			<form onSubmit={this.submit} className="ui form">
				<div className="ui stacked segment">
					<h4 className="ui dividing header">Basic information</h4>

					<div className="field">
						<label>Title</label>
						<input type="text" name="title" value={this.state.title} onChange={this.inputBasic} required />
					</div>

					<div className="two fields">
						<div className="field">
							<label>Date</label>
							<input type="date" name="date" value={this.state.date} onChange={this.inputBasic} required />
						</div>
						<div className="field">
							<label>Total</label>
							<input type="text" name="total" pattern="\d+(.\d+)?" onChange={this.inputBasic} value={this.state.total} required />
						</div>
					</div>

					<h4 className="ui dividing header">Sub items <a onClick={() => this.setState({ showSubForm: true })} className="add-sub-btn">add</a></h4>

					<div className="ui message">
						<p>No sub item.</p>
					</div>

					<div className="ui fluid buttons">
						<button onClick={() => this.setState({ showBasicForm: false })} className="ui button">Cancel</button>
						<div className="or" />
						<button className="ui positive button">OK</button>
					</div>

				</div>
			</form>
		) : (
			<button onClick={() => this.setState({ showBasicForm: true })} className="ui fluid large teal button">Add bill</button>
		);
	}

}


export default NewBillForm;
