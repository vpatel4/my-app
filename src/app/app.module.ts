import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppChatroom }  from './app.chatroom';
import { PageNotFoundComponent } from './not-found.component';
import { AppLogin } from './app.login';

const appRoutes: Routes = [
    {
        path: 'chatroom/:id',
        component: AppChatroom
    },
    {
        path: 'login',
        component: AppLogin
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AppChatroom,
    PageNotFoundComponent,
    AppLogin
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
