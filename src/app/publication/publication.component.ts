import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  /*date;
  description;
  lien_pdf;
  getDetails(id) {
  
    const details = data['publications'].filter(detail => {
      if (detail.id == id) {
        this.date = detail.date;
        this.description = detail.description;
        this.lien_pdf= detail.lien_pdf;
        
      }
    });
  }*/


  publications;
  pages = [];
  n;
  nb;
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
    this.dataService.getPublicationsnum().subscribe(res => {
      if (res['count'] % 8 == 0) {
        this.n = res['count'] / 8;
      }
      else {
        this.n = (res['count'] / 8) + 1;
        this.n = parseInt(this.n);
      }
      if (this.n > 5) {
        this.nb = 5;
      }
      else this.nb = this.n;
      for (let i = 1; i <= this.nb; i++) {
        this.pages.push(i);
      }
    });
    this.dataService.getPublicationspage(1).subscribe(res => {
      this.publications = res['data']
      this.publications.reverse();
      let compteurAnnee = 0;
      this.publications.map(
        (a) => {
          compteurAnnee++;
          a.verif = compteurAnnee % 4 ? false : true;
          return a;
        });
    });

  }

  ngOnInit() {
  }
  run(url) {
    var URL = "http://localhost/fichier/" + url;
    window.open(URL, null);
  }
  getpub(i) {
    this.dataService.getPublicationspage(i).subscribe(res => {
      this.publications = res['data'];
      this.publications.reverse();
      let compteurAnnee = 0;
      this.publications.map(
        (a) => {
          compteurAnnee++;
          a.verif = compteurAnnee % 4 ? false : true;
          return a;
        });
    });
    this.pages = [];
    if (this.n - i >= 5) {
      this.nb = i + 5;
    }
    else { this.nb = this.n; }
    if (i > 1) { i = i - 1; }
    for (i; i <= this.nb; i++) {
      this.pages.push(i);
    }
  }
}
