import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
  selector: 'AppLogin',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css'],
  providers: [ChatService]
})
export class AppLogin {
  userName = "";

  constructor(private router: Router,
              private chatSvc: ChatService)
  {
  }

  onEnter(value: string)
  {
      /* TODO: Don't allow empty strings */

      this.userName = value;
      this.router.navigate(['/chatroom', this.userName]);
  }
}
