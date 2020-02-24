import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp  from  '../store/app.reducer';
import  * as UsersActions from './store/users.actions';
import {map, take} from 'rxjs/operators';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , OnDestroy {
  users: User[];
  subscription: Subscription;
  constructor(private  router: Router , private  store: Store<fromApp.AppState>) { }

  toPosts(id) {
    this.router.navigate(['posts', id]);
  }
  ngOnInit() {
    this.store.dispatch( new UsersActions.FetchUsers());
    this.subscription =   this.store.select('users').pipe(
    map( usersState => {
      return usersState.users;
    })
    ).subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(this.users);
      }
    );
  }
  ngOnDestroy(): void {
if (this.subscription) {
  this.subscription.unsubscribe();
}

  }

}
