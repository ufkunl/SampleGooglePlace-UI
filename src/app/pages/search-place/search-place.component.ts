import { Component, OnInit } from '@angular/core';
import {SearchPlaceService} from '../../services/search-place.service';
import {SearchPlace} from '../models/SearchPlace';

@Component({
  selector: 'app-search-place',
  templateUrl: './search-place.component.html',
  styleUrls: ['./search-place.component.css']
})
export class SearchPlaceComponent implements OnInit {

  constructor(private searchPlaceService: SearchPlaceService) { }

  searchPlaceData: SearchPlace[];

  ngOnInit(): void {
    this.getPlaces();
  }

  getPlaces() {
    this.searchPlaceService.getPlaces('28.494483', '41.235270', '1000').subscribe((res: any) => {
      if (res.success) {
        console.log(res.data);
        this.searchPlaceData = res.data;
      }
    });
  }

}
