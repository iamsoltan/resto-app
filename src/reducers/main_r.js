import { combineReducers } from 'redux';
import r_dishes from './r_dishes';
import r_users from "./r_users";
import r_orders from './r_orders';

const main_r = combineReducers({
  r_dishes,
  r_users,
  r_orders

});

export default main_r;
