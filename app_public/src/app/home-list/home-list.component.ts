import { Component, OnInit } from '@angular/core';
import { BobabaeDataService } from '../bobabae-data.service';
import { GeolocationService } from '../geolocation.service';
import { Location } from '../location';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})

export class HomeListComponent implements OnInit {

  constructor(private bobabaeDataService: BobabaeDataService,
              private geolocationService: GeolocationService) { }

  locationsOne: Location[];
  locationsTwo: Location[];
  public message: string;

  private getPosition(): void {
    this.message = 'Getting your location...';
    this.geolocationService.getPosition(this.getLocations.bind(this), this.showError.bind(this), this.noGeo.bind(this)); //.bind(this) to pass in a class member (eg message)
  }

  // three callbacks for geolocationService.getPosition
  private showError(error: any): void {
    this.message = error.message;
  };
  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  } ;
  private getLocations(position: any): void {
    this.message = 'Searching for nearby places...';
    const lat: number = position.coords.latitude; 
    const lng: number = position.coords.longitude;
    this.bobabaeDataService.getLocations(lat, lng)
      .then(foundLocations => {
        this.message = foundLocations.length > 0 ? '' : 'No locations found';
        this.locationsOne = foundLocations.slice(0, foundLocations.length/2);
        this.locationsTwo = foundLocations.slice(foundLocations.length / 2);
      });
  }

  ngOnInit() { // run this private method after the component is ready
    this.getPosition(); 
  } 
}