import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactCreateRoutingModule } from './contact-create-routing.module';
import { ContactCreateComponent } from './contact-create/contact-create.component';

@NgModule({
  imports: [
    CommonModule,
    ContactCreateRoutingModule
  ],
  declarations: [ContactCreateComponent]
})
export class ContactCreateModule { }
