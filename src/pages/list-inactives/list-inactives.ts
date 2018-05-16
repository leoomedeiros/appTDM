import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider, ContactList } from '../../providers/contact/contact';



@IonicPage()
@Component({
  selector: 'page-list-inactives',
  templateUrl: 'list-inactives.html',
})
export class ListInactivesPage {
  contacts: ContactList[];

  constructor(public navCtrl: NavController, private contactProvider: ContactProvider, private toast: ToastController) {
  }

  ionViewDidEnter() {
    this.contactProvider.getAllInactve()
      .then(results => {
        this.contacts = results;
      })
  }
  addContact() {
    this.navCtrl.push('EditContactPage')
  }
  editContact(item: ContactList) {
    this.navCtrl.push('EditContactPage', { key: item.key, contact: item.contact });
  }
  removeContact(item: ContactList) {
    this.contactProvider.remove(item.key)
      .then(() => {
        let index = this.contacts.indexOf(item);
        this.contacts.splice(index, 1);

        this.toast.create({ message: "Removido com sucesso!", duration: 3000, position: "bottom" }).present();
      })
  }
  statusContact(item: ContactList) {
    this.contactProvider.changeActve(item.key, item.contact);

    this.toast.create({ message: "Tarefa movida para area de finalizadas.", duration: 3000, position: "bottom" }).present();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}


