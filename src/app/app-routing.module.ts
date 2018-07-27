import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  },
  {
    path: 'contacts',
    loadChildren: './contact/contact.module#ContactModule'
  },
  {
    path: 'contact-details/:id',
    loadChildren: './contact-detail/contact-detail.module#ContactDetailModule'
  },
  {
    path: 'contact-create',
    loadChildren: './contact-create/contact-create.module#ContactCreateModule'
  },
  {
    path: 'contact-edit/:id',
    loadChildren: './contact-edit/contact-edit.module#ContactEditModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
