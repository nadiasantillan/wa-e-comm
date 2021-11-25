import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../cart';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less', '../common.less']
})
export class ProductsComponent implements OnInit {
  cart: Cart = new Cart();
  products: Product[] = [];

  constructor(private cartService: CartService, private productsService: ProductsService) { 
  }

  ngOnInit(): void {  
    this.cart = this.cartService.get();
    this.productsService.products().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

}
