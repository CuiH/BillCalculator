import UserActionTypes from '../constants/UserActionTypes';


export const deleteUser = item => {
	return {
		type: UserActionTypes.DELETE_USER,
		item
	}
};

export const addUser = item => {
	return {
		type: UserActionTypes.ADD_USER,
		item
	}
};
