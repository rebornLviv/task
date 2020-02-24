import { Action } from '@ngrx/store';
import {Post}  from  '../posts.module';
import {Injectable} from '@angular/core';
export const SET_POSTS = '[Posts] Set Posts ';
export  const FETCH_POSTS = '[Posts] Fetch Posts';
export  const ADD_POSTS = '[Posts] Add Posts';

@Injectable()
export  class FetchPosts implements  Action {
  readonly  type = FETCH_POSTS;
  constructor( public  payload: number) {
  }
}

export  class SetPosts implements  Action {
  readonly  type = SET_POSTS;
  constructor(public  payload: Post[]) {
  }
}
export  class AddPosts implements  Action {
  readonly  type = ADD_POSTS;
  constructor( public payload: Post) {
  }
}

export type PostsActions = SetPosts;
