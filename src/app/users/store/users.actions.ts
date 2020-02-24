import { Action } from '@ngrx/store';
import {User} from '../user.model';
export const SET_USERS = '[Users] Set Users ';
export  const FETCH_USERS = '[Users] Fetch Users';


export  class FetchUsers implements  Action {
  readonly  type = FETCH_USERS;
}

export  class SetUsers implements  Action {
  readonly  type = SET_USERS;
  constructor(public  payload: User[]) {
  }
}


export type UsersActions = SetUsers;
