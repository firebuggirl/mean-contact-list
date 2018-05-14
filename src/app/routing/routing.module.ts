import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';
import { ContactCreateComponent } from '../contact-create/contact-create.component';
import { ContactEditComponent } from '../contact-edit/contact-edit.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'contact-details/:id', component: ContactDetailComponent },
  { path: 'contact-create', component: ContactCreateComponent },
  { path: 'contact-edit/:id', component: ContactEditComponent },
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
