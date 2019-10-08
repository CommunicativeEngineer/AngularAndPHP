import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, from } from 'rxjs';
import { AppComponent } from '../app.component';
import { log } from 'util';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
  $photos: Object;
  imageDialogVisible = false;
  contact
  private bodyText: string;
  constructor(private dataserv: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
    this.dataserv.getContact().subscribe(res => {
      this.contact = res[0];
    });
    this.dataserv.getPhoto("https://jsonplaceholder.typicode.com/photos").subscribe(
      (data: any) => {
      this.$photos = data;
        console.log(this.$photos);
      }
    );
  }

  ngOnInit() {

  }

}
