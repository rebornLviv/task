import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp  from  '../store/app.reducer';
import * as PostsActions from './store/posts.actions';
import {map, take} from 'rxjs/operators';
import {Post} from './posts.module';
import {ActivatedRoute, Router} from '@angular/router';
import * as UsersActions from '../users/store/users.actions';
import {User} from '../users/user.model';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;
  uid: number;
  constructor(private  store: Store<fromApp.AppState>,
              private route: ActivatedRoute,
              private  router: Router) { }
  ngOnInit() {
    this.store.dispatch( new PostsActions.FetchPosts(this.route.snapshot.params.id));
    this.subscription =   this.store.select('posts').pipe(
      map( postsState => {
        return postsState.posts;
      })
    ).subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log(this.posts);
      }
    );
  }
  addP() {
    this.uid = this.posts[0].id;
   // this.router.navigate(['../../' ],{relativeTo: this.route});
    this.router.navigate(['../new'], {relativeTo: this.route , queryParams: {userId: this.uid}});
  }
  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
