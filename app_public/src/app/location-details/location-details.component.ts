import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { BobabaeDataService } from '../bobabae-data.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  public formVisible: boolean = false; // put *ngIf="formVisible" in the div around the form; put (click)="formVisible=false" inside buttons
  public formError: string; 
  public newReview: Review = { // get data from [(ngModel)]="data"
    author: '',
    rating: 5,
    reviewText: ''
  };

  @Input() location: Location;
  constructor(
    private bobabaeDataService: BobabaeDataService,
    private authenticationService: AuthenticationService) { }
  

  public onSubmit(): void {
    this.formError = '';
    this.newReview.author = this.getUsername();
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      this.bobabaeDataService.addReviewByLocationId(this.location._id, this.newReview)
      .then((review:Review) => {
        let reviews = this.location.reviews.slice(0); 
        reviews.unshift(review);
        this.location.reviews = reviews;
        this.resetAndHideReviewForm();
      })

    }else{ this.formError = 'All fields required, please try again'; }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  public getUsername(): string {
    const { name } = this.authenticationService.getCurrentUser();
    return name ? name : 'Guest';
  }

  ngOnInit() {
  }

}
