import React, { Component } from 'react';

import './BillList.css';


class BillItem extends Component {

	render() {
		return this.props.bills.length !== 0 ? (
			<div className="ui middle aligned divided list">
				{this.props.bills.map((bill, index) => (
					<div className="item" key={bill.id}>
						<div className="right floated content">
							<div onClick={() => this.props.deleteBill(index)} className="ui button">Remove</div>
						</div>
						<div className="content">
							<div className="header">{bill.title}, {bill.date}</div>
							{bill.total}
						</div>
					</div>
				))}

			</div>
		) : (
			<div className="ui message">
				<p>No bill.</p>
			</div>
		);
	}

}


export default BillItem;
