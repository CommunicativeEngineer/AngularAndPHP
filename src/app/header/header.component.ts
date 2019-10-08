import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  test;
  contact
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    this.dataService.getContact().subscribe(res => {
      this.contact = res[0];
    });
    if (localStorage.getItem('name')) { this.test = true }
    else this.test = false;
  }

  ngOnInit() {

  }
  Admin() {
    this.app.EspaceAdmin = true;
  }
  logout() {
    this.app.Adminn = false;
    localStorage.clear();
  }
}
