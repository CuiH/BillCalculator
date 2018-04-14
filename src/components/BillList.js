import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as billActions from '../actions/billActions';


class BillList extends Component {

	render() {
		return (
			this.props.bills.length !== 0 ? (
				<div className="ui middle aligned divided list">
					{this.props.bills.map(bill => (
						<div className="item" key={bill.id}>
							<div className="right floated content">
								<div onClick={() => this.props.actions.deleteBill(bill.id)} className="ui button">Remove</div>
							</div>
							<div className="content">
								<div className="header">{bill.title}, {bill.date}</div>
								${bill.total}, {bill.payer}
							</div>

							{bill.subBills.length !== 0 ? (
								<div className="list">
									{bill.subBills.map(subBill => (
										<div key={subBill.id} className="item">
											<div className="header">{subBill.title}</div>
											${subBill.amount}, {subBill.user}
										</div>
									))}
								</div>
							): null}
						</div>
					))}
				</div>
			) : (
				<div className="ui message">
					<p>No bill.</p>
				</div>
			)
		);
	}

}


export default connect(state => ({
	bills:    state.bills
}), dispatch => ({
	actions: bindActionCreators(billActions, dispatch)
}))(BillList);
