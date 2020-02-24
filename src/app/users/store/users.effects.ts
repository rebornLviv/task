import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as  UsersActions from './users.actions';
import {map, switchMap} from 'rxjs/operators';
import {User} from '../user.model';
@Injectable()
export  class UsersEffects {
  @Effect()
  fetchUsers  = this.actions$.pipe(
    ofType(UsersActions.FETCH_USERS),
    switchMap(
      () => {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

      }
    ),
    map(
      users => {
        return new UsersActions.SetUsers(users);
      }
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
   // private store: Store<fromApp.AppState>
  ) {}
}
