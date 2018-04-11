import SubBillActionTypes from '../constants/SubBillActionTypes';


export const deleteSubBill = item => {
	return {
		type: SubBillActionTypes.DELETE_SUB_BILL,
		item
	}
};

export const addSubBill = item => {
	return {
		type: SubBillActionTypes.ADD_SUB_BILL,
		item
	}
};

export const deleteAllSubBills = item => {
	return {
		type: SubBillActionTypes.DELETE_ALL_SUB_BILLS,
		item
	}
};
