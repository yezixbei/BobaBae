import { Component, OnInit } from '@angular/core';
import { BobabaeDataService } from '../bobabae-data.service';
import { CartService } from '../cart.service';
import { Location, MenuItem } from '../location';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  public location: Location;
  public visible: boolean;
  
  public pageContent = {
    header: {
      title: '',
      strapline: 'Menu'
    },
    buttonExists: true
  };

  constructor(
    private bobabaeDataService: BobabaeDataService,
    private cartService: CartService,
    private route: ActivatedRoute) { }

  
  public addToCart(item:MenuItem): void {
    this.cartService.addToCart(item);
  }

  ngOnInit(): void { // get locationId from URL
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => {
        let id = params.get('locationId');
        return this.bobabaeDataService.getLocationById(id);
      })
      )
      .subscribe((newLocation: Location) => {
        this.location = newLocation;
        this.pageContent.header.title = newLocation.name;
      });
  }

}
