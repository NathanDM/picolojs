import { Component, OnInit } from '@angular/core';
import {User} from "../models/user";
import {DashboardService} from "../dashboard/dashboard.service";
import {ConnectionService} from "../services/connection.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  message;
  user: User = new User(0, '');

  constructor(private connectionService: ConnectionService) {
    this.connectionService.getMessages().subscribe(message => {
      this.message = message;
      console.log(this.message);
    });
  }

  connect(): void {
    this.connectionService.join(this.user.name);
  }

}
