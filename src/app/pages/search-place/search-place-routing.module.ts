import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchPlaceComponent} from './search-place.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPlaceComponent
  }
];

export const SearchPlaceRoutingModule = RouterModule.forChild(routes);
