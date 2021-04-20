import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 33.5682409;
  lng = -7.5563477;

  constructor() { }

  ngOnInit(): void {
  }

}
