import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChatService } from './chat.service';

@Component({
    selector: 'chat-room',
    templateUrl: './app.chatroom.html',
    styleUrls: ['./app.chatroom.css'],
    providers: [ChatService]
})
export class AppChatroom implements OnInit{
    userName = "";
    chatHistory = "";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private chatSvc: ChatService
    ) {}

    getChatHistory()
    {
        this.chatSvc.getMessages().then(chatHistory => this.chatHistory = chatHistory);
    }

    ngOnInit()
    {
        this.userName = this.route.snapshot.params['id'];
        this.getChatHistory();
    }
}
