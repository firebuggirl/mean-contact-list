import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditRoutingModule } from './contact-edit-routing.module';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//have to import this here...ie., instead of app.module..due to lazy loading

@NgModule({
  imports: [
    CommonModule,
    ContactEditRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactEditComponent]
})
export class ContactEditModule { }
