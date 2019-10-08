import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/Operators';
import * as $ from 'jquery';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  Adminn ;
  title = 'projet-cabinetWAB';
  EspaceAdmin = false;
  subscription: Subscription;
  constructor(private router: Router) {
      if(localStorage.getItem('name')){
          this.Adminn=true;
      }
      else{this.Adminn=false;}
  }
  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)

      )
      .subscribe(() => window.scrollTo(0, 0));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
