import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  contacts: any;

  totalRecords: number = 0;
pageSize: number = 10;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getAllContacts()
      .subscribe((data: Contact[]) => this.contacts = data);
  }



}
