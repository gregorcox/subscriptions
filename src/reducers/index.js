import subscriptionReducer from "./subscription";
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    subscriptionReducer
});

export default allReducers;
