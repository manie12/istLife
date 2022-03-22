import {combineReducers} from 'redux';
import  postReducers from './Reducers/PostReducers';
import userReducers from './Reducers/userReducers';

export default combineReducers({
    posts:postReducers,
    users:userReducers
});