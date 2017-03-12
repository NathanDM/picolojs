import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboard: DashboardService) {
  }

  ngOnInit() {
    this.dashboard.getMessages();
    this.dashboard.sendMessage();
  }

}
