import {Component, OnInit} from '@angular/core';
import {SearchPlaceService} from '../../services/search-place.service';
import {SearchPlace} from '../../models/SearchPlace';
import {DomSanitizer} from '@angular/platform-browser';
import {SearchRequest} from '../../models/SearchRequest';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css']
})
export class SearchPlaceComponent implements OnInit {

  constructor(private searchPlaceService: SearchPlaceService,
              private sanitizer: DomSanitizer,
              private toastr: ToastrService) { }

  searchPlaceData: SearchPlace[] = [];

  page = 1;
  pageSize = 5;
  collectionSize = this.searchPlaceData.length;

  request: SearchRequest = new SearchRequest();

  ngOnInit(): void {
    // this.getPlaces('41.235270', '28.494483', '1000');
  }

  getPlaces(request: SearchRequest) {
    this.searchPlaceService.getPlaces(request.lat, request.lng, request.radius).subscribe((res: any) => {
      if (res.success) {
        this.searchPlaceData = res.data;
        this.collectionSize = this.searchPlaceData.length;
        if (this.collectionSize === 0) {
            this.toastr.error('Data not found !!!');
        }
      }
    });
  }

  convertStringToNumber(input: string) {
    return Number(input);
  }

  // showOnMaps() {
  //   this.mapUrl = 'https://www.google.com/maps/embed/v1/view\n' +
  //     '  ?key=AIzaSyB2vmXQ-MvBH2F198x2SvujszQTujJrve4\n' +
  //     '  &center=-33.8569,151.2152\n' +
  //     '  &zoom=18\n' +
  //     '  &maptype=satellite';
  // }
  //
  // mapUrlByPass() {
  //   return this.sanitizer.sanitize(SecurityContext.URL, this.mapUrl);
  // }

}
