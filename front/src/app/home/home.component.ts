import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  user: User;
  toto: string = '';

  constructor() {
  }

  connect(username): void {
    this.user.username = username;
    alert(this.user.username);
  }

}
