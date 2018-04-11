import SubBillActionTypes from '../constants/SubBillActionTypes';


let id = 0;

const initialItems = [];

const subBills = (state = initialItems, action) => {
	switch(action.type) {
		case SubBillActionTypes.ADD_SUB_BILL:
			const newSubBills = state.map(subBill => Object.assign({}, subBill));

			action.item.id = id++;
			newSubBills.push(action.item);

			return newSubBills;
		case SubBillActionTypes.DELETE_SUB_BILL:
			return state.filter((item, index) => index === action.index);

		default:
			return state;
	}
};


export default subBills;
