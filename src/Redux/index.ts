import {combineReducers} from 'redux';
import  postReducers from './Reducers/PostReducers';

export default combineReducers({
    posts:postReducers
})