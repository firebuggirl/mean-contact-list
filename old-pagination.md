import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/Contact';

import {ChangeDetectionStrategy, Input} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { HttpClient, HttpParams } from '@angular/common/http';

interface IServerResponse {
    items: string[];
    //total: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class PaginationComponent implements OnInit {

  //contacts: any;

 @Input('data') contacts: any[] = [];
asyncContacts: Observable<any[]>;
 p: number = 1;
 //total: number;
 loading: boolean;

  constructor(private contactService: ContactService, private http: HttpClient) { }

  ngOnInit() {
    //this.contactService.getAllContacts()
       //.subscribe((data: Contact[]) => this.contacts = data);

      this.getPage(1);

  }

  getPage(page: number) {
     this.loading = true;

     this.asyncContacts = this.contactService.getAllContacts()
       .subscribe((data: Contact[]) => this.contacts = data)
       .do(res => {
           //this.total = res.total;
           this.p = page;
           this.loading = false;
       })
       .map(res => res.items);

    //  this.asyncContacts = serverCall(this.contacts, page)
    //      .do(res => {
    //          //this.total = res.total;
    //          this.p = page;
    //          this.loading = false;
    //      })
    //      .map(res => res.items);
    // }


}



//function serverCall(contacts: string[], page: number): Observable<IServerResponse> {
function serverCall(contacts: any[], page: number): Observable<IServerResponse> {
    const perPage = 10;
    const start = (page - 1) * perPage;
    const end = start + perPage;
//return this.http.get<Contact[]>('api/contact');
    return Observable
        .of({
           items: contacts.slice(start, end),
            //items: this.http.get('api/contact').slice(start, end)
            //total: 100
        }).delay(1000);
}
