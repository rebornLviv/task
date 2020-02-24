import {User} from '../user.model';
import * as UsersActions from './users.actions';
export interface State {
  users: User[];
}

const initialState: State = {
  users: []
};

export  function UsersReducer(state: State = initialState, action: UsersActions.UsersActions ) {
switch (action.type) {
  case UsersActions.SET_USERS:
    return {
      ...state,
      users: action.payload
    }
  default:
    return initialState;
}

}
