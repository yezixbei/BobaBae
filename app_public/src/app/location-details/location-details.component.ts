import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { BobabaeDataService } from '../bobabae-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  public googleAPIKey: string = 'AIzaSyDwOdTsRh8T1KsU6cBOw_tSmSXZhoLfO0I';
  public formVisible: boolean = false; // put *ngIf="formVisible" in the div around the form; put (click)="formVisible=false" inside buttons
  public newReview: Review = { // get data from [(ngModel)]="data"
    author: '',
    rating: 5,
    reviewText: ''
  };
  public formError: string; 
  
  public onSubmit(): void {
    this.formError = '';
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {

      this.bobabaeDataService.addReviewByLocationId(this.location._id, this.newReview)
      .then((review:Review) => {
        let reviews = this.location.reviews.slice(0); // update the reviews in the page
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

  constructor(private bobabaeDataService:BobabaeDataService) { }

  ngOnInit() {
  }

}
