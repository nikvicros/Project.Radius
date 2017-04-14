import { Component, Input } from '@angular/core';
import { Contact } from './contact';

@Component({

  selector: 'contact-detail',
  template: `
    <div *ngIf="contact">
    <h2>{{contact.name}} details!</h2>
    <div><label>id: </label>{{contact.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="contact.name" placeholder="name" />
    </div>
</div>
`
})


export class ContactDetailComponent {
    @Input() contact: Contact;

}