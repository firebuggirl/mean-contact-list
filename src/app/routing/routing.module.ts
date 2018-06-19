import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from "../login/login.component";
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SearchComponent } from '../search/search.component';

import { AuthGuard } from "../guard/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  // { path: 'contacts', component: ContactComponent},// for dev mode....not having to sign in...
  // { path: 'contact-details/:id', component: ContactDetailComponent},
  // { path: 'contact-create', component: ContactCreateComponent },
  // { path: 'contact-edit/:id', component: ContactEditComponent },
  { path: 'contacts', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'contact-details/:id', component: ContactDetailComponent, canActivate: [AuthGuard] },
  { path: 'contact-create', component: ContactCreateComponent, canActivate: [AuthGuard] },
  { path: 'contact-edit/:id', component: ContactEditComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
