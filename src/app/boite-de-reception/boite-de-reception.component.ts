import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';  
import {message} from '../message';
import {mail} from '../mail';
import * as data from '../../assets/contenu.json';
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
  selector: 'app-boite-de-reception',
  templateUrl: './boite-de-reception.component.html',
  styleUrls: ['./boite-de-reception.component.scss']
})
export class BoiteDeReceptionComponent implements OnInit {
  messages ;
  test;
  newsletter=false;
  mails;
  pages=[];
  n;
  nb;
  pages2=[];
  n2;
  nb2;
  constructor(private router: Router, private dataService: DataService,private app:AppComponent) {
      app.EspaceAdmin=true;
      this.dataService.getMessagessnum().subscribe(res => {
          if(res[0]['COUNT(id)']%10==0){
              this.n= res[0]['COUNT(id)']/10;}
          else
          {this.n= (res[0]['COUNT(id)']/10)+1;
              this.n=parseInt(this.n);}
          if(this.n>5){
              this.nb=5;}
          else this.nb=this.n;
          for(let i=1;i<=this.nb;i++){
              this.pages.push(i);
          }
      });
      this.dataService.getMessagespage(1).subscribe(res => {
          this.messages = res;
          this.messages.reverse();
      });

      this.dataService.getMailsnum().subscribe(res => {
          if(res[0]['COUNT(id)']%10==0){
              this.n2= res[0]['COUNT(id)']/10;}
          else
          {this.n2= (res[0]['COUNT(id)']/10)+1;
              this.n2=parseInt(this.n2);}
          if(this.n2>5){
              this.nb2=5;}
          else this.nb2=this.n2;
          for(let i=1;i<=this.nb2;i++){
              this.pages2.push(i);
          }
      });
      this.dataService.getMailspage(1).subscribe(res => {
          this.mails = res;
          this.mails.reverse();
      });
      /*this.dataService.getMessages().subscribe(res => {
        this.messages = res;
        console.log(this.messages);
      });*/
     /* this.dataService.getMails().subscribe(res => {
        this.mails= res;
        console.log(this.mails);
      });*/
  }

  ngOnInit() {
      if (localStorage.getItem('name') )
      { this.test =true;}
      else this.test=false ;
  }
    getmsg(i){
        this.dataService.getMessagespage(i).subscribe(res => {
            this.messages = res;
            this.messages.reverse();
        });
        this.pages=[];
        if(this.n-i>=5){
            this.nb=i+5;}
        else{this.nb=this.n;}
        if(i>1){i=i-1;}
        for(i;i<=this.nb;i++){
            this.pages.push(i);
        }
    }
    getnews(i){
        this.dataService.getMailspage(i).subscribe(res => {
            this.mails = res;
            this.mails.reverse();
        });
        this.pages2=[];
        if(this.n2-i>=5){
            this.nb2=i+5;}
        else{this.nb2=this.n2;}
        if(i>1){i=i-1;}
        for(i;i<=this.nb2;i++){
            this.pages2.push(i);
        }
    }
    newsletterOn(){this.newsletter=true;}
    newsletterOff(){this.newsletter=false;}


}
