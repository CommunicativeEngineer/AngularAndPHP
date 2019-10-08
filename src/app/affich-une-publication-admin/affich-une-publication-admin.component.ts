import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {publication} from '../publication';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-affich-une-publication-admin',
  templateUrl: './affich-une-publication-admin.component.html',
  styleUrls: ['./affich-une-publication-admin.component.scss']
})
export class AffichUnePublicationAdminComponent implements OnInit {

  model = new publication();
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService,private app:AppComponent) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getPublication(id).subscribe(res => {
        this.model = res[0];
    });
  }

}
