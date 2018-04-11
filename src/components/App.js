import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './App.css';

import * as billItemActions from '../actions/billActions';
import NewBillForm from './NewBillForm';
import BillList from './BillList';


class App extends Component {

	render() {
		return (
			<div className="ui container default-container">
				<div className="ui centered grid">
					<div className="eight wide column">
						<BillList bills={this.props.bills} deleteBill={this.props.actions.deleteBill} />

						<NewBillForm addBill={this.props.actions.addBill} />
					</div>
				</div>
			</div>
		);
	}

}


export default connect(state => ({
	bills:  state.bills
}), dispatch => ({
	actions: bindActionCreators(billItemActions, dispatch)
}))(App);
