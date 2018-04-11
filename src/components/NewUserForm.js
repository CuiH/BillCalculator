import React, { Component } from 'react';


class NewUserForm extends Component {

	constructor() {
		super();

		this.state = {
			showForm: false,
			name:     ''
		};

		this.submit = this.submit.bind(this);
		this.input = this.input.bind(this);
	}

	input(event) {
		const value = event.target.value;

		this.setState({ name: value });
	}

	submit(event) {
		event.preventDefault();

		this.props.addUser({ name: this.state.name });

		this.setState({
			showForm: false,
			name:     ''
		});
	}

	render() {
		return this.state.showForm ? (
			<form onSubmit={this.submit} className="ui form">
				<div className="ui stacked segment">
					<div className="field">
						<label>Name</label>
						<input type="text" name="title" value={this.state.name} onChange={this.input} required />
					</div>

					<div className="ui fluid buttons">
						<button onClick={() => this.setState({ showForm: false })} className="ui button">Cancel</button>
						<div className="or" />
						<button className="ui positive button">OK</button>
					</div>

				</div>
			</form>
		) : (
			<button onClick={() => this.setState({ showForm: true })} className="ui fluid large teal button">Add user</button>
		);
	}

}


export default NewUserForm;
