import React, { Component } from 'react';


class SubBillList extends Component {

	render() {
		return (
			this.props.subBills.length !== 0 ? (
				<div className="ui middle aligned divided list">
					{this.props.subBills.map(subBill => (
						<div className="item" key={subBill.id}>
							<div className="right floated content">
								<div onClick={() => this.props.deleteSubBill(subBill.id)} className="ui button">Remove</div>
							</div>
							<div className="content">
								<div className="header">{subBill.title}</div>
								{subBill.user.name}, ${subBill.amount}
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


export default SubBillList;
