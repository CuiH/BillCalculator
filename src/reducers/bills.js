import BillActionTypes from '../constants/BillActionTypes';


let id = 0;

const initialItems = [];

const bills = (state = initialItems, action) => {
	switch(action.type) {
		case BillActionTypes.ADD_BILL:
			const newBills = state.map(bill => Object.assign({}, bill));

			action.item.id = id++;
			newBills.push(action.item);

			newBills.sort((b1, b2) => b1.date < b2.date ? 0 : 1);

			return newBills;
		case BillActionTypes.DELETE_BILL:
			return state.filter(item => item.id !== action.item);

		default:
			return state;
	}
};


export default bills;
