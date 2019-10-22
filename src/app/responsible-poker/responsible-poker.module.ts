import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResponsiblePokerPage } from './responsible-poker.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiblePokerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResponsiblePokerPage]
})
export class ResponsiblePokerPageModule {}
