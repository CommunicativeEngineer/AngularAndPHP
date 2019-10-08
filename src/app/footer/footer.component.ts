import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { DataService } from '../data.service';
import {
  Router
} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  model: any = {};
  contact
  onSubmit() {


    console.log(this.model)
    this.dataService.addNewsletter(this.model).subscribe(res => {});
    alert('thank you ! you are now subscribed to our newsletter')
  }
  constructor(private router: Router, private dataService: DataService, private app: AppComponent) {
    app.EspaceAdmin = false;
    this.dataService.getContact().subscribe(res => {
      this.contact = res[0];
    });
  }

  ngOnInit() {
  }

}
