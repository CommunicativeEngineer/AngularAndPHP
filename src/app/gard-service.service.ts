import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GardServiceService implements CanActivate {

  constructor(private app : AppComponent , private router : Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
     
    if(!(localStorage.getItem('name'))){
   

    console.log("helloff");
    
    this.router.navigate(['login']);
    return true ; }
    return false ;
     } }
