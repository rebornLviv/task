import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp  from  '.././store/app.reducer';
import * as PostsActions from  '../posts/store/posts.actions';
import {Post} from '../posts/posts.module';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-newpage',
  templateUrl: './newpage.component.html',
  styleUrls: ['./newpage.component.css']
})

export class NewpageComponent implements OnInit {
title = '';
body = '';
Addpost() {
 let post = new Post(+this.route.snapshot.params.userId, Math.random(), this.title, this.body);
// console.log(post);
 this.store.dispatch( new PostsActions.AddPosts(post));

}
  constructor( private  store: Store<fromApp.AppState>,
               private  route: ActivatedRoute) { }

  ngOnInit() {
  }

}
