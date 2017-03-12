import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {Routes, RouterModule} from "@angular/router";
import {ClientComponent} from './client/client.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MenuComponent} from "./menu/menu.component";
import 'hammerjs';
import {HomeComponent} from './home/home.component';
import {DashboardService} from "./dashboard/dashboard.service";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'client', component: ClientComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    DashboardComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
