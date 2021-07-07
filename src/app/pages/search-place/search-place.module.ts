import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPlaceComponent} from './search-place.component';
import {SearchPlaceRoutingModule} from './search-place-routing.module';
import {SearchPlaceService} from '../../services/search-place.service';

@NgModule({
  declarations: [SearchPlaceComponent],
  exports: [
    SearchPlaceComponent
  ],
  imports: [
    CommonModule,
    SearchPlaceRoutingModule
  ],
  providers: [
    SearchPlaceService
  ]
})
export class SearchPlaceModule {
}
