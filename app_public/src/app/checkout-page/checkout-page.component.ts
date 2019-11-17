import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent{
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
    cartInfo:{
      buttonExists: false,
    }
    
  };

  constructor(
    private router: Router,
    private _zone: NgZone
  ){ }

  public onSubmit(): void {
    this.formError = '';
    if (!this.newCredentials.nameOnCard || !this.newCredentials.creditCardNum || !this.newCredentials.expirationDate || !this.newCredentials.cvv) {
      this.formError = 'All fields are required, please try again';
    } else {
      this.getToken();
      this.router.navigateByUrl('/confirmation');
    }
  }

  getToken() {
    this.formError = 'Loading...';
    (<any>window).Stripe.card.createToken({
      number: this.newCredentials.creditCardNum,
      exp_month: this.newCredentials.expirationDate,
      exp_year: this.newCredentials.expirationDate,
      cvc: this.newCredentials.cvv
    }, (status: number, response: any) => {

      // Wrapping inside the Angular zone
      this._zone.run(() => {
        if (status === 200) {
          this.formError = `Success! Card token ${response.card.id}.`;

        } else {
          this.formError = response.error.message;
        }
      });
    });
  }
}

/*          (async () => {
            const charge = await (<any>window).Stripe.charges.create({
              amount: 999,
              currency: 'usd',
              description: 'Example charge',
              source: response.card.id,
            });
          })();
*/