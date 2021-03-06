



import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class ContactProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }


  public insert(contact: Contact) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, contact);
  }
  public update(key: string, contact: Contact) {
    return this.save(key, contact);
  }
  private save(key: string, contact: Contact) {
    return this.storage.set(key, contact);
  }
  public remove(key: string) {
    return this.storage.remove(key);
  }
  public changeActve(key: string, contact: Contact) {
    contact.active = !contact.active;
     return this.update(key, contact);
  }
  public getAllInactve() {
    let contacts: ContactList[] = [];

    return this.storage.forEach((value: Contact, key: string, itrationNumber: number) => {
      let contact = new ContactList();
      contact.key = key;
      contact.contact = value;
      if (!contact.contact.active) {
        contacts.push(contact);
      }
    })
      .then(() => {
        return Promise.resolve(contacts);
      })
      .catch((error) => {
        return Promise.reject(error);

      });
  }
  public getAllActive() {
    let contacts: ContactList[] = [];

    return this.storage.forEach((value: Contact, key: string, itrationNumber: number) => {
      let contact = new ContactList();
      contact.key = key;
      contact.contact = value;
      if (contact.contact.active) {
        contacts.push(contact);
      }

    })
      .then(() => {
        return Promise.resolve(contacts);
      })
      .catch((error) => {
        return Promise.reject(error);

      });
  }
}
export class Contact {
  nome: string;
  desc: string;
  active: boolean;
}

export class ContactList {
  key: string;
  contact: Contact;
}