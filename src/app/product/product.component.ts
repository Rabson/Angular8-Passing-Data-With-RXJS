import { Component, OnInit, OnDestroy} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  cart: any = 0;
  public fileUrl;
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.getCart();
  }


  getCart(): void {
    // this.cartService.Counter.pipe().subscribe(
    //   (data: any) => {
    //     debugger
    //     console.log(data);
    //     this.cart = data;
    //   })

    this.subscription = this.cartService.getCart().subscribe(product => {
      this.cart = product;
    });

  }

  addToCart(): void {
    this.cartService.addToCart(this.cart);
  }

  emptyCart(): void {
    // clear message
    this.cartService.clearCart();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
