import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service';
import { AppComponent } from '../app.component';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  $posts: any[] = [];
  $actual: any[] = [];
  actualites: any[] = [];
  constructor(private dataserv: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;


    this.dataserv.getData('http://localhost/Back/publication.php').subscribe( //url back 
      (data: any) => {
        var a = data.length;
        if (a < 5) {
          this.$posts = data;
        }

        else {
          for (var i = a - 4; i < a; i++) { //retour back les 4 plus récents 
            this.$posts.push(data[i]);

          }

        }

      },

      (error) => {
        console.log(error);
      }

    )

    this.dataserv.getActualites().subscribe((res: any) => {

      var a = res.length;
      if (a < 4) {
        this.actualites = res;
      }
      else {
        for (var i = a - 3; i < a; i++) { //retour back les 4 plus récents 
          this.actualites.push(res[i]);

        }

      }
    });





  }

  ngOnInit() {

  }
  run(url) {
    var URL = "http://localhost/fichier/" + url;
    window.open(URL, null);
  }
}
