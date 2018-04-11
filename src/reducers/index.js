import { combineReducers } from 'redux'

import bills from './bills';
import users from './users';
import subBills from './subBills';


const rootReducer = combineReducers({
	bills,
	users,
	subBills
});


export default rootReducer;
