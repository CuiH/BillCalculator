import BillActionTypes from '../constants/BillActionTypes';


let id = 0;

const initialItems = [];

const bills = (state = initialItems, action) => {

	switch(action.type) {
		case BillActionTypes.ADD_BILL:
			const newBills = state.map(bill => Object.assign({}, bill));

			action.item.id = id++;
			newBills.push(action.item);

			return newBills;
		case BillActionTypes.DELETE_BILL:
			return state.filter((item, index) => index === action.index);

		default:
			return state;
	}
};


export default bills;
