import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {contact} from '../contact'; 
import {ActivatedRoute} from '@angular/router';
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../data.service';
 

@Component({
  selector: 'app-modif-contact-us',
  templateUrl: './modif-contact-us.component.html',
  styleUrls: ['./modif-contact-us.component.scss']
})
export class ModifContactUsComponent implements OnInit {
  model = new contact();
  test;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent, private activatedRoute: ActivatedRoute) {
    app.EspaceAdmin=true;
  }

  ngOnInit() {
      if (localStorage.getItem('name') )
      { this.test =true;}
      else this.test=false ;
    let id = this.activatedRoute.snapshot.params['id'];
    this.dataService.getInfoContact(id).subscribe(res => {
        this.model = res[0];
    });
   /* if (localStorage.getItem('name') )
    { this.test =true}
    else this.test=false ;
    console.log(this.test); */
  }
  modifierInfoContact(){
    if(confirm("Voulez vous vraiment modifier vos données de contact") ){
    this.dataService
        .modifierInfoContact(this.model)
        .subscribe(()=> this.goBack());
       location.reload();
      }
    }
       goBack(){
        this.router.navigate(['/modifcontact']);
      }
}
