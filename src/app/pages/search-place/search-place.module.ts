import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPlaceComponent} from './search-place.component';
import {SearchPlaceRoutingModule} from './search-place-routing.module';
import {SearchPlaceService} from '../../services/search-place.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SearchPlaceComponent ],
  exports: [
    SearchPlaceComponent
  ],
  imports: [
    CommonModule,
    SearchPlaceRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    SearchPlaceService
  ]
})
export class SearchPlaceModule {
}
