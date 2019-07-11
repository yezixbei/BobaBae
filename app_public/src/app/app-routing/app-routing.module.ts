import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // add this

import { HomepageComponent } from '../homepage/homepage.component'; // add all the components you are going to reference
import { DetailsPageComponent } from '../details-page/details-page.component';
import { MenuPageComponent } from '../menu-page/menu-page.component';
import { CheckoutPageComponent } from '../checkout-page/checkout-page.component';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { AboutComponent } from '../about/about.component';
import { RegisterComponent } from '../register/register.component'
import { LoginComponent } from '../login/login.component'

const routes: any = [ // <router-outlet> in framework.component.html
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'location/:locationId',
    component: DetailsPageComponent
  },
  {
    path: 'location/:locationId/menu',
    component: MenuPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
