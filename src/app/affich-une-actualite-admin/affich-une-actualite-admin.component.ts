import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {actualite} from '../actualite';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-affich-une-actualite-admin',
  templateUrl: './affich-une-actualite-admin.component.html',
  styleUrls: ['./affich-une-actualite-admin.component.scss']
})
export class AffichUneActualiteAdminComponent implements OnInit {

  model = new actualite();
  constructor(private activatedRoute: ActivatedRoute,private dataService: DataService,private app:AppComponent) {
      app.EspaceAdmin=true;
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
   this.dataService.getActualite(id).subscribe(res => {
       this.model = res[0];
   });
  }

}
