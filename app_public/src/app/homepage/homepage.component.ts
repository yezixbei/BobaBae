import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'Boba Bae',
      strapline: 'Find boba cafes near you!'
    },
    sidebar: 'Toppings, such as chewy tapioca balls, popping boba, fruit jelly, grass jelly, agar jelly, and puddings are often added. '
  };

}
