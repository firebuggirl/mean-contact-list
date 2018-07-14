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
import { MessageService }  from './message.service';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from './guard/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { SearchComponent } from './search/search.component';
//import { PaginationComponent } from './pagination/pagination.component';
//import { ContactSearchComponent } from './contact-search/contact-search.component';
import {NgxPaginationModule} from 'ngx-pagination';


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
    CallbackComponent,
    SearchComponent
    //PaginationComponent
    //ContactSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, ContactService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
