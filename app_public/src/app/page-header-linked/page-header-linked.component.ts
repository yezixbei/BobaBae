import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-linked',
  templateUrl: './page-header-linked.component.html',
  styleUrls: ['./page-header-linked.component.css']
})
export class PageHeaderLinkedComponent implements OnInit {

  @Input() content: any;

  constructor() { }

  ngOnInit() {
  }

}
