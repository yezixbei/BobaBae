import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent{
  private apiBaseUrl = environment.apiBaseUrl;
  public formError: string; 
  public newCredentials = {
    firstName: '',
    lastName: '',
    address: '',
    country:'',
    state:'',
    zip:'',
    nameOnCard:'',
    creditCardNum:'',
    expirationDate:'',
    cvv:''
  };

  public pageContent = {
    header: {
      title: 'Check out',
      strapline: ''
    },
    buttonExists: false
  };

  constructor(private router: Router){ }

  public onSubmit(): void {
    this.formError = '';
    if (!this.newCredentials.nameOnCard || !this.newCredentials.creditCardNum || !this.newCredentials.expirationDate || !this.newCredentials.cvv) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.router.navigateByUrl('/confirmation');
    }
  }

}