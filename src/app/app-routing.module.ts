import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/search-place',
    pathMatch: 'full',
  },
  {
    path: 'search-place',
    loadChildren: './pages/search-place/search-place.module#SearchPlaceModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
