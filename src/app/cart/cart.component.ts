import { Component, OnInit, Input } from '@angular/core';
import { Cart, CartItem } from '../cart';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WaService } from '../wa.service';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less', '../common.less']
})
export class CartComponent implements OnInit {
  cart : Cart = new Cart();
  @Input() displayed: boolean = false;

  faWhatsapp = faWhatsapp;
  faTrashAlt = faTrashAlt;

  constructor(private cartService: CartService, private waService: WaService) { 
  }

  ngOnInit(): void {
    this.cart = this.cartService.get();
  }

  clear(): void {
    this.cart.clear()
    this.cart.writeToStorage()
  }

  setQuantity(product: Product, quantity: number): void {
    this.cart.setQuantity(product, quantity);
    this.cart.writeToStorage()
  }

  send(): void {
    let request = ''
    for(let cartItem of this.cart.all()) {
      request += `${cartItem.product.name} (${cartItem.product.code}) x ${cartItem.quantity}%0a`;
    }
    let link = this.waService.link(request).subscribe(value => {
      this.cart.clear();
      this.cart.writeToStorage();
      window.open(value, '_blank');  
    });
  }

}
