import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthModule } from './auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactService } from './contact.service';
import { MessageService } from './message.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import {NgxPaginationModule} from 'ngx-pagination';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    AuthModule.forRoot(), // need to call forRoot() in order to provide their services + ensure that they are only provided once
    //NgbModule.forRoot(),
    CoreModule.forRoot()

  ],
  providers: [AuthService, ContactService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
