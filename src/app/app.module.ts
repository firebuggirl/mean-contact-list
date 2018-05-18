import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
    ContactComponent,
    ContactCreateComponent,
    ContactDetailComponent,
    ContactEditComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, ContactService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
