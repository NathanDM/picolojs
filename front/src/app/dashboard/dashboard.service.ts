import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class DashboardService {

  constructor() { }
  private url = 'http://localhost:8080';
  private socket;

  sendMessage(){
    this.socket.emit('join', "nathan");
  }

  getMessages() {
    console.log(io)
      this.socket = io(this.url);
      this.socket.on('connection-success', (data) => {
        console.log(data)
      });
  }
}
