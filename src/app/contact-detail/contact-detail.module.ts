import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailRoutingModule } from './contact-detail-routing.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ContactDetailRoutingModule
  ],
  declarations: [ContactDetailComponent]
})
export class ContactDetailModule { }
