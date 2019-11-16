import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeagueStructrePage } from './league-structre.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueStructrePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeagueStructrePage]
})
export class LeagueStructrePageModule {}
