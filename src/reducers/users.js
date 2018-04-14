import UserActionTypes from '../constants/UserActionTypes';


const initialItems = [];

const users = (state = initialItems, action) => {
	switch(action.type) {
		case UserActionTypes.ADD_USER:
			const newUsers = state.concat();
			newUsers.push(action.item);

			return newUsers;
		case UserActionTypes.DELETE_USER:
			return state.filter(item => item !== action.item);

		default:
			return state;
	}
};


export default users;
