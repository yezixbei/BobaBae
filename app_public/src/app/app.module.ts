import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { FrameworkComponent } from './framework/framework.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeListComponent } from './home-list/home-list.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { AboutComponent } from './about/about.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { DistancePipe } from './distance.pipe';
import { MostRecentFirstPipe } from './most-recent-first.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SidebarDetailsComponent } from './sidebar-details/sidebar-details.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PageHeaderLinkedComponent } from './page-header-linked/page-header-linked.component';

@NgModule({
  declarations: [
    HomeListComponent,
    DistancePipe,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    LocationDetailsComponent,
    DetailsPageComponent,
    RatingStarsComponent,
    MostRecentFirstPipe,
    RegisterComponent,
    LoginComponent,
    SidebarDetailsComponent,
    MenuPageComponent,
    ShoppingCartComponent,
    CheckoutPageComponent,
    ConfirmationComponent,
    PageHeaderLinkedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent] //<app-root> in index.html
})
export class AppModule { }
