import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { MenuItem } from '../location';
import { of } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public items$: Observable<MenuItem[]> = of([]);
  public total$: Observable<number> = of(0);

  @Input() buttonExists: boolean; 
  constructor(private cartService:CartService) {
    this.items$ = this.cartService.items$;
    this.total$ = this.cartService.total$;
   }

  public removeFromCart(item: MenuItem): void {
    this.cartService.removeFromCart(item);
  }

  public clearCart(): void {
    this.cartService.clearCart();
  }
  
  ngOnInit() {
  }

}
