

import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListInactivesPage } from '../pages/list-inactives/list-inactives';
import { EditContactPage } from './../pages/edit-contact/edit-contact';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title:string, component: any}>;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Tarefas Pendentes', component: HomePage},
      {title: 'Tarefas Finalizadas', component: ListInactivesPage},
      {title: 'Adicionar Tarefa', component: EditContactPage}
    ];
  }
  
  openPage(page){

    this.nav.setRoot(page.component);
  }

}


