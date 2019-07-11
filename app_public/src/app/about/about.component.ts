import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public pageContent = {
    header: {
      title: 'About Boba Bae',
      strapline: ''
    },
    content: 'Boba Bae is a website to help you find, review, and purchase bubble tea!'
  };

  constructor() { }

  ngOnInit() {
  }

}
