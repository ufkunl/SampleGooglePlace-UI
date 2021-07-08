import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPlaceComponent} from './search-place.component';
import {SearchPlaceRoutingModule} from './search-place-routing.module';
import {SearchPlaceService} from '../../services/search-place.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [SearchPlaceComponent ],
  exports: [
    SearchPlaceComponent
  ],
  imports: [
    CommonModule,
    SearchPlaceRoutingModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2vmXQ-MvBH2F198x2SvujszQTujJrve4',
      libraries: ['places']
    })
  ],
  providers: [
    SearchPlaceService
  ]
})
export class SearchPlaceModule {
}
