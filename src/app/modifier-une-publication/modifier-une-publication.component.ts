import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { publication } from '../publication';
import { ActivatedRoute } from '@angular/router';
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../data.service';
import {
  delay
} from 'q';

@Component({
  selector: 'app-modifier-une-publication',
  templateUrl: './modifier-une-publication.component.html',
  styleUrls: ['./modifier-une-publication.component.scss']
})
export class ModifierUnePublicationComponent implements OnInit {
  test;
  model = new publication();
  constructor(private router: Router, private dataService: DataService, private app: AppComponent, private activatedRoute: ActivatedRoute) {
    app.EspaceAdmin = true;

  }

  ngOnInit() {
    if (localStorage.getItem('name')) { this.test = true }
    else this.test = false;
    let id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getPublication(id).subscribe(res => {
      this.model = res[0];
    });
  }
  modifierPublication() {
    if (confirm("Voulez vous vraiment modifier cette publication")) {
      this.dataService
        .modifierPublication(this.model)
        .subscribe(() => this.goBack());
    }
  }
  goBack() {
    this.router.navigate(['/pub']);
  }
}

