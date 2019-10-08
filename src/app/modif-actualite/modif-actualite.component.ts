import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';  
import {actualite} from '../actualite';
import * as data from '../../assets/contenu.json';
declare var alert;
import {
  Router
} from '@angular/router';
import {
  DataService
} from '../data.service';
import {
  delay
} from 'q';
import {HttpClient, HttpClientModule, HttpResponse, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';   

@Component({
  selector: 'app-modif-actualite',
  templateUrl: './modif-actualite.component.html',
  styleUrls: ['./modif-actualite.component.scss']
})
export class ModifActualiteComponent implements OnInit {
formOnOff=false;
actualites;
test ;
selectedFile: File
    pages=[];
    n;
    nb;
    fileList: FileList;
  constructor(private Http: HttpClient ,private router: Router, private dataService: DataService,private app:AppComponent  ) {
      app.EspaceAdmin=true;
      this.dataService.getActualitesnum().subscribe(res => {
          if(res[0]['COUNT(id)']%6==0){
              this.n= res[0]['COUNT(id)']/6;}
          else
          {this.n= (res[0]['COUNT(id)']/6)+1;
              this.n=parseInt(this.n);}
          if(this.n>5){
              this.nb=5;}
          else this.nb=this.n;
          for(let i=1;i<=this.nb;i++){
              this.pages.push(i);
          }
      });
      this.dataService.getActualitespage(1).subscribe(res => {
          this.actualites = res;
          this.actualites.reverse();
      });
      /*this.dataService.getActualites().subscribe(res => {
        this.actualites = res;
        console.log(this.actualites);
      });*/
    
  }
  ngOnInit(){
    if (localStorage.getItem('name') )
    { this.test = true}
    else this.test=false ;
  }
    getact(i){
        this.dataService.getActualitespage(i).subscribe(res => {
            this.actualites = res;
            this.actualites.reverse();
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
formOn(){
    this.formOnOff=true;
}

formOff(){
        this.formOnOff=false;
    }

    goBack(){
      this.router.navigate(['/admin']);
    }

    model = new actualite();
    ajouterActualite(){
        this.fileupload();
       // this.handleUpload(this.event);
      this.dataService
        .ajouterActualite(this.model)
        .subscribe(()=>location.reload());
  }

    supprimerActualite(id){
      if(confirm("Voulez vous vraiment supprimer cette actualité") ){
      this.dataService
        .supprimerActualite(id)
        .subscribe(()=>location.reload());

      }
  }
  fileChange(event) {
        this.fileList = event.target.files;
      this.model.fichier=this.fileList[0].name;
    }

  fileupload(){
    if(this.fileList.length > 0) {
        let file: File = this.fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new HttpHeaders();
    /** In Angular 5, including the header Content-Type can invalidate your request */
         headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
      //  let options = new RequestOptions({ headers: headers });
        const options = {
          params: new HttpParams(),
          headers:  headers
        };
        this.Http.post(`http://localhost/Back/uploadImage.php`, formData, options)
            
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            );
    }
} 


}
