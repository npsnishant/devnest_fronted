import {combineReducers} from 'redux';
import changeEmail from './email_red';
import changeName from './name_red';

const rootReducers = combineReducers({
    name: changeName, 
    email: changeEmail
})

export default rootReducers;