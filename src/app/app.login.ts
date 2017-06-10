import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'AppLogin',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css']
})
export class AppLogin {
  userName = "";

  constructor(private router: Router)
  {
  }

  onEnter(value: string)
  {
      this.userName = value;
      this.router.navigate(['/chatroom', this.userName]);
  }
}
