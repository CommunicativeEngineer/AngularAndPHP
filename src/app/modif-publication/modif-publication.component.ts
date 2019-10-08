import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { publication } from '../publication';
import {
    Router
} from '@angular/router';
import {
    DataService
} from '../data.service';
import { HttpClient, HttpClientModule, HttpResponse, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-modif-publication',
    templateUrl: './modif-publication.component.html',
    styleUrls: ['./modif-publication.component.scss']
})
export class ModifPublicationComponent implements OnInit {
    formOnOff = false;
    test;
    publications;
    pages = [];
    n;
    nb;
    fileList: FileList;
    constructor(private Http: HttpClient, private router: Router, private dataService: DataService, private app: AppComponent) {
        app.EspaceAdmin = true;
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
            this.publications = res['data'];
            this.publications.reverse();
        });

        /*this.dataService.getPublications().subscribe(res => {
          this.publications = res;
          console.log(this.publications);
        });*/
    }

    ngOnInit() {
        if (localStorage.getItem('name')) { this.test = true }
        else this.test = false;
    }
    formOn() {
        this.formOnOff = true;
    }

    formOff() {
        this.formOnOff = false;
    }
    model = new publication();
    ajouterPublication() {
        this.fileupload();
        this.dataService
            .ajouterPublication(this.model)
            .subscribe(() => location.reload());
    }
    goBack() {
        this.router.navigate(['/pub']);
    }
    supprimerPublication(id) {
        if (confirm("Voulez vous vraiment supprimer cette publication")) {
            this.dataService
                .supprimerPublication(id)
                .subscribe(() => location.reload());
        }
    }
    getpub(i) {
        this.dataService.getPublicationspage(i).subscribe(res => {
            this.publications = res;
            this.publications.reverse();
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



    fileChange(event) {
        this.fileList = event.target.files;
        console.log(this.fileList[0].name);
        this.model.lien = this.fileList[0].name;
    }

    fileupload() {
        if (this.fileList.length > 0) {
            let file: File = this.fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new HttpHeaders();
            /** In Angular 5, including the header Content-Type can invalidate your request */
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            //  let options = new RequestOptions({ headers: headers });
            const options = {
                params: new HttpParams(),
                headers: headers
            };
            this.Http.post(`http://localhost/Back/uploadPdf.php`, formData, options)

                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }
}

