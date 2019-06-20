import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // add this

import { HomepageComponent } from '../homepage/homepage.component'; // add all the components you are going to reference
import { DetailsPageComponent } from '../details-page/details-page.component';
import { AboutComponent } from '../about/about.component';

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
