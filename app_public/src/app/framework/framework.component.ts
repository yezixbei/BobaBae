import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../cart.service';
import { User } from '../user';


@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  public cartSize$: Observable<number>;

  constructor(
    private authenticationService:AuthenticationService,
    private cartService:CartService
  ) { }

  public doLogOut(): void { this.authenticationService.logout() }

  public isLoggedIn(): boolean { return this.authenticationService.isLoggedIn() }

  public getUsername(): string {
    const user:User = this.authenticationService.getCurrentUser();
    return user? user.name:'Guest';
  }

  ngOnInit() {
    this.cartSize$ = this.cartService.cartSize$;
  }

}
