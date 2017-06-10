import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'chat-room',
    templateUrl: './app.chatroom.html',
    styleUrls: ['./app.chatroom.css']
})
export class AppChatroom {
    userName = "";

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit()
    {
        this.userName = this.route.snapshot.params['id'];
    }
}
