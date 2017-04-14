import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';
import { ContactService } from './contact.service';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  providers: [ContactService]
})

export class SandboxComponent implements OnInit {

  title = 'Contact List';
  contacts: Contact[];
  selectedContact: Contact;

  constructor(private contactService: ContactService) { }

  // getContacts(): void {
  //   this.contactService.getContacts().then(contacts => this.contacts = contacts);
  // }

  //  ngOnInit(): void {
  //   this.getContacts();
  // }

  getContactsSlowly(): void {
    this.contactService.getContactsSlowly().then(contacts => this.contacts = contacts);
  }
  
  ngOnInit(): void {
    this.getContactsSlowly();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
