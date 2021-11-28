import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { Product } from '../product';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WaService } from '../wa.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less', '../common.less']
})
export class ProductComponent implements OnInit {
  @Input() product? : Product;
  @Input() cart? : Cart;
  quantity: number = 1;
  buyLink: string = '';
  faCartPlus = faCartPlus;
  faWhatsapp = faWhatsapp;

  constructor(public router: Router, private waService: WaService,
    public matDialog: MatDialog) { }

  ngOnInit(): void {
    let request = `${this.product!.name} (${this.product!.code}) x ${this.quantity}`;
    this.waService.link(request).subscribe(link => {this.buyLink = link})
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  addToCart(product: Product): void {
    if (this.product) {
      
      
      let added = this.cart!.add(this.product, this.quantity);
      if (added) {
        this.cart!.writeToStorage();
        this.router.navigate(['/cart']);
      } else {
        this.openModal();
      }
    }    
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = 'auto';
    dialogConfig.width = '300px';

    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}
