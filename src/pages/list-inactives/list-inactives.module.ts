
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInactivesPage } from './list-inactives';

@NgModule({
  declarations: [
    ListInactivesPage,
    
  ],
  imports: [
    IonicPageModule.forChild(ListInactivesPage),
  ],
})
export class ListInactivesPageModule {}
