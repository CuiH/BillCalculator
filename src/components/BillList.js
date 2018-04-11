import React, { Component } from 'react';


class BillList extends Component {

	render() {
		return (
			this.props.bills.length !== 0 ? (
				<div className="ui middle aligned divided list">
					{this.props.bills.map(bill => (
						<div className="item" key={bill.id}>
							<div className="right floated content">
								<div onClick={() => this.props.deleteBill(bill.id)} className="ui button">Remove</div>
							</div>
							<div className="content">
								<div className="header">{bill.title}, {bill.date}</div>
								${bill.total}
							</div>

							{bill.subBills ? (
								<div className="list">
									{bill.subBills.map(subBill => (
										<div key={subBill.id} className="item">
											<div className="header">{subBill.title}</div>
											{subBill.user.name}, ${subBill.amount}
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


export default BillList;
