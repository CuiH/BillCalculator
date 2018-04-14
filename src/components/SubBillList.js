import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as subBillActions from '../actions/subBillActions';


class SubBillList extends Component {

	render() {
		return (
			this.props.subBills.length !== 0 ? (
				<div className="ui middle aligned divided list">
					{this.props.subBills.map(subBill => (
						<div className="item" key={subBill.id}>
							<div className="right floated content">
								<div onClick={() => this.props.actions.deleteSubBill(subBill.id)} className="ui button">Remove</div>
							</div>
							<div className="content">
								<div className="header">{subBill.title}</div>
								${subBill.amount}, {subBill.user}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="ui message">
					<p>No sub bill.</p>
				</div>
			)
		);
	}

}


export default connect(state => ({
	subBills: state.subBills,
}), dispatch => ({
	actions: bindActionCreators(subBillActions, dispatch)
}))(SubBillList);
