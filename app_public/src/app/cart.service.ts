import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MenuItem } from './location';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<MenuItem[]>([]);
  private total = new BehaviorSubject<number>(0);

  constructor() { 
    const cartString = localStorage.getItem('cart');
    if (cartString == null) this.items.next([]);
    else this.items.next(JSON.parse(cartString)); 
    this.total.next(this.computeTotal());
  }


  public get items$() { return this.items.asObservable(); }
  public get total$(): Observable<number> { return this.total.asObservable();}

  private computeTotal(): number {
    let total = 0;
    let currentItems = this.items.getValue(); // get the most recent version
    for (let i = 0; i < currentItems.length; i++) { total += currentItems[i].price; }
    return total;
  }
  
  private saveCart(currentItems:MenuItem[]):void{ 
    this.items.next(currentItems);
    this.total.next(this.computeTotal());
    localStorage.setItem('cart', JSON.stringify(currentItems));
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

  public clearCart():void{ this.saveCart([]);}
}


