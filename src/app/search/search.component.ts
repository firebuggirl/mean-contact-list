
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Contact } from '../models/Contact';
 import { ContactService } from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  contacts: Observable<Contact[]>;

  private searchTerms = new Subject<string>();

  public isCollapsed = true;

constructor(public auth: AuthService,
            public http: HttpClient,
            private contactService: ContactService,
            private router: Router,
            private route: ActivatedRoute
            ) {

   auth.handleAuthentication();
 }

// Push a search term into the observable stream.
search(term: string) {
  this.searchTerms.next(term);
}

ngOnInit() {

 this.contacts = this.searchTerms.pipe(
 // wait 300ms after each keystroke before constermering the term
 debounceTime(300),

 // ignore new term if same as previous term
 distinctUntilChanged(),

 // switch to new search observable each time the term changes
 switchMap((term: string) => this.contactService.searchContacts(term)),


);




}


}
