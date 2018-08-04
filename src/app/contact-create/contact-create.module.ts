import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactCreateRoutingModule } from './contact-create-routing.module';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//have to import this hear...ie., instead of app.module..due to lazy loading


@NgModule({
  imports: [
    CommonModule,
    ContactCreateRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ContactCreateComponent]
})
export class ContactCreateModule { }
