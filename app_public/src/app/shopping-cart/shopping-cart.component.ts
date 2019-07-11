import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { MenuItem } from '../location';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public items$: Observable<MenuItem[]>;
  public total$: Observable<number>;

  @Input() buttonExists: boolean; 
  constructor(private cartService:CartService) { }

  public removeFromCart(item: MenuItem): void {
    this.cartService.removeFromCart(item);
  }

  public clearCart(): void {
    this.cartService.clearCart();
  }
  
  public ngOnInit() {
    this.items$ = this.cartService.items$;
    this.total$ = this.cartService.total$;
  }

}
