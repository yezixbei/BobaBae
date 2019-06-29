import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  public formError: string = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
  public pageContent = {
    header: {
      title: 'Sign in to Boba Bae',
      strapline: ''
    },
    sidebar: ''
  };

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.authenticationService.login(this.credentials)
        .then(() => this.router.navigateByUrl('/'))
        .catch((message) => this.formError = message);
    }
  }

  ngOnInit() {
  }

}
