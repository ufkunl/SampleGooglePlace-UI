import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Variables} from '../util/variables';

@Injectable()
export class SearchPlaceService {

  private readonly SEARCH_PLACE_URL = Variables.SEARCH_PLACE;

  constructor(private httpClient: HttpClient) {
  }

  getPlaces(longitude, latitude, radius) {
    // let params = new HttpParams();
    // params = params.append('longitude', longitude);
    // params = params.append('latitude', latitude);
    // params = params.append('radius', radius);
    return this.httpClient.get(this.SEARCH_PLACE_URL + '?longitude=' + longitude + '&latitude=' + latitude + '&radius=' + radius);
  }

}
