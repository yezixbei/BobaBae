import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  public pageContent = {
    header: {
      title: 'Order Confirmation',
      strapline: ''
    },
    content: 'Thank you! Your order is on its way.'
  };

  constructor() { }

  ngOnInit() {
  }

}
