import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//have to import this hear...ie., instead of app.module..due to lazy loading

@NgModule({
  imports: [
    CommonModule,
    ContactDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactDetailComponent]
})
export class ContactDetailModule { }
