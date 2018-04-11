import UserActionTypes from '../constants/UserActionTypes';


let id = 0;

const initialItems = [];

const users = (state = initialItems, action) => {
	console.log(action);

	switch(action.type) {
		case UserActionTypes.ADD_USER:
			const newUsers = state.map(user => Object.assign({}, user));

			action.item.id = id++;
			newUsers.push(action.item);

			return newUsers;
		case UserActionTypes.DELETE_USER:
			return state.filter(item => item.id !== action.item);

		default:
			return state;
	}
};


export default users;
