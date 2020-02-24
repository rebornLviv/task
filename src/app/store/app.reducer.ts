import { ActionReducerMap } from '@ngrx/store';

import * as fromUsers from '../users/store/users.reducer';
import * as fromPosts from '../posts/store/posts.reducer';
export interface AppState {
  users: fromUsers.State;
  posts: fromPosts.State;

}

export const appReducer: ActionReducerMap<AppState> = {
  users: fromUsers.UsersReducer,
  posts: fromPosts.PostsReducer

};
