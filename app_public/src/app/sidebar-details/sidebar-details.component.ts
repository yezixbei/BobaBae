import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'app-sidebar-details',
  templateUrl: './sidebar-details.component.html',
  styleUrls: ['./sidebar-details.component.css']
})
export class SidebarDetailsComponent implements OnInit {

  @Input() location: Location;
  public googleAPIKey: string = 'AIzaSyCG_hw39mu9q1Ue2TjtbSz--2hDMqao5Ag';

  constructor() { }

  ngOnInit() {
  }

}