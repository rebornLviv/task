import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import * as fromApp from './store/app.reducer';
import {UsersEffects} from './users/store/users.effects';
import {HttpClientModule} from '@angular/common/http';
import {PostsEffects} from './posts/store/posts.effects';
import { NewpageComponent } from './newpage/newpage.component';
import {FormsModule} from '@angular/forms';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([UsersEffects, PostsEffects]),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    NewpageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
