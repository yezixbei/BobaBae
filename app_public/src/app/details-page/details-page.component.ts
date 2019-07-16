import { Component, OnInit } from '@angular/core';
import { BobabaeDataService } from '../bobabae-data.service';
import { Location } from '../location';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  public newLocation: Location;

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    }
  };

  constructor(
    private bobabaeDataService: BobabaeDataService,
    private route: ActivatedRoute) { }


  ngOnInit(): void { // get locationId from URL
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
          let id = params.get('locationId');
          return this.bobabaeDataService.getLocationById(id);
        })
      )
      .subscribe((newLocation: Location) => {
        this.newLocation = newLocation;
        this.pageContent.header.title = newLocation.name; 
      });
  }
}