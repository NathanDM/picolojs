import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from "rxjs";

@Injectable()
export class ConnectionService {

  constructor() { }
  private url = 'http://localhost:8080';
  private socket;

  join(name){
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
