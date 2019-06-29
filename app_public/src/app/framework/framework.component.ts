import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  public doLogOut(): void { this.authenticationService.logout() }

  public isLoggedIn(): boolean { return this.authenticationService.isLoggedIn() }

  public getUsername(): string {
    const user:User = this.authenticationService.getCurrentUser();
    return user? user.name:'Guest';
  }

  ngOnInit() {
  }

}
