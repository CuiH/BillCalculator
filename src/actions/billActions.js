import BillActionTypes from '../constants/BillActionTypes';


export const deleteBill = item => {
	return {
		type: BillActionTypes.DELETE_BILL,
		item
	}
};

export const addBill = item => {
	return {
		type: BillActionTypes.ADD_BILL,
		item
	}
};
