import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactEditRoutingModule } from './contact-edit-routing.module';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ContactEditRoutingModule
  ],
  declarations: [ContactEditComponent]
})
export class ContactEditModule { }
