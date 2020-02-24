import {Post}  from  '../posts.module';
import * as PostsActions from './posts.actions';
export interface State {
  posts: Post[];
}

const initialState: State = {
  posts: []
};

export  function PostsReducer(state: State = initialState, action: PostsActions.PostsActions ) {
  switch (action.type) {
    case PostsActions.SET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }

}
