import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})

export class HeaderAdminComponent implements OnInit {
  contact
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    this.dataService.getContact().subscribe(res => {
      this.contact = res[0];
    });
  }

  ngOnInit() {

  }
  logout() {
    this.app.Adminn = false;
    localStorage.clear();
    this.router.navigate(['/cabinet']);
  }
}
