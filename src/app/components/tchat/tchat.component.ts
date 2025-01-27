import { Component } from '@angular/core';

import * as signalr from '@microsoft/signalr';

@Component({
  selector: 'app-chat',
  templateUrl: './tchat.component.html',
  styleUrl: './tchat.component.scss'
})
export class TchatComponent {
 private hubConnection? : signalr.HubConnection
  url : string = "https://localhost:7141/gameshub"

  listeMessage : Message[] = []

  content! : string
  username! : string

  constructor() {

    this.hubConnection = new signalr.HubConnectionBuilder().withUrl(this.url).build();

    this.hubConnection.start()

    this.hubConnection.on("notifyNewMessage", async (message : Message) => {
      this.listeMessage.push(message)
    })
  }

  sendMessage() {
    this.hubConnection?.send("SendMessage", {username : this.username, content: this.content})
  }
}

export interface Message {
  username : string
  content : string
}