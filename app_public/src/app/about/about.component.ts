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
    content: 'Boba Bae is an online boba ordering and delivery platform dedicated to connecting thirsty boba lovers with local boba cafes! We help you find and order boba from wherever you are. How it works: we figure out where you are and tell you which boba shop delivers to that locale. When you find what you\'re looking for, you can place your order online, free of charge.'
  };

  constructor() { }

  ngOnInit() {
  }

}
