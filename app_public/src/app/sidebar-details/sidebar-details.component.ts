import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-sidebar-details',
  templateUrl: './sidebar-details.component.html',
  styleUrls: ['./sidebar-details.component.css']
})
export class SidebarDetailsComponent implements OnInit {

  @Input() location: Location;
  public googleAPIKey: string = 'AIzaSyDUv3jEGKefjy_1kcNI_rKexgWTkRC5J9I';

  constructor() { }

  ngOnInit() {
  }

}