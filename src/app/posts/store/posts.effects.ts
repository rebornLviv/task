import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as  PostsActions from './posts.actions';
import {map, switchMap} from 'rxjs/operators';
import {Post} from '../posts.module';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
@Injectable()
export  class PostsEffects {
  @Effect()
  fetchPosts = this.actions$.pipe(
    ofType(PostsActions.FETCH_POSTS),
    switchMap(
      (fetchAction: PostsActions.FetchPosts) => {
        console.log(fetchAction.payload);
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + fetchAction.payload);

      }
    ),
    map(
      posts => {
        console.log('here');
        return new PostsActions.SetPosts(posts);
      }
    ),
  );
  @Effect()
  addPost = this.actions$.pipe(
    ofType(PostsActions.ADD_POSTS),
    switchMap(
      (addPosts: PostsActions.AddPosts) => {
        console.log('posted');
        return this.http.post<Post[]>('https://jsonplaceholder.typicode.com/posts',
          {
            userId: addPosts.payload.userId,
            id: addPosts.payload.id,
            title: addPosts.payload.title,
            body: addPosts.payload.body
          });

      }
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private route: ActivatedRoute
    // private store: Store<fromApp.AppState>
  ) {}
}
