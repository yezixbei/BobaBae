import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //need to be imported in app.module.ts
import { Location, Review } from './location';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { environment } from '../environments/environment';
import { BROWSER_STORAGE } from './storage';

@Injectable({
  providedIn: 'root'
})
export class BobabaeDataService {

  constructor(
    private http: HttpClient, 
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = environment.apiBaseUrl; // see src/environment

  public getLocations(lat: number, lng: number): Promise<Location[]> {
    const url: string = `${this.apiBaseUrl}/locations?lng=${lng}&lat=${lat}`; // build url
    return this.http.get(url) //call http
      .toPromise() //wait for it to finish
      .then(response => response as Location[]) //assign it to be returned
      .catch(this.handleError);
  }

  public getLocationById(locationId: string): Promise<Location> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}`; 
    return this.http.get(url)
      .toPromise()
      .then(response => response as Location)
      .catch(this.handleError);
  }

  public addReviewByLocationId(locationId: string, formData: Review): Promise<Review> {
    const url: string = `${this.apiBaseUrl}/locations/${locationId}/reviews`; 
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('boba-token')}`
      })
    };
    return this.http.post(url, formData, httpOptions)
      .toPromise()
      .then(response => {
        response as Review
      })
      .catch(this.handleError);
  }

  public login(credentials: any): Promise<AuthResponse> { return this.makeAuthApiCall('login', credentials);}

  public register(credentials: any): Promise<AuthResponse> { return this.makeAuthApiCall('register', credentials);}

  private makeAuthApiCall(urlPath: string, credentials: any): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;

    return this.http.post(url, credentials)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
