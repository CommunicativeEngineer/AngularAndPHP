import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from 'src/app/cabinet/cabinet.component';
import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ActualiteComponent } from 'src/app/actualite/actualite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ServicesComponent } from './services/services.component';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import {ModifActualiteComponent} from './modif-actualite/modif-actualite.component';
import {ModifPublicationComponent} from './modif-publication/modif-publication.component';
import {ModifContactUsComponent} from './modif-contact-us/modif-contact-us.component';
import {BoiteDeReceptionComponent} from './boite-de-reception/boite-de-reception.component';
import {ModifierUnePublicationComponent} from './modifier-une-publication/modifier-une-publication.component';
import {ModifierUneActualiteComponent} from './modifier-une-actualite/modifier-une-actualite.component';
import {AffichUneActualiteAdminComponent} from './affich-une-actualite-admin/affich-une-actualite-admin.component';
import {AffichUnePublicationAdminComponent} from './affich-une-publication-admin/affich-une-publication-admin.component';
import {AffichUnMessageAdminComponent} from './affich-un-message-admin/affich-un-message-admin.component';
import { GardServiceService } from './gard-service.service'; 
const routes: Routes = [

  { path: 'cabinet', component: CabinetComponent },
  { path: '', component: AccueilComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'actualites/:id', component: ActualiteComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'publication', component: PublicationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: ModifActualiteComponent /*, canActivate : [GardServiceService]*/ },
  { path: 'pub', component: ModifPublicationComponent },
  { path: 'boite', component: BoiteDeReceptionComponent },
  { path: 'modifcontact', component: ModifContactUsComponent },
  { path: 'publication/:id', component: ModifierUnePublicationComponent },
  { path: 'actualite/:id', component: ModifierUneActualiteComponent },
  { path: 'uneactualite/:id', component: AffichUneActualiteAdminComponent },
  { path: 'unepublication/:id', component: AffichUnePublicationAdminComponent },
  { path: 'unmessage/:id', component:AffichUnMessageAdminComponent}




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
