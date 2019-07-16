import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MenuItem, Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<MenuItem[]>([]);
  private vendor = new BehaviorSubject<Location>(new Location());
  private cartSize = new BehaviorSubject<number>(0);
  private cartVal = new BehaviorSubject<number>(0);

  constructor() { 
    const itemsString = localStorage.getItem('items');
    const vendorString = localStorage.getItem('vendor');

    if (itemsString == null || vendorString == null) {
      this.items.next([]);
      this.vendor.next(new Location());
    } else {
      this.items.next(JSON.parse(itemsString)); 
      this.vendor.next(JSON.parse(vendorString));
    } 

    this.cartSize.next(this.computeCartSize());
    this.cartVal.next(this.computeCartVal());
  }

  public get items$() { return this.items.asObservable(); }
  public get vendor$() { return this.vendor.asObservable(); }
  public get cartSize$(): Observable<number> { return this.cartSize.asObservable(); }
  public get cartVal$(): Observable<number> { return this.cartVal.asObservable();}


  private computeCartSize(): number {
    return this.items.getValue().length;
  }

  private computeCartVal(): number {
    let total = 0;
    let currentItems = this.items.getValue(); // get the most recent version
    for (let i = 0; i < currentItems.length; i++) { total += currentItems[i].price; }
    return total;
  }
  
  private saveCart(currentItems:MenuItem[]):void{ 
    this.items.next(currentItems);
    this.cartSize.next(this.computeCartSize());
    this.cartVal.next(this.computeCartVal());

    localStorage.setItem('items', JSON.stringify(currentItems));
  }

  public addToCart(item: MenuItem):void {
    const currentItems = this.items.getValue(); 
    currentItems.push(item);
    this.saveCart(currentItems);
  }

  public removeFromCart(item: MenuItem): void {
    const currentItems = this.items.getValue(); 
    const index=currentItems.indexOf(item);
    if (index > -1) currentItems.splice(index, 1);
    this.saveCart(currentItems);
  }

  public clearCart():void{ 
    this.saveCart([]);
  }

  public checkVendor(vendor: Location): void {
    if (this.vendor.getValue().name === vendor.name) return;
    this.vendor.next(vendor);
    localStorage.setItem('vendor', JSON.stringify(vendor));
    this.clearCart();
  }
}


