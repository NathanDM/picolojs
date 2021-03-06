import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable()
export class DashboardService {

  constructor() { }
  private url = 'http://localhost:8080';
  private socket;

  sendMessage(name){
    this.socket.emit('join', name);
  }

  getMessages() {
   let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('connection-success', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }
}
