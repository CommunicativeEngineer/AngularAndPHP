import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {actualite} from '../actualite';
import * as data from '../../assets/contenu.json';
import {ActivatedRoute} from '@angular/router';
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
  selector: 'app-modifier-une-actualite',
  templateUrl: './modifier-une-actualite.component.html',
  styleUrls: ['./modifier-une-actualite.component.scss']
})
export class ModifierUneActualiteComponent implements OnInit {
 test;
  model = new actualite();
  constructor(private router: Router, private dataService: DataService,private app:AppComponent, private activatedRoute: ActivatedRoute) 
  {app.EspaceAdmin=true; }

  
  ngOnInit() {
    if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    let id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getActualite(id).subscribe(res => {
        this.model = res[0];
    });
    
  }
  modifierActualite(){
    if(confirm("Voulez vous vraiment modifier cette actualité") ){
    this.dataService
        .modifierActualite(this.model)
        .subscribe(()=> this.goBack());
      }
    }
       goBack(){
        this.router.navigate(['/admin']);
      }

}
